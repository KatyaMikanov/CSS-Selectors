//function for creating DOM element
export function newElement(options) {
  const el = document.createElement(options.tag);
  for (const [key, value] of Object.entries(options.params)) {
    if (key === "classList") {
      for (const newClass of value) {
        el.classList.add(newClass);
      }
    } else {
      el[key] = value;
    }
    if (options.parent !== undefined) options.parent.append(el);
  }
  return el;
}

//CREATING Block_4
export const wrapper = document.querySelector(".wrapper");
export let block4 = newElement({
  tag: "div",
  params: { classList: ["block4"], textContent: "Level" },
  parent: wrapper,
});

//create 10 levels in Block_4
function getArr() {
  const newArr = new Array(10).fill();
  return newArr.map((_, index) =>
    newElement({
      tag: "p",
      params: {
        classList: ["levelsP"],
        innerHTML: `&#x2713  ${index + 1}`,
      },
      parent: block4,
    })
  );
}
getArr();

//create BUTTON "Reset Progress"
export let buttonBlock4 = newElement({
  tag: "button",
  params: { classList: ["buttonBlock4"], textContent: "Reset Progress" },
  parent: block4,
});

//function choose Level
export function clickLevel() {
  const wrapperForBlock4 = document.querySelector(".block4");
  const block1 = document.querySelector(".block_1");

  wrapperForBlock4.addEventListener("click", function (e) {
    let currentLevel = e.target;
    let numberCurrLevel = currentLevel.textContent.slice(
      3,
      currentLevel.length
    );

    switch (numberCurrLevel) {
      case "1":
        block1.innerHTML = `${numberCurrLevel}`;
        break;
      case "2":
        block1.innerHTML = `${numberCurrLevel}`;
        break;
      case "3":
        block1.innerHTML = `${numberCurrLevel}`;
        break;
      case "4":
        block1.innerHTML = `${numberCurrLevel}`;
        break;
      case "5":
        block1.innerHTML = `${numberCurrLevel}`;
        break;
      case "6":
        block1.innerHTML = `${numberCurrLevel}`;
        break;
      case "7":
        block1.innerHTML = `${numberCurrLevel}`;
        break;
      case "8":
        block1.innerHTML = `${numberCurrLevel}`;
        break;
      case "9":
        block1.innerHTML = `${numberCurrLevel}`;
        break;
      case "10":
        block1.innerHTML = `${numberCurrLevel}`;
        break;
      default:
        block1.innerHTML = "1";
    }
  });
}
export let clickedLevel = clickLevel();
