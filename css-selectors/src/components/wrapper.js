import {newElement} from './element-dom';

export let wrapper = newElement ({
    tag: 'div',
    params: {classList: ['wrapper']},
    parent: document.body
});

