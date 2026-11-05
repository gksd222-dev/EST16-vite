import { loadStorage } from "./storage";
import { addTodo } from "./todo";
import type { Todo } from "./type";
import  S  from "/src/style.module.css";


const tag = /* html */`
  <div class="${S.container}">
    <button type="button" class="completed">완료 항목만 보기</button>
    <hr/>
  
    <form>
      <label for="todo">할 일 : </label>
      <input type="text" id="todo"/>
      <button type="submit">추가</button>
    </form>

    <hr/>
    <ul id="renderPlace"></ul>
  </div>
`

document.querySelector('#app')?.insertAdjacentHTML('beforeend',tag);

const input = document.querySelector('#todo') as HTMLInputElement; // input 태그가 맞아 무조건 DOM에 존재해.
const form = document.querySelector('form');
const list = document.querySelector('#renderPlace') as HTMLUListElement;

function handleSubmit(e:SubmitEvent){
  e.preventDefault();

  if(!input.value.trim()) return;


  addTodo(input.value.trim())

  input.value = '';
  

}

function render(){
  const todos:Todo[] = loadStorage();

  list.textContent = '';
  todos.forEach((todo:Todo)=>{
    const li = document.createElement('li');
    li.dataset.id= String(todo.id);
    li.innerHTML = `<span>${todo.content}</span>`
    list.appendChild(li);
  })


}

render()
//데이터를 만들고 로컬스토리지에 입력하고, 
//출력할때는 다시 가져와서 출력한다.


form?.addEventListener('submit',handleSubmit);























