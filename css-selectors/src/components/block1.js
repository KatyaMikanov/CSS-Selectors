import {newElement} from './element-dom';
import {wrapperForBlocks1_3} from './wrapper-for-blocks1-3';

export let block1 = newElement ({
    tag: 'div',
    params: {classList: ['block1']},
    parent: wrapperForBlocks1_3
});

//images

// export let table = newElement ({
//     tag: 'img',
//     params: {classList: ['table'], src: './images/table.png'},
//     parent: block1
// });

// export let plate = newElement ({
//     tag: 'img',
//     params: {classList: ['plate'], src: './images/plate.png'},
//     parent: block1
// });
