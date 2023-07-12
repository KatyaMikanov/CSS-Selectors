(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var a;e.g.importScripts&&(a=e.g.location+"");var l=e.g.document;if(!a&&l&&(l.currentScript&&(a=l.currentScript.src),!a)){var t=l.getElementsByTagName("script");if(t.length)for(var s=t.length-1;s>-1&&!a;)a=t[s--].src}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=a})();const a="level",l=e=>{const a=document.querySelector(".block_1"),l=document.querySelector(".code");document.getElementById(`level_${e}`).classList.add("selected");const t=document.querySelector(".block4");for(const a of t.children)e!==a.innerHTML.slice(-1)&&a.classList.remove("selected");switch(e){case"1":a.innerHTML=n.tableView,l.textContent=n.htmlViewerContent;break;case"2":a.innerHTML=p.tableView,l.textContent=p.htmlViewerContent;break;case"3":a.innerHTML=c.tableView,l.textContent=c.htmlViewerContent;break;case"4":a.innerHTML=r.tableView,l.textContent=r.htmlViewerContent;break;case"5":a.innerHTML=o.tableView,l.textContent=o.htmlViewerContent;break;case"6":a.innerHTML=g.tableView,l.textContent=g.htmlViewerContent;break;case"7":a.innerHTML=m.tableView,l.textContent=m.htmlViewerContent;break;case"8":a.innerHTML=v.tableView,l.textContent=v.htmlViewerContent;break;case"9":a.innerHTML=d.tableView,l.textContent=d.htmlViewerContent;break;case"10":a.innerHTML=b.tableView,l.textContent=b.htmlViewerContent}},t=["plate","plate","apple",".apple","#plate",".pear",".apple","#pear",".fruits","#plate-second"];function s(e){const a=document.createElement(e.tag);for(const[l,t]of Object.entries(e.params)){if("classList"===l)for(const e of t)a.classList.add(e);else a[l]=t;void 0!==e.parent&&e.parent.append(a)}return a}sessionStorage.setItem(a,"1"),window.addEventListener("DOMContentLoaded",(e=>{const s=sessionStorage.getItem(a);l(s),document.querySelector(".block4").addEventListener("click",(function(e){let t=e.target,s=t.textContent.slice(3,t.length);sessionStorage.setItem(a,s),l(s)})),document.getElementById("enter_button").addEventListener("click",(()=>{const e=sessionStorage.getItem(a),l=document.getElementById(`level_${e}`),s=document.querySelector(".input");s.value===t[e-1]?(l.classList.remove("red"),l.classList.add("green"),s.value="",console.log(l)):(l.classList.remove("green"),l.classList.add("red"),s.value="")}))}));const i=document.querySelector(".block4");new Array(10).fill().map(((e,a)=>s({tag:"p",params:{classList:["levelsP"],innerHTML:`&#x2713  ${a+1}`,id:`level_${a+1}`},parent:i}))),s({tag:"button",params:{classList:["buttonBlock4"],textContent:"Reset Progress"},parent:i});const n={validation:()=>{},htmlViewerContent:'<div class = "table" /><plate /></div>',tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel1"></div>'},p={validation:()=>{},htmlViewerContent:'<div class = "table" /><plate /><plate /></div>',tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel1"><img src="./images/plate.png" class="plateLevel2"></div>'},c={validation:()=>{},htmlViewerContent:'<div class = "table" /><plate /><apple /></div>',tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel3"><img src="./images/apple.png" class="appleLevel3"></div>'},r={validation:()=>{},htmlViewerContent:'<div class = "table" /><plate class="plate"/><apple class="apple"/></div>',tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel4"><img src="./images/apple.png" class="appleLevel4"></div>'},o={validation:()=>{},htmlViewerContent:'<div class = "table" /><plate id="plate"/><apple class="apple"/></div>',tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel1"><img src="./images/apple.png" class="appleLevel5"></div>'},g={validation:()=>{},htmlViewerContent:'<div class = "table" /><plate class="plate"/><apple class="apple"/><pear class="pear"/></div>',tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel6"><img src="./images/apple.png" class="appleLevel6"><img src="./images/pear.png" class="pearLevel6"></div>'},m={validation:()=>{},htmlViewerContent:'<div class = "table" /><plate class="plate" /><apple class="apple"/><plate class="plate" /><pear class="pear"/></div>',tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/apple.png" class="appleLevel7"><img src="./images/plate.png" class="plate2Level7"><img src="./images/pear.png" class="pearLevel7"></div>'},v={validation:()=>{},htmlViewerContent:'<div class = "table"><plate class="plate" /><apple id="apple"/><plate class="plate" /><pear id="pear"/></div>',tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/apple.png" class="appleLevel8"><img src="./images/plate.png" class="plate2Level7"><img src="./images/pear.png" class="pearLevel8"></div>'},d={validation:()=>{},htmlViewerContent:'<div class = "table"><plate class="plate" /><apple class="fruits" id="apple"/><plate class="plate" /><pear class="fruits" id="pear"/></div>',tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/apple.png" class="appleLevel9"><img src="./images/plate.png" class="plate2Level7"><img src="./images/pear.png" class="pearLevel9"></div>'},b={validation:()=>{},htmlViewerContent:'<div class = "table" /><plate class="plate" id="plate-first" /><apple id="apple"/><plate class="plate" id="plate-second" /><pear id="pear"/></div>',tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/plate.png" class="plate2Level10"><img src="./images/pear.png" class="pearLevel10"></div>'};e.p,e.p,e.p,e.p})();