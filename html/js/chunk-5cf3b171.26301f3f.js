(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cf3b171"],{"05b7":function(e,t){e.exports={messages:{ES:{savePhrase:"Este registro genera una frase de 12 palabras que debe guardar en un lugar seguro"},US:{savePhrase:"This record generates a 12-word phrase that you must keep in a safe place"}}}},"1ccf":function(e,t,a){"use strict";a("23e5")},"23e5":function(e,t,a){},"5fd6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"divcol gap2",attrs:{id:"snipeTool"}},[e._m(0),n("aside",{staticClass:"container-controls divcol gap1 gap2mobile"},[n("div",{staticClass:"contents order2mobile spacemobile alignmobile",attrs:{id:"container-trackmobile"}},[n("div",{staticClass:"acenter gap1 card vermobile",attrs:{id:"container-switch"}},[n("span",[e._v("Notifications")]),n("div",{staticClass:"switch",class:{active:e.notifications},style:"--color:"+(e.notifications?"var(--success)":"var(--error)"),on:{click:function(t){e.notifications=!e.notifications}}})])]),n("div",{staticClass:"space contentsmobile"},[n("v-card",{staticClass:"tracking-pause card acenter",staticStyle:{"max-width":"max-content","--bg":"hsl(212 47% 12% / .5)",gap:"1em","--p":".5em 1em"}},e._l(e.dataControls.up,(function(t,r){return n("v-btn",{key:r,class:{active:t.active},staticStyle:{"--ml":".5em"},attrs:{text:""},on:{click:function(a){t.active||e.dataControls.up.forEach((function(e){e.active=!1,t.active=!0})),e.tracking()}}},[n("span",[e._v(e._s(t.name))]),n("img",{style:"tracking"==t.name?"--w:1em":"--w:.7em",attrs:{src:a("6f32")("./"+t.name+".svg")}})])})),1),n("h3",{staticClass:"h9_em p order1mobile tcentermobile"},[e._v("Recently listed")]),n("div",{staticClass:"acenter  gap1 card eliminarmobile",attrs:{id:"container-switch"}},[n("span",[e._v("Notifications")]),n("div",{staticClass:"switch",class:{active:e.notifications},style:"--color:"+(e.notifications?"var(--success)":"var(--error)"),on:{click:function(t){return e.changeNotificacion()}}})])],1)]),n("v-data-table",{staticClass:"card",attrs:{id:"dataTable",headers:e.headersTable,items:e.dataTable,"hide-default-footer":"","mobile-breakpoint":"-1",height:"calc(100vh - (54px + 2em))","disable-pagination":""},scopedSlots:e._u([{key:"item.nft",fn:function(t){var a=t.item;return[n("div",{staticClass:"center gap1"},[n("img",{staticClass:"aspect",staticStyle:{"--w":"4.710625em"},attrs:{src:a.img||e.image,alt:"nft"}}),n("div",{staticClass:"divcol tstart",staticStyle:{width:"170px"}},[n("span",[e._v(e._s(a.name))])])])]}},{key:"item.rareness",fn:function(t){var a=t.item;return[n("v-chip",{staticStyle:{"border-radius":".3vmax"},attrs:{color:"common"==a.rareness?"#26A17B":"uncommon"==a.rareness?"#F7972C":"rare"==a.rareness?"#EF3340":"epic"==a.rareness?"#0000B6":"legendary"==a.rareness?"#6A25D2":null}},[n("span",{staticClass:"tfirst"},[e._v(e._s(a.rareness))])])]}},{key:"item.price",fn:function(t){var a=t.item;return[n("span",[e._v(" "+e._s(a.price)+" ")])]}},{key:"item.market",fn:function(t){var a=t.item;return[n("span",[e._v(" "+e._s(a.marketplace)+" ")])]}},{key:"item.buy",fn:function(t){var a=t.item;return[n("v-btn",{staticClass:"btn",staticStyle:{"border-radius":".3vmax","--bs":"0 3px 4px 1px hsl(176, 60%, 40%, .7)"}},[n("span",{staticClass:"tfirst",on:{click:function(t){return e.$router.push("/view-collections/"+a.nft_contract)}}},[e._v("Buy Now")])])]}}],null,!0)})],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{staticClass:"divcol center gap1 tcenter"},[a("h2",{staticClass:"h5_em p"},[e._v("Snipe Tool")]),a("p",{staticClass:"h10_em",staticStyle:{"max-width":"60ch"}},[e._v(" Bag your favorite NFT from any collection ")])])}],i=a("1da1"),o=(a("a9e3"),a("b0c0"),a("b680"),a("99af"),a("d3b7"),a("159b"),a("96cf"),a("d9eb")),c=o["connect"],s=(o["transactions"],o["keyStores"]),l=o["WalletConnection"],u=o["Contract"],d=(o["utils"],new s.BrowserLocalStorageKeyStore),p={networkId:"mainnet",keyStore:d,nodeUrl:"https://rpc.mainnet.near.org",walletUrl:"https://wallet.mainnet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"},m={name:"snipeTool",i18n:a("05b7"),data:function(){return{image:a("ebc4"),notifications:null,auxNoti:null,dataControls:{up:[{name:"tracking",active:!1},{name:"pause",active:!1}],down:[{name:"Common",active:!1},{name:"Rare",active:!1},{name:"Epic",active:!1},{name:"Mystic",active:!1}]},headersTable:[{value:"nft",text:"Collection NFT",align:"center",sortable:!1},{value:"supply",text:"Supply",align:"center",sortable:!1},{value:"rareness",text:"Rareness",align:"center",sortable:!1},{value:"price",text:"Price",align:"center",sortable:!1},{value:"market",text:"Market",align:"center",sortable:!1},{value:"buy",text:"Buy",align:"center",sortable:!1}],dataTable:[],dataTable2:[],indexData:0,limitData:5,variable:null}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.pushHome();case 2:e.notifications=localStorage.getItem("notifications"),"true"===e.notifications?e.notifications=!0:e.notifications=!1,e.recentlyListed(),e.tracking(),document.querySelector("#dataTable .v-data-table__wrapper").addEventListener("scroll",(function(t){return e.scrolledTable(t)})),!0===e.notifications?(clearInterval(e.intervalCompare),e.intervalCompare=setInterval(e.compareCollections,1e4)):clearInterval(e.intervalCompare);case 8:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){var e=this;document.querySelector("#dataTable .v-data-table__wrapper").removeEventListener("scroll",(function(t){return e.scrolledTable(t)}))},methods:{pushHome:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c(p);case 2:if(a=t.sent,n=new l(a),n.isSignedIn()){t.next=8;break}e.$router.push("/"),t.next=12;break;case 8:return t.next=10,e.isHolderMonke();case 10:r=t.sent,0===r&&e.$router.push("/restricted");case 12:case"end":return t.stop()}}),t)})))()},isHolderMonke:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="monkeonear.neartopia.near",e.next=3,c(p);case 3:if(a=e.sent,n=new l(a),!n.isSignedIn()){e.next=11;break}return r=new u(n.account(),t,{viewMethods:["nft_supply_for_owner"],sender:n.account()}),e.next=9,r.nft_supply_for_owner({account_id:n.getAccountId()}).then((function(e){return Number(e)})).catch((function(e){return console.log("ERR",e),0}));case 9:return i=e.sent,e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})))()},isHolderMonkeOLD:function(e){var t="api/v1/isholdermonkeonnear",a={user_id:e},n=this.axios.post(t,a).then((function(e){return e.data.respuesta})).catch((function(e){return console.log(e),!1}));return n},changeNotificacion:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.notifications=!e.notifications,localStorage.notifications=e.notifications,!0!==e.notifications){t.next=7;break}return t.next=5,Notification.requestPermission().then((function(e){return e}));case 5:e.auxNoti=t.sent,"denied"!==e.auxNoti&&"default"!==e.auxNoti||(e.notifications=!1);case 7:!0===e.notifications?(clearInterval(e.intervalCompare),e.intervalCompare=setInterval(e.compareCollections,1e4)):clearInterval(e.intervalCompare);case 8:case"end":return t.stop()}}),t)})))()},notificacion:function(e,t,a,n){if(Notification){"granted"!==Notification.permission&&Notification.requestPermission();var r="ECONEAR",i={icon:t||this.image,body:"NFT: "+e+" was published at a price of "+a+" on "+n},o=new Notification(r,i);o.onclick={},o.onclose={},setTimeout((function(){o.close()}),2e4)}},permisoNotificacion:function(){Notification.requestPermission().then((function(e){}))},scrolledTable:function(e){var t=e.target;Math.ceil(t.scrollHeight-t.scrollTop)<=t.clientHeight&&(clearTimeout(this.timer),this.timer=setTimeout(this.addDataTable,300))},addDataTable:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a="api/v1/recentlylisted",n={limit:5,index:e.indexData},e.axios.post(a,n).then((function(t){e.dataTable2=[];for(var a=0;a<t.data.length;a++){var n={img:t.data[a].icon,name:t.data[a].name,nft_contract:t.data[a].nft_contract,rareness:t.data[a].rareza.toLowerCase(),supply:t.data[a].total_supply,price:parseFloat(t.data[a].price).toFixed(1)+" N",marketplace:t.data[a].marketplace,state_price:!0};e.dataTable2.push(n)}e.dataTable=e.dataTable.concat(e.dataTable2),e.indexData=e.indexData+5})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})))()},tracking:function(){var e=this,t=document.querySelector("#dataTable .v-data-table__wrapper");document.querySelector(".tracking-pause").scrollIntoView(!0),!0===this.dataControls.up[0].active?(clearInterval(this.interval2),clearTimeout(this.timeHidden),this.timeHidden=setTimeout((function(){document.documentElement.style.overflow="hidden",e.interval2=setInterval((function(){Math.ceil(t.scrollHeight-t.scrollTop)>=t.clientHeight&&(t.scrollTop+=5)}),100)}),500)):(document.documentElement.style.overflow="initial",clearInterval(this.interval2),clearTimeout(this.timeHidden))},compareCollections:function(){var e=this,t="api/v1/recentlylisted",a={limit:this.dataTable.length,index:0};console.log(a),this.axios.post(t,a).then((function(t){console.log(t.data);for(var a=[],n=0;n<t.data.length;n++){var r={img:t.data[n].icon,name:t.data[n].name,nft_contract:t.data[n].nft_contract,rareness:t.data[n].rareza.toLowerCase(),supply:t.data[n].total_supply,price:parseFloat(t.data[n].price).toFixed(1)+" N",marketplace:t.data[n].marketplace,state_price:!0};a.push(r)}!0===e.notifications&&e.dataTable.forEach((function(t){a.forEach((function(a){t.nft_contract===a.nft_contract&&t.marketplace===a.marketplace&&t.price<a.price&&e.notificacion(t.name,t.img,t.price,t.marketplace)}))}))})).catch((function(e){console.log(e)}))},recentlyListed:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a="api/v1/recentlylisted",n={limit:10,index:e.indexData},e.axios.post(a,n).then((function(t){e.dataTable=[],e.dataTable2=[],console.log(t.data);for(var a=0;a<t.data.length;a++){var n={img:t.data[a].icon,name:t.data[a].name,nft_contract:t.data[a].nft_contract,rareness:t.data[a].rareza.toLowerCase(),supply:t.data[a].total_supply,price:parseFloat(t.data[a].price).toFixed(1)+" N",marketplace:t.data[a].marketplace,state_price:!0};e.dataTable2.push(n)}e.dataTable=e.dataTable2,e.indexData=10})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})))()}}},f=m,v=(a("1ccf"),a("2877")),h=a("6544"),b=a.n(h),g=a("8336"),w=a("b0af"),x=a("cc20"),k=a("8fea"),_=Object(v["a"])(f,n,r,!1,null,null,null);t["default"]=_.exports;b()(_,{VBtn:g["a"],VCard:w["a"],VChip:x["a"],VDataTable:k["a"]})}}]);
//# sourceMappingURL=chunk-5cf3b171.26301f3f.js.map