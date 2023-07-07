import {newElement} from '../element-dom';
import {block1} from '../block1';
import {wrapperForNumbersAndCode} from '../block3';

//wrapper for images in block1 for level 6
export let block1ForLevel6 = newElement ({
    tag: 'div',
    params: {classList: ['block1ForLevel6'], src: './images/table.png'},
    parent: block1
});

//images in block1 for level 6
 export let tableLevel5 = newElement ({
     tag: 'img',
     params: {classList: ['tableLevel1'], src: './images/table.png'},
     parent: block1ForLevel6
 });

 export let plate1Level6 = newElement ({
     tag: 'img',
     params: {classList: ['plateLevel6'], src: './images/plate.png'},
     parent: block1ForLevel6
 });

 export let appleLevel6 = newElement ({
     tag: 'img',
     params: {classList: ['appleLevel6'], src: './images/apple.png'},
     parent: block1ForLevel6
 });

 export let pearLevel6 = newElement ({
    tag: 'img',
    params: {classList: ['pearLevel6'], src: './images/pear.png'},
    parent: block1ForLevel6
});

//code
export let preCodeLevel6 = newElement ({
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
  <pear class='pear'/>
</div>`},
    parent: preCodeLevel6
});