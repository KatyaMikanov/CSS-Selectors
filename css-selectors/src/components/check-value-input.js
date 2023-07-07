 import {input} from './block2';
 import {button} from './block2';
 import {click_level} from './levels/click_level';

  export function checkInput(numLev) {

    const button = document.querySelector('.button');
    const input = document.querySelector('.input');
    const currentNumberOfLevel = document.querySelector ('.curr');


    let result;
    button.onclick = function () {
      if (input.value === numLev) {
        currentNumberOfLevel.classList.remove('red');
        currentNumberOfLevel.classList.add('green');
        input.value = '';
      } else {
        currentNumberOfLevel.classList.remove('green');
        currentNumberOfLevel.classList.add('red');
        input.value = '';
      }
    }
    return result;
  }
