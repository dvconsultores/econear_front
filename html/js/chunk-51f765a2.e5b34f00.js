(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51f765a2"],{1505:function(t,e,a){},1681:function(t,e,a){},"58d3":function(t,e){t.exports={messages:{ES:{savePhrase:"Este registro genera una frase de 12 palabras que debe guardar en un lugar seguro"},US:{savePhrase:"This record generates a 12-word phrase that you must keep in a safe place"}}}},"6d8b":function(t,e,a){t.exports=a.p+"img/like.3ad5daea.svg"},a2a2:function(t,e,a){t.exports=a.p+"img/dislike.8854b378.svg"},a2f4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"divcol gap2",attrs:{id:"vote"}},[n("ModalVote",{ref:"menu"}),t._m(0),n("section",{staticClass:"card jspace fwrap",attrs:{id:"container-top"}},[n("section",{staticClass:"card divcol gap2"},[n("h4",{staticClass:"p"},[t._v("The most Voted")]),n("v-sheet",{staticClass:"container-wrapper ",attrs:{color:"transparent"}},t._l(t.dataVoted,(function(e,o){return n("v-card",{key:o,staticClass:"space gap1 scrollx",attrs:{color:"transparent"}},[n("div",{staticClass:"divrow gap2"},[n("div",{staticClass:"center gap1"},[n("span",{staticClass:"number"},[t._v(t._s(o+1))]),n("img",{staticStyle:{"--w":"4.710625em"},attrs:{src:e.img,alt:"project images"}})]),n("div",{staticClass:"divcol overflow",staticStyle:{width:"11.63375em"}},[n("span",{staticClass:"bold",staticStyle:{"font-size":"1.095625em"}},[t._v(t._s(e.name))]),n("span",{staticStyle:{"font-size":"0.97375em"}},[t._v(t._s(e.desc))])])]),n("div",{staticClass:"right space"},[n("div",{staticClass:"center",staticStyle:{gap:".5em"}},[n("span",[t._v(t._s(e.vote_positivo))]),n("div",{staticClass:"acenter"},[n("v-btn",{class:{clr_tertiary:1==e.positivo},attrs:{icon:""},on:{click:function(a){return t.votar(e.desc,!0)}}},[n("img",{attrs:{src:a("6d8b"),alt:"like"}})]),n("v-btn",{class:{clr_tertiary:1==e.negativo},attrs:{disabled:!e.permission,icon:""},on:{click:function(a){return t.votar(e.desc,!1)}}},[n("img",{attrs:{src:a("a2a2"),alt:"dislike"}})])],1),n("span",[t._v(t._s(e.vote_negativo))])])])])})),1)],1),n("section",{staticClass:"card divcol gap2"},[n("h4",{staticClass:"p"},[t._v("Recently Added")]),n("v-sheet",{staticClass:"container-wrapper ",attrs:{color:"transparent"}},t._l(t.dataAdded,(function(e,o){return n("v-card",{key:o,staticClass:"space gap1 scrollx",attrs:{color:"transparent"}},[n("div",{staticClass:"divrow gap2"},[n("div",{staticClass:"center gap1"},[n("span",{staticClass:"number"},[t._v(t._s(o+1))]),n("img",{staticStyle:{"--w":"4.710625em"},attrs:{src:e.img,alt:"project images"}})]),n("div",{staticClass:"divcol overflow",staticStyle:{width:"11.63375em"}},[n("span",{staticClass:"bold",staticStyle:{"font-size":"1.095625em"}},[t._v(t._s(e.name))]),n("span",{staticStyle:{"font-size":"0.97375em"}},[t._v(t._s(e.desc))])])]),n("div",{staticClass:"right space"},[n("div",{staticClass:"center",staticStyle:{gap:".5em"}},[n("span",[t._v(t._s(e.vote_positivo))]),n("div",{staticClass:"acenter"},[n("v-btn",{class:{clr_tertiary:1==e.positivo},attrs:{icon:""},on:{click:function(a){return t.votar(e.desc,!0)}}},[n("img",{attrs:{src:a("6d8b"),alt:"like"}})]),n("v-btn",{class:{clr_tertiary:1==e.negativo},attrs:{disabled:!e.permission,icon:""},on:{click:function(a){return t.votar(e.desc,!1)}}},[n("img",{attrs:{src:a("a2a2"),alt:"dislike"}})])],1),n("span",[t._v(t._s(e.vote_negativo))])])])])})),1)],1)]),n("section",{staticClass:"fwrap space",attrs:{id:"container-bottom"}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"divcol center gap1 tcenter"},[a("h2",{staticClass:"h5_em p bold"},[t._v("Vote")]),a("p",{staticClass:"h10_em",staticStyle:{"max-width":"60ch"}},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis accumsan nisl, et blandit orci pellentesque ")])])}],s=a("1da1"),i=(a("d3b7"),a("159b"),a("b0c0"),a("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"modalVote"}},[n("v-dialog",{attrs:{"max-width":"82.358125em"},model:{value:t.modalDislike,callback:function(e){t.modalDislike=e},expression:"modalDislike"}},[n("v-card",{staticClass:"overflowx",staticStyle:{"padding-block":"6em",background:"linear-gradient(to right top,#172035 20%,#161D33,#161E34,#192539,#1E3143,#244251,#2D5862,#387378,#449492,#53B9B1,#63E2D2)"},attrs:{id:"modalDislike"}},[n("v-btn",{staticClass:"close",attrs:{icon:""},on:{click:function(e){t.modalDislike=!1}}},[n("img",{staticStyle:{"--w":"0.921875em"},attrs:{src:a("8b1b"),alt:"close"}})]),n("v-sheet",{staticClass:"divcol align"},[n("label",{staticClass:"margin1bottom bold",attrs:{for:"comment"}},[t._v("Why your negative vote? ")]),n("v-textarea",{attrs:{id:"comment",placeholder:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet tellus quis metus fringilla rutrum. Curabitur congue lobortis metus a sagittis.","no-resize":"",solo:""},model:{value:t.dislike.comment,callback:function(e){t.$set(t.dislike,"comment",e)},expression:"dislike.comment"}}),n("v-btn",{staticClass:"btn align",staticStyle:{"--bs":"0 3px 4px 1px hsl(176, 60%, 40%, .3)"}},[t._v("Send")])],1)],1)],1)],1)}),r=[],c={name:"modalVote",i18n:a("58d3"),data:function(){return{modalDislike:!1,dislike:{comment:""}}},methods:{}},l=c,d=(a("dcb7"),a("2877")),u=a("6544"),v=a.n(u),m=a("8336"),p=a("b0af"),g=a("169a"),h=a("8dd9"),f=a("a844"),w=Object(d["a"])(l,i,r,!1,null,null,null),b=w.exports;v()(w,{VBtn:m["a"],VCard:p["a"],VDialog:g["a"],VSheet:h["a"],VTextarea:f["a"]});var k=a("d9eb"),_=a("7424"),y=k["connect"],x=k["keyStores"],C=k["WalletConnection"],S=k["Contract"],V=(k["utils"],new x.BrowserLocalStorageKeyStore,{name:"vote",i18n:a("58d3"),components:{ModalVote:b},data:function(){return{dataVoted:[],dataAdded:[],searchLeft:"",dataControlsLeft:[{name:"All",active:!1},{name:"Popularity",active:!1},{name:"New",active:!1}],dataVoteLeft:[{img:a("ebc4"),name:"Nft Project Name",desc:"Project description Lorem ipsum dolor sit amet",like:!1,dislike:!1,voted:3556},{img:a("ebc4"),name:"Nft Project Name",desc:"Project description Lorem ipsum dolor sit amet",like:!1,dislike:!1,voted:3556}],searchRight:"",dataControlsRight:[{name:"All",active:!1},{name:"Popularity",active:!1},{name:"New",active:!1}],dataVoteRight:[{img:a("ebc4"),name:"Nft Project Name",desc:"Project description Lorem ipsum dolor sit amet",like:!1,dislike:!1,voted:3556},{img:a("ebc4"),name:"Nft Project Name",desc:"Project description Lorem ipsum dolor sit amet",like:!1,dislike:!1,voted:3556},{img:a("ebc4"),name:"Nft Project Name",desc:"Project description Lorem ipsum dolor sit amet",like:!1,dislike:!1,voted:3556}]}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("pushHomeNormal");case 2:t.theMostVoted(),t.recentlyAdded();case 4:case"end":return e.stop()}}),e)})))()},methods:{votar:function(t,e){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var o,s,i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return document.documentElement.style.cursor="progress",document.querySelectorAll("#vote #container-top .v-btn").forEach((function(t){return t.style.pointerEvents="none"})),o="backend.monkeonnear.near",n.next=5,y(Object(_["CONFIG"])(new x.BrowserLocalStorageKeyStore));case 5:if(s=n.sent,i=new C(s),!i.isSignedIn()){n.next=12;break}return r=new S(i.account(),o,{changeMethods:["votar"],sender:i.account()}),null,n.next=12,r.votar({collections:t,voto:e}).then((function(t){a.refreshVote(),console.log(t),!0})).catch((function(t){console.log(t),!1}));case 12:case"end":return n.stop()}}),n)})))()},refreshVote:function(){var t=this,e="api/v1/refreshvotes";this.axios.post(e).then((function(e){t.theMostVoted(),t.recentlyAdded(),document.documentElement.style.cursor="default",document.querySelectorAll("#vote #container-top .v-btn").forEach((function(t){return t.style.pointerEvents="all"}))})).catch((function(t){console.log(t)}))},theMostVoted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,o,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y(Object(_["CONFIG"])(new x.BrowserLocalStorageKeyStore));case 2:n=e.sent,o=new C(n),s="api/v1/themostvoted",i={top:10,owner:o.getAccountId()||"%"},t.axios.post(s,i).then((function(e){t.dataVoted=[];for(var n=0;n<e.data.length;n++){var o={img:e.data[n].icon||a("ebc4"),name:e.data[n].name,desc:e.data[n].collection,like:!1,dislike:!1,vote_positivo:e.data[n].votos_positivos,vote_negativo:e.data[n].votos_negativos,positivo:0,negativo:0,permission:e.data[n].permission_voto_nega};t.dataVoted.push(o),t.getVotaciones()}})).catch((function(t){console.log(t)}));case 7:case"end":return e.stop()}}),e)})))()},recentlyAdded:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,o,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y(Object(_["CONFIG"])(new x.BrowserLocalStorageKeyStore));case 2:n=e.sent,o=new C(n),s="api/v1/recentlyadded",i={top:10,owner:o.getAccountId()||"%"},t.axios.post(s,i).then((function(e){t.dataAdded=[];for(var n=0;n<e.data.length;n++){var o={img:e.data[n].icon||a("ebc4"),name:e.data[n].name,desc:e.data[n].nft_contract,like:!1,dislike:!1,vote_positivo:e.data[n].votos_positivos,vote_negativo:e.data[n].votos_negativos,positivo:0,negativo:0,permission:e.data[n].permission_voto_nega};t.dataAdded.push(o),t.getVotacionesRecently()}})).catch((function(t){console.log(t)}));case 7:case"end":return e.stop()}}),e)})))()},getVotacionesRecently:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,o,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="backend.monkeonnear.near",e.next=3,y(Object(_["CONFIG"])(new x.BrowserLocalStorageKeyStore));case 3:if(n=e.sent,o=new C(n),!o.isSignedIn()){e.next=14;break}s=new S(o.account(),a,{viewMethods:["get_voto_user"],sender:o.account()}),i=0;case 8:if(!(i<t.dataAdded.length)){e.next=14;break}return e.next=11,s.get_voto_user({collection:t.dataAdded[i].desc,user_id:o.getAccountId()}).then((function(e){t.dataAdded[i].positivo=e.positivo,t.dataAdded[i].negativo=e.negativo})).catch((function(e){console.log(e),t.dataAdded[i].positivo=0,t.dataAdded[i].negativo=0}));case 11:i++,e.next=8;break;case 14:case"end":return e.stop()}}),e)})))()},getVotaciones:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,o,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="backend.monkeonnear.near",e.next=3,y(Object(_["CONFIG"])(new x.BrowserLocalStorageKeyStore));case 3:if(n=e.sent,o=new C(n),!o.isSignedIn()){e.next=14;break}s=new S(o.account(),a,{viewMethods:["get_voto_user"],sender:o.account()}),i=0;case 8:if(!(i<t.dataVoted.length)){e.next=14;break}return e.next=11,s.get_voto_user({collection:t.dataVoted[i].desc,user_id:o.getAccountId()}).then((function(e){t.dataVoted[i].positivo=e.positivo,t.dataVoted[i].negativo=e.negativo})).catch((function(e){console.log(e),t.dataVoted[i].positivo=0,t.dataVoted[i].negativo=0}));case 11:i++,e.next=8;break;case 14:t.dataTableBool=!0;case 15:case"end":return e.stop()}}),e)})))()}}}),j=V,I=Object(d["a"])(j,n,o,!1,null,null,null);e["default"]=I.exports;v()(I,{VBtn:m["a"],VCard:p["a"],VSheet:h["a"]})},a844:function(t,e,a){"use strict";var n=a("5530"),o=(a("a9e3"),a("1681"),a("8654")),s=a("58df"),i=Object(s["a"])(o["a"]);e["a"]=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var a;t?e.calculateInputHeight():null==(a=e.$refs.input)||a.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=o["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){o["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},dcb7:function(t,e,a){"use strict";a("1505")},ebc4:function(t,e,a){t.exports=a.p+"img/nft1.0d51bfd3.png"}}]);
//# sourceMappingURL=chunk-51f765a2.e5b34f00.js.map