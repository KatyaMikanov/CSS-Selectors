import {newElement} from '../element-dom';
import {block1} from '../block1';
import {wrapperForNumbersAndCode} from '../block3';
import {checkInput} from '../check-value-input';

//wrapper for images in block1 for level 1
export let block1ForLevel1 = newElement ({
    tag: 'div',
    params: {classList: ['block1ForLevel1'], src: './images/table.png'},
    parent: block1
});

//images in block1 for level 1
 export let tableLevel1 = newElement ({
     tag: 'img',
     params: {classList: ['tableLevel1'], src: './images/table.png'},
     parent: block1ForLevel1
 });

 export let plateLevel1 = newElement ({
     tag: 'img',
     params: {classList: ['plateLevel1'], src: './images/plate.png'},
     parent: block1ForLevel1
 });

//code
export let preCodeLevel1 = newElement ({
    tag: 'pre',
    params: {classList: ['preCodeLevel1']},
    parent: wrapperForNumbersAndCode
});

export let code = newElement ({
    tag: 'code',
    params: {classList: ['code'], textContent: 
`<div class = 'table' />
  <plate />
</div>`},
    parent: preCodeLevel1
});

