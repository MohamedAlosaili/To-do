// window.localStorage.clear();

let input = document.querySelector(".text");
let add = document.querySelector(".add");
let tasksArea = document.querySelector(".tasks");

let tempArr = [];

if (localStorage.key(0) === "task") {
  tempArr = JSON.parse(localStorage.getItem("task"));
}

let leng = tempArr.length;

for (let i = 0; i < leng; i++) {
  createElement(i);
}

add.addEventListener("click", (e) => {
  if (+input.value !== 0) {
    leng = tempArr.length;

    tempArr[leng] = input.value;

    localStorage.setItem("task", JSON.stringify(tempArr));
    input.value = "";

    leng = tempArr.length;

    tasksArea.innerHTML = "";
    for (let i = 0; i < leng; i++) {
      createElement(i);
    }
  } else {
    input.value = "";
    e.preventDefault();
  }
});

function createElement(index) {
  let task = document.createElement("div");
  task.clasName = "task";

  let span = document.createElement("span");
  let spanText = document.createTextNode(
    JSON.parse(localStorage.getItem("task"))[index]
  );
  span.append(spanText);

  let btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = "delete";

  task.append(span, btn);

  tasksArea.append(task);
}
console.log(tempArr);
document.addEventListener("click", (e) => {
  document.querySelectorAll(".btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      tempArr.splice(index, 1);

      console.log(tempArr);
      localStorage.setItem("task", " ");

      localStorage.setItem("task", JSON.stringify(tempArr));

      btn.parentElement.remove();
    });
  });
});

// first solving

// let input = document.querySelector(".text");
// let add = document.querySelector(".add");
// let tasksArea = document.querySelector(".tasks");

// if (window.localStorage) {
//   for (let i = 0; i < window.localStorage.length; i++) {
//     createTasks(i);
//   }
// }

// add.addEventListener("click", (e) => {
//   if (input.value !== "") {
//     let length = window.localStorage.length;

//     window.localStorage.setItem(`task-${length}`, input.value);

//     tasksArea.innerHTML = "";
//     for (let i = 0; i < window.localStorage.length; i++) {
//       createTasks(i);
//     }

//     input.value = "";
//   } else {
//     e.preventDefault();
//   }
// });

// function createTasks(index) {
//   let task = document.createElement("div");
//   task.className = "task";

//   let span = document.createElement("span");
//   let spanText = document.createTextNode(
//     window.localStorage.getItem(`task-${index}`)
//   );
//   span.append(spanText);

//   let btn = document.createElement("button");
//   btn.className = "btn";
//   btn.textContent = "delete";

//   task.append(span, btn);

//   tasksArea.append(task);
// }

// document.addEventListener("click", () => {
//   document.querySelectorAll(".btn").forEach((item, index) => {
//     item.addEventListener("click", () => {
//       window.localStorage.removeItem(`task-${index}`);
//       item.parentElement.remove();
//     });
//   });
// });
