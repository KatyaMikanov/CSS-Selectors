(()=>{"use strict";function e(e){const o=document.createElement(e.tag);for(const[t,s]of Object.entries(e.params)){if("classList"===t)for(const e of s)o.classList.add(e);else o[t]=s;void 0!==e.parent&&e.parent.append(o)}return o}let o=e({tag:"div",params:{classList:["block4"],textContent:"Level"},parent:document.querySelector(".wrapper")});new Array(10).fill().map(((t,s)=>e({tag:"p",params:{classList:["levelsP"],innerHTML:`&#x2713  ${s+1}`},parent:o}))),e({tag:"button",params:{classList:["buttonBlock4"],textContent:"Reset Progress"},parent:o}),e({tag:"div",params:{classList:["block1"]},parent:document.querySelector(".wrapperForBlocks1_3")}),document.querySelector(".block4").addEventListener("click",(function(e){let o=e.target,t=o.textContent.slice(3,o.length);switch(console.log(t),t){case"1":console.log("1");const e=document.querySelector(".block1"),o=document.createElement("div");o.innerHTML="1",e.append(o);break;case"2":console.log("2");break;case"3":console.log("3");break;case"4":console.log("4");break;case"5":console.log("5");break;case"6":console.log("6");break;case"7":console.log("7");break;case"8":console.log("8");break;case"9":console.log("9");break;case"10":console.log("10");break;default:console.log("1")}}))})();