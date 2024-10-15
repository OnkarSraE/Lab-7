const form = document.querySelector('form');
const taskList = document.getElementById('tasklist');

function addTask(task) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input type ="checkbox" /> <span>${task}</span> <button>🗑️</button>`;
    taskList.appendChild(listItem);


    const checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        listItem.classList.toggle('completed');
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('inputtext');
    const task = input.value;
    addTask(task);
    input.value = ''
})



taskList.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){
        const listItem = event.target.parentElement
        taskList.removeChild(listItem);
    }
})


