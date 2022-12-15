const input = document.querySelector("#inputTodo")
const addBtn = document.querySelector(".btnAdd")
const ul = document.querySelector("ul")
const play = document.querySelector(".btn-pl")

var coders = new Array();
var cont = 0;

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const text = input.value

    coders.push(text);
    console.log(coders);
    

    if (text !== '') {
        const li = document.createElement("li")
        const p = document.createElement("p")

        p.textContent = text
        li.appendChild(p)
        li.appendChild(addDeleteBtn())
        ul.appendChild(li)
        input.value = ''
    }
})

const addDeleteBtn = () => {
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.className = "btnDelete"

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement
        ul.removeChild(item)

        const items = document.querySelectorAll('li')
        if (items.length === 0) {
            empty.style.display = 'block'
        }
    })

    return deleteBtn
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("list",JSON.stringify(coders));
    }
)

