(()=>{"use strict";var e={};function a(e){const a=document.createElement(e.tag);for(const[l,s]of Object.entries(e.params)){if("classList"===l)for(const e of s)a.classList.add(e);else a[l]=s;void 0!==e.parent&&e.parent.append(a)}return a}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var a;e.g.importScripts&&(a=e.g.location+"");var l=e.g.document;if(!a&&l&&(l.currentScript&&(a=l.currentScript.src),!a)){var s=l.getElementsByTagName("script");if(s.length)for(var t=s.length-1;t>-1&&!a;)a=s[t--].src}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=a})();let l=a({tag:"div",params:{classList:["block4"],textContent:"Level"},parent:document.querySelector(".wrapper")});new Array(10).fill().map(((e,s)=>a({tag:"p",params:{classList:["levelsP"],innerHTML:`&#x2713  ${s+1}`},parent:l}))),a({tag:"button",params:{classList:["buttonBlock4"],textContent:"Reset Progress"},parent:l}),function(){const e=document.querySelector(".block4"),a=document.querySelector(".block_1"),l=document.querySelector(".code");e.addEventListener("click",(function(e){let v=e.target;switch(v.textContent.slice(3,v.length)){case"1":a.innerHTML=s.tableView,l.innerHTML=s.htmlViewerContent;break;case"2":a.innerHTML=t.tableView;break;case"3":a.innerHTML=i.tableView;break;case"4":a.innerHTML=c.tableView;break;case"5":a.innerHTML=r.tableView;break;case"6":a.innerHTML=n.tableView;break;case"7":a.innerHTML=p.tableView;break;case"8":a.innerHTML=g.tableView;break;case"9":a.innerHTML=m.tableView;break;case"10":a.innerHTML=o.tableView}}))}();const s={validation:()=>{},htmlViewerContent:'<div class = "table" /><plate /><plate /></div>',tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel1"></div>'},t={validation:()=>{},htmlViewerContent:()=>{},tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel1"><img src="./images/plate.png" class="plateLevel2"></div>'},i={validation:()=>{},htmlViewerContent:()=>{},tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel3"><img src="./images/apple.png" class="appleLevel3"></div>'},c={validation:()=>{},htmlViewerContent:()=>{},tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel4"><img src="./images/apple.png" class="appleLevel4"></div>'},r={validation:()=>{},htmlViewerContent:()=>{},tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel1"><img src="./images/apple.png" class="appleLevel5"></div>'},n={validation:()=>{},htmlViewerContent:()=>{},tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel6"><img src="./images/apple.png" class="appleLevel6"><img src="./images/pear.png" class="pearLevel6"></div>'},p={validation:()=>{},htmlViewerContent:()=>{},tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/apple.png" class="appleLevel7"><img src="./images/plate.png" class="plate2Level7"><img src="./images/pear.png" class="pearLevel7"></div>'},g={validation:()=>{},htmlViewerContent:()=>{},tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/apple.png" class="appleLevel8"><img src="./images/plate.png" class="plate2Level7"><img src="./images/pear.png" class="pearLevel8"></div>'},m={validation:()=>{},htmlViewerContent:()=>{},tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/apple.png" class="appleLevel9"><img src="./images/plate.png" class="plate2Level7"><img src="./images/pear.png" class="pearLevel9"></div>'},o={validation:()=>{},htmlViewerContent:()=>{},tableView:'<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/plate.png" class="plate2Level10"><img src="./images/pear.png" class="pearLevel10"></div>'};e.p,e.p,e.p,e.p})();