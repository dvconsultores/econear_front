(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1b99b8c","chunk-6b25db45"],{5096:function(t,e,a){},"991c":function(t,e,a){"use strict";a("99bc")},"99bc":function(t,e,a){},c307:function(t,e){t.exports={messages:{ES:{savePhrase:"Este registro genera una frase de 12 palabras que debe guardar en un lugar seguro"},US:{savePhrase:"This record generates a 12-word phrase that you must keep in a safe place"}}}},d76e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"divcol gap2",attrs:{id:"marketplaceStats"}},[s("h2",{staticClass:"h5_em p tcenter"},[t._v("Marketplace Stats")]),s("section",{staticClass:"divcol gap2",staticStyle:{"margin-block":"8em"}},[s("aside",{staticClass:"container-controls space gap2 wrap"},[s("v-text-field",{staticClass:"customeFilter",staticStyle:{"--bg":"hsl(210, 48%, 13%, .46)","--c":"#FFFFFF","--p":"0 1.5em","--w":"100%","--label":"#FFFFFF","max-width":"30.061875em"},attrs:{"hide-details":"",solo:"",label:"Search for NFTs and collections","append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),s("section",{staticClass:"card grid",staticStyle:{"--p":"2em",gap:"1em","--gtc":"repeat(auto-fit,minmax(min(100%,16.124375em),1fr))"}},t._l(t.marketplace,(function(e,a){return s("v-card",{key:a,staticClass:"card",staticStyle:{"--p":"1em",display:"flex",gap:"1em"},on:{click:function(a){return t.ShowStats(e)}}},[s("img",{staticStyle:{"--w":"4.710625em"},attrs:{src:e.img,alt:"markets"}}),s("span",{staticClass:"h9_em"},[t._v(t._s(e.name))])])})),1),s("v-btn-toggle",{staticClass:"marginaleft",attrs:{mandatory:"",color:"#60D2CA"}},[s("v-btn",{attrs:{color:"transparent"}},[s("v-icon",{attrs:{color:"#FFFFFF"}},[t._v("mdi-chevron-left")])],1),t._l(5,(function(e){return s("v-btn",{key:e,attrs:{color:"transparent"}},[s("span",[t._v(t._s(e))])])})),s("v-btn",{attrs:{color:"transparent"}},[s("v-icon",{attrs:{color:"#FFFFFF"}},[t._v("mdi-chevron-right")])],1)],2)],1),s("section",{directives:[{name:"show",rawName:"v-show",value:t.stats,expression:"stats"}],staticClass:"divcol gap2"},[s("div",{staticClass:"space gap2"},[s("v-card",{staticClass:"card center gap1mobile alignmobile",attrs:{id:"card-stats"}},[s("div",{staticClass:"acenter gap1"},[s("img",{staticStyle:{"--w":"4.710625em"},attrs:{src:t.dataStats.img,alt:"marketplace image"}}),s("span",{staticClass:"h9_em"},[t._v(t._s(t.dataStats.name))])]),s("div",{staticClass:"grid"},t._l(t.dataStats.dataSocialRed,(function(t,e){return s("v-btn",{key:e,attrs:{icon:"",href:t.link,target:"_blank"}},[s("img",{attrs:{src:a("6f32")("./"+t.social+".svg"),alt:t.social+" icon"}})])})),1),s("p",{staticClass:"p vermobile tcenter",staticStyle:{"font-size":"1.7em"}},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat ligula orci, ac imperdiet tortor cursus vitae. Nunc fringilla lacus vel tempus")])]),s("p",{staticClass:"p eliminarmobile",staticStyle:{"font-size":"clamp(1em,1.8vw,1.8em)"}},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat ligula orci, ac imperdiet tortor cursus vitae. Nunc fringilla lacus vel tempus")])],1),s("v-card",{staticClass:"card fwrap",attrs:{id:"container-info"}},[s("div",{staticClass:"center"},[s("div",{staticClass:"divcol"},[s("label",{staticClass:"semibold"},[t._v("Total Supply NFT")]),s("span",{staticClass:"bold"},[t._v(t._s(t.dataStats.info.supply))])])]),s("div",{staticClass:"center"},[s("div",{staticClass:"divcol"},[s("label",{staticClass:"semibold"},[t._v("Subscribers")]),s("span",{staticClass:"bold"},[t._v(t._s(t.dataStats.info.subscribers))])])]),s("div",{staticClass:"center"},[s("div",{staticClass:"divcol"},[s("label",{staticClass:"semibold"},[t._v("Total Volume")]),s("div",{staticClass:"acenter",staticStyle:{gap:"1em"}},[s("span",{staticClass:"bold"},[t._v(t._s(t.dataStats.info.volume))]),s("img",{staticStyle:{"--w":"1.673125em","margin-bottom":"4px"},attrs:{src:a("2c4a"),alt:"near icon"}})])])]),s("div",{staticClass:"center"},[s("div",{staticClass:"divcol"},[s("label",{staticClass:"semibold"},[t._v("Total estimated users")]),s("span",{staticClass:"bold"},[t._v(t._s(t.dataStats.info.users))])])]),s("div",{staticClass:"center"},[s("div",{staticClass:"end"},[s("v-btn",{staticStyle:{"--p":"1.6em"},attrs:{icon:""}},[s("img",{staticStyle:{"--w":"2.396875em"},attrs:{src:a("7d16"),alt:"like icon"}})]),s("v-btn",{staticStyle:{"--p":"1.6em"},attrs:{icon:""}},[s("img",{staticStyle:{"--w":"2.396875em"},attrs:{src:a("bd5b"),alt:"share icon"}})]),s("v-btn",{staticStyle:{"--p":"1.6em"},attrs:{icon:""}},[s("img",{staticStyle:{"--w":"2.396875em"},attrs:{src:a("05a2"),alt:"bell icon"}})])],1)])]),s("section",{staticClass:"infodown fwrap"},t._l(t.dataStats.info.dataDown,(function(e,r){return s("v-card",{key:r,staticClass:"card align"},[s("v-sheet",{staticClass:"jspace",attrs:{color:"var(--clr-card)"}},[s("div",{staticClass:"divcol"},[s("div",{staticClass:"infotext bold acenter",staticStyle:{gap:".7em"}},[s("span",[t._v(t._s("market"==e.key?"Market Cap":"traders"==e.key?"Traders":"volume"==e.key?"Volume (24H)":"price"==e.key?"Floor price":null))]),s("img",{staticStyle:{"--w":".9em"},attrs:{src:a("76ed"),alt:"info"}})]),s("span",{staticClass:"number bold acenter",staticStyle:{gap:".7em"}},["volume"==e.key||"price"==e.key?s("img",{staticStyle:{"--w":".8em"},attrs:{src:a("2c4a"),alt:"near"}}):t._e(),t._v(" "+t._s(e.price)+" ")]),s("span",{staticClass:"percent",style:"color:"+(e.percent.includes("+")?"var(--success)":"var(--error)")},[t._v(" "+t._s(e.percent)+"% ")])]),s("v-chip",{staticClass:"btn center",staticStyle:{"--bg":"var(--primary)","--c":"var(--secondary)","--bs":"none","font-size":"1.25em","--p":"0","--w":"min(199%, 3.5em)","--h":"2em"}},[t._v(" #"+t._s(e.number)+" ")])],1)],1)})),1),s("aside",{staticClass:"container-controls divcol gap1"},[s("v-tabs",t._l(t.dataControlStats,(function(e,a){return s("v-tab",{key:a,on:{click:function(a){t.dataControlStats.forEach((function(t){t.active=!1})),e.active=!0}}},[s("h6",{staticClass:"p"},[t._v(t._s(e.name))])])})),1)],1),t.dataControlStats[t.dataControlStats.findIndex((function(t){return"overview"==t.key}))].active?[s("ChartMarketCap",{ref:"chartmarketcap",attrs:{Height:t.chartHeight}}),s("ChartVolume",{ref:"chartvolume",attrs:{Height:t.chartHeight}}),s("ChartUserVisits",{ref:"chartuservisits",attrs:{Height:t.chartHeight}}),s("section",{staticClass:"fwrap",staticStyle:{"--fb":"1 1 45em",gap:"1em"},attrs:{id:"container-fwrap"}},[s("aside",{staticClass:"card",staticStyle:{"--p":"clamp(1em,2vw,2em)"}},[s("div",{staticClass:"space wrap margin2bottom"},[s("h3",{staticClass:"h9_em"},[t._v("Sales (24h)")]),s("v-btn-toggle",{attrs:{mandatory:"",color:"#60D2CA"}},t._l(2,(function(e){return s("v-btn",{key:e,attrs:{color:"transparent"}},[s("span",[t._v(t._s(1==e?"High":2==e?"Low":null))])])})),1)],1),s("v-data-table",{staticClass:"card",staticStyle:{"--bg":"transparent","--b":"none","--p":"0"},attrs:{id:"dataTable",headers:t.headersTableSales,items:t.dataTableSales,"hide-default-footer":"","mobile-breakpoint":"-1"},scopedSlots:t._u([{key:"header.number",fn:function(){return[s("center",{staticClass:"center"},[s("span",[t._v("#")]),s("img",{staticStyle:{"--w":"0.5em","margin-left":".3em"},attrs:{src:a("f931"),alt:"sortable icon"}})])]},proxy:!0},{key:"item.number",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.dataTableSales.indexOf(a)+1)+" ")]}},{key:"item.nft",fn:function(e){var a=e.item;return[s("div",{staticClass:"nftDetail center gap1"},[s("img",{staticClass:"aspect",staticStyle:{"--w":"4.710625em"},attrs:{src:a.img,alt:"nft"}}),s("div",{staticClass:"divcol tstart"},[s("span",[t._v(t._s(a.name)+" "+t._s(a.id))]),s("span",[t._v(t._s(a.desc))])])])]}},{key:"item.sales",fn:function(e){var a=e.item;return[t._v(" "+t._s(a.sales)+" NEAR ")]}},{key:"footer",fn:function(){return[s("div",{staticClass:"fill_w center"},[s("v-btn-toggle",{attrs:{mandatory:"",color:"#60D2CA"}},[s("v-btn",{attrs:{color:"transparent"}},[s("v-icon",{attrs:{color:"#707070"}},[t._v("mdi-chevron-left")])],1),t._l(5,(function(e){return s("v-btn",{key:e,attrs:{color:"transparent"}},[s("span",[t._v(t._s(e))])])})),s("v-btn",{attrs:{color:"transparent"}},[s("v-icon",{attrs:{color:"#707070"}},[t._v("mdi-chevron-right")])],1)],2)],1)]},proxy:!0}],null,!0)})],1),s("ChartTotalSale",{ref:"charttotalsale",attrs:{Height:t.chartHeight}})],1)]:t._e(),t.dataControlStats[t.dataControlStats.findIndex((function(t){return"social"==t.key}))].active?[s("ChartDiscord",{ref:"chartdiscord",attrs:{Height:t.chartHeight}}),s("ChartTwitter",{ref:"charttwitter",attrs:{Height:t.chartHeight}})]:t._e()],2)])},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"charts card",staticStyle:{"--p":"clamp(1em,2vw,2em)"},attrs:{id:"barchart"}},[a("div",{staticClass:"toolbar wrap not_margin"},[a("div",{staticClass:"divcol"},[a("h3",{staticClass:"h9_em"},[t._v("MarketCap")]),t._m(0),a("div",{staticClass:"values acenter gap1"},[a("h6",{staticClass:"p bold"},[t._v(t._s(t.dataMarketcap.value)+" N")]),a("span",{staticClass:"percent",style:"--c:"+(t.dataMarketcap.percent.includes("+")?"var(--success)":"var(--error)")},[t._v(" "+t._s(t.dataMarketcap.percent)+"% ")])])]),a("v-btn-toggle",{attrs:{mandatory:"",color:"#60D2CA"}},t._l(t.dataControlsChart,(function(e,s){return a("v-btn",{key:s,attrs:{color:"transparent"},on:{click:function(a){return t.updateData(e.key)}}},[a("span",[t._v(t._s(e.name))])])})),1)],1),a("apexchart",{ref:"chart",staticClass:"tags",staticStyle:{"--tag":"'MarketCap'","--text-color":"#ffffff"},attrs:{id:"marketcap",width:"100%",height:t.Height,type:"bar",options:t.chartOptions,series:t.chartSeries}})],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"legend acenter"},[s("div",{staticClass:"marker",staticStyle:{"--color":"#6FFFE9"}}),s("span",[t._v("Market Cap")]),s("img",{attrs:{src:a("7620"),alt:"info"}})])}];function c(t,e,a){var s=0,r=[];while(s<e){var i=t,n=Math.floor(Math.random()*(a.max-a.min+1))+a.min;r.push([i,n]),t+=864e5,s++}return r}var o={name:"chartMarketCap",i18n:a("c307"),props:{Height:String},data:function(){return{dataMarketcap:{value:"71,628",percent:"+20.22"},dataControlsChart:[{key:"24h",name:"24h"},{key:"7d",name:"7d"},{key:"30d",name:"30d"}],selection:"24h",chartSeries:[{name:"",data:c(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chartOptions:{defaultLocale:"en",colors:["#60D2CA"],chart:{stacked:!1,toolbar:{show:!1,autoSelected:"zoom"}},stroke:{curve:"smooth",lineCap:"butt",width:1},dataLabels:{enabled:!1},markers:{size:0,style:"hollow",colors:["#60D2CA"],hover:{size:8}},tooltip:{marker:{show:!1},x:{show:!1}},legend:{show:!1,position:"top",horizontalAlign:"start"},xaxis:{type:"datetime",categories:[1991,1992,1993,1994,1995,1996,1997,1998]}}}},methods:{updateData:function(t){switch(this.selection=t,t){case"24h":this.$refs.chart.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}}}},l=o,m=(a("991c"),a("2877")),d=a("6544"),h=a.n(d),p=a("8336"),v=a("a609"),u=Object(m["a"])(l,i,n,!1,null,null,null),g=u.exports;h()(u,{VBtn:p["a"],VBtnToggle:v["a"]});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"charts card",staticStyle:{"--p":"clamp(1em,2vw,2em)"},attrs:{id:"barchart"}},[a("div",{staticClass:"toolbar wrap not_margin"},[a("div",{staticClass:"divcol"},[a("h3",{staticClass:"h9_em"},[t._v("Volume")]),t._m(0),a("div",{staticClass:"values acenter gap1"},[a("h6",{staticClass:"p bold"},[t._v(t._s(t.dataVolume.value)+" N")]),a("span",{staticClass:"percent",style:"--c:"+(t.dataVolume.percent.includes("+")?"var(--success)":"var(--error)")},[t._v(t._s(t.dataVolume.percent)+"%")])])]),a("v-btn-toggle",{attrs:{mandatory:"",color:"#60D2CA"}},t._l(t.dataControlsChart,(function(e,s){return a("v-btn",{key:s,attrs:{color:"transparent"},on:{click:function(a){return t.updateData(e.key)}}},[a("span",[t._v(t._s(e.name))])])})),1)],1),a("apexchart",{ref:"chart",staticClass:"tags",staticStyle:{"--tag":"'Volume (N)'","--color":"hsl(32, 93%, 54%, .8)"},attrs:{id:"volume",width:"100%",height:t.Height,type:"bar",options:t.chartOptions,series:t.chartSeries}})],1)},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"legend acenter"},[s("div",{staticClass:"marker",staticStyle:{"--color":"#F7931E"}}),s("span",[t._v("Volume")]),s("img",{attrs:{src:a("7620"),alt:"info"}})])}];function C(t,e,a){var s=0,r=[];while(s<e){var i=t,n=Math.floor(Math.random()*(a.max-a.min+1))+a.min;r.push([i,n]),t+=864e5,s++}return r}var w={name:"chartVolume",i18n:a("c307"),props:{Height:String},data:function(){return{dataVolume:{value:"1,901",percent:"-20.22"},dataControlsChart:[{key:"24h",name:"24h"},{key:"7d",name:"7d"},{key:"30d",name:"30d"}],selection:"24h",chartSeries:[{name:"",data:C(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chartOptions:{defaultLocale:"en",colors:["#F7931E"],chart:{stacked:!1,toolbar:{show:!1,autoSelected:"zoom"}},stroke:{curve:"smooth",lineCap:"butt",width:1},dataLabels:{enabled:!1},tooltip:{marker:{show:!1},x:{show:!1}},legend:{show:!1,position:"top",horizontalAlign:"start"},xaxis:{type:"datetime",categories:[1991,1992,1993,1994,1995,1996,1997,1998]}}}},methods:{updateData:function(t){switch(this.selection=t,t){case"24h":this.$refs.chart.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}}}},_=w,k=Object(m["a"])(_,b,f,!1,null,null,null),y=k.exports;h()(k,{VBtn:p["a"],VBtnToggle:v["a"]});var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"charts card",staticStyle:{"--p":"clamp(1em,2vw,2em)"},attrs:{id:"barchart"}},[a("div",{staticClass:"toolbar wrap not_margin"},[a("div",{staticClass:"divcol"},[a("h3",{staticClass:"h9_em"},[t._v("User Visits")]),t._m(0),a("div",{staticClass:"values acenter gap1"},[a("h6",{staticClass:"p bold"},[t._v(t._s(t.dataUserVisits.value))]),a("span",{staticClass:"percent",style:"--c:"+(t.dataUserVisits.percent.includes("+")?"var(--success)":"var(--error)")},[t._v(" "+t._s(t.dataUserVisits.percent)+"% ")])])]),a("v-btn-toggle",{attrs:{mandatory:"",color:"#60D2CA"}},t._l(t.dataControlsChart,(function(e,s){return a("v-btn",{key:s,attrs:{color:"transparent"},on:{click:function(a){return t.updateData(e.key)}}},[a("span",[t._v(t._s(e.name))])])})),1)],1),a("apexchart",{ref:"chart",staticClass:"tags",staticStyle:{"--tag":"'User Visits'","--color":"hsl(264, 70%, 48%, .8)"},attrs:{id:"visits",width:"100%",height:t.Height,type:"line",options:t.chartOptions,series:t.chartSeries}})],1)},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"legend acenter"},[s("div",{staticClass:"marker",staticStyle:{"--color":"#6A25D2"}}),s("span",[t._v("# User Visits")]),s("img",{attrs:{src:a("7620"),alt:"info"}})])}];function F(t,e,a){var s=0,r=[];while(s<e){var i=t,n=Math.floor(Math.random()*(a.max-a.min+1))+a.min;r.push([i,n]),t+=864e5,s++}return r}var D={name:"chartUserVisits",i18n:a("c307"),props:{Height:String},data:function(){return{dataUserVisits:{value:281,percent:"+4.22"},dataControlsChart:[{key:"24h",name:"24h"},{key:"7d",name:"7d"},{key:"30d",name:"30d"}],selection:"24h",chartSeries:[{name:"users",data:F(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chartOptions:{defaultLocale:"en",grid:{borderColor:"#90A4AE"},colors:["#6A25D2"],chart:{stacked:!1,toolbar:{show:!1,autoSelected:"zoom"}},stroke:{curve:"smooth",lineCap:"butt",width:4.5},dataLabels:{enabled:!1},markers:{size:0,style:"hollow",colors:["#6A25D2"],strokeColors:"#6A25D2",hover:{size:8}},tooltip:{marker:{show:!1},x:{show:!1}},legend:{show:!1,position:"top",horizontalAlign:"start"},xaxis:{type:"datetime",categories:[1991,1992,1993,1994,1995,1996,1997,1998]}}}},methods:{updateData:function(t){switch(this.selection=t,t){case"24h":this.$refs.chart.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}}}},x=D,z=Object(m["a"])(x,S,T,!1,null,null,null),V=z.exports;h()(z,{VBtn:p["a"],VBtnToggle:v["a"]});var $=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"charts card",staticStyle:{"--p":"clamp(1em,2vw,2em)"},attrs:{id:"barchart"}},[a("div",{staticClass:"toolbar wrap not_margin"},[a("div",{staticClass:"divcol"},[a("h3",{staticClass:"h9_em"},[t._v("Total Sales")]),t._m(0),a("div",{staticClass:"values acenter gap1"},[a("h6",{staticClass:"p bold"},[t._v(t._s(t.dataTotalSale.value)+" N")]),a("span",{staticClass:"percent",style:"--c:"+(t.dataTotalSale.percent.includes("+")?"var(--success)":"var(--error)")},[t._v(" "+t._s(t.dataTotalSale.percent)+"% ")])])]),a("v-btn-toggle",{attrs:{mandatory:"",color:"#60D2CA"}},t._l(t.dataControlsChart,(function(e,s){return a("v-btn",{key:s,attrs:{color:"transparent"},on:{click:function(a){return t.updateData(e.key)}}},[a("span",[t._v(t._s(e.name))])])})),1)],1),a("apexchart",{ref:"chart",staticClass:"tags",staticStyle:{"--tag":"'Sales'","--color":"hsl(264, 70%, 48%, .8)"},attrs:{id:"totalSales",width:"100%",height:t.Height,type:"bar",options:t.chartOptions,series:t.chartSeries}})],1)},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"legend acenter"},[s("div",{staticClass:"marker",staticStyle:{"--color":"#6A25D2"}}),s("span",[t._v("Volume")]),s("img",{attrs:{src:a("7620"),alt:"info"}})])}];function M(t,e,a){var s=0,r=[];while(s<e){var i=t,n=Math.floor(Math.random()*(a.max-a.min+1))+a.min;r.push([i,n]),t+=864e5,s++}return r}var E={name:"chartTotalSale",i18n:a("c307"),props:{Height:String},data:function(){return{dataTotalSale:{value:"700,051",percent:"+9.22"},dataControlsChart:[{key:"24h",name:"24h"},{key:"7d",name:"7d"},{key:"30d",name:"30d"}],selection:"24h",chartSeries:[{name:"",data:M(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chartOptions:{defaultLocale:"en",colors:["#6A25D2"],chart:{stacked:!1,toolbar:{show:!1,autoSelected:"zoom"}},stroke:{curve:"smooth",lineCap:"butt",width:1},dataLabels:{enabled:!1},tooltip:{marker:{show:!1},x:{show:!1}},legend:{show:!1,position:"top",horizontalAlign:"start"},xaxis:{type:"datetime",categories:[1991,1992,1993,1994,1995,1996,1997,1998]}}}},methods:{updateData:function(t){switch(this.selection=t,t){case"24h":this.$refs.chart.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}}}},H=E,O=Object(m["a"])(H,$,A,!1,null,null,null),X=O.exports;h()(O,{VBtn:p["a"],VBtnToggle:v["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"charts doble card",staticStyle:{"--p":"clamp(1.5em,2vw,2em)"},attrs:{id:"linechart"}},[a("div",{staticClass:"toolbar wrap not_margin"},[a("div",{staticClass:"divcol"},[a("h3",{staticClass:"h9_em"},[t._v("Discord")]),a("div",{staticClass:"space gap2"},[a("aside",{staticClass:"divcol"},[t._m(0),a("div",{staticClass:"values acenter gap1"},[a("h6",{staticClass:"p bold"},[t._v(t._s(t.dataDiscord.discord.value))]),a("span",{staticClass:"percent",style:"--c:"+(t.dataDiscord.discord.percent.includes("+")?"var(--success)":"var(--error)")},[t._v(" "+t._s(t.dataDiscord.discord.percent)+"% ")])])]),a("aside",{staticClass:"divcol"},[t._m(1),a("div",{staticClass:"values acenter gap1"},[a("h6",{staticClass:"p bold"},[t._v(t._s(t.dataDiscord.online.value))]),a("span",{staticClass:"percent",style:"--c:"+(t.dataDiscord.online.percent.includes("+")?"var(--success)":"var(--error)")},[t._v(" "+t._s(t.dataDiscord.online.percent)+"% ")])])])])]),a("v-btn-toggle",{attrs:{mandatory:"",color:"#60D2CA"}},[t._l(t.dataControlsChart,(function(e,s){return a("v-btn",{key:s,attrs:{color:"transparent"},on:{click:function(a){return t.updateData(e.key)}}},[a("span",[t._v(t._s(e.name))])])})),a("v-btn",{attrs:{color:"transparent"}},[a("v-icon",{attrs:{color:"#FFFFFF"}},[t._v("mdi-calendar")])],1)],2)],1),a("apexchart",{ref:"chart",staticClass:"tags2",staticStyle:{"--tag":"'Discord members'","--tag2":"'Online members'","--text-color":"#ffffff"},attrs:{id:"discord",width:"100%",height:t.Height,type:"line",options:t.chartOptions,series:t.chartSeries}})],1)},N=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"legend acenter"},[s("div",{staticClass:"marker",staticStyle:{"--color":"#6A25D2"}}),s("span",[t._v("Twitter members")]),s("img",{attrs:{src:a("7620"),alt:"info"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"legend acenter"},[s("div",{staticClass:"marker",staticStyle:{"--color":"#F7931E"}}),s("span",[t._v("Online members")]),s("img",{attrs:{src:a("7620"),alt:"info"}})])}];function B(t,e,a){var s=0,r=[];while(s<e){var i=t,n=Math.floor(Math.random()*(a.max-a.min+1))+a.min;r.push([i,n]),t+=864e5,s++}return r}var U={name:"chartDiscord",i18n:a("c307"),props:{Height:String},data:function(){return{dataDiscord:{discord:{value:"2.4k",percent:"-3.45"},online:{value:750,percent:"+5.64"}},dataControlsChart:[{key:"24h",name:"24h"},{key:"7d",name:"7d"},{key:"30d",name:"30d"},{key:"90d",name:"90d"},{key:"1y",name:"1Y"},{key:"all",name:"ALL"}],selection:"24h",chartSeries:[{name:"",data:B(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"",data:B(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:20})}],chartOptions:{defaultLocale:"en",grid:{borderColor:"#90A4AE"},colors:["#6A25D2","#F7931E"],chart:{stacked:!1,toolbar:{show:!1,autoSelected:"zoom"}},stroke:{curve:"smooth",lineCap:"butt",width:4.5},dataLabels:{enabled:!1},markers:{size:0,style:"hollow",colors:["#6A25D2","#F7931E"],strokeColors:["#6A25D2","#F7931E"],hover:{size:8}},tooltip:{marker:{show:!1},x:{show:!1}},legend:{show:!1,position:"top",horizontalAlign:"start"},xaxis:{type:"datetime",categories:[1991,1992,1993,1994,1995,1996,1997,1998]}}}},methods:{updateData:function(t){switch(this.selection=t,t){case"24h":this.$refs.chart.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"90d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"1y":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"all":this.$refs.chart.zoomX(new Date("23 Jan 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}}}},J=U,j=a("132d"),G=Object(m["a"])(J,L,N,!1,null,null,null),W=G.exports;h()(G,{VBtn:p["a"],VBtnToggle:v["a"],VIcon:j["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"charts card",staticStyle:{"--p":"clamp(1.5em,2vw,2em)"},attrs:{id:"linechart"}},[a("div",{staticClass:"toolbar wrap not_margin"},[a("div",{staticClass:"divcol"},[a("h3",{staticClass:"h9_em"},[t._v("Twitter")]),t._m(0),a("div",{staticClass:"values acenter gap1"},[a("h6",{staticClass:"p bold"},[t._v(t._s(t.dataTwitter.value))]),a("span",{staticClass:"percent",style:"--c:"+(t.dataTwitter.percent.includes("+")?"var(--success)":"var(--error)")},[t._v(" "+t._s(t.dataTwitter.percent)+"% ")])])]),a("v-btn-toggle",{attrs:{mandatory:"",color:"#60D2CA"}},[t._l(t.dataControlsChart,(function(e,s){return a("v-btn",{key:s,attrs:{color:"transparent"},on:{click:function(a){return t.updateData(e.key)}}},[a("span",[t._v(t._s(e.name))])])})),a("v-btn",{attrs:{color:"transparent"}},[a("v-icon",{attrs:{color:"#FFFFFF"}},[t._v("mdi-calendar")])],1)],2)],1),a("apexchart",{ref:"chart",staticClass:"tags",staticStyle:{"--tag":"'Twitter members'","--text-color":"#ffffff"},attrs:{id:"twitter",width:"100%",height:t.Height,type:"line",options:t.chartOptions,series:t.chartSeries}})],1)},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"legend acenter"},[s("div",{staticClass:"marker",staticStyle:{"--color":"#6FFFE9"}}),s("span",[t._v("Twitter members")]),s("img",{attrs:{src:a("7620"),alt:"info"}})])}];function P(t,e,a){var s=0,r=[];while(s<e){var i=t,n=Math.floor(Math.random()*(a.max-a.min+1))+a.min;r.push([i,n]),t+=864e5,s++}return r}var Y={name:"chartTwitter",i18n:a("c307"),props:{Height:String},data:function(){return{dataTwitter:{value:281,percent:"+4.22"},dataControlsChart:[{key:"24h",name:"24h"},{key:"7d",name:"7d"},{key:"30d",name:"30d"},{key:"90d",name:"90d"},{key:"1y",name:"1Y"},{key:"all",name:"ALL"}],selection:"24h",chartSeries:[{name:"users",data:P(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chartOptions:{defaultLocale:"en",grid:{borderColor:"#90A4AE"},colors:["#6FFFE9"],chart:{stacked:!1,toolbar:{show:!1,autoSelected:"zoom"}},stroke:{curve:"smooth",lineCap:"butt",width:4.5},dataLabels:{enabled:!1},markers:{size:0,style:"hollow",colors:["#6FFFE9"],strokeColors:"#6FFFE9",hover:{size:8}},tooltip:{marker:{show:!1},x:{show:!1}},legend:{show:!1,position:"top",horizontalAlign:"start"},xaxis:{type:"datetime",categories:[1991,1992,1993,1994,1995,1996,1997,1998]}}}},methods:{updateData:function(t){switch(this.selection=t,t){case"24h":this.$refs.chart.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"90d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"1y":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"all":this.$refs.chart.zoomX(new Date("23 Jan 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}}}},q=Y,K=Object(m["a"])(q,R,I,!1,null,null,null),Q=K.exports;h()(K,{VBtn:p["a"],VBtnToggle:v["a"],VIcon:j["a"]});var Z={name:"marketplaceStats",i18n:a("c307"),components:{ChartMarketCap:g,ChartVolume:y,ChartUserVisits:V,ChartTotalSale:X,ChartDiscord:W,ChartTwitter:Q},data:function(){return{chartHeight:"422.76px",dataControls:[{key:"all",name:"All time volume",active:!0},{key:"total",name:"Total estimated users",active:!1},{key:"volume",name:"Volume (24H)",active:!1}],search:"",marketplace:[{img:a("f0f3"),name:"Paras"},{img:a("ebc4"),name:"Whinto Swap"},{img:a("ebc4"),name:"Whinto Swap"},{img:a("ebc4"),name:"Whinto Swap"},{img:a("ebc4"),name:"Paras"},{img:a("ebc4"),name:"Whinto Swap"},{img:a("ebc4"),name:"Whinto Swap"},{img:a("ebc4"),name:"Whinto Swap"}],stats:!1,dataStats:{img:a("f0f3"),name:"Paras",dataSocialRed:[{social:"clip",link:"#"},{social:"twitter",link:"#"},{social:"discord",link:"#"},{social:"telegram",link:"#"}],info:{supply:"45,234,676",subscribers:"2,967,567",volume:"10,967,234.43",users:"890,967",dataDown:[{key:"market",price:"71,629",percent:"-0.12",number:3},{key:"traders",price:"361",percent:"+12.78",number:23},{key:"volume",price:"318",percent:"+73.26",number:2},{key:"price",price:"175",percent:"-1.78",number:3970}]}},dataControlStats:[{key:"overview",name:"Overview",active:!0},{key:"social",name:"Social",active:!1}],headersTableSales:[{value:"number",align:"center",sortable:!1},{value:"nft",text:"NFT/Collection NFT",align:"center",sortable:!1},{value:"sales",text:"Sales",align:"center",sortable:!1}],dataTableSales:[{img:a("ebc4"),name:"MonkeONear",id:"#232",desc:"Lorem ipsum dolor sit",sales:"2,000,459"},{img:a("ebc4"),name:"MonkeONear",id:"#232",desc:"Lorem ipsum dolor sit",sales:"2,000,459"}]}},mounted:function(){var t=this;this.Responsive(),window.onresize=function(){return t.Responsive()}},methods:{Responsive:function(){window.innerWidth>=880?this.chartHeight="422.76px":this.chartHeight="222.76px"},ShowStats:function(t){this.stats=!0}}},tt=Z,et=(a("ec38"),a("b0af")),at=a("cc20"),st=a("8fea"),rt=a("8dd9"),it=a("71a3"),nt=a("fe57"),ct=a("8654"),ot=Object(m["a"])(tt,s,r,!1,null,null,null);e["default"]=ot.exports;h()(ot,{VBtn:p["a"],VBtnToggle:v["a"],VCard:et["a"],VChip:at["a"],VDataTable:st["a"],VIcon:j["a"],VSheet:rt["a"],VTab:it["a"],VTabs:nt["a"],VTextField:ct["a"]})},ec38:function(t,e,a){"use strict";a("5096")}}]);
//# sourceMappingURL=chunk-e1b99b8c.fa3436a5.js.map