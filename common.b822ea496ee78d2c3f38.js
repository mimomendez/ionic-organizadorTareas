(self.webpackChunkdeseos=self.webpackChunkdeseos||[]).push([[8592],{6633:(e,t,n)=>{"use strict";n.d(t,{c:()=>s});var i=n(3150),o=n(2954),r=n(7279);const s=(e,t)=>{let n,s;const a=(e,i,o)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(e,i);r&&t(r)?r!==n&&(l(),c(r,o)):l()},c=(e,t)=>{n=e,s||(s=n);const o=n;(0,i.c)(()=>o.classList.add("ion-activated")),t()},l=(e=!1)=>{if(!n)return;const t=n;(0,i.c)(()=>t.classList.remove("ion-activated")),e&&s!==n&&n.click(),n=void 0};return(0,r.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>a(e.currentX,e.currentY,o.a),onMove:e=>a(e.currentX,e.currentY,o.b),onEnd:()=>{l(!0),(0,o.h)(),s=void 0}})}},7330:(e,t,n)=>{"use strict";n.d(t,{a:()=>o,d:()=>r});var i=n(2377);const o=async(e,t,n,o,r)=>{if(e)return e.attachViewToDom(t,n,r,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return o&&o.forEach(e=>s.classList.add(e)),r&&Object.assign(s,r),t.appendChild(s),await new Promise(e=>(0,i.c)(s,e)),s},r=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},2954:(e,t,n)=>{"use strict";n.d(t,{a:()=>r,b:()=>s,c:()=>o,d:()=>c,h:()=>a});const i={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})},notification(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},o=()=>{i.selection()},r=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},a=()=>{i.selectionEnd()},c=e=>{i.impact(e)}},6575:(e,t,n)=>{"use strict";n.d(t,{s:()=>i});const i=e=>{try{if(e instanceof class{constructor(e){this.value=e}})return e.value;if(!s()||"string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,c.forEach(e=>{const n=t.querySelectorAll(e);for(let i=n.length-1;i>=0;i--){const e=n[i];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const s=r(e);for(let t=0;t<s.length;t++)o(s[t])}});const i=r(t);for(let e=0;e<i.length;e++)o(i[e]);const a=document.createElement("div");a.appendChild(t);const l=a.querySelector("div");return null!==l?l.innerHTML:a.innerHTML}catch(t){return console.error(t),""}},o=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let n=e.attributes.length-1;n>=0;n--){const t=e.attributes.item(n),i=t.name;if(!a.includes(i.toLowerCase())){e.removeAttribute(i);continue}const o=t.value;null!=o&&o.toLowerCase().includes("javascript:")&&e.removeAttribute(i)}const t=r(e);for(let n=0;n<t.length;n++)o(t[n])},r=e=>null!=e.children?e.children:e.childNodes,s=()=>{const e=window,t=e&&e.Ionic&&e.Ionic.config;return!t||(t.get?t.get("sanitizerEnabled",!0):!0===t.sanitizerEnabled||void 0===t.sanitizerEnabled)},a=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},408:(e,t,n)=>{"use strict";n.d(t,{S:()=>i});const i={bubbles:{dur:1e3,circles:9,fn:(e,t,n)=>{const i=e*t/n-e+"ms",o=2*Math.PI*t/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(e,t,n)=>{const i=t/n,o=e*i-e+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})}}},1269:(e,t,n)=>{"use strict";n.d(t,{c:()=>o,g:()=>r,h:()=>i,o:()=>a});const i=(e,t)=>null!==t.closest(e),o=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,r=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},s=/^[a-z][a-z0-9+\-.]*:/,a=async(e,t,n,i)=>{if(null!=e&&"#"!==e[0]&&!s.test(e)){const o=document.querySelector("ion-router");if(o)return null!=t&&t.preventDefault(),o.push(e,n,i)}return!1}},5724:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AgregarPageModule:()=>h});var i=n(8583),o=n(665),r=n(3083),s=n(2316);class a{constructor(e){this.desc=e,this.completado=!1}}var c=n(639),l=n(4696);function d(e,t){1&e&&(c.TgZ(0,"ion-list-header",1),c.TgZ(1,"ion-label"),c._uU(2,"Tareas por hacer"),c.qZA(),c.qZA())}function u(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"ion-item-sliding",9),c.TgZ(1,"ion-item",1),c.TgZ(2,"ion-checkbox",10),c.NdJ("ngModelChange",function(e){return t.$implicit.completado=e})("ionChange",function(){c.CHM(e);const n=t.$implicit;return c.oxw().cambioCheck(n)}),c.qZA(),c.TgZ(3,"ion-label"),c._uU(4),c.qZA(),c.qZA(),c.TgZ(5,"ion-item-options",11),c.TgZ(6,"ion-item-option",12),c.NdJ("click",function(){c.CHM(e);const n=t.index;return c.oxw().borrar(n)}),c._UZ(7,"ion-icon",13),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=t.$implicit;c.xp6(2),c.Q6J("ngModel",e.completado),c.xp6(2),c.Oqu(e.desc)}}const g=[{path:"",component:(()=>{class e{constructor(e,t){this.deseosServices=e,this.route=t,this.nombreItem="",this.agregarItem=()=>{if(0===this.nombreItem.length)return;const e=new a(this.nombreItem);this.lista.items.push(e),this.nombreItem="",this.deseosServices.guardarStorage()},this.cambioCheck=e=>{0===this.lista.items.filter(e=>!e.completado).length?(this.lista.terminadaEn=new Date,this.lista.terminada=!0):(this.lista.terminadaEn=null,this.lista.terminada=!1),this.deseosServices.guardarStorage()},this.borrar=e=>{this.lista.items.splice(e,1),this.deseosServices.guardarStorage()};const n=this.route.snapshot.paramMap.get("listaId");this.lista=this.deseosServices.obtenerLista(n)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(l.P),c.Y36(s.gz))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-agregar"]],decls:15,vars:4,consts:[["no-border",""],["color","dark"],["slot","start"],["defaultHref","/","color","tertiary"],["color","dark",1,"ion-padding"],["position","floating"],["type","text",3,"ngModel","ngModelChange","keyup.enter"],["color","dark",4,"ngIf"],["class","animated fadeInDown",4,"ngFor","ngForOf"],[1,"animated","fadeInDown"],["slot","start","color","tertiary",3,"ngModel","ngModelChange","ionChange"],["side","end"],["color","danger",3,"click"],["name","close","slot","icon-only"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-header",0),c.TgZ(1,"ion-toolbar",1),c.TgZ(2,"ion-buttons",2),c._UZ(3,"ion-back-button",3),c.qZA(),c.TgZ(4,"ion-title"),c._uU(5),c.qZA(),c.qZA(),c.qZA(),c.TgZ(6,"ion-content",4),c.TgZ(7,"ion-list",1),c.TgZ(8,"ion-item",1),c.TgZ(9,"ion-label",5),c._uU(10,"Agregar nuevo item"),c.qZA(),c.TgZ(11,"ion-input",6),c.NdJ("ngModelChange",function(e){return t.nombreItem=e})("keyup.enter",function(){return t.agregarItem()}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(12,"ion-list"),c.YNc(13,d,3,0,"ion-list-header",7),c.YNc(14,u,8,2,"ion-item-sliding",8),c.qZA(),c.qZA()),2&e&&(c.xp6(5),c.Oqu(t.lista.titulo),c.xp6(6),c.Q6J("ngModel",t.nombreItem),c.xp6(2),c.Q6J("ngIf",t.lista.items.length>0),c.xp6(1),c.Q6J("ngForOf",t.lista.items))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.W2,r.q_,r.Ie,r.Q$,r.pK,r.j9,o.JJ,o.On,i.O5,i.sg,r.yh,r.td,r.nz,r.w,r.IK,r.u8,r.gu],styles:[""]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[s.Bz.forChild(g)],s.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.ez,o.u5,r.Pc,m]]}),e})()}}]);