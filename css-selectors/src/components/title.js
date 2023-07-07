import {newElement} from './element-dom';
import {wrapperForBlocks1_3} from './wrapper-for-blocks1-3';

export let h1= newElement ({
    tag: 'h1',
    params: {classList: ['h1'], textContent: 'CSS Diner'},
    parent: wrapperForBlocks1_3
});