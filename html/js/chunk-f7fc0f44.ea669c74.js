(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7fc0f44"],{"0dd9":function(t,e){t.exports={messages:{ES:{savePhrase:"Este registro genera una frase de 12 palabras que debe guardar en un lugar seguro"},US:{savePhrase:"This record generates a 12-word phrase that you must keep in a safe place"}}}},"5e29":function(t,e,a){"use strict";a("a747")},"98ee":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"divcol gap2",attrs:{id:"newProjects"}},[t._m(0),n("h3",{staticClass:"h9_em p vermobile"},[t._v("Sort by")]),n("aside",{staticClass:"container-controls divcol gap1"},[n("v-tabs",t._l(t.dataControls,(function(e,a){return n("v-tab",{key:a},[n("h6",{staticClass:"p",on:{click:function(a){return t.orderList(e)}}},[t._v(t._s(e.name))])])})),1)],1),t.variableCarga?n("section",{staticClass:"section-down grid",staticStyle:{"--gtc":"repeat(auto-fit,minmax(min(100%,20em),1fr))",gap:"2em"}},t._l(t.dataNftDrops,(function(e,r){return n("v-card",{key:r,staticClass:"card divcol",staticStyle:{"--p":"clamp(1em,2vw,2em)",gap:".5em"}},[n("div",{staticClass:"acenter",staticStyle:{gap:".5em"}},[n("img",{staticStyle:{"--w":"4.5em"},attrs:{src:e.img,alt:"NFT Image"}}),n("div",{staticClass:"divcol"},[n("h6",{staticClass:"h11_em p"},[t._v(t._s(e.name))]),n("span",{staticClass:"h11_em",staticStyle:{color:"var(--success)"},attrs:{title:e.type}},[t._v(t._s(e.type))])])]),n("p",{staticClass:"h11_em p light"},[t._v(t._s(e.desc))]),n("div",{staticClass:"divcol light",staticStyle:{gap:".2em"}},[n("div",{staticClass:"space h11_em"},[n("span",[t._v("Price")]),n("span",{staticStyle:{color:"var(--success)"}},[t._v(t._s(e.price))])]),n("div",{staticClass:"space h11_em"},[n("span",[t._v("Supply")]),n("span",[t._v(t._s(e.supply))])]),n("div",{staticClass:"space h11_em"},[n("span",[t._v("Date")]),n("span",[t._v(t._s(e.date))])]),n("div",{staticClass:"space h11_em"},[n("span",[t._v("Votes")]),n("span",[t._v(t._s(e.votes))])])]),n("aside",{staticClass:"space gap1 wrap_inv"},[n("div",{staticClass:"acenter alignmobile"},t._l(e.redes,(function(t,e){return n("v-btn",{key:e,staticStyle:{"--p":"0"},attrs:{icon:"",href:t.url,target:"_blank"}},[n("img",{staticClass:"aspect",staticStyle:{"--w":"1.8em"},attrs:{src:a("6f32")("./"+t.name+".svg"),alt:"social icons"}})])})),1),n("div",{staticClass:"acenter alignmobile",staticStyle:{gap:".5em"}},[n("v-btn",{staticClass:"btn",staticStyle:{"--p":".3em","min-width":"max-content",height:"max-content","--c":"#000000","--bs":"0 2px 3px 1px hsl(171, 100%, 72%, .4)"},on:{click:function(a){return t.votar(e.type,!0)}}},[n("v-icon",[t._v("mdi-thumb-up")])],1),n("v-btn",{staticClass:"btn",staticStyle:{"--p":".45em 1.5em","min-width":"max-content",height:"max-content","--c":"#000000","--bs":"0 2px 3px 1px hsl(171, 100%, 72%, .4)"},on:{click:function(a){return t.$router.push("/view-collections/"+e.type)}}},[t._v(" View ")])],1)])])})),1):n("center",{staticStyle:{"margin-block":"10em"}},[n("v-progress-circular",{attrs:{size:110,width:10,indeterminate:"",color:"white"}})],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"divcol center gap1 tcenter"},[a("h2",{staticClass:"h5_em p bold"},[t._v("New Projects")]),a("p",{staticClass:"h10_em",staticStyle:{"max-width":"60ch"}},[t._v(" New NFT projects coming to Near ")])])}],s=a("1da1"),c=(a("a9e3"),a("b0c0"),a("b680"),a("96cf"),a("c1df")),o=a.n(c),i=a("d9eb"),l=i["connect"],u=i["keyStores"],d=i["WalletConnection"],p=i["Contract"],m=(i["utils"],new u.BrowserLocalStorageKeyStore),h={networkId:"mainnet",keyStore:m,nodeUrl:"https://rpc.mainnet.near.org",walletUrl:"https://wallet.mainnet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"},v={name:"newProjects",i18n:a("0dd9"),data:function(){return{variableCarga:!1,dataControls:[{name:"Sort by Price",active:!1,id:1},{name:"Sort by Votes",active:!1,id:2},{name:"Sort by Supply",active:!1,id:3},{name:"Sort by Date",active:!1,id:4}],dataNftDrops:[]}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.pushHome();case 2:t.getNewProjects();case 3:case"end":return e.stop()}}),e)})))()},methods:{pushHome:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l(h);case 2:if(a=e.sent,n=new d(a),n.isSignedIn()){e.next=8;break}t.$router.push("/"),e.next=12;break;case 8:return e.next=10,t.isHolderMonke();case 10:r=e.sent,0===r&&t.$router.push("/restricted");case 12:case"end":return e.stop()}}),e)})))()},isHolderMonke:function(){return Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="monkeonear.neartopia.near",t.next=3,l(h);case 3:if(a=t.sent,n=new d(a),!n.isSignedIn()){t.next=11;break}return r=new p(n.account(),e,{viewMethods:["nft_supply_for_owner"],sender:n.account()}),t.next=9,r.nft_supply_for_owner({account_id:n.getAccountId()}).then((function(t){return Number(t)})).catch((function(t){return console.log("ERR",t),0}));case 9:return s=t.sent,t.abrupt("return",s);case 11:case"end":return t.stop()}}),t)})))()},votar:function(t,e){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,s,c,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return document.documentElement.style.cursor="progress",r="backend.monkeonnear.near",n.next=4,l(h);case 4:if(s=n.sent,c=new d(s),!c.isSignedIn()){n.next=12;break}return o=new p(c.account(),r,{changeMethods:["votar"],sender:c.account()}),i=null,n.next=11,o.votar({collections:t,voto:e}).then((function(t){console.log(t),i=!0})).catch((function(t){console.log(t),i=!1}));case 11:i?a.refreshVote():document.documentElement.style.cursor="default";case 12:case"end":return n.stop()}}),n)})))()},refreshVote:function(){var t=this,e="api/v1/refreshvotes";this.axios.post(e).then((function(e){document.documentElement.style.cursor="default",t.getNewProjects()})).catch((function(t){console.log(t),document.documentElement.style.cursor="default"}))},orderList:function(t){this.variableCarga=!1,1===t.id?(this.dataControls[0].active=!0,this.dataControls[1].active=!1,this.dataControls[2].active=!1,this.dataControls[3].active=!1):2===t.id?(this.dataControls[0].active=!1,this.dataControls[1].active=!0,this.dataControls[2].active=!1,this.dataControls[3].active=!1):3===t.id?(this.dataControls[0].active=!1,this.dataControls[1].active=!1,this.dataControls[2].active=!0,this.dataControls[3].active=!1):4===t.id&&(this.dataControls[0].active=!1,this.dataControls[1].active=!1,this.dataControls[2].active=!1,this.dataControls[3].active=!0),this.getNewProjects()},getNewProjects:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.dataNftDrops=[],n="api/v1/newprojectslisted",r={top:"20",order:null},!0===t.dataControls[0].active&&(r.order="price"),!0===t.dataControls[1].active&&(r.order="voto"),!0===t.dataControls[2].active&&(r.order="supply"),!0===t.dataControls[3].active&&(r.order="fecha"),t.axios.post(n,r).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r=0;r<n.data.length;r++)0!==n.data[r].fecha_lanzamiento&&"0"!==n.data[r].fecha_lanzamiento&&n.data[r].fecha_lanzamiento||(n.data[r].fecha_lanzamiento=parseInt(n.data[r].fecha_creacion)),s={img:n.data[r].icon||a("ebc4"),name:n.data[r].name,fecha_lanzamiento:n.data[r].fecha_lanzamiento,type:n.data[r].nft_contract,desc:n.data[r].descripcion,website:n.data[r].website,price:parseFloat(n.data[r].price).toFixed(2)+" NEAR",supply:n.data[r].total_supply,date:o()(n.data[r].fecha_lanzamiento/1e6).format("Do MMM YYYY, h:mm A"),votes:n.data[r].voto,redes:[{name:"twitter",url:"https://twitter.com/"+n.data[r].twiter},{name:"discord",url:n.data[r].discord_server},{name:"telegram",url:"https://t.me/"+n.data[r].telegram}]},t.dataNftDrops.push(s);t.variableCarga=!0;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.log(t)}));case 8:case"end":return e.stop()}}),e)})))()}}},f=v,g=(a("5e29"),a("2877")),w=a("6544"),_=a.n(w),C=a("8336"),b=a("b0af"),y=a("132d"),x=a("490a"),k=a("71a3"),S=a("fe57"),j=Object(g["a"])(f,n,r,!1,null,null,null);e["default"]=j.exports;_()(j,{VBtn:C["a"],VCard:b["a"],VIcon:y["a"],VProgressCircular:x["a"],VTab:k["a"],VTabs:S["a"]})},a747:function(t,e,a){}}]);
//# sourceMappingURL=chunk-f7fc0f44.ea669c74.js.map