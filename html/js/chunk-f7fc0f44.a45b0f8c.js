(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7fc0f44"],{"0dd9":function(t,e){t.exports={messages:{ES:{savePhrase:"Este registro genera una frase de 12 palabras que debe guardar en un lugar seguro"},US:{savePhrase:"This record generates a 12-word phrase that you must keep in a safe place"}}}},"5e29":function(t,e,a){"use strict";a("a747")},"98ee":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"divcol gap2",attrs:{id:"newProjects"}},[t._m(0),s("h3",{staticClass:"h9_em p vermobile"},[t._v("Sort by")]),s("aside",{staticClass:"container-controls divcol gap1"},[s("v-tabs",t._l(t.dataControls,(function(e,a){return s("v-tab",{key:a},[s("h6",{staticClass:"p",on:{click:function(a){return t.orderList(e)}}},[t._v(t._s(e.name))])])})),1)],1),t.variableCarga?s("section",{staticClass:"section-down grid",staticStyle:{"--gtc":"repeat(auto-fit,minmax(min(100%,20em),1fr))",gap:"2em"}},t._l(t.dataNftDrops,(function(e,n){return s("v-card",{key:n,staticClass:"card divcol",staticStyle:{"--p":"clamp(1em,2vw,2em)",gap:".5em"}},[s("div",{staticClass:"acenter",staticStyle:{gap:".5em"}},[s("img",{staticStyle:{"--w":"4.5em"},attrs:{src:e.img,alt:"NFT Image"}}),s("div",{staticClass:"divcol"},[s("h6",{staticClass:"h11_em p"},[t._v(t._s(e.name))]),s("span",{staticClass:"h11_em",staticStyle:{color:"var(--success)"}},[t._v(t._s(e.type))])])]),s("p",{staticClass:"h11_em p light"},[t._v(t._s(e.desc))]),s("div",{staticClass:"divcol light",staticStyle:{gap:".2em"}},[s("div",{staticClass:"space h11_em"},[s("span",[t._v("Price")]),s("span",{staticStyle:{color:"var(--success)"}},[t._v(t._s(e.price))])]),s("div",{staticClass:"space h11_em"},[s("span",[t._v("Supply")]),s("span",[t._v(t._s(e.supply))])]),s("div",{staticClass:"space h11_em"},[s("span",[t._v("Date")]),s("span",[t._v(t._s(e.date))])]),s("div",{staticClass:"space h11_em"},[s("span",[t._v("Votes")]),s("span",[t._v(t._s(e.votes))])])]),s("aside",{staticClass:"space gap1 wrap_inv"},[s("div",{staticClass:"acenter alignmobile"},t._l(e.redes,(function(t,e){return s("v-btn",{key:e,staticStyle:{"--p":"0"},attrs:{icon:"",href:t.url,target:"_blank"}},[s("img",{staticClass:"aspect",staticStyle:{"--w":"1.8em"},attrs:{src:a("6f32")("./"+t.name+".svg"),alt:"social icons"}})])})),1),s("div",{staticClass:"acenter alignmobile",staticStyle:{gap:".5em"}},[s("v-btn",{staticClass:"btn",staticStyle:{"--p":".3em","min-width":"max-content",height:"max-content","--c":"#000000","--bs":"0 2px 3px 1px hsl(171, 100%, 72%, .4)"},on:{click:function(a){return t.votar(e.type,!0)}}},[s("v-icon",[t._v("mdi-thumb-up")])],1),s("v-btn",{staticClass:"btn",staticStyle:{"--p":".45em 1.5em","min-width":"max-content",height:"max-content","--c":"#000000","--bs":"0 2px 3px 1px hsl(171, 100%, 72%, .4)"},on:{click:function(a){return t.$router.push("/view-collections/"+e.type)}}},[t._v(" View ")])],1)])])})),1):s("center",{staticStyle:{"margin-block":"10em"}},[s("v-progress-circular",{attrs:{size:110,width:10,indeterminate:"",color:"white"}})],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"divcol center gap1 tcenter"},[a("h2",{staticClass:"h5_em p bold"},[t._v("New Projects")]),a("p",{staticClass:"h10_em",staticStyle:{"max-width":"60ch"}},[t._v(" New NFT projects coming to Near ")])])}],r=a("1da1"),c=(a("b0c0"),a("b680"),a("96cf"),a("c1df")),i=a.n(c),o=a("d9eb"),l=o["connect"],d=o["keyStores"],u=o["WalletConnection"],p=o["Contract"],m=(o["utils"],new d.BrowserLocalStorageKeyStore),v={networkId:"mainnet",keyStore:m,nodeUrl:"https://rpc.mainnet.near.org",walletUrl:"https://wallet.mainnet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"},h={name:"newProjects",i18n:a("0dd9"),data:function(){return{variableCarga:!1,dataControls:[{name:"Sort by Price",active:!1,id:1},{name:"Sort by Votes",active:!1,id:2},{name:"Sort by Supply",active:!1,id:3},{name:"Sort by Date",active:!1,id:4}],dataNftDrops:[]}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getNewProjects();case 1:case"end":return e.stop()}}),e)})))()},methods:{votar:function(t,e){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var n,r,c,i,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return document.documentElement.style.cursor="progress",n="backend.monkeonnear.near",s.next=4,l(v);case 4:if(r=s.sent,c=new u(r),!c.isSignedIn()){s.next=12;break}return i=new p(c.account(),n,{changeMethods:["votar"],sender:c.account()}),o=null,s.next=11,i.votar({collections:t,voto:e}).then((function(t){console.log(t),o=!0})).catch((function(t){console.log(t),o=!1}));case 11:o?a.refreshVote():document.documentElement.style.cursor="default";case 12:case"end":return s.stop()}}),s)})))()},refreshVote:function(){var t=this,e="api/v1/refreshvotes";this.axios.post(e).then((function(e){document.documentElement.style.cursor="default",t.getNewProjects()})).catch((function(t){console.log(t),document.documentElement.style.cursor="default"}))},orderList:function(t){this.variableCarga=!1,1===t.id?(this.dataControls[0].active=!0,this.dataControls[1].active=!1,this.dataControls[2].active=!1,this.dataControls[3].active=!1):2===t.id?(this.dataControls[0].active=!1,this.dataControls[1].active=!0,this.dataControls[2].active=!1,this.dataControls[3].active=!1):3===t.id?(this.dataControls[0].active=!1,this.dataControls[1].active=!1,this.dataControls[2].active=!0,this.dataControls[3].active=!1):4===t.id&&(this.dataControls[0].active=!1,this.dataControls[1].active=!1,this.dataControls[2].active=!1,this.dataControls[3].active=!0),this.getNewProjects()},getNewProjects:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.dataNftDrops=[],s="api/v1/newprojectslisted",n={top:"20",order:null},!0===t.dataControls[0].active&&(n.order="price"),!0===t.dataControls[1].active&&(n.order="voto"),!0===t.dataControls[2].active&&(n.order="supply"),!0===t.dataControls[3].active&&(n.order="fecha"),t.axios.post(s,n).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(s){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(console.log("AQUII",s.data),n=0;n<s.data.length;n++)0!==s.data[n].fecha_lanzamiento&&"0"!==s.data[n].fecha_lanzamiento&&s.data[n].fecha_lanzamiento||(s.data[n].fecha_lanzamiento=parseInt(s.data[n].fecha_creacion)),r={img:s.data[n].icon||a("ebc4"),name:s.data[n].name,fecha_lanzamiento:s.data[n].fecha_lanzamiento,type:s.data[n].nft_contract,desc:s.data[n].descripcion,website:s.data[n].website,price:parseFloat(s.data[n].price).toFixed(2)+" NEAR",supply:s.data[n].total_supply,date:i()(s.data[n].fecha_lanzamiento/1e6).format("Do MMM YYYY, h:mm A"),votes:s.data[n].voto,redes:[{name:"twitter",url:"https://twitter.com/"+s.data[n].twiter},{name:"discord",url:s.data[n].discord_server},{name:"telegram",url:"https://t.me/"+s.data[n].telegram}]},t.dataNftDrops.push(r);t.variableCarga=!0;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.log(t)}));case 8:case"end":return e.stop()}}),e)})))()}}},f=h,g=(a("5e29"),a("2877")),_=a("6544"),C=a.n(_),w=a("8336"),b=a("b0af"),y=a("132d"),S=a("490a"),x=a("71a3"),k=a("fe57"),j=Object(g["a"])(f,s,n,!1,null,null,null);e["default"]=j.exports;C()(j,{VBtn:w["a"],VCard:b["a"],VIcon:y["a"],VProgressCircular:S["a"],VTab:x["a"],VTabs:k["a"]})},a747:function(t,e,a){}}]);
//# sourceMappingURL=chunk-f7fc0f44.a45b0f8c.js.map