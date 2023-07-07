import {newElement} from './element-dom';
import {wrapperForBlocks2_3} from './wrapper-for-blocks2-3';

export let block3 = newElement ({
    tag: 'div',
    params: {classList: ['block3']},
    parent: wrapperForBlocks2_3
});

 //wrapper for title for block3
 export let titleBlock3 = newElement ({
     tag: 'div',
     params: {classList: ['titleBlock3', 'titleBlock']},
     parent: block3
 });

 // title Viewer and HTML
 export let htmlViewer = newElement ({
     tag: 'p',
     params: {classList: ['htmlViewer', 'titleSection2'], textContent: 'HTML Viewer'},
     parent: titleBlock3
 });
 export let tableHtml = newElement ({
     tag: 'p',
     params: {classList: ['tableHtml', 'titleSection2'], textContent: 'table.html'},
     parent: titleBlock3
 });

 //div for block with numbers and code
 export let wrapperForNumbersAndCode = newElement ({
    tag: 'div',
    params: {classList: ['wrapperForNumbersAndCode']},
    parent: block3
});

//div with numbers
 export let block3WithNumbers = newElement ({
    tag: 'p',
    params: {classList: ['blockWithNumbers', 'block3WithNumbers'], innerHTML: "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>"},
    parent: wrapperForNumbersAndCode
});

// //code
// export let preCode = newElement ({
//     tag: 'pre',
//     params: {classList: ['preCode']},
//     parent: wrapperForNumbersAndCode
// });

// export let code = newElement ({
//     tag: 'code',
//     params: {classList: ['code'], textContent: 
// `<div class = "table">
// <plate />
// </div>`},
//     parent: preCode
// });