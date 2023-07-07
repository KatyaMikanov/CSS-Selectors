import {newElement} from './element-dom';
import {wrapper} from './wrapper';

export let block4 = newElement ({
    tag: 'div',
    params: {classList: ['block4'], textContent: 'Level'},
    parent: wrapper
});

//create 10 levels
function getArr() {
    const newArr = new Array(10).fill();
    return newArr.map((_, index) => (newElement(
        {
            tag: 'p',
            params: { classList: ['levelsP'], innerHTML: `&#x2713  ${index + 1}` },
            parent: block4
        }
    ))
    )
}
export let levelsP = getArr();


//create BUTTON
export let buttonBlock4 = newElement ({
    tag: 'button',
    params: {classList: ['buttonBlock4'], textContent: 'Reset Progress'},
    parent: block4
});