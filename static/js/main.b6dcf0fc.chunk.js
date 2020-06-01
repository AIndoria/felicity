(this.webpackJsonpfelicity=this.webpackJsonpfelicity||[]).push([[0],{13:function(e,t,a){e.exports=a(21)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=(a(18),a(1)),s=(a(19),a(3)),i=a(5),u=a(7),h=a(6),p=(a(20),function e(t,a,n,r){var c=this;Object(s.a)(this,e),this.getRandomInt=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},this.randomCharacter=function(){return c.characters[Math.floor(Math.random()*c.characters.length)]},this.replaceAt=function(e,t,a){return e.substr(0,a)+t+e.substr(a+t.length)},this.init=function(e,t){if(e.props){if("string"!==typeof e.props.children)return e;e=e.props.children}for(var a=[],n=e=e.trim(),r=0;r<e.length;r++)a[r]=c.getRandomInt(c.min,c.max);c.mix(e,e,n,1,a,c.delay,t)},this.mix=function(e,t,a,n,r,l,o){for(var s=0;s<t.length;s++)0!==r[s]?(n=0,a=" "!==t[s]?c.replaceAt(a,c.randomCharacter(),s):c.replaceAt(a," ",s),r[s]--):a=c.replaceAt(a,t[s],s);e=a,0===n&&t!==a&&setTimeout((function(){return c.mix(e,t,a,n,r,l,o)}),l),o(e)},this.min=t,this.max=a,this.delay=n,this.characters=r}),m=a(12),d=a(11),y=a(10);function f(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var c=function(e,a,r){return e.then((function(){return t.apply(void 0,[a,r].concat(n))}))};return Array.from(e).reduce(c,Promise.resolve())}function E(e,t){var a=e.type,n=function(e,t){var a={};for(var n in e)-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e.props,["children"]);return n.key="Typist-element-".concat(a,"-").concat(Date.now()+Math.random()+Math.random()),r.a.createElement.apply(r.a,[a,n].concat(Object(d.a)(t)))}function g(e){var t=e.element,a=e.textLines;if(t)return function e(t,a,n){if(n>=a.length)return[null,n];var c=n,l=function(t){var n=e(t,a,c),r=Object(o.a)(n,2),l=r[0],s=r[1];return c=s,l};return r.a.isValidElement(t)?[E(t,r.a.Children.map(t.props.children,l)||[]),c]:Array.isArray(t)?[t.map(l),c]:[a[c],c+1]}(t,a,0)[0]}var N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).state={textLines:[]},n.typeAllLines=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.linesToType;return f(e,n.typeLine)},n.typeLine=function(e,t){if(!n.mounted)return Promise.resolve();var a=n.props;a.min,a.max,a.delay;n.flicker.init(e,(function(e){n.setState({textLines:n.state.textLines.concat([""])},(function(){var a=n.state.textLines.slice();a[t]=e,n.setState({textLines:a})}))}))};var c=e.min,l=e.max,o=e.delay,i=e.characters;return n.flicker=new p(c,l,o,i),n.mounted=!1,n.linesToType=[],e.children&&(n.linesToType=function(e){for(var t=e?[e]:[],a=[];t.length>0;){var n=t.pop();if(r.a.isValidElement(n))r.a.Children.forEach(n.props.children,(function(e){t.push(e)}));else if(Array.isArray(n)){var c,l=Object(y.a)(n);try{for(l.s();!(c=l.n()).done;){var o=c.value;t.push(o)}}catch(s){l.e(s)}finally{l.f()}}else a.unshift(n)}return a}(e.children)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.mounted=!0,this.props.children&&this.typeAllLines()}},{key:"render",value:function(){var e=this.props.tagName,t=Object(m.a)({},this.props);delete t.tagName,delete t.className;var a=g({element:this.props.children,textLines:this.state.textLines});return r.a.createElement(e,null,a)}}]),a}(r.a.Component);N.defaultProps={tagName:"span",min:1,max:10,delay:100,characters:"\u2588\u2593\u2592\u2591\u2588\u2593\u2592\u2591\u2588\u2593\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591"};var v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"Card__Listings",style:{color:this.props.dayNightMode}},r.a.createElement("p",null,"USD:",r.a.createElement("span",null,this.props.usdrate)," "),r.a.createElement("p",null,"GBP:",r.a.createElement("span",null,this.props.gbprate)," "),r.a.createElement("p",null,"EUR:",r.a.createElement("span",null,this.props.eurrate)," "),r.a.createElement("p",null,"JPY:",r.a.createElement("span",null,this.props.jpyrate)," "),r.a.createElement("p",null,"HKD:",r.a.createElement("span",null,this.props.hkdrate)," "),r.a.createElement("p",null,"INR:",r.a.createElement("span",null,this.props.inrrate)," ")),r.a.createElement("div",{className:"Card__Title"},r.a.createElement("div",{className:this.props.countryColor},r.a.createElement(N,null,this.props.countryname)),r.a.createElement("div",{className:"card_countryCurrency",style:{color:this.props.dayNightMode}},r.a.createElement(N,null,this.props.currencyName))))}}]),a}(n.Component),b="!\"#$%'()*+,-./0123456789:;?@`aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ{[|}]~^_";var j=function(){var e=Object(n.useState)("dark"),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(o.a)(l,2),i=s[0],u=s[1],h=Object(n.useState)([]),p=Object(o.a)(h,2),m=p[0],d=p[1],y=Object(n.useState)([]),f=Object(o.a)(y,2),E=f[0],g=f[1],j=Object(n.useState)([]),D=Object(o.a)(j,2),S=D[0],P=D[1],O=Object(n.useState)([]),R=Object(o.a)(O,2),U=R[0],I=R[1],C=Object(n.useState)([]),x=Object(o.a)(C,2),H=x[0],k=x[1];function A(){fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,EUR,GBP,JPY,INR,HKD").then((function(e){return e.json()})).then((function(e){u(e.rates),console.log(e.rates)})).catch(console.log)}function _(){fetch("https://api.exchangeratesapi.io/latest?base=JPY&symbols=USD,EUR,GBP,JPY,INR,HKD").then((function(e){return e.json()})).then((function(e){P(e.rates),console.log(e.rates)})).catch(console.log)}function L(){fetch("https://api.exchangeratesapi.io/latest?base=GBP&symbols=USD,EUR,GBP,JPY,INR,HKD").then((function(e){return e.json()})).then((function(e){g(e.rates),console.log(e.rates)})).catch(console.log)}function J(){fetch("https://api.exchangeratesapi.io/latest?base=HKD&symbols=USD,EUR,GBP,JPY,INR,HKD").then((function(e){return e.json()})).then((function(e){I(e.rates),console.log(e.rates)})).catch(console.log)}function K(){fetch("https://api.exchangeratesapi.io/latest?base=INR&symbols=USD,EUR,GBP,JPY,INR,HKD").then((function(e){return e.json()})).then((function(e){k(e.rates),console.log(e.rates)})).catch(console.log)}function B(){fetch("https://api.exchangeratesapi.io/latest?symbols=USD,GBP,JPY,INR,HKD").then((function(e){return e.json()})).then((function(e){d(e.rates),console.log(e.rates)})).catch(console.log)}return Object(n.useEffect)((function(){A(),B(),_(),K(),J(),L(),setInterval((function(){A(),B(),_(),K(),J(),L()}),3e5)}),[]),r.a.createElement("div",{className:"Landing",id:"root",style:{backgroundColor:"light"===a?"white":"#1c1917"}},r.a.createElement("div",{className:"Header__Logo",style:{color:"light"===a?"black":"#d7d7d7"}},r.a.createElement("div",{className:"Header__Logo-top"},"INDORIA LABS"),r.a.createElement("div",{className:"Header__Logo-bottom"},"NORTH AMERICA"),r.a.createElement("div",{className:"Header__Logo-short"},"ILNA")),r.a.createElement("div",{className:"Header__Title",style:{color:"light"===a?"black":"#8ee3f8"}},r.a.createElement("div",{className:"Header__Title-main"},"FELICITY"),r.a.createElement("div",{className:"Header__Title-sub"},"Current Currency Exchange Rates")),r.a.createElement("div",{className:"Header__DNC"},r.a.createElement("input",{type:"checkbox",onClick:function(){c((function(e){return"dark"===e?"light":"dark"}))}})),r.a.createElement("div",{className:"Description"},r.a.createElement("div",{className:"Description__Text",style:{color:"light"===a?"#2e2e2e":"#d7d7d7"}},r.a.createElement(N,{characters:b},"Access real-time rates for all the major FX pairs. Rates are accessd from")," ",r.a.createElement("a",{alt:"European Central Bank Link",href:"https://www.ecb.europa.eu",style:{color:"light"===a?"#015c3a":"#90ee90"}},"European Central Bank")," ",r.a.createElement(N,{characters:b},"and are updated every five(5) minutes. Currently, major currency pairs are USD, GBP, EUR, JPY, HKD, and INR."))),r.a.createElement("div",{className:"CurrencyCards"},r.a.createElement(v,{dayNightMode:"light"===a?"#2e2e2e":"white",countryColor:"countryStyleUS",countryname:"UNITED STATES",currencyName:"United States Dollar",usdrate:i.USD,gbprate:i.GBP,eurrate:i.EUR,jpyrate:i.JPY,hkdrate:i.HKD,inrrate:i.INR}),r.a.createElement(v,{dayNightMode:"light"===a?"#2e2e2e":"white",countryColor:"countryStyleEU",countryname:"EUROPEAN UNION",currencyName:"Euro",usdrate:m.USD,gbprate:m.GBP,eurrate:"1",jpyrate:m.JPY,hkdrate:m.HKD,inrrate:m.INR}),r.a.createElement(v,{dayNightMode:"light"===a?"#2e2e2e":"white",countryColor:"light"===a?"countryStyleDAY":"countryStyleJP",countryname:"JAPAN",currencyName:"Japanese Yen",usdrate:S.USD,gbprate:S.GBP,eurrate:S.EUR,jpyrate:S.JPY,hkdrate:S.HKD,inrrate:S.INR}),r.a.createElement(v,{dayNightMode:"light"===a?"#2e2e2e":"white",countryColor:"countryStyleHK",countryname:"HONG KONG",currencyName:"Hong Kong Dollar",usdrate:U.USD,gbprate:U.GBP,eurrate:U.EUR,jpyrate:U.JPY,hkdrate:U.HKD,inrrate:U.INR}),r.a.createElement(v,{dayNightMode:"light"===a?"#2e2e2e":"white",countryColor:"countryStyleUK",countryname:"UNITED KINGDOM",currencyName:"Pound Sterling",usdrate:E.USD,gbprate:E.GBP,eurrate:E.EUR,jpyrate:E.JPY,hkdrate:E.HKD,inrrate:E.INR}),r.a.createElement(v,{dayNightMode:"light"===a?"#2e2e2e":"white",countryColor:"countryStyleIN",countryname:"INDIA",currencyName:"Indian Rupee",usdrate:H.USD,gbprate:H.GBP,eurrate:H.EUR,jpyrate:H.JPY,hkdrate:H.HKD,inrrate:H.INR})),r.a.createElement("div",{className:"animation"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b6dcf0fc.chunk.js.map