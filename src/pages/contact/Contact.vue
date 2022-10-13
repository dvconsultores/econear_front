<template>
  <section id="contact" class="fwrap">
    <!-- <img src="@/assets/logos/econear.svg" alt="logo econnear"> -->
    <article class="center divcol">
      <h3>Contact us !</h3>
      <p>You can contact us through our email <a href="#">contact@econear.in</a> or on our official networks:</p>

      <div class="spacea gap2">
        <v-btn v-for="(item,i) in dataSocial" :key="i" icon :href="item.link" target="_blank">
          <img :src="require(`@/assets/icons/${item.social}.svg`)" :alt="`${item.social} button`" style="--w:2.625em">
        </v-btn>
      </div>

      <div class="spacea gap2" style="margin-top:2em">
        <p>Get info on the latest Econear features, updates, and more sent straight to your inbox.</p>
      </div>
      <v-form ref="form" @submit.prevent="SendEmail()">
        <v-text-field
          v-model="input"
          solo
          :rules="[rules.email]"
          label="example@email.com"
          style="--p: 0 0 0 12px;--w:clamp(15em, 60vw, 24.848125em);
            --h:clamp(2.6em, 3vw, 3em);--label:black"
        >
          <template v-slot:append>
            <v-btn rounded class="btn h11_em" @click="SendEmail()"
              style="--b: 1px solid #6FFFE9;--bg:var(--clr-btn);--h:clamp(2.7em, 3.1vw, 3.1em);--p:0 16px;--bs:none">
              <span style="color:#FFFFFF !important">Subscribe</span>
            </v-btn>
          </template>
        </v-text-field>
      </v-form>
    </article>
  </section>
</template>

<script>
export default {
  name: "contact",
  i18n: require("./i18n"),
  data() {
    return {
      dataSocial: [
        { social: "twitter", link: "https://twitter.com/econear" },
        { social: "discord", link: "#" },
      ],
      input: "",
      rules: {
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
  methods: {
    SendEmail() {
      if (this.$refs.form.validate()) {
        const url = "api/v1/tosubscribe"
        let item = {
          email: this.input
        }
        this.axios.post(url, item)
          .then((response) => {
            this.$store.dispatch('GenerateAlert', {key:'success', title: 'Success!', desc: 'Successful subscription.'})
            this.input= ''
          }).catch((error) => {
            console.log("ERR",error)
            this.$store.dispatch('GenerateAlert', {key:'error', title: 'Error!', desc: 'Something happened.'})
          })
      }
    },
  }
};
</script>

<style src="./Contact.scss" lang="scss" />
