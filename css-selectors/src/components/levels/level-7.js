import {newElement} from '../element-dom';
import {block1} from '../block1';
import {wrapperForNumbersAndCode} from '../block3';

//wrapper for images in block1 for level 7
export let block1ForLevel7 = newElement ({
    tag: 'div',
    params: {classList: ['block1ForLevel7'], src: './images/table.png'},
    parent: block1
});

//images in block1 for level 7
 export let tableLevel7 = newElement ({
     tag: 'img',
     params: {classList: ['tableLevel1'], src: './images/table.png'},
     parent: block1ForLevel7
 });

 export let plate1Level7 = newElement ({
     tag: 'img',
     params: {classList: ['plateLevel7'], src: './images/plate.png'},
     parent: block1ForLevel7
 });

 export let appleLevel7 = newElement ({
     tag: 'img',
     params: {classList: ['appleLevel7'], src: './images/apple.png'},
     parent: block1ForLevel7
 });

 export let plate2Level7 = newElement ({
    tag: 'img',
    params: {classList: ['plate2Level7'], src: './images/plate.png'},
    parent: block1ForLevel7
});

 export let pearLevel7 = newElement ({
    tag: 'img',
    params: {classList: ['pearLevel7'], src: './images/pear.png'},
    parent: block1ForLevel7
});

//code
export let preCodeLevel7 = newElement ({
    tag: 'pre',
    params: {classList: ['preCode']},
    parent: wrapperForNumbersAndCode
});

export let code = newElement ({
    tag: 'code',
    params: {classList: ['code'], textContent: 
`<div class = 'table' />
  <plate class='plate' />
    <apple class='apple'/>
  <plate class='plate' />   
    <pear class='pear'/>
</div>`},
    parent: preCodeLevel7
});