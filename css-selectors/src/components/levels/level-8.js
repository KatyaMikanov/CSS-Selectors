import {newElement} from '../element-dom';
import {block1} from '../block1';
import {wrapperForNumbersAndCode} from '../block3';

//wrapper for images in block1 for level 8
export let block1ForLevel8 = newElement ({
    tag: 'div',
    params: {classList: ['block1ForLevel8'], src: './images/table.png'},
    parent: block1
});

//images in block1 for level 8
 export let tableLevel8 = newElement ({
     tag: 'img',
     params: {classList: ['tableLevel1'], src: './images/table.png'},
     parent: block1ForLevel8
 });

 export let plate1Level8 = newElement ({
     tag: 'img',
     params: {classList: ['plateLevel7'], src: './images/plate.png'},
     parent: block1ForLevel8
 });

 export let appleLevel8 = newElement ({
     tag: 'img',
     params: {classList: ['appleLevel8'], src: './images/apple.png'},
     parent: block1ForLevel8
 });

 export let plate2Level8 = newElement ({
    tag: 'img',
    params: {classList: ['plate2Level7'], src: './images/plate.png'},
    parent: block1ForLevel8
});

 export let pearLevel8 = newElement ({
    tag: 'img',
    params: {classList: ['pearLevel8'], src: './images/pear.png'},
    parent: block1ForLevel8
});


//code
export let preCodeLevel8 = newElement ({
    tag: 'pre',
    params: {classList: ['preCode']},
    parent: wrapperForNumbersAndCode
});

export let code = newElement ({
    tag: 'code',
    params: {classList: ['code'], textContent: 
`<div class = 'table'>
  <plate class='plate' />
    <apple id='apple'/>
  <plate class='plate' />   
    <pear id='pear'/>
</div>`},
    parent: preCodeLevel8
});