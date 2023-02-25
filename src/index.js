import "./components/todoComponent/todoItem.js"

const addButton = document.getElementById('add-button')
const clearButton = document.getElementById('clear-button')
const itemComponent = document.getElementsByClassName('to-do-item')
const descriptionInput = document.getElementById('input-description')
const itemList = document.getElementById('items-list')
const items = []
console.log(items)

refreshList();

function addItem() {
    items.unshift({
        description: descriptionInput.value,
        finished: false
    })
    console.log(items)
    refreshList()
}

function refreshList() {
    itemList.innerHTML = ''

    for (const item of items) {
        const element = document.createElement('to-do-item')
        updateItem(element, 'description', item.description)
        updateItem(element, 'finished', item.finished)

        itemList.append(element)
        console.log(element)

        const checkbox = element.shadowRoot.querySelector(".to-do-checkbox")
       
        checkbox.addEventListener("change", () => {
            item.finished = !item.finished
            updateItem(element, 'finished', item.finished)
            console.log(item)
        })
    }
}

function clearList() {
    for (let i = 0; i < items.length; i++) {
        items.splice(0, items.length);
    }
    refreshList()
    console.log(items)
}

addButton.addEventListener("click", () => {
    addItem()
    descriptionInput.value = ''
})

clearButton.addEventListener("click", () => {
    clearList()
    console.log('cleared!')
})

function updateItem(item, key, value) {
    item[key] = value
    item.setAttribute(key, value)
}


