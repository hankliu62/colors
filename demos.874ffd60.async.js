"use strict";(self.webpackChunk_hankliu_colors=self.webpackChunk_hankliu_colors||[]).push([[433],{52934:function(le,I,m){m.r(I),m.d(I,{default:function(){return ue}});function s(e,r){z(e)&&(e="100%");var a=L(e);return e=r===360?e:Math.min(r,Math.max(0,parseFloat(e))),a&&(e=parseInt(String(e*r),10)/100),Math.abs(e-r)<1e-6?1:(r===360?e=(e<0?e%r+r:e%r)/parseFloat(String(r)):e=e%r/parseFloat(String(r)),e)}function se(e){return Math.min(1,Math.max(0,e))}function z(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function L(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Z(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function y(e){return e<=1?"".concat(Number(e)*100,"%"):e}function S(e){return e.length===1?"0"+e:String(e)}function J(e,r,a){return{r:s(e,255)*255,g:s(r,255)*255,b:s(a,255)*255}}function ce(e,r,a){e=bound01(e,255),r=bound01(r,255),a=bound01(a,255);var t=Math.max(e,r,a),n=Math.min(e,r,a),f=0,u=0,i=(t+n)/2;if(t===n)u=0,f=0;else{var o=t-n;switch(u=i>.5?o/(2-t-n):o/(t+n),t){case e:f=(r-a)/o+(r<a?6:0);break;case r:f=(a-e)/o+2;break;case a:f=(e-r)/o+4;break;default:break}f/=6}return{h:f,s:u,l:i}}function M(e,r,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+(r-e)*(6*a):a<1/2?r:a<2/3?e+(r-e)*(2/3-a)*6:e}function K(e,r,a){var t,n,f;if(e=s(e,360),r=s(r,100),a=s(a,100),r===0)n=a,f=a,t=a;else{var u=a<.5?a*(1+r):a+r-a*r,i=2*a-u;t=M(i,u,e+1/3),n=M(i,u,e),f=M(i,u,e-1/3)}return{r:t*255,g:n*255,b:f*255}}function Q(e,r,a){e=s(e,255),r=s(r,255),a=s(a,255);var t=Math.max(e,r,a),n=Math.min(e,r,a),f=0,u=t,i=t-n,o=t===0?0:i/t;if(t===n)f=0;else{switch(t){case e:f=(r-a)/i+(r<a?6:0);break;case r:f=(a-e)/i+2;break;case a:f=(e-r)/i+4;break;default:break}f/=6}return{h:f,s:o,v:u}}function X(e,r,a){e=s(e,360)*6,r=s(r,100),a=s(a,100);var t=Math.floor(e),n=e-t,f=a*(1-r),u=a*(1-n*r),i=a*(1-(1-n)*r),o=t%6,T=[a,u,f,f,i,a][o],A=[i,a,a,u,f,f][o],E=[f,f,i,a,a,u][o];return{r:T*255,g:A*255,b:E*255}}function Y(e,r,a,t){var n=[S(Math.round(e).toString(16)),S(Math.round(r).toString(16)),S(Math.round(a).toString(16))];return t&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function he(e,r,a,t,n){var f=[pad2(Math.round(e).toString(16)),pad2(Math.round(r).toString(16)),pad2(Math.round(a).toString(16)),pad2(R(t))];return n&&f[0].startsWith(f[0].charAt(1))&&f[1].startsWith(f[1].charAt(1))&&f[2].startsWith(f[2].charAt(1))&&f[3].startsWith(f[3].charAt(1))?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}function ge(e,r,a,t){var n=[pad2(R(t)),pad2(Math.round(e).toString(16)),pad2(Math.round(r).toString(16)),pad2(Math.round(a).toString(16))];return n.join("")}function R(e){return Math.round(parseFloat(e)*255).toString(16)}function H(e){return l(e)/255}function l(e){return parseInt(e,16)}function be(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var N={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function p(e){var r={r:0,g:0,b:0},a=1,t=null,n=null,f=null,u=!1,i=!1;return typeof e=="string"&&(e=ae(e)),typeof e=="object"&&(h(e.r)&&h(e.g)&&h(e.b)?(r=J(e.r,e.g,e.b),u=!0,i=String(e.r).substr(-1)==="%"?"prgb":"rgb"):h(e.h)&&h(e.s)&&h(e.v)?(t=y(e.s),n=y(e.v),r=X(e.h,t,n),u=!0,i="hsv"):h(e.h)&&h(e.s)&&h(e.l)&&(t=y(e.s),f=y(e.l),r=K(e.h,t,f),u=!0,i="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(a=e.a)),a=Z(a),{ok:u,format:e.format||i,r:Math.min(255,Math.max(r.r,0)),g:Math.min(255,Math.max(r.g,0)),b:Math.min(255,Math.max(r.b,0)),a}}var _="[-\\+]?\\d+%?",ee="[-\\+]?\\d*\\.\\d+%?",g="(?:".concat(ee,")|(?:").concat(_,")"),w="[\\s|\\(]+(".concat(g,")[,|\\s]+(").concat(g,")[,|\\s]+(").concat(g,")\\s*\\)?"),C="[\\s|\\(]+(".concat(g,")[,|\\s]+(").concat(g,")[,|\\s]+(").concat(g,")[,|\\s]+(").concat(g,")\\s*\\)?"),c={CSS_UNIT:new RegExp(g),rgb:new RegExp("rgb"+w),rgba:new RegExp("rgba"+C),hsl:new RegExp("hsl"+w),hsla:new RegExp("hsla"+C),hsv:new RegExp("hsv"+w),hsva:new RegExp("hsva"+C),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ae(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var r=!1;if(N[e])e=N[e],r=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var a=c.rgb.exec(e);return a?{r:a[1],g:a[2],b:a[3]}:(a=c.rgba.exec(e),a?{r:a[1],g:a[2],b:a[3],a:a[4]}:(a=c.hsl.exec(e),a?{h:a[1],s:a[2],l:a[3]}:(a=c.hsla.exec(e),a?{h:a[1],s:a[2],l:a[3],a:a[4]}:(a=c.hsv.exec(e),a?{h:a[1],s:a[2],v:a[3]}:(a=c.hsva.exec(e),a?{h:a[1],s:a[2],v:a[3],a:a[4]}:(a=c.hex8.exec(e),a?{r:l(a[1]),g:l(a[2]),b:l(a[3]),a:H(a[4]),format:r?"name":"hex8"}:(a=c.hex6.exec(e),a?{r:l(a[1]),g:l(a[2]),b:l(a[3]),format:r?"name":"hex"}:(a=c.hex4.exec(e),a?{r:l(a[1]+a[1]),g:l(a[2]+a[2]),b:l(a[3]+a[3]),a:H(a[4]+a[4]),format:r?"name":"hex8"}:(a=c.hex3.exec(e),a?{r:l(a[1]+a[1]),g:l(a[2]+a[2]),b:l(a[3]+a[3]),format:r?"name":"hex"}:!1)))))))))}function h(e){return!!c.CSS_UNIT.exec(String(e))}var x=2,P=.16,re=.05,te=.05,ne=.15,D=5,O=4,fe=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function B(e){var r=e.r,a=e.g,t=e.b,n=Q(r,a,t);return{h:n.h*360,s:n.s,v:n.v}}function k(e){var r=e.r,a=e.g,t=e.b;return"#".concat(Y(r,a,t,!1))}function ie(e,r,a){var t=a/100,n={r:(r.r-e.r)*t+e.r,g:(r.g-e.g)*t+e.g,b:(r.b-e.b)*t+e.b};return n}function W(e,r,a){var t;return Math.round(e.h)>=60&&Math.round(e.h)<=240?t=a?Math.round(e.h)-x*r:Math.round(e.h)+x*r:t=a?Math.round(e.h)+x*r:Math.round(e.h)-x*r,t<0?t+=360:t>=360&&(t-=360),t}function U(e,r,a){if(e.h===0&&e.s===0)return e.s;var t;return a?t=e.s-P*r:r===O?t=e.s+P:t=e.s+re*r,t>1&&(t=1),a&&r===D&&t>.1&&(t=.1),t<.06&&(t=.06),Number(t.toFixed(2))}function V(e,r,a){var t;return a?t=e.v+te*r:t=e.v-ne*r,t>1&&(t=1),Number(t.toFixed(2))}function $(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=[],t=p(e),n=D;n>0;n-=1){var f=B(t),u=k(p({h:W(f,n,!0),s:U(f,n,!0),v:V(f,n,!0)}));a.push(u)}a.push(k(t));for(var i=1;i<=O;i+=1){var o=B(t),T=k(p({h:W(o,i),s:U(o,i),v:V(o,i)}));a.push(T)}return r.theme==="dark"?fe.map(function(A){var E=A.index,de=A.opacity,oe=k(ie(p(r.backgroundColor||"#141414"),p(a[E]),de*100));return oe}):a}var F={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},d={},j={};Object.keys(F).forEach(function(e){d[e]=$(F[e]),d[e].primary=d[e][5],j[e]=$(F[e],{theme:"dark",backgroundColor:"#141414"}),j[e].primary=j[e][5]});var ve=d.red,pe=d.volcano,q=d.gold,me=d.orange,ye=d.yellow,xe=d.lime,ke=d.green,Ae=d.cyan,b=d.blue,Se=d.geekblue,Me=d.purple,G=d.magenta,we=d.grey,Ce=d.grey,Fe=m(62435),v=m(86074);console.log(b),console.log(b.primary);function ue(){return(0,v.jsxs)("div",{style:{display:"flex"},children:[(0,v.jsx)("div",{style:{flex:"1"},children:b.map(function(e){return(0,v.jsx)("div",{style:{backgroundColor:e,color:b.primary===e?"#fff":"#000",height:"60px",display:"flex",alignItems:"center",justifyContent:"center"},className:"".concat(b.primary?"primary":"default"),children:e},e)})}),(0,v.jsx)("div",{style:{flex:"1"},children:q.map(function(e){return(0,v.jsx)("div",{style:{backgroundColor:e,color:q.primary===e?"#fff":"#000",height:"60px",display:"flex",alignItems:"center",justifyContent:"center"},className:"".concat(b.primary?"primary":"default"),children:e},e)})}),(0,v.jsx)("div",{style:{flex:"1"},children:G.map(function(e){return(0,v.jsx)("div",{style:{backgroundColor:e,color:G.primary===e?"#fff":"#000",height:"60px",display:"flex",alignItems:"center",justifyContent:"center"},className:"".concat(b.primary?"primary":"default"),children:e},e)})})]})}}}]);