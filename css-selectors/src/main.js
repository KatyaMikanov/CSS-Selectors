const levelKey = "level";

const levelHandler = (nextLevel) => {
  const block1 = document.querySelector(".block_1");
  const block3Code = document.querySelector(".code");
  const currentLevelElement = document.getElementById(`level_${nextLevel}`);

  currentLevelElement.classList.add("selected");
  const block4All = document.querySelector(".block4");
  for (const child of block4All.children) {
    if (nextLevel !== child.innerHTML.slice(-1)) {
      child?.classList?.remove("selected");
    }
  }

  switch (nextLevel) {
    case "1":
      block1.innerHTML = firstLevelData.tableView;
      block3Code.innerHTML = firstLevelData.htmlViewerContent;
      break;
    case "2":
      block1.innerHTML = secondLevelData.tableView;
      block3Code.innerHTML = secondLevelData.htmlViewerContent;
      break;
    case "3":
      block1.innerHTML = thirdLevelData.tableView;
      block3Code.innerHTML = thirdLevelData.htmlViewerContent;
      break;
    case "4":
      block1.innerHTML = forthLevelData.tableView;
      block3Code.innerHTML = forthLevelData.htmlViewerContent;
      break;
    case "5":
      block1.innerHTML = fifthLevelData.tableView;
      block3Code.innerHTML = fifthLevelData.htmlViewerContent;
      break;
    case "6":
      block1.innerHTML = sixthLevelData.tableView;
      block3Code.innerHTML = sixthLevelData.htmlViewerContent;
      break;
    case "7":
      block1.innerHTML = seventhLevelData.tableView;
      block3Code.innerHTML = seventhLevelData.htmlViewerContent;
      break;
    case "8":
      block1.innerHTML = eighthLevelData.tableView;
      block3Code.innerHTML = eighthLevelData.htmlViewerContent;
      break;
    case "9":
      block1.innerHTML = ninthLevelData.tableView;
      block3Code.innerHTML = ninthLevelData.htmlViewerContent;
      break;
    case "10":
      block1.innerHTML = tenthLevelData.tableView;
      block3Code.innerHTML = tenthLevelData.htmlViewerContent;
      break;
  }

  mouseEventListener();
};

const clickLevelListener = () => {
  const wrapperForBlock4 = document.querySelector(".block4");

  wrapperForBlock4.addEventListener("click", function (e) {
    let currentLevel = e.target;
    let numberCurrLevel = currentLevel.textContent.slice(
      3,
      currentLevel.length
    );
    sessionStorage.setItem(levelKey, numberCurrLevel);
    levelHandler(numberCurrLevel);
  });
};

//correct answers
const selectors = [
  "plate",
  "plate",
  "apple",
  ".apple",
  "#plate",
  ".pear",
  ".apple",
  "#pear",
  ".fruits",
  "#plate-second",
];

const clickEnterListener = () => {
  const enterButton = document.getElementById("enter_button");
  enterButton.addEventListener("click", () => {
    const currentNumberLevel = sessionStorage.getItem(levelKey);
    const currentLevel = document.getElementById(`level_${currentNumberLevel}`);
    const input = document.querySelector(".input");
    if (input.value === selectors[Number(currentNumberLevel) - 1]) {
      currentLevel.classList.remove("red");
      currentLevel.classList.add("green");
      input.value = "";
      const next = `${Number(currentNumberLevel) + 1}`;
      sessionStorage.setItem(levelKey, next);
      levelHandler(next);
    } else {
      currentLevel.classList.remove("green");
      currentLevel.classList.add("red");
      input.value = "";
    }
  });
};

sessionStorage.setItem(levelKey, "1");
window.addEventListener("DOMContentLoaded", (event) => {
  const level = sessionStorage.getItem(levelKey);
  levelHandler(level);
  clickLevelListener();
  clickEnterListener();
  mouseEventListener();
});

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

const block4 = document.querySelector(".block4");
//create 10 levels in Block_4
function getArr() {
  const newArr = new Array(10).fill();
  return newArr.map((_, index) =>
    newElement({
      tag: "p",
      params: {
        classList: ["levelsP"],
        innerHTML: `&#x2713  ${index + 1}`,
        id: `level_${index + 1}`,
      },
      parent: block4,
    })
  );
}
getArr();

const mouseEventListener = () => {
  const codeTags = document.querySelectorAll(".highlight-on-hover");
  codeTags.forEach((codeTag) => {
    // Get all the span elements inside the code tag
    const spanElements = codeTag.querySelectorAll("span");

    spanElements.forEach((span) => {
      span.addEventListener("mouseover", () => {
        // Add the "code-highlight" class to the individual span on mouseover
        span.classList.add("code-highlight");
      });

      span.addEventListener("mouseout", () => {
        // Remove the "code-highlight" class from the individual span on mouseout
        span.classList.remove("code-highlight");
      });
    });
  });
};

