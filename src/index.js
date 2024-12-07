// window.onload = () => {
  fetch('fidgets/toDoList/toDoList.html')
      .then(response => response.text())
      .then(html => document.getElementById('toDoList').innerHTML = html);


  fetch('fidgets/budget/budget.html')
      .then(response => response.text())
      .then(html => document.getElementById('budget').innerHTML = html);


  fetch('fidgets/food/food.html')
      .then(response => response.text())
      .then(html => document.getElementById('food').innerHTML = html);
// }