let taskCounter = 0;
const list = document.querySelector('.task-list');
const counter = document.getElementById('pending-tasks');;

function createTask(){

    const task = document.getElementById('todo-input').value;

    if(!task){

        alert('Please enter a task');
        return;

    }

    const doTask = document.createElement('div');
    doTask.classList.add('task');

    const content = document.createElement('p');
    content.textContent = task;
    
    const image = document.createElement('img');
    image.src = '/imgs/delete.png';
    image.alt = 'delete task'
    image.style.width = '25px';
    image.style.cursor = 'pointer';

    image.onclick = () => {
        
        list.removeChild(doTask); 
        taskCounter--;
        counter.textContent = taskCounter;

    }

    doTask.append(content,image);

    list.append(doTask);

    taskCounter++
    counter.textContent = taskCounter;

    document.getElementById('todo-input').value = "";

}

function clearTask(){

   list.innerHTML = '';
   taskCounter = 0;
   counter.textContent = taskCounter;

};