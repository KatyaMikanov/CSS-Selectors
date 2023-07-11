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

//CREATING wrapper for Block_4
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
  const block3Code = document.querySelector(".code");

  wrapperForBlock4.addEventListener("click", function (e) {
    let currentLevel = e.target;
    let numberCurrLevel = currentLevel.textContent.slice(
      3,
      currentLevel.length
    );

    switch (numberCurrLevel) {
      case "1":
        block1.innerHTML = firstLevelData.tableView;
        block3Code.textContent = firstLevelData.htmlViewerContent;
        break;
      case "2":
        block1.innerHTML = secondLevelData.tableView;
        block3Code.textContent = secondLevelData.htmlViewerContent;
        break;
      case "3":
        block1.innerHTML = thirdLevelData.tableView;
        block3Code.textContent = thirdLevelData.htmlViewerContent;
        break;
      case "4":
        block1.innerHTML = forthLevelData.tableView;
        block3Code.textContent = forthLevelData.htmlViewerContent;
        break;
      case "5":
        block1.innerHTML = fifthLevelData.tableView;
        block3Code.textContent = fifthLevelData.htmlViewerContent;
        break;
      case "6":
        block1.innerHTML = sixthLevelData.tableView;
        block3Code.textContent = sixthLevelData.htmlViewerContent;
        break;
      case "7":
        block1.innerHTML = seventhLevelData.tableView;
        block3Code.textContent = seventhLevelData.htmlViewerContent;
        break;
      case "8":
        block1.innerHTML = eighthLevelData.tableView;
        block3Code.textContent = eighthLevelData.htmlViewerContent;
        break;
      case "9":
        block1.innerHTML = ninthLevelData.tableView;
        block3Code.textContent = ninthLevelData.htmlViewerContent;
        break;
      case "10":
        block1.innerHTML = tenthLevelData.tableView;
        block3Code.textContent = tenthLevelData.htmlViewerContent;
        break;
    }
  });
}
export let clickedLevel = clickLevel();

//LEVELS

const firstLevelData = {
  validation: () => {},
  htmlViewerContent: '<div class = "table" /><plate /></div>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel1"></div>',
};

const secondLevelData = {
  validation: () => {},
  htmlViewerContent: '<div class = "table" /><plate /><plate /></div>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel1"><img src="./images/plate.png" class="plateLevel2"></div>',
};

const thirdLevelData = {
  validation: () => {},
  htmlViewerContent: '<div class = "table" /><plate /><apple /></div>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel3"><img src="./images/apple.png" class="appleLevel3"></div>',
};

const forthLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<div class = "table" /><plate class="plate"/><apple class="apple"/></div>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel4"><img src="./images/apple.png" class="appleLevel4"></div>',
};

const fifthLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<div class = "table" /><plate id="plate"/><apple class="apple"/></div>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel1"><img src="./images/apple.png" class="appleLevel5"></div>',
};

const sixthLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<div class = "table" /><plate class="plate"/><apple class="apple"/><pear class="pear"/></div>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel6"><img src="./images/apple.png" class="appleLevel6"><img src="./images/pear.png" class="pearLevel6"></div>',
};

const seventhLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<div class = "table" /><plate class="plate" /><apple class="apple"/><plate class="plate" /><pear class="pear"/></div>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/apple.png" class="appleLevel7"><img src="./images/plate.png" class="plate2Level7"><img src="./images/pear.png" class="pearLevel7"></div>',
};

const eighthLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<div class = "table"><plate class="plate" /><apple id="apple"/><plate class="plate" /><pear id="pear"/></div>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/apple.png" class="appleLevel8"><img src="./images/plate.png" class="plate2Level7"><img src="./images/pear.png" class="pearLevel8"></div>',
};

const ninthLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<div class = "table"><plate class="plate" /><apple class="fruits" id="apple"/><plate class="plate" /><pear class="fruits" id="pear"/></div>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/apple.png" class="appleLevel9"><img src="./images/plate.png" class="plate2Level7"><img src="./images/pear.png" class="pearLevel9"></div>',
};

const tenthLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<div class = "table" /><plate class="plate" id="plate-first" /><apple id="apple"/><plate class="plate" id="plate-second" /><pear id="pear"/></div>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/plate.png" class="plate2Level10"><img src="./images/pear.png" class="pearLevel10"></div>',
};
