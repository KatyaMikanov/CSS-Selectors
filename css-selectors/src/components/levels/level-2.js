import {newElement} from '../element-dom';
import {block1} from '../block1';
import {wrapperForNumbersAndCode} from '../block3';

//wrapper for images in block1 for level 2
export let block1ForLevel2 = newElement ({
    tag: 'div',
    params: {classList: ['block1ForLevel2'], src: './images/table.png'},
    parent: block1
});

//images in block1 for level 2
 export let tableLevel2 = newElement ({
     tag: 'img',
     params: {classList: ['tableLevel1'], src: './images/table.png'},
     parent: block1ForLevel2
 });

 export let plate1Level2 = newElement ({
     tag: 'img',
     params: {classList: ['plateLevel1'], src: './images/plate.png'},
     parent: block1ForLevel2
 });

 export let plate2Level2 = newElement ({
    tag: 'img',
    params: {classList: ['plateLevel2'], src: './images/plate.png'},
    parent: block1ForLevel2
});

//code
export let preCodeLevel2 = newElement ({
    tag: 'pre',
    params: {classList: ['preCode']},
    parent: wrapperForNumbersAndCode
});

export let code = newElement ({
    tag: 'code',
    params: {classList: ['code'], textContent: 
`<div class = 'table' />
  <plate />
  <plate />
</div>`},
    parent: preCodeLevel2
});