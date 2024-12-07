
const itemInput = document.getElementById('item-input')
const addItemButton = document.getElementById('add-item-button')
const shoppingList = document.getElementById('shopping-list')
const listArr = []
function checkDuplicate() {
    const itemText = itemInput.value
    listArr.push(itemText)
    renderList()
}
function renderList() {
    shoppingList.innerHTML = ''
    listArr.forEach((gift) => {
        const listItem = document.createElement('li')
        listItem.textContent = gift
        shoppingList.appendChild(listItem)
    })
    itemInput.value = '';
}
addItemButton.addEventListener('click', checkDuplicate)
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkDuplicate()
    }
})
