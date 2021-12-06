const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const list = document.querySelector('.todo__list')

// 1.입력한 텍스트 가져오기
function onAdd(){
    const text = input.value;
    console.log(text);
    // 2.새로운 아이템 만든다 (+ 버튼까지)
    const item = createItem(text);
    // 3.list 컨테이너안에 새로만든투두리스트 추가
    list.appendChild(item);
    // 4.input 초기화
    input.value= '';
    input.focus();
}

function createItem(text){
    const todoRow = document.createElement('li');
    todoRow.setAttribute('class', 'todo__row');

    const todo = document.createElement('div');
    todo.setAttribute('class', 'todo');

    const todoName = document.createElement('span');
    todoName.setAttribute('class', 'todo__name');
    todoName.innerText = text;

    const delBtn = document.createElement('button');
    delBtn.setAttribute('class','todo__delete');
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    delBtn.addEventListener('click', function(){
        list.removeChild(todoRow);
    });

    const divider = document.createElement('div');
    divider.setAttribute = ('class', 'todo__divider');

    todo.appendChild(todoName);
    todo.appendChild(delBtn);
    todoRow.appendChild(todo);
    todoRow.appendChild(divider);

    return todoRow;
    // 마지막 4줄 다시 생각해보기
}
addBtn.addEventListener('click', function(){
    onAdd();
})

input.addEventListener('keypress', function(){
    
    if( event.key == 'Enter'){
        onAdd();
    }
})