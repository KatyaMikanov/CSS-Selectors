import {block4} from '../block4';
import {block1} from '../block1';
import {wrapperForNumbersAndCode} from '../block3';
import {checkInput} from '../check-value-input';

import {block1ForLevel1, preCodeLevel1 } from './level-1';
import {block1ForLevel2, preCodeLevel2 } from './level-2';
import {block1ForLevel3, preCodeLevel3 } from './level-3';
import { block1ForLevel4, preCodeLevel4 } from './level-4';
import { block1ForLevel5, preCodeLevel5 } from './level-5';
import { block1ForLevel6, preCodeLevel6 } from './level-6';
import { block1ForLevel7, preCodeLevel7 } from './level-7';
import { block1ForLevel8, preCodeLevel8 } from './level-8';
import { block1ForLevel9, preCodeLevel9 } from './level-9';
import { block1ForLevel10, preCodeLevel10 } from './level-10';
import { button } from '../block2';



export function clickLevel () {

    const divLevels = document.querySelector('.block4');
    const currentDivInBlock1 = document.querySelector('.block1');

    divLevels.addEventListener( "click" , function (e) {
      block1ForLevel1.classList.add('block1ForLevel1NoVisible');
      block1ForLevel2.classList.remove('block1ForLevelVisible');
      block1ForLevel3.classList.remove('block1ForLevelVisible');
      block1ForLevel4.classList.remove('block1ForLevelVisible');
      block1ForLevel5.classList.remove('block1ForLevelVisible');
      block1ForLevel6.classList.remove('block1ForLevelVisible');
      block1ForLevel7.classList.remove('block1ForLevelVisible');
      block1ForLevel8.classList.remove('block1ForLevelVisible');
      block1ForLevel9.classList.remove('block1ForLevelVisible');
      block1ForLevel10.classList.remove('block1ForLevelVisible');

    preCodeLevel1.classList.add('preCodeLevel1NoVisible');
    preCodeLevel2.classList.remove('preCodeVisible');
    preCodeLevel3.classList.remove('preCodeVisible');
    preCodeLevel4.classList.remove('preCodeVisible');
    preCodeLevel5.classList.remove('preCodeVisible');
    preCodeLevel6.classList.remove('preCodeVisible');
    preCodeLevel7.classList.remove('preCodeVisible');
    preCodeLevel8.classList.remove('preCodeVisible');
    preCodeLevel9.classList.remove('preCodeVisible');
    preCodeLevel10.classList.remove('preCodeVisible');   





        let currentLevel = e.target;
        currentLevel.classList.add('curr'); 
        let numberCurrLevel = currentLevel.textContent.slice(3, currentLevel.length);

const selectors = ['plate', 'plate', 'apple', '.apple', '#plate', '.pear', '.apple', '#pear', '.fruits', '#plate-second'];

        if (numberCurrLevel === '2') {
            block1ForLevel2.classList.add('block1ForLevelVisible');
            preCodeLevel2.classList.add('preCodeVisible');
            checkInput(selectors[Number(numberCurrLevel)-1]);
        currentLevel.classList.remove('curr'); 
        } else if (numberCurrLevel === '1') {
            block1ForLevel1.classList.remove('block1ForLevel1NoVisible');
            preCodeLevel1.classList.remove('preCodeLevel1NoVisible');
            checkInput(selectors[Number(numberCurrLevel)-1]);
            currentLevel.classList.remove('curr'); 
        } else if (numberCurrLevel === '3') {
            block1ForLevel3.classList.add('block1ForLevelVisible');
            preCodeLevel3.classList.add('preCodeVisible');
            checkInput(selectors[Number(numberCurrLevel)-1]);
            currentLevel.classList.remove('curr'); 
        } else if (numberCurrLevel === '4') {
            block1ForLevel4.classList.add('block1ForLevelVisible');
            preCodeLevel4.classList.add('preCodeVisible');
            checkInput(selectors[Number(numberCurrLevel)-1]);      
            currentLevel.classList.remove('curr'); 
        } else if (numberCurrLevel === '5') {
            block1ForLevel5.classList.add('block1ForLevelVisible');
            preCodeLevel5.classList.add('preCodeVisible');  
            checkInput(selectors[Number(numberCurrLevel)-1]);     
            currentLevel.classList.remove('curr'); 
        } else if (numberCurrLevel === '6') {
            block1ForLevel6.classList.add('block1ForLevelVisible');
            preCodeLevel6.classList.add('preCodeVisible');  
            checkInput(selectors[Number(numberCurrLevel)-1]);
            currentLevel.classList.remove('curr'); 
        } else if (numberCurrLevel === '7') {
            block1ForLevel7.classList.add('block1ForLevelVisible');
            preCodeLevel7.classList.add('preCodeVisible');  
            checkInput(selectors[Number(numberCurrLevel)-1]);    
            currentLevel.classList.remove('curr');         
        } else if (numberCurrLevel === '8') {
            block1ForLevel8.classList.add('block1ForLevelVisible'); 
            preCodeLevel8.classList.add('preCodeVisible');  
            checkInput(selectors[Number(numberCurrLevel)-1]);
            currentLevel.classList.remove('curr'); 
        } else if (numberCurrLevel === '9') {
            block1ForLevel9.classList.add('block1ForLevelVisible'); 
            preCodeLevel9.classList.add('preCodeVisible');  
            checkInput(selectors[Number(numberCurrLevel)-1]); 
            currentLevel.classList.remove('curr'); 
        } else if (numberCurrLevel === '10') {
            block1ForLevel10.classList.add('block1ForLevelVisible'); 
            preCodeLevel10.classList.add('preCodeVisible');  
            checkInput(selectors[Number(numberCurrLevel)-1]);
            currentLevel.classList.remove('curr'); 
        }
    }  
);
}

export let clickedLevel = clickLevel ();