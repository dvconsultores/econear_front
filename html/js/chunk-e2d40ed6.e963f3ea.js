(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2d40ed6","chunk-6b25db45","chunk-6b25db45"],{"1b0e":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"charts card",staticStyle:{"--p":"clamp(1em,2vw,2em)"},attrs:{id:"barchart"}},[a("div",{staticClass:"toolbar wrap not_margin"},[a("div",{staticClass:"divcol"},[a("h3",{staticClass:"h9_em"},[t._v("User Visits")]),t._m(0),a("div",{staticClass:"values acenter gap1"},[a("h6",{staticClass:"p bold"},[t._v(t._s(t.dataUserVisits.value))]),a("span",{staticClass:"percent",style:"--c:"+(t.dataUserVisits.percent.includes("+")?"var(--success)":"var(--error)")},[t._v(" "+t._s(t.dataUserVisits.percent)+"% ")])])]),a("v-btn-toggle",{attrs:{mandatory:"",color:"#60D2CA"}},t._l(t.dataControlsChart,(function(e,s){return a("v-btn",{key:s,attrs:{color:"transparent"},on:{click:function(a){return t.updateData(e.key)}}},[a("span",[t._v(t._s(e.name))])])})),1)],1),a("apexchart",{ref:"chart",staticClass:"tags",staticStyle:{"--tag":"'User Visits'","--color":"hsl(264, 70%, 48%, .8)"},attrs:{id:"visits",width:"100%",height:t.Height,type:"line",options:t.chartOptions,series:t.chartSeries}})],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"legend acenter"},[s("div",{staticClass:"marker",staticStyle:{"--color":"#6A25D2"}}),s("span",[t._v("# User Visits")]),s("img",{attrs:{src:a("7620"),alt:"info"}})])}];function n(t,e,a){var s=0,r=[];while(s<e){var n=t,i=Math.floor(Math.random()*(a.max-a.min+1))+a.min;r.push([n,i]),t+=864e5,s++}return r}var i={name:"chartUserVisits",i18n:a("c307"),props:{Height:String},data:function(){return{dataUserVisits:{value:281,percent:"+4.22"},dataControlsChart:[{key:"24h",name:"24h"},{key:"7d",name:"7d"},{key:"30d",name:"30d"}],selection:"24h",chartSeries:[{name:"users",data:n(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chartOptions:{defaultLocale:"en",grid:{borderColor:"#90A4AE"},colors:["#6A25D2"],chart:{stacked:!1,toolbar:{show:!1,autoSelected:"zoom"}},stroke:{curve:"smooth",lineCap:"butt",width:4.5},dataLabels:{enabled:!1},markers:{size:0,style:"hollow",colors:["#6A25D2"],strokeColors:"#6A25D2",hover:{size:8}},tooltip:{marker:{show:!1},x:{show:!1}},legend:{show:!1,position:"top",horizontalAlign:"start"},xaxis:{type:"datetime",categories:[1991,1992,1993,1994,1995,1996,1997,1998]}}}},methods:{updateData:function(t){switch(this.selection=t,t){case"24h":this.$refs.chart.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}}}},c=i,o=(a("991c"),a("2877")),l=a("6544"),m=a.n(l),d=a("8336"),h=a("a609"),u=Object(o["a"])(c,s,r,!1,null,null,null);e["a"]=u.exports;m()(u,{VBtn:d["a"],VBtnToggle:h["a"]})},3647:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"charts card",staticStyle:{"--p":"clamp(1.5em,2vw,2em)"},attrs:{id:"linechart"}},[a("div",{staticClass:"toolbar wrap not_margin"},[a("div",{staticClass:"divcol"},[a("h3",{staticClass:"h9_em"},[t._v("Twitter")]),t._m(0),a("div",{staticClass:"values acenter gap1"},[a("h6",{staticClass:"p bold"},[t._v(t._s(t.dataTwitter.value))]),a("span",{staticClass:"percent",style:"--c:"+(t.dataTwitter.percent.includes("+")?"var(--success)":"var(--error)")},[t._v(" "+t._s(t.dataTwitter.percent)+"% ")])])]),a("v-btn-toggle",{attrs:{mandatory:"",color:"#60D2CA"}},[t._l(t.dataControlsChart,(function(e,s){return a("v-btn",{key:s,attrs:{color:"transparent"},on:{click:function(a){return t.updateData(e.key)}}},[a("span",[t._v(t._s(e.name))])])})),a("v-btn",{attrs:{color:"transparent"}},[a("v-icon",{attrs:{color:"#FFFFFF"}},[t._v("mdi-calendar")])],1)],2)],1),a("apexchart",{ref:"chart",staticClass:"tags",staticStyle:{"--tag":"'Twitter members'","--text-color":"#ffffff"},attrs:{id:"twitter",width:"100%",height:t.Height,type:"line",options:t.chartOptions,series:t.chartSeries}})],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"legend acenter"},[s("div",{staticClass:"marker",staticStyle:{"--color":"#6FFFE9"}}),s("span",[t._v("Twitter members")]),s("img",{attrs:{src:a("7620"),alt:"info"}})])}];function n(t,e,a){var s=0,r=[];while(s<e){var n=t,i=Math.floor(Math.random()*(a.max-a.min+1))+a.min;r.push([n,i]),t+=864e5,s++}return r}var i={name:"chartTwitter",i18n:a("c307"),props:{Height:String},data:function(){return{dataTwitter:{value:281,percent:"+4.22"},dataControlsChart:[{key:"24h",name:"24h"},{key:"7d",name:"7d"},{key:"30d",name:"30d"},{key:"90d",name:"90d"},{key:"1y",name:"1Y"},{key:"all",name:"ALL"}],selection:"24h",chartSeries:[{name:"users",data:n(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chartOptions:{defaultLocale:"en",grid:{borderColor:"#90A4AE"},colors:["#6FFFE9"],chart:{stacked:!1,toolbar:{show:!1,autoSelected:"zoom"}},stroke:{curve:"smooth",lineCap:"butt",width:4.5},dataLabels:{enabled:!1},markers:{size:0,style:"hollow",colors:["#6FFFE9"],strokeColors:"#6FFFE9",hover:{size:8}},tooltip:{marker:{show:!1},x:{show:!1}},legend:{show:!1,position:"top",horizontalAlign:"start"},xaxis:{type:"datetime",categories:[1991,1992,1993,1994,1995,1996,1997,1998]}}}},methods:{updateData:function(t){switch(this.selection=t,t){case"24h":this.$refs.chart.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"90d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"1y":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"all":this.$refs.chart.zoomX(new Date("23 Jan 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}}}},c=i,o=(a("991c"),a("2877")),l=a("6544"),m=a.n(l),d=a("8336"),h=a("a609"),u=a("132d"),p=Object(o["a"])(c,s,r,!1,null,null,null);e["a"]=p.exports;m()(p,{VBtn:d["a"],VBtnToggle:h["a"],VIcon:u["a"]})},3692:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"charts card",staticStyle:{"--p":"clamp(1em,2vw,2em)"},attrs:{id:"barchart"}},[a("div",{staticClass:"toolbar wrap not_margin"},[a("div",{staticClass:"divcol"},[a("h3",{staticClass:"h9_em"},[t._v("MarketCap")]),t._m(0),a("div",{staticClass:"values acenter gap1"},[a("h6",{staticClass:"p bold"},[t._v(t._s(t.dataMarketcap.value)+" N")]),a("span",{staticClass:"percent",style:"--c:"+(t.dataMarketcap.percent.includes("+")?"var(--success)":"var(--error)")},[t._v(" "+t._s(t.dataMarketcap.percent)+"% ")])])]),a("v-btn-toggle",{attrs:{mandatory:"",color:"#60D2CA"}},t._l(t.dataControlsChart,(function(e,s){return a("v-btn",{key:s,attrs:{color:"transparent"},on:{click:function(a){return t.updateData(e.key)}}},[a("span",[t._v(t._s(e.name))])])})),1)],1),a("apexchart",{ref:"chart",staticClass:"tags",staticStyle:{"--tag":"'MarketCap'","--text-color":"#ffffff"},attrs:{id:"marketcap",width:"100%",height:t.Height,type:"bar",options:t.chartOptions,series:t.chartSeries}})],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"legend acenter"},[s("div",{staticClass:"marker",staticStyle:{"--color":"#6FFFE9"}}),s("span",[t._v("Market Cap")]),s("img",{attrs:{src:a("7620"),alt:"info"}})])}];function n(t,e,a){var s=0,r=[];while(s<e){var n=t,i=Math.floor(Math.random()*(a.max-a.min+1))+a.min;r.push([n,i]),t+=864e5,s++}return r}var i={name:"chartMarketCap",i18n:a("c307"),props:{Height:String},data:function(){return{dataMarketcap:{value:"71,628",percent:"+20.22"},dataControlsChart:[{key:"24h",name:"24h"},{key:"7d",name:"7d"},{key:"30d",name:"30d"}],selection:"24h",chartSeries:[{name:"",data:n(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chartOptions:{defaultLocale:"en",colors:["#60D2CA"],chart:{stacked:!1,toolbar:{show:!1,autoSelected:"zoom"}},stroke:{curve:"smooth",lineCap:"butt",width:1},dataLabels:{enabled:!1},markers:{size:0,style:"hollow",colors:["#60D2CA"],hover:{size:8}},tooltip:{marker:{show:!1},x:{show:!1}},legend:{show:!1,position:"top",horizontalAlign:"start"},xaxis:{type:"datetime",categories:[1991,1992,1993,1994,1995,1996,1997,1998]}}}},methods:{updateData:function(t){switch(this.selection=t,t){case"24h":this.$refs.chart.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}}}},c=i,o=(a("991c"),a("2877")),l=a("6544"),m=a.n(l),d=a("8336"),h=a("a609"),u=Object(o["a"])(c,s,r,!1,null,null,null);e["a"]=u.exports;m()(u,{VBtn:d["a"],VBtnToggle:h["a"]})},5096:function(t,e,a){},"8fb5":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"charts card",staticStyle:{"--p":"clamp(1em,2vw,2em)"},attrs:{id:"barchart"}},[a("div",{staticClass:"toolbar wrap not_margin"},[a("div",{staticClass:"divcol"},[a("h3",{staticClass:"h9_em"},[t._v("Volume")]),t._m(0),a("div",{staticClass:"values acenter gap1"},[a("h6",{staticClass:"p bold"},[t._v(t._s(t.dataVolume.value)+" N")]),a("span",{staticClass:"percent",style:"--c:"+(t.dataVolume.percent.includes("+")?"var(--success)":"var(--error)")},[t._v(t._s(t.dataVolume.percent)+"%")])])]),a("v-btn-toggle",{attrs:{mandatory:"",color:"#60D2CA"}},t._l(t.dataControlsChart,(function(e,s){return a("v-btn",{key:s,attrs:{color:"transparent"},on:{click:function(a){return t.updateData(e.key)}}},[a("span",[t._v(t._s(e.name))])])})),1)],1),a("apexchart",{ref:"chart",staticClass:"tags",staticStyle:{"--tag":"'Volume (N)'","--color":"hsl(32, 93%, 54%, .8)"},attrs:{id:"volume",width:"100%",height:t.Height,type:"bar",options:t.chartOptions,series:t.chartSeries}})],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"legend acenter"},[s("div",{staticClass:"marker",staticStyle:{"--color":"#F7931E"}}),s("span",[t._v("Volume")]),s("img",{attrs:{src:a("7620"),alt:"info"}})])}];function n(t,e,a){var s=0,r=[];while(s<e){var n=t,i=Math.floor(Math.random()*(a.max-a.min+1))+a.min;r.push([n,i]),t+=864e5,s++}return r}var i={name:"chartVolume",i18n:a("c307"),props:{Height:String},data:function(){return{dataVolume:{value:"1,901",percent:"-20.22"},dataControlsChart:[{key:"24h",name:"24h"},{key:"7d",name:"7d"},{key:"30d",name:"30d"}],selection:"24h",chartSeries:[{name:"",data:n(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chartOptions:{defaultLocale:"en",colors:["#F7931E"],chart:{stacked:!1,toolbar:{show:!1,autoSelected:"zoom"}},stroke:{curve:"smooth",lineCap:"butt",width:1},dataLabels:{enabled:!1},tooltip:{marker:{show:!1},x:{show:!1}},legend:{show:!1,position:"top",horizontalAlign:"start"},xaxis:{type:"datetime",categories:[1991,1992,1993,1994,1995,1996,1997,1998]}}}},methods:{updateData:function(t){switch(this.selection=t,t){case"24h":this.$refs.chart.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}}}},c=i,o=(a("991c"),a("2877")),l=a("6544"),m=a.n(l),d=a("8336"),h=a("a609"),u=Object(o["a"])(c,s,r,!1,null,null,null);e["a"]=u.exports;m()(u,{VBtn:d["a"],VBtnToggle:h["a"]})},"991c":function(t,e,a){"use strict";a("99bc")},"99bc":function(t,e,a){},ab4e:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"charts card",staticStyle:{"--p":"clamp(1em,2vw,2em)"},attrs:{id:"barchart"}},[a("div",{staticClass:"toolbar wrap not_margin"},[a("div",{staticClass:"divcol"},[a("h3",{staticClass:"h9_em"},[t._v("Total Sales")]),t._m(0),a("div",{staticClass:"values acenter gap1"},[a("h6",{staticClass:"p bold"},[t._v(t._s(t.dataTotalSale.value)+" N")]),a("span",{staticClass:"percent",style:"--c:"+(t.dataTotalSale.percent.includes("+")?"var(--success)":"var(--error)")},[t._v(" "+t._s(t.dataTotalSale.percent)+"% ")])])]),a("v-btn-toggle",{attrs:{mandatory:"",color:"#60D2CA"}},t._l(t.dataControlsChart,(function(e,s){return a("v-btn",{key:s,attrs:{color:"transparent"},on:{click:function(a){return t.updateData(e.key)}}},[a("span",[t._v(t._s(e.name))])])})),1)],1),a("apexchart",{ref:"chart",staticClass:"tags",staticStyle:{"--tag":"'Sales'","--color":"hsl(264, 70%, 48%, .8)"},attrs:{id:"totalSales",width:"100%",height:t.Height,type:"bar",options:t.chartOptions,series:t.chartSeries}})],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"legend acenter"},[s("div",{staticClass:"marker",staticStyle:{"--color":"#6A25D2"}}),s("span",[t._v("Volume")]),s("img",{attrs:{src:a("7620"),alt:"info"}})])}];function n(t,e,a){var s=0,r=[];while(s<e){var n=t,i=Math.floor(Math.random()*(a.max-a.min+1))+a.min;r.push([n,i]),t+=864e5,s++}return r}var i={name:"chartTotalSale",i18n:a("c307"),props:{Height:String},data:function(){return{dataTotalSale:{value:"700,051",percent:"+9.22"},dataControlsChart:[{key:"24h",name:"24h"},{key:"7d",name:"7d"},{key:"30d",name:"30d"}],selection:"24h",chartSeries:[{name:"",data:n(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chartOptions:{defaultLocale:"en",colors:["#6A25D2"],chart:{stacked:!1,toolbar:{show:!1,autoSelected:"zoom"}},stroke:{curve:"smooth",lineCap:"butt",width:1},dataLabels:{enabled:!1},tooltip:{marker:{show:!1},x:{show:!1}},legend:{show:!1,position:"top",horizontalAlign:"start"},xaxis:{type:"datetime",categories:[1991,1992,1993,1994,1995,1996,1997,1998]}}}},methods:{updateData:function(t){switch(this.selection=t,t){case"24h":this.$refs.chart.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}}}},c=i,o=(a("991c"),a("2877")),l=a("6544"),m=a.n(l),d=a("8336"),h=a("a609"),u=Object(o["a"])(c,s,r,!1,null,null,null);e["a"]=u.exports;m()(u,{VBtn:d["a"],VBtnToggle:h["a"]})},be56:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"charts doble card",staticStyle:{"--p":"clamp(1.5em,2vw,2em)"},attrs:{id:"linechart"}},[a("div",{staticClass:"toolbar wrap not_margin"},[a("div",{staticClass:"divcol"},[a("h3",{staticClass:"h9_em"},[t._v("Discord")]),a("div",{staticClass:"space gap2"},[a("aside",{staticClass:"divcol"},[t._m(0),a("div",{staticClass:"values acenter gap1"},[a("h6",{staticClass:"p bold"},[t._v(t._s(t.dataDiscord.discord.value))]),a("span",{staticClass:"percent",style:"--c:"+(t.dataDiscord.discord.percent.includes("+")?"var(--success)":"var(--error)")},[t._v(" "+t._s(t.dataDiscord.discord.percent)+"% ")])])]),a("aside",{staticClass:"divcol"},[t._m(1),a("div",{staticClass:"values acenter gap1"},[a("h6",{staticClass:"p bold"},[t._v(t._s(t.dataDiscord.online.value))]),a("span",{staticClass:"percent",style:"--c:"+(t.dataDiscord.online.percent.includes("+")?"var(--success)":"var(--error)")},[t._v(" "+t._s(t.dataDiscord.online.percent)+"% ")])])])])]),a("v-btn-toggle",{attrs:{mandatory:"",color:"#60D2CA"}},[t._l(t.dataControlsChart,(function(e,s){return a("v-btn",{key:s,attrs:{color:"transparent"},on:{click:function(a){return t.updateData(e.key)}}},[a("span",[t._v(t._s(e.name))])])})),a("v-btn",{attrs:{color:"transparent"}},[a("v-icon",{attrs:{color:"#FFFFFF"}},[t._v("mdi-calendar")])],1)],2)],1),a("apexchart",{ref:"chart",staticClass:"tags2",staticStyle:{"--tag":"'Discord members'","--tag2":"'Online members'","--text-color":"#ffffff"},attrs:{id:"discord",width:"100%",height:t.Height,type:"line",options:t.chartOptions,series:t.chartSeries}})],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"legend acenter"},[s("div",{staticClass:"marker",staticStyle:{"--color":"#6A25D2"}}),s("span",[t._v("Twitter members")]),s("img",{attrs:{src:a("7620"),alt:"info"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"legend acenter"},[s("div",{staticClass:"marker",staticStyle:{"--color":"#F7931E"}}),s("span",[t._v("Online members")]),s("img",{attrs:{src:a("7620"),alt:"info"}})])}];function n(t,e,a){var s=0,r=[];while(s<e){var n=t,i=Math.floor(Math.random()*(a.max-a.min+1))+a.min;r.push([n,i]),t+=864e5,s++}return r}var i={name:"chartDiscord",i18n:a("c307"),props:{Height:String},data:function(){return{dataDiscord:{discord:{value:"2.4k",percent:"-3.45"},online:{value:750,percent:"+5.64"}},dataControlsChart:[{key:"24h",name:"24h"},{key:"7d",name:"7d"},{key:"30d",name:"30d"},{key:"90d",name:"90d"},{key:"1y",name:"1Y"},{key:"all",name:"ALL"}],selection:"24h",chartSeries:[{name:"",data:n(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"",data:n(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:20})}],chartOptions:{defaultLocale:"en",grid:{borderColor:"#90A4AE"},colors:["#6A25D2","#F7931E"],chart:{stacked:!1,toolbar:{show:!1,autoSelected:"zoom"}},stroke:{curve:"smooth",lineCap:"butt",width:4.5},dataLabels:{enabled:!1},markers:{size:0,style:"hollow",colors:["#6A25D2","#F7931E"],strokeColors:["#6A25D2","#F7931E"],hover:{size:8}},tooltip:{marker:{show:!1},x:{show:!1}},legend:{show:!1,position:"top",horizontalAlign:"start"},xaxis:{type:"datetime",categories:[1991,1992,1993,1994,1995,1996,1997,1998]}}}},methods:{updateData:function(t){switch(this.selection=t,t){case"24h":this.$refs.chart.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"7d":this.$refs.chart.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"30d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"90d":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"1y":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"all":this.$refs.chart.zoomX(new Date("23 Jan 2012").getTime(),new Date("27 Feb 2013").getTime());break;default:}}}},c=i,o=(a("991c"),a("2877")),l=a("6544"),m=a.n(l),d=a("8336"),h=a("a609"),u=a("132d"),p=Object(o["a"])(c,s,r,!1,null,null,null);e["a"]=p.exports;m()(p,{VBtn:d["a"],VBtnToggle:h["a"],VIcon:u["a"]})},c307:function(t,e){t.exports={messages:{ES:{savePhrase:"Este registro genera una frase de 12 palabras que debe guardar en un lugar seguro"},US:{savePhrase:"This record generates a 12-word phrase that you must keep in a safe place"}}}},d76e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"divcol gap2",attrs:{id:"marketplaceStats"}},[s("h2",{staticClass:"h5_em p tcenter"},[t._v("Marketplace Stats")]),s("section",{staticClass:"divcol gap2",staticStyle:{"margin-block":"8em"}},[s("aside",{staticClass:"container-controls space gap2 wrap"},[s("v-text-field",{staticClass:"customeFilter search",staticStyle:{"--bg":"hsl(210, 48%, 13%, .46)","--c":"#FFFFFF","--p":"0 1.5em","--w":"100%","--label":"#FFFFFF","max-width":"30.061875em"},attrs:{id:"search","hide-details":"",solo:"",label:"Search for NFTs and collections","append-icon":"mdi-magnify"},on:{input:function(e){return t.search2()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),s("section",{staticClass:"card grid",staticStyle:{"--p":"2em",gap:"1em","--gtc":"repeat(auto-fit,minmax(min(100%,16.124375em),1fr))"}},t._l(t.marketplace,(function(e,a){return s("v-card",{key:a,staticClass:"card filterItems",staticStyle:{"--p":"1em",display:"flex",gap:"1em"},on:{click:function(a){return t.ShowStats(e)}}},[s("img",{staticStyle:{"--w":"4.710625em"},attrs:{src:e.img,alt:"markets"}}),s("span",{staticClass:"h9_em"},[t._v(t._s(e.name))])])})),1)]),s("section",{directives:[{name:"show",rawName:"v-show",value:t.stats,expression:"stats"}],staticClass:"divcol gap2"},[s("div",{staticClass:"space gap2"},[s("v-card",{staticClass:"card center gap1mobile alignmobile",attrs:{id:"card-stats"}},[s("div",{staticClass:"acenter gap1"},[s("img",{staticStyle:{"--w":"4.710625em"},attrs:{src:t.dataStats.img,alt:"marketplace image"}}),s("span",{staticClass:"h9_em"},[t._v(t._s(t.dataStats.name))])]),s("div",{staticClass:"container-btns"},t._l(t.dataStats.dataSocialRed,(function(t,e){return s("v-btn",{key:e,attrs:{icon:"",href:t.link,target:"_blank"}},[s("img",{attrs:{src:a("6f32")("./"+t.social+".svg"),alt:t.social+" icon"}})])})),1),s("p",{staticClass:"p vermobile tcenter",staticStyle:{"font-size":"1.7em"}},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat ligula orci, ac imperdiet tortor cursus vitae. Nunc fringilla lacus vel tempus")])])],1),s("v-card",{staticClass:"card fwrap",attrs:{id:"container-info"}},[s("div",{staticClass:"center"},[s("div",{staticClass:"divcol"},[s("label",{staticClass:"semibold"},[t._v("Total Volume")]),s("div",{staticClass:"acenter",staticStyle:{gap:"1em"}},[s("span",{staticClass:"bold"},[t._v(t._s(t.dataStats.info.volume))]),s("img",{staticStyle:{"--w":"1.673125em","margin-bottom":"4px"},attrs:{src:a("2c4a"),alt:"near icon"}})])])])]),s("section",{staticClass:"infodown fwrap"},t._l(t.dataStats.info.dataDown,(function(e,r){return s("v-card",{key:r,staticClass:"card align"},[s("v-sheet",{staticClass:"jspace",attrs:{color:"var(--clr-card)"}},[s("div",{staticClass:"divcol"},[s("div",{staticClass:"infotext bold acenter",staticStyle:{gap:".7em"}},[s("span",[t._v(t._s("market"==e.key?"Market Cap":"biggest"==e.key?"Biggest Sale":"volume"==e.key?"Volume (24H)":"price"==e.key?"Floor price":null))]),s("img",{staticStyle:{"--w":".9em"},attrs:{src:a("76ed"),alt:"info"}})]),s("span",{staticClass:"number bold acenter",staticStyle:{gap:".7em"}},["volume"==e.key||"price"==e.key||"biggest"==e.key?s("img",{staticStyle:{"--w":".8em"},attrs:{src:a("2c4a"),alt:"near"}}):t._e(),t._v(" "+t._s(e.price)+" ")])]),s("v-chip",{staticClass:"btn center",staticStyle:{"--bg":"var(--primary)","--c":"var(--secondary)","--bs":"none","font-size":"1.25em","--p":"0","--w":"min(199%, 3.5em)","--h":"2em"}},[t._v(" #"+t._s(e.number)+" ")])],1)],1)})),1)],1)])},r=[],n=a("1da1"),i=(a("a9e3"),a("d3b7"),a("159b"),a("caad"),a("2532"),a("b680"),a("96cf"),a("3692")),c=a("8fb5"),o=a("1b0e"),l=a("ab4e"),m=a("be56"),d=a("3647"),h=a("d9eb"),u=h["connect"],p=(h["transactions"],h["keyStores"]),v=h["WalletConnection"],g=h["Contract"],f=(h["utils"],new p.BrowserLocalStorageKeyStore),b={networkId:"mainnet",keyStore:f,nodeUrl:"https://rpc.mainnet.near.org",walletUrl:"https://wallet.mainnet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"},w={name:"marketplaceStats",i18n:a("c307"),components:{ChartMarketCap:i["a"],ChartVolume:c["a"],ChartUserVisits:o["a"],ChartTotalSale:l["a"],ChartDiscord:m["a"],ChartTwitter:d["a"]},data:function(){return{chartHeight:"422.76px",dataControls:[{key:"all",name:"All time volume",active:!0},{key:"total",name:"Total estimated users",active:!1},{key:"volume",name:"Volume (24H)",active:!1}],search:"",marketplace:[],image:a("ebc4"),marketsArray:[],stats:!1,dataStats:{img:"",name:"",dataSocialRed:[],info:{volume:"",dataDown:[]}},dataControlStats:[{key:"overview",name:"Overview",active:!0},{key:"social",name:"Social",active:!1}],headersTableSales:[{value:"number",align:"center",sortable:!1},{value:"nft",text:"NFT/Collection NFT",align:"center",sortable:!1},{value:"sales",text:"Sales",align:"center",sortable:!1}],dataTableSales:[{img:a("ebc4"),name:"MonkeONear",id:"#232",desc:"Lorem ipsum dolor sit",sales:"2,000,459"},{img:a("ebc4"),name:"MonkeONear",id:"#232",desc:"Lorem ipsum dolor sit",sales:"2,000,459"}]}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.pushHome();case 2:t.getDataMarketplace(),t.Responsive(),window.onresize=function(){return t.Responsive()};case 5:case"end":return e.stop()}}),e)})))()},methods:{pushHome:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u(b);case 2:if(a=e.sent,s=new v(a),s.isSignedIn()){e.next=8;break}t.$router.push("/"),e.next=12;break;case 8:return e.next=10,t.isHolderMonke();case 10:r=e.sent,0===r&&t.$router.push("/restricted");case 12:case"end":return e.stop()}}),e)})))()},isHolderMonke:function(){return Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,s,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="monkeonear.neartopia.near",t.next=3,u(b);case 3:if(a=t.sent,s=new v(a),!s.isSignedIn()){t.next=11;break}return r=new g(s.account(),e,{viewMethods:["nft_supply_for_owner"],sender:s.account()}),t.next=9,r.nft_supply_for_owner({account_id:s.getAccountId()}).then((function(t){return Number(t)})).catch((function(t){return console.log("ERR",t),0}));case 9:return n=t.sent,t.abrupt("return",n);case 11:case"end":return t.stop()}}),t)})))()},search2:function(){return Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=document.getElementById("search"),a=document.querySelectorAll(".filterItems"),e.addEventListener("keyup",(function(t){a.forEach((function(e){e.textContent.toLowerCase().includes(t.target.value.toLowerCase())?e.style.display="block":e.style.display="none","Escape"==t.key&&(t.target.value="")}))}));case 3:case"end":return t.stop()}}),t)})))()},Responsive:function(){window.innerWidth>=880?this.chartHeight="422.76px":this.chartHeight="222.76px"},ShowStats:function(t){var e=t.index;this.stats=!0,this.dataStats={img:this.marketsArray[e].market_icon||this.image,name:this.marketsArray[e].market_name,dataSocialRed:[{social:"clip",link:this.marketsArray[e].market_web}],info:{volume:parseFloat(this.marketsArray[e].volumen_market).toFixed(2),dataDown:[{key:"biggest",price:this.marketsArray[e].biggest_sale,percent:"+12.78",number:23},{key:"price",price:this.marketsArray[e].floor_sales,percent:"-1.78",number:3970}]}}},getDataMarketplace:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a="api/v1/stastmarket",t.axios.post(a).then((function(e){console.log(e.data);for(var a=0;a<e.data.length;a++){var s={index:a,img:e.data[a].market_icon||t.image,name:e.data[a].market_name,marketplace:e.data[a].marketplace};t.marketplace.push(s)}t.marketsArray=e.data})).catch((function(t){console.log("ERR",t)}));case 2:case"end":return e.stop()}}),e)})))()}}},k=w,C=(a("ec38"),a("2877")),_=a("6544"),y=a.n(_),S=a("8336"),D=a("b0af"),F=a("cc20"),T=a("8dd9"),x=a("8654"),z=Object(C["a"])(k,s,r,!1,null,null,null);e["default"]=z.exports;y()(z,{VBtn:S["a"],VCard:D["a"],VChip:F["a"],VSheet:T["a"],VTextField:x["a"]})},ec38:function(t,e,a){"use strict";a("5096")}}]);
//# sourceMappingURL=chunk-e2d40ed6.e963f3ea.js.map