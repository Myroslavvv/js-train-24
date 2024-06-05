console.log("Завдання: 10 ==============================");

function task10() {
  // Створюємо проміс promise1, які вирішуються через 500мс, та повертають як успішне виконання рядок "Promise 1".
  // Створюємо проміс promise2, які вирішуються через 200мс, та повертають як успішне виконання рядок "Promise 2".
  // Створюємо проміс promise3, які вирішуються через 300мс, та повертають як успішне виконання рядок "Promise 3".
  // Promise.any() приймає масив промісів які ми створили вище і вирішується, як тільки перший із цих промісів вирішується.
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1"),500
    });
  });
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2"),200
    });
  });
  let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3"),300
    });
  });

  Promise.any([promise1, promise2, promise3]) 
    .then((value) => { 
      console.log(value); 
    })
    .catch((error) => { 
      console.error("Помилка:", error.message); 
    });
  
}

// Викликаємо функцію task10
task10();

//=======================================================================================
// console.log("Завдання: 10 ДРУГИЙ ВАРІАНТ ==============================");

// function task10() {
  // Створюємо проміс promise1, які вирішуються через 500мс, та повертають як успішне виконання рядок "Promise 1".
  // Створюємо проміс promise2, які вирішуються через 200мс, та повертають як успішне виконання рядок "Promise 2".
  // Створюємо проміс promise3, які вирішуються через 300мс, та повертають як успішне виконання рядок "Promise 3".
  // Promise.any() приймає масив промісів які ми створили вище і вирішується, як тільки перший із цих промісів вирішується.
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
//   let promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "Promise 1");
//   });
//   let promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, "Promise 2");
//   });
//   let promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 300, "Promise 3");
//   });

//   Promise.any([promise1, promise2, promise3]) 
//     .then((value) => { 
//       console.log(value); 
//     });
  
// }

// Викликаємо функцію task10
// task10();

