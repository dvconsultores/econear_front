(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41183d9a"],{"0430":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"divcol gap2",attrs:{id:"portafolio"}},[t._m(0),s("section",{staticClass:"container-profit fwrap spacee acenter gap2"},t._l(t.dataProfit,(function(e,r){return s("v-card",{key:r,staticClass:"card",staticStyle:{"--bg":"hsl(212 47% 12% / .5)","--p":"clamp(.8em,2vw,2em)","--b":"none"}},[s("v-sheet",{staticClass:"card",staticStyle:{"--bg":"hsl(210, 48%, 13%)"},attrs:{title:e.token,"max-height":"186px"}},[s("aside",{staticClass:"divcol",staticStyle:{gap:".5em"}},[s("div",{staticClass:"space gap2"},[s("div",{staticClass:"acenter",staticStyle:{gap:".5em"}},[s("img",{staticStyle:{"--w":"2.2em","--h":"2.2em"},attrs:{src:a("d3d7")("./"+e.img),alt:"near"}}),s("h3",{staticClass:"h7_em p bold"},[t._v(t._s(e.crypto))])])]),s("span",{staticClass:"h11_em"},[t._v("$ "),s("span",{staticClass:"light"},[t._v(t._s(e.dollar))])])])])],1)})),1),s("aside",{staticClass:"container-controls space gap2 wrap responsive_controls"},[s("v-tabs",t._l(t.dataControlsCharts,(function(e,a){return s("v-tab",{key:a,on:{click:function(a){t.dataControlsCharts.forEach((function(t){t.active=!1})),e.active=!0}}},[s("v-icon",[t._v("mdi-"+t._s(e.icon))]),s("h6",{staticClass:"p"},[t._v(t._s(e.name))])],1)})),1)],1),s("section",{staticClass:"container-charts card",staticStyle:{"--bg":"hsl(212 47% 12% / .5)","--p":"clamp(.8em,1vw,2em)","--b":"none"}},[s("PieChart",{directives:[{name:"show",rawName:"v-show",value:t.dataControlsCharts[t.dataControlsCharts.findIndex((function(t){return"pie"==t.key}))].active,expression:"dataControlsCharts[dataControlsCharts.findIndex(e=>e.key=='pie')].active"}],ref:"piechart"}),s("section",{directives:[{name:"show",rawName:"v-show",value:t.dataControlsCharts[t.dataControlsCharts.findIndex((function(t){return"statistics"==t.key}))].active,expression:"dataControlsCharts[dataControlsCharts.findIndex(e=>e.key=='statistics')].active"}],staticClass:"container-profit divcol gap2"},[s("div",{staticClass:"fwrap spacee acenter gap2 gap2"},[s("v-card",{staticClass:"card",staticStyle:{"--bg":"hsl(212 47% 12% / .5)","--p":"clamp(.8em,2vw,2em)","--b":"none"}},[s("v-sheet",{staticClass:"card",staticStyle:{"--bg":"hsl(210, 48%, 13%)"},attrs:{"max-height":"186px"}},[s("aside",{staticClass:"divcol",staticStyle:{gap:".5em"}},[s("div",{staticClass:"space gap2"},[s("div",{staticClass:"acenter",staticStyle:{gap:".5em"}},[s("img",{staticStyle:{"--w":"2.2em"},attrs:{src:a("442e"),alt:"econear"}}),s("h3",{staticClass:"h7_em p bold"},[t._v("NEAR")])]),s("v-chip",{staticClass:"btn h11_em",style:"--b:none;--bs:none;--bg:hsl(210, 48%, 9%);--p:1em .8em;\n                    --c:"+(t.dataStatistics.near.percent.includes("+")?"var(--success)":"var(--error)")},["---"!=t.dataStatistics.near.percent?s("span",[t._v(t._s(t.dataStatistics.near.percent)+"%")]):s("span",[t._v(t._s(t.dataStatistics.near.percent))])])],1),s("span",{staticClass:"h11_em"},[t._v("Best Performace")])]),s("aside",{staticClass:"divcol",staticStyle:{gap:".2em"}},["---"!=t.dataStatistics.near.dollar?s("span",[t._v("$ "+t._s(t.dataStatistics.near.dollar))]):s("span",[t._v(t._s(t.dataStatistics.near.dollar))])])])],1),s("v-card",{staticClass:"card",staticStyle:{"--bg":"hsl(212 47% 12% / .5)","--p":"clamp(.8em,2vw,2em)","--b":"none"}},[s("v-sheet",{staticClass:"card",staticStyle:{"--bg":"hsl(210, 48%, 13%)"},attrs:{"max-height":"186px"}},[s("aside",{staticClass:"divcol",staticStyle:{gap:".5em"}},[s("div",{staticClass:"space gap2"},[s("div",{staticClass:"acenter",staticStyle:{gap:".5em"}},[s("img",{staticStyle:{"--w":"2.2em"},attrs:{src:a("c855"),alt:"econear"}}),s("h3",{staticClass:"h7_em p bold"},[t._v("USDT")])]),s("v-chip",{staticClass:"btn h11_em",style:"--b:none;--bs:none;--bg:hsl(210, 48%, 9%);--p:1em .8em;\n                    --c:"+(t.dataStatistics.usdt.percent.includes("+")?"var(--success)":"var(--error)")},["---"!=t.dataStatistics.usdt.percent?s("span",[t._v(t._s(t.dataStatistics.usdt.percent)+"%")]):s("span",[t._v(t._s(t.dataStatistics.usdt.percent))])])],1),s("span",{staticClass:"h11_em"},[t._v("Best Performace")])]),s("aside",{staticClass:"divcol",staticStyle:{gap:".2em"}},["---"!=t.dataStatistics.usdt.dollar?s("span",[t._v("$ "+t._s(t.dataStatistics.usdt.dollar))]):s("span",[t._v(t._s(t.dataStatistics.usdt.dollar))])])])],1),s("v-card",{staticClass:"card",staticStyle:{"--bg":"hsl(212 47% 12% / .5)","--p":"clamp(.8em,2vw,2em)","--b":"none"}},[s("v-sheet",{staticClass:"card",staticStyle:{"--bg":"hsl(210, 48%, 13%)"},attrs:{"max-height":"186px"}},[s("aside",{staticClass:"divcol",staticStyle:{gap:".5em"}},[s("div",{staticClass:"space gap2"},[s("div",{staticClass:"acenter",staticStyle:{gap:".5em"}},[s("img",{staticStyle:{"--w":"2.2em"},attrs:{src:a("bff0"),alt:"econear"}}),s("h3",{staticClass:"h7_em p bold"},[t._v("USDC")])]),s("v-chip",{staticClass:"btn h11_em",style:"--b:none;--bs:none;--bg:hsl(210, 48%, 9%);--p:1em .8em;\n                    --c:"+(t.dataStatistics.usdc.percent.includes("+")?"var(--success)":"var(--error)")},["---"!=t.dataStatistics.usdc.percent?s("span",[t._v(t._s(t.dataStatistics.usdc.percent)+"%")]):s("span",[t._v(t._s(t.dataStatistics.usdc.percent))])])],1),s("span",{staticClass:"h11_em"},[t._v("Best Performace")])]),s("aside",{staticClass:"divcol",staticStyle:{gap:".2em"}},["---"!=t.dataStatistics.usdc.dollar?s("span",[t._v("$ "+t._s(t.dataStatistics.usdc.dollar))]):s("span",[t._v(t._s(t.dataStatistics.usdc.dollar))])])])],1),s("v-card",{staticClass:"card",staticStyle:{"--bg":"hsl(212 47% 12% / .5)","--p":"clamp(.8em,2vw,2em)","--b":"none"}},[s("v-sheet",{staticClass:"card",staticStyle:{"--bg":"hsl(210, 48%, 13%)"},attrs:{"max-height":"186px"}},[s("aside",{staticClass:"divcol",staticStyle:{gap:".5em"}},[s("div",{staticClass:"space gap2"},[s("div",{staticClass:"acenter",staticStyle:{gap:".5em"}},[s("img",{staticStyle:{"--w":"2.2em"},attrs:{src:a("1369"),alt:"econear"}}),s("h3",{staticClass:"h7_em p bold"},[t._v("DAI")])]),s("v-chip",{staticClass:"btn h11_em",style:"--b:none;--bs:none;--bg:hsl(210, 48%, 9%);--p:1em .8em;\n                    --c:"+(t.dataStatistics.dai.percent.includes("+")?"var(--success)":"var(--error)")},["---"!=t.dataStatistics.dai.percent?s("span",[t._v(t._s(t.dataStatistics.dai.percent)+"%")]):s("span",[t._v(t._s(t.dataStatistics.dai.percent))])])],1),s("span",{staticClass:"h11_em"},[t._v("Best Performace")])]),s("aside",{staticClass:"divcol",staticStyle:{gap:".2em"}},["---"!=t.dataStatistics.dai.dollar?s("span",[t._v("$ "+t._s(t.dataStatistics.dai.dollar))]):s("span",[t._v(t._s(t.dataStatistics.dai.dollar))])])])],1)],1)])],1),s("aside",{staticClass:"space gap2 responsive_controls"},[s("h2",{staticClass:"h9_em p"},[t._v("Assets")]),s("div",{staticClass:"acenter gap1"},[s("v-tabs",{staticClass:"tab-right doble"},[s("v-tab",{on:{click:function(e){t.organizationStyle=!0}}},[s("v-icon",[t._v("mdi-format-list-bulleted-square")])],1),s("v-tab",{on:{click:function(e){t.organizationStyle=!1}}},[s("v-icon",[t._v("mdi-view-grid")])],1)],1)],1)]),t.organizationStyle?s("v-data-table",{staticClass:"card",staticStyle:{"--p":"clamp(1em,2vw,2em)"},attrs:{id:"dataTable",headers:t.headersTable,items:t.dataTable,"mobile-breakpoint":"-1"},scopedSlots:t._u([{key:"item.nft",fn:function(e){var a=e.item;return[s("div",{staticClass:"center gap1 h11_em"},[s("img",{staticClass:"aspect",staticStyle:{"--w":"4.710625em"},attrs:{src:a.img,alt:"nft"}}),s("div",{staticClass:"divcol tstart",staticStyle:{width:"170px"}},[s("span",[t._v(t._s(a.name))]),s("span",[t._v(t._s(a.desc))])])])]}},{key:"item.token_id",fn:function(e){var a=e.item;return[s("span",{attrs:{title:a.token_id}},[t._v(" "+t._s(t.verificar(a.token_id,14))+" ")])]}},{key:"item.price",fn:function(e){var a=e.item;return[s("span",{directives:[{name:"show",rawName:"v-show",value:1==t.seeCoin,expression:"seeCoin == 1"}]},[t._v(" "+t._s(a.price)+" ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:2==t.seeCoin,expression:"seeCoin == 2"}]},[t._v(" "+t._s(a.price_usd)+" ")])]}},{key:"item.market_icon",fn:function(e){var a=e.item;return[a.market_icon?s("img",{attrs:{title:a.market_name,src:a.market_icon,alt:"market"}}):s("span",[t._v(" "+t._s(a.marketplace)+" ")])]}}],null,!0)}):t._e(),t.organizationStyle?t._e():s("section",{staticClass:"mosaico card grid",staticStyle:{"--gtc":"repeat(auto-fit, minmax(min(100%,var(--size)),1fr))",gap:"1.5em","--p":"clamp(1em,2vw,2em)","--size":"16.2225em"}},t._l(t.dataTable,(function(e,a){return s("v-card",{key:a,staticClass:"divcol alignmobile",staticStyle:{"border-radius":".4vmax"},attrs:{color:"#112131"}},[s("img",{staticClass:"h11_em",staticStyle:{"--w":"100%"},attrs:{src:e.img,alt:"nft"}}),s("aside",{staticClass:"contenido divcol",staticStyle:{gap:".2em"}},[s("span",{staticClass:"Title tcenter h11_em",attrs:{title:e.name}},[t._v(t._s(t.verificar(e.name,20)))]),s("div",{staticClass:"space h11_em"},[s("span",[t._v("Token ID")]),s("span",{attrs:{title:e.token_id}},[t._v(" "+t._s(t.verificar(e.token_id,14))+" ")])])])])})),1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"divcol center tcenter align",attrs:{id:"container-header"}},[a("h2",{staticClass:"h5_em p"},[t._v("My portfolio")])])}],n=a("1da1"),i=(a("b680"),a("a9e3"),a("caad"),a("2532"),a("2ca0"),a("99af"),a("96cf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"charts fwrap card",attrs:{id:"linechart"}},[a("aside",{staticClass:"divcol"},[a("apexchart",{ref:"chart",attrs:{width:"100%",height:"422.76px",type:"area",options:t.chartOptions,series:t.chartSeries}})],1),a("aside",{staticClass:"divcol"},[a("apexchart",{ref:"chart2",attrs:{width:"100%",height:"422.76px",type:"area",options:t.chartOptions,series:t.chartSeries}})],1)])}),c=[];function o(t,e,a){var s=0,r=[];while(s<e){var n=t,i=Math.floor(Math.random()*(a.max-a.min+1))+a.min;r.push([n,i]),t+=864e5,s++}return r}var l={name:"lineChart",i18n:a("430d"),data:function(){return{dataControls:[{key:"24h",name:"24h"},{key:"7d",name:"7d"},{key:"30d",name:"30d"},{key:"60d",name:"60d"},{key:"90d",name:"90d"},{key:"all",name:"ALL"}],selection:"24h",selection2:"24h",chartSeries:[{name:"",data:o(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"",data:o(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:20})}],chartOptions:{defaultLocale:"en",grid:{show:!1},colors:["#D88321","#60D2CA"],chart:{stacked:!1,toolbar:{show:!1,autoSelected:"zoom"}},stroke:{curve:"smooth",lineCap:"butt",width:1},dataLabels:{enabled:!1},markers:{size:0,style:"hollow",colors:["#D88321","#60D2CA"],hover:{size:8}},tooltip:{shared:!0,marker:{show:!1},x:{show:!1}},legend:{show:!1,position:"top",horizontalAlign:"start"},xaxis:{type:"datetime"}}}},methods:{updateData:function(t){switch(this.selection=t,t){case"24h":this.$refs.chart.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"60d":this.$refs.chart.zoomX(new Date("01 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"90d":this.$refs.chart.zoomX(new Date("01 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"all":this.$refs.chart.zoomX(new Date("23 Jan 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}},updateData2:function(t){switch(this.selection2=t,t){case"24h":this.$refs.chart2.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart2.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart2.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"60d":this.$refs.chart2.zoomX(new Date("01 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"90d":this.$refs.chart2.zoomX(new Date("01 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"all":this.$refs.chart2.zoomX(new Date("23 Jan 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}}}},d=l,p=(a("991c"),a("2877")),u=Object(p["a"])(d,i,c,!1,null,null,null),m=u.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"charts fwrap card",attrs:{id:"piechart"}},[t.chartSeries.length>0?a("aside",{staticClass:"container-linechart divcol"},[a("apexchart",{ref:"chart",attrs:{width:"100%",height:"600px",type:"donut",options:t.chartOptions,series:t.chartSeries}})],1):t._e(),a("aside",{staticClass:"container-linechart divcol"})])},g=[],f={name:"lineChart",i18n:a("430d"),data:function(){return{dataControls:[{key:"24h",name:"24h"},{key:"7d",name:"7d"},{key:"30d",name:"30d"},{key:"60d",name:"60d"},{key:"90d",name:"90d"},{key:"all",name:"ALL"}],selection:"24h",selection2:"24h",chartSeries:[],chartOptions:{defaultLocale:"en",legend:{position:"bottom"},labels:["NEAR","USDT","USDC","DAI","UTO","NEXP"],colors:["#6A25D2","#259976","#2774CA","#F5AC37","#202124","#48C558"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}},methods:{getGrafica:function(t){this.chartSeries=[],this.chartSeries=t},updateData:function(t){switch(this.selection=t,t){case"24h":this.$refs.chart.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"60d":this.$refs.chart.zoomX(new Date("01 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"90d":this.$refs.chart.zoomX(new Date("01 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"all":this.$refs.chart.zoomX(new Date("23 Jan 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}},updateData2:function(t){switch(this.selection2=t,t){case"24h":this.$refs.chart2.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart2.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart2.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"60d":this.$refs.chart2.zoomX(new Date("01 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"90d":this.$refs.chart2.zoomX(new Date("01 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"all":this.$refs.chart2.zoomX(new Date("23 Jan 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}}}},v=f,b=Object(p["a"])(v,h,g,!1,null,null,null),_=b.exports,w=a("d9eb"),C=(a("7424"),a("b533"),a("78b3"),a("accd"),w["connect"]),k=(w["transactions"],w["keyStores"]),y=w["WalletConnection"],x=w["Contract"],S=w["utils"],T=new k.BrowserLocalStorageKeyStore,D={networkId:"mainnet",keyStore:T,nodeUrl:"https://rpc.mainnet.near.org",walletUrl:"https://wallet.mainnet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"},P={name:"portafolio",i18n:a("430d"),components:{LineChart:m,PieChart:_},data:function(){return{search:"",dataProfit:[{token:"NEAR",img:"near.svg",crypto:null,dollar:null,percent:12.8,state_percent:!0,change:"28,747",state_change:!0,profit:"28,747",state_profit:!0},{token:"USDT",img:"usdt.svg",crypto:null,dollar:null,percent:12.8,state_percent:!0,change:"28,747",state_change:!0,profit:"28,747",state_profit:!0},{token:"USDC",img:"usdc.svg",crypto:null,dollar:null,percent:12.8,state_percent:!0,change:"28,747",state_change:!0,profit:"28,747",state_profit:!0},{token:"DAI",img:"dai.svg",crypto:null,dollar:null,percent:12.8,state_percent:!0,change:"28,747",state_change:!0,profit:"28,747",state_profit:!0},{token:"UTO",img:"uto.svg",crypto:null,dollar:null,percent:12.8,state_percent:!0,change:"28,747",state_change:!0,profit:"28,747",state_profit:!0},{token:"NEXP",img:"nexp.png",crypto:null,dollar:null,percent:12.8,state_percent:!0,change:"28,747",state_change:!0,profit:"28,747",state_profit:!0}],dataControlsCharts:[{key:"pie",icon:"chart-pie",name:"Pie Chart",active:!0},{key:"statistics",icon:"chart-line-variant",name:"Statistics",active:!1}],dataStatistics:{profit:{crypto:"46,529",dollar:"232,245.65",percent:"+12.8"},near:{crypto:"---",dollar:"---",percent:"---"},usdt:{crypto:"---",dollar:"---",percent:"---"},usdc:{crypto:"---",dollar:"---",percent:"---"},dai:{crypto:"---",dollar:"---",percent:"---"}},organizationStyle:!0,headersTable:[{value:"nft",text:"NFT",align:"center",sortable:!1},{value:"token_id",text:"Token ID",align:"center",sortable:!1}],dataTable2:[],dataTable:[],index:0,nearPrice:0,seeCoin:1}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.pushHome(),t.priceNEAR(),t.getNFTContractsByAccount(),t.getPriceChange("near"),t.getPriceChange("usdt"),t.getPriceChange("usdc"),t.getPriceChange("dai");case 7:case"end":return e.stop()}}),e)})))()},methods:{getPriceChange:function(t){var e=this;this.axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids="+t).then((function(a){var s,r=a.data[0];s={dollar:String(r.current_price.toFixed(2)),value:r.current_price,percent:r.price_change_percentage_24h},s.percent>=0?s.percent="+"+s.percent.toFixed(2):s.percent=String(s.percent.toFixed(2)),"near"===t?e.dataStatistics.near=s:"usdt"===t?e.dataStatistics.usdt=s:"usdc"===t?e.dataStatistics.usdc=s:"dai"===t&&(e.dataStatistics.dai=s)})).catch((function(a){e.getPriceChangeBinance(t)}))},getPriceChangeBinance:function(t){var e=this;"usdt"!==t&&"usdc"!==t&&this.axios.get("https://api.binance.com/api/v3/ticker/24hr?symbol="+t.toUpperCase()+"USDT").then((function(a){console.log(t,a.data);var s,r=a.data;s={dollar:String(Number(r.lastPrice).toFixed(2)),value:Number(r.lastPrice),percent:Number(r.priceChangePercent)},s.percent>=0?s.percent="+"+s.percent.toFixed(2):s.percent=String(s.percent.toFixed(2)),"near"===t?e.dataStatistics.near=s:"usdt"===t?e.dataStatistics.usdt=s:"usdc"===t?e.dataStatistics.usdc=s:"dai"===t&&(e.dataStatistics.dai=s)})).catch((function(t){console.log(t)}))},pushHome:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C(D);case 2:a=e.sent,s=new y(a),s.isSignedIn()||t.$router.push("/");case 5:case"end":return e.stop()}}),e)})))()},getNFTContractsByAccount:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s,r,n,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C(D);case 2:if(a=e.sent,s=new y(a),!s.isSignedIn()){e.next=18;break}return r=s.getAccountId(),n="https://api.kitwallet.app/account/".concat(r,"/likelyNFTs"),e.next=9,t.axios.get(n);case 9:i=e.sent,c=0;case 11:if(!(c<i.data.length)){e.next=18;break}if(i.data[c].includes("mintbase")){e.next=15;break}return e.next=15,t.getNFTByContract(i.data[c],r);case 15:c++,e.next=11;break;case 18:case"end":return e.stop()}}),e)})))()},getNFTByContract:function(t,e){var s=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,i,c,o,l,d,p;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,C(D);case 3:return n=r.sent,i=new y(n),c=new x(i.account(),t,{viewMethods:["nft_tokens_for_owner","nft_metadata"],sender:i.account()}),r.next=8,c.nft_tokens_for_owner({account_id:e,from_index:"0",limit:100});case 8:return o=r.sent,r.next=11,c.nft_metadata();case 11:l=r.sent,d=0;case 13:if(!(d<o.length)){r.next=28;break}return r.next=16,s.buildMediaUrl(o[d].metadata.media,l.base_uri);case 16:if(r.t0=r.sent,r.t0){r.next=19;break}r.t0=a("ebc4");case 19:r.t1=r.t0,r.t2=o[d].metadata.title||o[d].token_id,r.t3=t,r.t4=o[d].token_id,p={img:r.t1,name:r.t2,desc:r.t3,token_id:r.t4},s.dataTable.push(p);case 25:d++,r.next=13;break;case 28:r.next=34;break;case 30:return r.prev=30,r.t5=r["catch"](0),console.log("err",t),r.abrupt("return",[]);case 34:case"end":return r.stop()}}),r,null,[[0,30]])})))()},buildMediaUrl:function(t,e){return!t||t.includes("://")||t.startsWith("data:image")?t:e?"".concat(e,"/").concat(t):"https://cloudflare-ipfs.com/ipfs/".concat(t)},getNFTById:function(t,e){return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,r,n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,C(D);case 2:return s=a.sent,r=new y(s),n=new x(r.account(),t,{viewMethods:["nft_token"],sender:r.account()}),i={token_id:e},a.next=8,n.nft_token(i);case 8:a.sent;case 9:case"end":return a.stop()}}),a)})))()},verificar:function(t,e){return t.length>e?t.substring(0,e)+"...":t},getBalance:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s,r,n,i,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C(D);case 2:if(a=e.sent,s=new y(a),!s.isSignedIn()){e.next=16;break}return e.next=7,a.account(s.getAccountId());case 7:return r=e.sent,e.next=10,r.state();case 10:n=e.sent,i=Math.pow(10,19),c=Math.pow(10,24),o=n.storage_usage*i/c,t.dataProfit[0].crypto=(n.amount/c-o).toFixed(2),t.dataProfit[0].dollar=(t.dataProfit[0].crypto*t.nearPrice).toFixed(2);case 16:case"end":return e.stop()}}),e)})))()},changeCoin:function(t){this.seeCoin="near"===t?1:2},priceNEAR:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.axios.get("https://api.binance.com/api/v3/ticker/24hr?symbol=NEARUSDT").then((function(e){t.nearPrice=e.data.lastPrice,t.getBalance(),t.getBalances()})).catch((function(e){t.getBalance(),t.getBalances()}));case 1:case"end":return e.stop()}}),e)})))()},getBalances:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C(D);case 2:a=e.sent,s=new y(a),r="api/v1/YourBalance",i={user_id:s.getAccountId()},t.axios.post(r,i).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.dataProfit[1].crypto=Number(a.data.saldo_usdt).toFixed(2),e.t0=t.dataProfit[1].crypto,e.next=4,t.getTokenPrice("dac17f958d2ee523a2206206994597c13d831ec7.factory.bridge.near");case 4:return e.t1=e.sent,t.dataProfit[1].dollar=(e.t0*e.t1).toFixed(2),t.dataProfit[2].crypto=Number(a.data.saldo_usdc).toFixed(2),e.t2=t.dataProfit[2].crypto,e.next=10,t.getTokenPrice("a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near");case 10:return e.t3=e.sent,t.dataProfit[2].dollar=(e.t2*e.t3).toFixed(2),t.dataProfit[3].crypto=Number(a.data.saldo_dai).toFixed(2),e.t4=t.dataProfit[3].crypto,e.next=16,t.getTokenPrice("6b175474e89094c44da98b954eedeac495271d0f.factory.bridge.near");case 16:return e.t5=e.sent,t.dataProfit[3].dollar=(e.t4*e.t5).toFixed(2),t.dataProfit[4].crypto=Number(a.data.saldo_uto).toFixed(2),e.t6=t.dataProfit[4].crypto,e.next=22,t.getTokenPrice("utopia.secretskelliessociety.near");case 22:return e.t7=e.sent,t.dataProfit[4].dollar=(e.t6*e.t7).toFixed(2),t.dataProfit[5].crypto=Number(a.data.saldo_nexp).toFixed(2),e.t8=t.dataProfit[5].crypto,e.next=28,t.getTokenPrice("nexp.near");case 28:e.t9=e.sent,t.dataProfit[5].dollar=(e.t8*e.t9).toFixed(2),s=[Number(t.dataProfit[0].dollar),Number(t.dataProfit[1].dollar),Number(t.dataProfit[2].dollar),Number(t.dataProfit[3].dollar),Number(t.dataProfit[4].dollar),Number(t.dataProfit[5].dollar)],t.$refs.piechart.getGrafica(s);case 32:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.log(t)}));case 7:case"end":return e.stop()}}),e)})))()},getTokenPrice:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.axios.get("https://indexer.ref.finance/get-token-price?token_id="+t).then((function(t){return"N/A"===t.data.price?0:t.data.price})).catch((function(t){return 0}));case 2:return s=a.sent,a.abrupt("return",Number(s));case 4:case"end":return a.stop()}}),a)})))()},getNftCollection:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C(D);case 2:s=e.sent,r=new y(s),n="api/v1/ListNftOwner",i={owner:r.getAccountId(),limit:"20",index:t.index},t.axios.post(n,i).then((function(e){t.dataTable2=[];for(var s=0;s<e.data.length;s++){var r={index:t.index+s,img:e.data[s].media||a("ebc4"),name:e.data[s].titulo,desc:e.data[s].collection,token_id:e.data[s].token_id};r.price_yocto?(r.price=S.format.formatNearAmount(r.price_yocto)+" N",r.price_usd=(S.format.formatNearAmount(r.price_yocto)*t.nearPrice).toFixed(2)+" $"):(r.price="-",r.price_usd="-"),t.dataTable2.push(r)}t.dataTable=t.dataTable2,t.index=t.dataTable.length})).catch((function(t){console.log(t)}));case 7:case"end":return e.stop()}}),e)})))()}}},F=P,N=(a("ebeb"),a("6544")),$=a.n(N),z=a("b0af"),R=a("cc20"),A=a("8fea"),X=a("132d"),O=a("8dd9"),B=a("71a3"),I=a("fe57"),J=Object(p["a"])(F,s,r,!1,null,null,null);e["default"]=J.exports;$()(J,{VCard:z["a"],VChip:R["a"],VDataTable:A["a"],VIcon:X["a"],VSheet:O["a"],VTab:B["a"],VTabs:I["a"]})},"106f":function(t,e,a){},"430d":function(t,e){t.exports={messages:{ES:{savePhrase:"Este registro genera una frase de 12 palabras que debe guardar en un lugar seguro"},US:{savePhrase:"This record generates a 12-word phrase that you must keep in a safe place"}}}},ebeb:function(t,e,a){"use strict";a("106f")}}]);
//# sourceMappingURL=chunk-41183d9a.d9ec9ac2.js.map