import {newElement} from '../element-dom';
import {block1} from '../block1';
import {wrapperForNumbersAndCode} from '../block3';

//wrapper for images in block1 for level 4
export let block1ForLevel4 = newElement ({
    tag: 'div',
    params: {classList: ['block1ForLevel4'], src: './images/table.png'},
    parent: block1
});

//images in block1 for level 4
 export let tableLevel4 = newElement ({
     tag: 'img',
     params: {classList: ['tableLevel1'], src: './images/table.png'},
     parent: block1ForLevel4
 });

 export let plate1Level4 = newElement ({
     tag: 'img',
     params: {classList: ['plateLevel4'], src: './images/plate.png'},
     parent: block1ForLevel4
 });

 export let appleLevel4 = newElement ({
     tag: 'img',
     params: {classList: ['appleLevel4'], src: './images/apple.png'},
     parent: block1ForLevel4
 });

 //code
export let preCodeLevel4 = newElement ({
    tag: 'pre',
    params: {classList: ['preCode']},
    parent: wrapperForNumbersAndCode
});

export let code = newElement ({
    tag: 'code',
    params: {classList: ['code'], textContent: 
`<div class = 'table' />
  <plate class='plate'/>
    <apple class='apple'/>
</div>`},
    parent: preCodeLevel4
});