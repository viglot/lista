const input = document.getElementById('todo');
const button = document.getElementById('add')
const list = document.getElementById('list');

const todos = [
  {text: 'hej på dej', done: false},
  {text: 'Programmera', done: true},
  {text: 'gå hem', done: false}
];

button.addEventListener('click', onButtonClicked);

updateView();

function onButtonClicked() {

  // Arrayfunktionen push lägger till en item till arrayns sista plats.
  todos.push({
    text: input.value,
done: false
  });

  updateView();

}

function updateView(){

  list.innerHTML = '';
  for(let i = 0; i < todos.length; i++)
{
  // 1. Skapa ett li element: <li></li>
  const li = document.createElement('li');
  li.dataset.index = i;
  // 2. Ändra på texten inuti li-elementet: <li>Programmera</li>
  li.textContent = todos[i].text;
  // 3. Lägg till li-elementet till vårt ul-element
  if(todos[i].done){
    li.style.textDecoration = 'line-through'
  }
  list.appendChild(li);

  li.addEventListener('click', onItemClicked);
}
}


function onItemClicked(e) {

  todos[e.target.dataset.index].done = !todos[e.target.dataset.index].done;
  

  updateView();
}