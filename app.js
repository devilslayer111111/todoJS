const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const generateTemplate = todo =>
    {
         const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
         <span>${todo}</span>
         <i class="far fa-trash-alt delete"></i>
       </li>`;
       list.innerHTML += html;
    }

addForm.addEventListener('submit', e =>
    {
        e.preventDefault(); //To stop the page from reloading what is default behavior after submission
        const todo = addForm.add.value.trim();//class name.value gives the text inside it
        //trim method is used above of javascript to trim the blank spaces in the string so that it looks neat
        if(todo.length){
        generateTemplate(todo);
        addForm.reset(); // This resets the form value makes it blank after submit
    }
    }
)
   list.addEventListener('click',(e)=>
{
    e.preventDefault();// e is the object of event listener that contains all the info of the event
    if(e.target.classList.contains('delete'))
        {
            e.target.parentElement.remove();//.parentElement takes the li element as parent and .remove() method deletes it from the list 
        }
});