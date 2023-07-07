import {newElement} from '../element-dom';
import {block1} from '../block1';
import {wrapperForNumbersAndCode} from '../block3';

//wrapper for images in block1 for level 5
export let block1ForLevel5 = newElement ({
    tag: 'div',
    params: {classList: ['block1ForLevel5'], src: './images/table.png'},
    parent: block1
});

//images in block1 for level 5
 export let tableLevel5 = newElement ({
     tag: 'img',
     params: {classList: ['tableLevel1'], src: './images/table.png'},
     parent: block1ForLevel5
 });

 export let plate1Level5 = newElement ({
     tag: 'img',
     params: {classList: ['plateLevel1'], src: './images/plate.png'},
     parent: block1ForLevel5
 });

 export let appleLevel5 = newElement ({
     tag: 'img',
     params: {classList: ['appleLevel5'], src: './images/apple.png'},
     parent: block1ForLevel5
 });

 //code
export let preCodeLevel5 = newElement ({
    tag: 'pre',
    params: {classList: ['preCode']},
    parent: wrapperForNumbersAndCode
});

export let code = newElement ({
    tag: 'code',
    params: {classList: ['code'], textContent: 
`<div class = 'table' />
  <plate id='plate'/>
    <apple class='apple'/>
</div>`},
    parent: preCodeLevel5
});