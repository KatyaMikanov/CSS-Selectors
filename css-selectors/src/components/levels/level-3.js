import {newElement} from '../element-dom';
import {block1} from '../block1';
import {wrapperForNumbersAndCode} from '../block3';

//wrapper for images in block1 for level 3
export let block1ForLevel3 = newElement ({
    tag: 'div',
    params: {classList: ['block1ForLevel3'], src: './images/table.png'},
    parent: block1
});

//images in block1 for level 2
 export let tableLevel3 = newElement ({
     tag: 'img',
     params: {classList: ['tableLevel1'], src: './images/table.png'},
     parent: block1ForLevel3
 });

 export let plate1Level3 = newElement ({
     tag: 'img',
     params: {classList: ['plateLevel3'], src: './images/plate.png'},
     parent: block1ForLevel3
 });

 export let appleLevel3 = newElement ({
     tag: 'img',
     params: {classList: ['appleLevel3'], src: './images/apple.png'},
     parent: block1ForLevel3
 });

 //code
export let preCodeLevel3 = newElement ({
    tag: 'pre',
    params: {classList: ['preCode']},
    parent: wrapperForNumbersAndCode
});

export let code = newElement ({
    tag: 'code',
    params: {classList: ['code'], textContent: 
`<div class = 'table' />
  <plate />
  <apple />
</div>`},
    parent: preCodeLevel3
});