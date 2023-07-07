import {newElement} from '../element-dom';
import {block1} from '../block1';
import {wrapperForNumbersAndCode} from '../block3';

//wrapper for images in block1 for level 9
export let block1ForLevel9 = newElement ({
    tag: 'div',
    params: {classList: ['block1ForLevel9'], src: './images/table.png'},
    parent: block1
});

//images in block1 for level 9
 export let tableLevel9 = newElement ({
     tag: 'img',
     params: {classList: ['tableLevel1'], src: './images/table.png'},
     parent: block1ForLevel9
 });

 export let plate1Level9 = newElement ({
     tag: 'img',
     params: {classList: ['plateLevel7'], src: './images/plate.png'},
     parent: block1ForLevel9
 });

 export let appleLevel9 = newElement ({
     tag: 'img',
     params: {classList: ['appleLevel9'], src: './images/apple.png'},
     parent: block1ForLevel9
 });

 export let plate2Level9 = newElement ({
    tag: 'img',
    params: {classList: ['plate2Level7'], src: './images/plate.png'},
    parent: block1ForLevel9
});

 export let pearLevel9 = newElement ({
    tag: 'img',
    params: {classList: ['pearLevel9'], src: './images/pear.png'},
    parent: block1ForLevel9
});

//code
export let preCodeLevel9 = newElement ({
    tag: 'pre',
    params: {classList: ['preCode']},
    parent: wrapperForNumbersAndCode
});

export let code = newElement ({
    tag: 'code',
    params: {classList: ['code'], textContent: 
`<div class = 'table'>
  <plate class='plate' />
    <apple class='fruits' id='apple'/>
  <plate class='plate' />   
    <pear class='fruits' id='pear'/>
</div>`},
    parent: preCodeLevel9
});