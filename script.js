console.log("hello");
const button = document.querySelector('button');
const input = document.querySelector('input[type="text"]');
const time = document.querySelector('input[type="time"]');
const list = document.querySelector('ul');
button.addEventListener('click', () => {
  if (input.value != '') {
    const li = document.createElement('li');
		li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    const span = document.createElement('span');
    span.classList.add('todo', 'badge-primary', 'badge-pill', 'p-3');
    const task = `<b>Task</b>`+ input.value + `<b> Time </b>`+time.value;
    li.innerHTML = task;
    span.appendChild(document.createTextNode('x'));
    li.appendChild(span);
    list.appendChild(li); 
    input.value = ''; // on réinitialise le input
  }
});
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('todo') === true) {
    e.target.parentElement.remove();
    }
});