//create BUTTON "Reset Progress"
export let buttonBlock4 = newElement({
  tag: "button",
  params: { classList: ["buttonBlock4"], textContent: "Reset Progress" },
  parent: block4,
});

//LEVELS

const firstLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<span>&lt;div class="table"&gt;</span>\r\n<span>&lt;plate /&gt;</span>\r\n<span>&lt;/div&gt;</span>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel1"></div>',
};

const secondLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<span>&lt;div class="table"&gt;</span>\r\n<span>&lt;plate /&gt;</span>\r\n<span>&lt;plate /&gt;</span>\r\n<span>&lt;/div&gt;</span>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel1"><img src="./images/plate.png" class="plateLevel2"></div>',
};

const thirdLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<span>&lt;div class="table"&gt;</span>\r\n<span>&lt;plate /&gt;</span>\r\n<span>&lt;apple /&gt;</span>\r\n<span>&lt;/div&gt;</span>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel3"><img src="./images/apple.png" class="appleLevel3"></div>',
};

const forthLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<span>&lt;div class="table"&gt;</span>\r\n<span>&lt;plate class="plate"/&gt;</span>\r\n<span>&lt;apple class="apple"/&gt;</span>\r\n<span>&lt;/div&gt;</span>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel4"><img src="./images/apple.png" class="appleLevel4"></div>',
};

const fifthLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<span>&lt;div class="table"&gt;</span>\r\n<span>&lt;plate id="plate"/&gt;</span>\r\n<span>&lt;apple class="apple"/&gt;</span>\r\n<span>&lt;/div&gt;</span>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel1"><img src="./images/apple.png" class="appleLevel5"></div>',
};

const sixthLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<span>&lt;div class="table"&gt;</span>\r\n<span>&lt;plate class="plate"/&gt;</span>\r\n<span>&lt;apple class="apple"/&gt;</span>\r\n<span>&lt;pear class="pear"/&gt;</span>\r\n<span>&lt;/div&gt;</span>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel6"><img src="./images/apple.png" class="appleLevel6"><img src="./images/pear.png" class="pearLevel6"></div>',
};

const seventhLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<span>&lt;div class="table"&gt;</span>\r\n<span>&lt;plate class="plate"/&gt;</span>\r\n<span>&lt;apple class="apple"/&gt;</span>\r\n<span>&lt;plate class="plate"/&gt;</span>\r\n<span>&lt;pear class="pear"/&gt;</span>\r\n<span>&lt;/div&gt;</span>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/apple.png" class="appleLevel7"><img src="./images/plate.png" class="plate2Level7"><img src="./images/pear.png" class="pearLevel7"></div>',
};

const eighthLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<span>&lt;div class="table"&gt;</span>\r\n<span>&lt;plate class="plate"/&gt;</span>\r\n<span>&lt;apple class="apple"/&gt;</span>\r\n<span>&lt;plate class="plate"/&gt;</span>\r\n<span>&lt;pear class="pear"/&gt;</span>\r\n<span>&lt;/div&gt;</span>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/apple.png" class="appleLevel8"><img src="./images/plate.png" class="plate2Level7"><img src="./images/pear.png" class="pearLevel8"></div>',
};

const ninthLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<span>&lt;div class="table"&gt;</span>\r\n<span>&lt;plate class="plate"/&gt;</span>\r\n<span>&lt;apple class="apple" id="apple/&gt;</span>\r\n<span>&lt;plate class="plate"/&gt;</span>\r\n<span>&lt;pear class="pear" id="pear/&gt;</span>\r\n<span>&lt;/div&gt;</span>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/apple.png" class="appleLevel9"><img src="./images/plate.png" class="plate2Level7"><img src="./images/pear.png" class="pearLevel9"></div>',
};

const tenthLevelData = {
  validation: () => {},
  htmlViewerContent:
    '<span>&lt;div class="table"&gt;</span>\r\n<span>&lt;plate class="plate" id="plate-first"/&gt;</span>\r\n<span>&lt;apple id="apple/&gt;</span>\r\n<span>&lt;plate class="plate" id="plate-second"/&gt;</span>\r\n<span>&lt;pear id="pear/&gt;</span>\r\n<span>&lt;/div&gt;</span>',
  tableView:
    '<div class="block1ForLevel1"><img src="./images/table.png" class="tableLevel1"><img src="./images/plate.png" class="plateLevel7"><img src="./images/plate.png" class="plate2Level10"><img src="./images/pear.png" class="pearLevel10"></div>',
};
