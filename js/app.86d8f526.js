(function(e){function t(t){for(var a,r,o=t[0],b=t[1],j=t[2],l=0,f=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(a in b)Object.prototype.hasOwnProperty.call(b,a)&&(e[a]=b[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,j||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],a=!0,o=1;o<s.length;o++){var b=s[o];0!==n[b]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},c=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/covid-tracker-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],b=o.push.bind(o);o.push=t,o=o.slice();for(var j=0;j<o.length;j++)t(o[j]);var d=b;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=c(e);return s(t)}function c(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=c,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("7a23"),n={class:"container"};function c(e,t,s,c,r,o){var b=Object(a["v"])("Header"),j=Object(a["v"])("router-view"),d=Object(a["v"])("Footer");return Object(a["q"])(),Object(a["e"])(a["a"],null,[Object(a["h"])(b),Object(a["f"])("div",n,[Object(a["h"])(j)]),Object(a["h"])(d)],64)}var r={class:"text-center bg-blue-900 text-white p-4 mb-10"},o=Object(a["f"])("div",{class:"text-3xl md:text-5xl font-bold mb-3"},[Object(a["f"])("i",{class:"fas fa-virus"}),Object(a["g"])(" covid-19 Tracker ")],-1),b=[o];function j(e,t,s,n,c,o){return Object(a["q"])(),Object(a["e"])("header",r,b)}var d={name:"Header"},l=s("6b0d"),f=s.n(l);const u=f()(d,[["render",j]]);var i=u,m={class:"text-center bg-blue-900 text-white p-2 mt-10"},p=Object(a["f"])("div",{class:"text-3xl md:text-2xl font-medium"},"API By covid19api.com",-1),h=[p];function v(e,t,s,n,c,r){return Object(a["q"])(),Object(a["e"])("footer",m,h)}var O={name:"Footer"};const g=f()(O,[["render",v]]);var x=g,y={components:{Header:i,Footer:x}};const k=f()(y,[["render",c]]);var w=k,C=s("6c02"),D={key:0,class:"flex flex-col h-screen"},z={key:1,class:"flex flex-col align-center justify-center text-center"},q=Object(a["f"])("div",{class:"text-gray-500 text-3xl mt-10 mb-6"},null,-1),T=["src"];function S(e,t,s,n,c,r){var o=Object(a["v"])("DataTitle"),b=Object(a["v"])("DataBoxes"),j=Object(a["v"])("CountrySelect");return c.loading?(Object(a["q"])(),Object(a["e"])("main",z,[q,Object(a["f"])("img",{src:c.loadingImage,class:"w-24 m-auto",alt:"loadingImage"},null,8,T)])):(Object(a["q"])(),Object(a["e"])("main",D,[Object(a["h"])(o,{text:c.titre,dataDate:c.dataDate},null,8,["text","dataDate"]),Object(a["h"])(b,{stats:c.stats},null,8,["stats"]),Object(a["h"])(j,{onGetCountry:r.getCountryData,countries:c.countries,stats:c.stats},null,8,["onGetCountry","countries","stats"]),Object(a["f"])("div",null,[c.stats.Country?(Object(a["q"])(),Object(a["e"])("button",{key:0,onClick:t[0]||(t[0]=function(){return r.ClearCountryData&&r.ClearCountryData.apply(r,arguments)}),class:"bg-green-700 mx-12 text-white rounded p-3 mt-10 focus:outine-none hover:bg-green-600"}," Clear Country ")):Object(a["d"])("",!0)])]))}var M=s("1da1"),P=(s("96cf"),s("d3b7"),{class:"text-center"}),_={class:"text-3xl font-bold"},I={class:"text-2xl mt-4 mb-10"};function B(e,t,s,n,c,r){return Object(a["q"])(),Object(a["e"])("div",P,[Object(a["f"])("h2",_,Object(a["x"])(s.text),1),Object(a["f"])("div",I,Object(a["x"])(r.timestamp),1)])}var G=s("c1df"),N=s.n(G),R={name:"DataTitle",props:["text","dataDate"],computed:{timestamp:function(){return N()(this.dataDate).format("MMMM Do YYYY, h:mm:ss a")}}};const H=f()(R,[["render",B]]);var W=H,F={class:"grid md:grid-cols-2 gap-5 mx-12"},Y={class:"shadow-md bg-blue-100 p-10 text-center rounded"},U=Object(a["f"])("h3",{class:"text-3xl text-blue-900 font-bold mb-4"},"Cases",-1),E={class:"text-2xl mb-4"},J=Object(a["f"])("span",{class:"font-bold"},"New:",-1),A={class:"text-2xl mb-4"},L=Object(a["f"])("span",{class:"font-bold"},"Total:",-1),V={class:"shadow-md bg-blue-200 p-10 text-center rounded"},$=Object(a["f"])("h3",{class:"text-3xl text-blue-900 font-bold mb-4"},"Deaths",-1),K={class:"text-2xl mb-4"},Q=Object(a["f"])("span",{class:"font-bold"},"New:",-1),X={class:"text-2xl mb-4"},Z=Object(a["f"])("span",{class:"font-bold"},"Total:",-1);function ee(e,t,s,n,c,r){return Object(a["q"])(),Object(a["e"])("div",F,[Object(a["f"])("div",Y,[U,Object(a["f"])("div",E,[J,Object(a["g"])(" "+Object(a["x"])(r.numberWithCommas(s.stats.NewConfirmed)),1)]),Object(a["f"])("div",A,[L,Object(a["g"])(" "+Object(a["x"])(r.numberWithCommas(s.stats.TotalConfirmed)),1)])]),Object(a["f"])("div",V,[$,Object(a["f"])("div",K,[Q,Object(a["g"])(" "+Object(a["x"])(r.numberWithCommas(s.stats.NewDeaths)),1)]),Object(a["f"])("div",X,[Z,Object(a["g"])(" "+Object(a["x"])(r.numberWithCommas(s.stats.TotalDeaths)),1)])])])}s("ac1f"),s("5319"),s("25f0");var te={name:"DataBoxes",props:["stats"],methods:{numberWithCommas:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}};const se=f()(te,[["render",ee]]);var ae=se,ne={class:"mx-12"},ce=Object(a["f"])("option",{value:"0"},"Select Country",-1),re=["value"];function oe(e,t,s,n,c,r){return Object(a["q"])(),Object(a["e"])("div",ne,[Object(a["B"])(Object(a["f"])("select",{onChange:t[0]||(t[0]=function(){return r.onChange&&r.onChange.apply(r,arguments)}),"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.selected=e}),class:"form-select mt-10 block border p-3 rounded w-full px-auto"},[ce,(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["u"])(s.countries,(function(e){return Object(a["q"])(),Object(a["e"])("option",{value:e.ID,key:e.ID},Object(a["x"])(e.Country),9,re)})),128))],544),[[a["z"],c.selected]])])}s("7db0");var be={name:"CountrySelect",props:["countries","stats"],data:function(){return{selected:0}},methods:{onChange:function(){var e=this,t=this.countries.find((function(t){return t.ID===e.selected}));console.log(t),this.$emit("get-country",t)}}};const je=f()(be,[["render",oe]]);var de=je,le="https://api.covid19api.com/summary",fe={name:"Home",components:{DataTitle:W,DataBoxes:ae,CountrySelect:de},data:function(){return{loading:!0,titre:"Global",dataDate:"",stats:{},countries:[],loadingImage:s("e8dd")}},methods:{fetchCovidData:function(){return Object(M["a"])(regeneratorRuntime.mark((function e(){var t,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(le);case 2:return t=e.sent,e.next=5,t.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))()},getCountryData:function(e){this.stats=e,this.titre=e.Country},ClearCountryData:function(){var e=this;return Object(M["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.fetchCovidData();case 3:s=t.sent,e.titre="Global",e.state=s.Global,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(M["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchCovidData();case 2:s=t.sent,e.dataDate=s.dataDate,e.stats=s.Global,e.countries=s.Countries,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}};const ue=f()(fe,[["render",S]]);var ie=ue,me=[{path:"/",name:"Home",component:ie}],pe=Object(C["a"])({history:Object(C["b"])("/covid-tracker-app/"),routes:me}),he=pe;s("ba8c");Object(a["c"])(w).use(he).mount("#app")},ba8c:function(e,t,s){},e8dd:function(e,t,s){e.exports=s.p+"img/hourglass.549947b6.gif"}});
//# sourceMappingURL=app.86d8f526.js.map