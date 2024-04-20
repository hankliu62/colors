"use strict";(self.webpackChunk_hankliu_colors=self.webpackChunk_hankliu_colors||[]).push([[433],{52934:function(oe,N,v){v.r(N),v.d(N,{default:function(){return ue}});function c(e,t){z(e)&&(e="100%");const a=L(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),a&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function le(e){return Math.min(1,Math.max(0,e))}function z(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function L(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Z(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function k(e){return Number(e)<=1?`${Number(e)*100}%`:e}function C(e){return e.length===1?"0"+e:String(e)}function J(e,t,a){return{r:c(e,255)*255,g:c(t,255)*255,b:c(a,255)*255}}function ce(e,t,a){e=bound01(e,255),t=bound01(t,255),a=bound01(a,255);const r=Math.max(e,t,a),f=Math.min(e,t,a);let n=0,i=0;const u=(r+f)/2;if(r===f)i=0,n=0;else{const d=r-f;switch(i=u>.5?d/(2-r-f):d/(r+f),r){case e:n=(t-a)/d+(t<a?6:0);break;case t:n=(a-e)/d+2;break;case a:n=(e-t)/d+4;break;default:break}n/=6}return{h:n,s:i,l:u}}function w(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+(t-e)*(6*a):a<1/2?t:a<2/3?e+(t-e)*(2/3-a)*6:e}function K(e,t,a){let r,f,n;if(e=c(e,360),t=c(t,100),a=c(a,100),t===0)f=a,n=a,r=a;else{const i=a<.5?a*(1+t):a+t-a*t,u=2*a-i;r=w(u,i,e+1/3),f=w(u,i,e),n=w(u,i,e-1/3)}return{r:r*255,g:f*255,b:n*255}}function Q(e,t,a){e=c(e,255),t=c(t,255),a=c(a,255);const r=Math.max(e,t,a),f=Math.min(e,t,a);let n=0;const i=r,u=r-f,d=r===0?0:u/r;if(r===f)n=0;else{switch(r){case e:n=(t-a)/u+(t<a?6:0);break;case t:n=(a-e)/u+2;break;case a:n=(e-t)/u+4;break;default:break}n/=6}return{h:n,s:d,v:i}}function X(e,t,a){e=c(e,360)*6,t=c(t,100),a=c(a,100);const r=Math.floor(e),f=e-r,n=a*(1-t),i=a*(1-f*t),u=a*(1-(1-f)*t),d=r%6,x=[a,i,n,n,u,a][d],m=[u,a,a,i,n,n][d],E=[n,n,u,a,a,i][d];return{r:x*255,g:m*255,b:E*255}}function Y(e,t,a,r){const f=[C(Math.round(e).toString(16)),C(Math.round(t).toString(16)),C(Math.round(a).toString(16))];return r&&f[0].startsWith(f[0].charAt(1))&&f[1].startsWith(f[1].charAt(1))&&f[2].startsWith(f[2].charAt(1))?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0):f.join("")}function he(e,t,a,r,f){const n=[pad2(Math.round(e).toString(16)),pad2(Math.round(t).toString(16)),pad2(Math.round(a).toString(16)),pad2(R(r))];return f&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))&&n[3].startsWith(n[3].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}function ge(e,t,a,r){return[pad2(R(r)),pad2(Math.round(e).toString(16)),pad2(Math.round(t).toString(16)),pad2(Math.round(a).toString(16))].join("")}function _(e,t,a,r){const f=e/100,n=t/100,i=a/100,u=r/100,d=255*(1-f)*(1-u),x=255*(1-n)*(1-u),m=255*(1-i)*(1-u);return{r:d,g:x,b:m}}function be(e,t,a){let r=1-e/255,f=1-t/255,n=1-a/255,i=Math.min(r,f,n);return i===1?(r=0,f=0,n=0):(r=(r-i)/(1-i)*100,f=(f-i)/(1-i)*100,n=(n-i)/(1-i)*100),i*=100,{c:Math.round(r),m:Math.round(f),y:Math.round(n),k:Math.round(i)}}function R(e){return Math.round(parseFloat(e)*255).toString(16)}function I(e){return o(e)/255}function o(e){return parseInt(e,16)}function pe(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const H={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function y(e){let t={r:0,g:0,b:0},a=1,r=null,f=null,n=null,i=!1,u=!1;return typeof e=="string"&&(e=ae(e)),typeof e=="object"&&(l(e.r)&&l(e.g)&&l(e.b)?(t=J(e.r,e.g,e.b),i=!0,u=String(e.r).substr(-1)==="%"?"prgb":"rgb"):l(e.h)&&l(e.s)&&l(e.v)?(r=k(e.s),f=k(e.v),t=X(e.h,r,f),i=!0,u="hsv"):l(e.h)&&l(e.s)&&l(e.l)?(r=k(e.s),n=k(e.l),t=K(e.h,r,n),i=!0,u="hsl"):l(e.c)&&l(e.m)&&l(e.y)&&l(e.k)&&(t=_(e.c,e.m,e.y,e.k),i=!0,u="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(a=e.a)),a=Z(a),{ok:i,format:e.format||u,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a}}const ee="[-\\+]?\\d+%?",g="(?:"+"[-\\+]?\\d*\\.\\d+%?"+")|(?:"+ee+")",F="[\\s|\\(]+("+g+")[,|\\s]+("+g+")[,|\\s]+("+g+")\\s*\\)?",M="[\\s|\\(]+("+g+")[,|\\s]+("+g+")[,|\\s]+("+g+")[,|\\s]+("+g+")\\s*\\)?",h={CSS_UNIT:new RegExp(g),rgb:new RegExp("rgb"+F),rgba:new RegExp("rgba"+M),hsl:new RegExp("hsl"+F),hsla:new RegExp("hsla"+M),hsv:new RegExp("hsv"+F),hsva:new RegExp("hsva"+M),cmyk:new RegExp("cmyk"+M),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ae(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(H[e])e=H[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let a=h.rgb.exec(e);return a?{r:a[1],g:a[2],b:a[3]}:(a=h.rgba.exec(e),a?{r:a[1],g:a[2],b:a[3],a:a[4]}:(a=h.hsl.exec(e),a?{h:a[1],s:a[2],l:a[3]}:(a=h.hsla.exec(e),a?{h:a[1],s:a[2],l:a[3],a:a[4]}:(a=h.hsv.exec(e),a?{h:a[1],s:a[2],v:a[3]}:(a=h.hsva.exec(e),a?{h:a[1],s:a[2],v:a[3],a:a[4]}:(a=h.cmyk.exec(e),a?{c:a[1],m:a[2],y:a[3],k:a[4]}:(a=h.hex8.exec(e),a?{r:o(a[1]),g:o(a[2]),b:o(a[3]),a:I(a[4]),format:t?"name":"hex8"}:(a=h.hex6.exec(e),a?{r:o(a[1]),g:o(a[2]),b:o(a[3]),format:t?"name":"hex"}:(a=h.hex4.exec(e),a?{r:o(a[1]+a[1]),g:o(a[2]+a[2]),b:o(a[3]+a[3]),a:I(a[4]+a[4]),format:t?"name":"hex8"}:(a=h.hex3.exec(e),a?{r:o(a[1]+a[1]),g:o(a[2]+a[2]),b:o(a[3]+a[3]),format:t?"name":"hex"}:!1))))))))))}function l(e){return typeof e=="number"?!Number.isNaN(e):h.CSS_UNIT.test(e)}var S=2,P=.16,te=.05,re=.05,ne=.15,D=5,O=4,fe=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function B(e){var t=e.r,a=e.g,r=e.b,f=Q(t,a,r);return{h:f.h*360,s:f.s,v:f.v}}function A(e){var t=e.r,a=e.g,r=e.b;return"#".concat(Y(t,a,r,!1))}function ie(e,t,a){var r=a/100,f={r:(t.r-e.r)*r+e.r,g:(t.g-e.g)*r+e.g,b:(t.b-e.b)*r+e.b};return f}function W(e,t,a){var r;return Math.round(e.h)>=60&&Math.round(e.h)<=240?r=a?Math.round(e.h)-S*t:Math.round(e.h)+S*t:r=a?Math.round(e.h)+S*t:Math.round(e.h)-S*t,r<0?r+=360:r>=360&&(r-=360),r}function q(e,t,a){if(e.h===0&&e.s===0)return e.s;var r;return a?r=e.s-P*t:t===O?r=e.s+P:r=e.s+te*t,r>1&&(r=1),a&&t===D&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2))}function U(e,t,a){var r;return a?r=e.v+re*t:r=e.v-ne*t,r>1&&(r=1),Number(r.toFixed(2))}function $(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=[],r=y(e),f=D;f>0;f-=1){var n=B(r),i=A(y({h:W(n,f,!0),s:q(n,f,!0),v:U(n,f,!0)}));a.push(i)}a.push(A(r));for(var u=1;u<=O;u+=1){var d=B(r),x=A(y({h:W(d,u),s:q(d,u),v:U(d,u)}));a.push(x)}return t.theme==="dark"?fe.map(function(m){var E=m.index,se=m.opacity,de=A(ie(y(t.backgroundColor||"#141414"),y(a[E]),se*100));return de}):a}var T={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},s={},j={};Object.keys(T).forEach(function(e){s[e]=$(T[e]),s[e].primary=s[e][5],j[e]=$(T[e],{theme:"dark",backgroundColor:"#141414"}),j[e].primary=j[e][5]});var ye=s.red,xe=s.volcano,V=s.gold,ve=s.orange,ke=s.yellow,Me=s.lime,Se=s.green,Ae=s.cyan,b=s.blue,Ce=s.geekblue,we=s.purple,G=s.magenta,Fe=s.grey,Te=s.grey,je=v(62435),p=v(86074);console.log(b),console.log(b.primary);function ue(){return(0,p.jsxs)("div",{style:{display:"flex"},children:[(0,p.jsx)("div",{style:{flex:"1"},children:b.map(function(e){return(0,p.jsx)("div",{style:{backgroundColor:e,color:b.primary===e?"#fff":"#000",height:"60px",display:"flex",alignItems:"center",justifyContent:"center"},className:"".concat(b.primary?"primary":"default"),children:e},e)})}),(0,p.jsx)("div",{style:{flex:"1"},children:V.map(function(e){return(0,p.jsx)("div",{style:{backgroundColor:e,color:V.primary===e?"#fff":"#000",height:"60px",display:"flex",alignItems:"center",justifyContent:"center"},className:"".concat(b.primary?"primary":"default"),children:e},e)})}),(0,p.jsx)("div",{style:{flex:"1"},children:G.map(function(e){return(0,p.jsx)("div",{style:{backgroundColor:e,color:G.primary===e?"#fff":"#000",height:"60px",display:"flex",alignItems:"center",justifyContent:"center"},className:"".concat(b.primary?"primary":"default"),children:e},e)})})]})}}}]);
