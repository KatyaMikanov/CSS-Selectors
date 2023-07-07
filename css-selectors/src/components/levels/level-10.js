import {newElement} from '../element-dom';
import {block1} from '../block1';
import {wrapperForNumbersAndCode} from '../block3';

//wrapper for images in block1 for level 9
export let block1ForLevel10 = newElement ({
    tag: 'div',
    params: {classList: ['block1ForLevel10'], src: './images/table.png'},
    parent: block1
});

//images in block1 for level 10
 export let tableLevel10 = newElement ({
     tag: 'img',
     params: {classList: ['tableLevel1'], src: './images/table.png'},
     parent: block1ForLevel10
 });

 export let plate1Level10 = newElement ({
     tag: 'img',
     params: {classList: ['plateLevel7'], src: './images/plate.png'},
     parent: block1ForLevel10
 });

 export let plate2Level10 = newElement ({
    tag: 'img',
    params: {classList: ['plate2Level10'], src: './images/plate.png'},
    parent: block1ForLevel10
});

 export let pearLevel10 = newElement ({
    tag: 'img',
    params: {classList: ['pearLevel10'], src: './images/pear.png'},
    parent: block1ForLevel10
});

//code
export let preCodeLevel10 = newElement ({
    tag: 'pre',
    params: {classList: ['preCode']},
    parent: wrapperForNumbersAndCode
});

export let code = newElement ({
    tag: 'code',
    params: {classList: ['code'], textContent: 
`<div class = 'table' />
  <plate class='plate' id='plate-first' />
    <apple id='apple'/>
  <plate class='plate' id='plate-second' />   
    <pear id='pear'/>
</div>`},
    parent: preCodeLevel10
});