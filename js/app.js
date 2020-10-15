document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");
  form.addEventListener('submit', handleForm);

  const deleteList = document.querySelector("#delete-button");
  deleteList.addEventListener('click', handleDeleteButton);

});

const handleForm = function(event) {
  event.preventDefault()

  const newListItem = document.createElement('li')

  const readingList = document.querySelector('#reading-list')
  newListItem.textContent = `${this.title.value}, ${this.author.value} ${this.category.value}`

  this.reset()

  readingList.appendChild(newListItem)

  console.dir(event.target)
}

const handleDeleteButton = function () {
  const readingList = document.querySelector('#reading-list');
  while(readingList.firstChild) {
    readingList.firstChild.remove()
  }
}