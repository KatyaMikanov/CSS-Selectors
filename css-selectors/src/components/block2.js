import {newElement} from './element-dom';
import {wrapperForBlocks2_3} from './wrapper-for-blocks2-3';


export let block2 = newElement ({
    tag: 'div',
    params: {classList: ['block2']},
    parent: wrapperForBlocks2_3
});

// wrapper for CSS Editor
export let block2Editor = newElement ({
    tag: 'div',
    params: {classList: ['block2Editor']},
    parent: block2
});

//title for block2
export let titleBlock2 = newElement ({
    tag: 'div',
    params: {classList: ['titleBlock2', 'titleBlock']},
    parent: block2Editor
});
// title CSS Editor
export let cssEditor = newElement ({
    tag: 'p',
    params: {classList: ['cssEditor', 'titleSection2'], textContent: 'CSS Editor'},
    parent: titleBlock2
});
export let styleCSS = newElement ({
    tag: 'p',
    params: {classList: ['styleCSS', 'titleSection2'], textContent: 'style.css'},
    parent: titleBlock2
});


// form for INPUT and BUTTON
export let block2Form = newElement ({
    tag: 'div',
    params: {classList: ['block2Form']},
    parent: block2
});
//block with numbers
export let block2WithNumbers = newElement ({
    tag: 'p',
    params: {classList: ['blockWithNumbers', 'block2WithNumbers'], innerHTML: "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>"},
    parent: block2Form
});


// INPUT in form
export let input = newElement ({
    tag: 'input',
    params: {classList: ['input'], placeholder: "Type in a CSS Selector"},
    parent: block2Form
});
//button in form
export let button = newElement ({
    tag: 'button',
    params: {classList: ['button'], textContent: 'Enter'},
    parent: block2Form
});