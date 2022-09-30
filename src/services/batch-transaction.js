import * as nearAPI from 'near-api-js'
import { CONFIG } from '@/services/api'
import {Action, createTransaction, functionCall} from 'near-api-js/lib/transaction'
import { base_decode } from 'near-api-js/lib/utils/serialize'
import { PublicKey } from 'near-api-js/lib/utils'

const { connect, transactions, keyStores, WalletConnection, Contract, utils } = nearAPI

async function createTransactionFn(receiverId,actions){
    const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
    const wallet = new WalletConnection(near);

    if (!wallet || !near) {
        throw new Error(`No active wallet or NEAR connection.`)
    }

    const localKey =
        await near?.connection.signer.getPublicKey(
        wallet?.account().accountId,
        near.connection.networkId
        )

    const accessKey = await wallet
        ?.account()
        .accessKeyForTransaction(receiverId, actions, localKey)

    if (!accessKey) {
        throw new Error(
        `Cannot find matching key for transaction sent to ${receiverId}`
        )
    }

    const block = await near?.connection.provider.block({
        finality: 'final',
    })

    if (!block) {
        throw new Error(`Cannot find block for transaction sent to ${receiverId}`)
    }

    const blockHash = base_decode(block?.header?.hash)
    //const blockHash = nearAPI.utils.serialize.base_decode(accessKey.block_hash);

    const publicKey = PublicKey.from(accessKey.public_key)
    //const nonce = accessKey.access_key.nonce + nonceOffset
    const nonce = ++accessKey.access_key.nonce;

    return createTransaction(
        wallet?.account().accountId,
        publicKey,
        receiverId,
        nonce,
        actions,
        blockHash
    )
}

async function batchTransaction(transactions, options) {
    const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
    const wallet = new WalletConnection(near);

    const nearTransactions = await Promise.all(
      transactions.map(async (tx) => {
        return await createTransactionFn(
          tx.receiverId,
          tx.functionCalls.map((fc) => {
            return functionCall(fc.methodName, fc.args, fc.gas, fc.deposit)
          })
        )
      })
    )

    wallet.requestSignTransactions({
      transactions: nearTransactions,
      callbackUrl: options?.callbackUrl,
      meta: options?.meta,
    })
  }

  module.exports = {
    batchTransaction
  }