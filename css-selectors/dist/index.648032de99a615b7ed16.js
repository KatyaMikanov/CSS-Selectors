(()=>{"use strict";function e(e){const t=document.createElement(e.tag);for(const[o,s]of Object.entries(e.params)){if("classList"===o)for(const e of s)t.classList.add(e);else t[o]=s;void 0!==e.parent&&e.parent.append(t)}return t}let t=e({tag:"div",params:{classList:["block4"],textContent:"Level"},parent:document.querySelector(".wrapper")});new Array(10).fill().map(((o,s)=>e({tag:"p",params:{classList:["levelsP"],innerHTML:`&#x2713  ${s+1}`},parent:t}))),e({tag:"button",params:{classList:["buttonBlock4"],textContent:"Reset Progress"},parent:t}),e({tag:"div",params:{classList:["block1"]},parent:document.querySelector(".wrapperForBlocks1_3")}),function(){const t=document.querySelector(".block4"),o=document.querySelector(".block1");t.addEventListener("click",(function(t){let s=t.target,a=s.textContent.slice(3,s.length);switch(console.log(a),e({tag:"div",params:{classList:["level 1"],textContent:"1"},parent:o}),a){case"1":console.log("1"),e({tag:"div",params:{classList:["level 1"],textContent:"1"},parent:o});break;case"2":console.log("2"),e({tag:"div",params:{classList:["level 2"],textContent:"2"},parent:o});break;case"3":console.log("3");break;case"4":console.log("4");break;case"5":console.log("5");break;case"6":console.log("6");break;case"7":console.log("7");break;case"8":console.log("8");break;case"9":console.log("9");break;case"10":console.log("10");break;default:console.log("1")}}))}()})();