
btnList.addEventListener('click', displayForm)
btnForm.addEventListener('click', loadList)
spanForm.addEventListener('click', closeForm)

function displayForm() {
    console.log('test')
    form.classList.replace('hidden', 'flex')
}
function loadList() {
    let insert = `
        <div class="border-2 border-[#31304D] w-72 min-h-56 h-auto rounded-xl flex p-2 relative justify-between flex-col">
        <span class="absolute top-1 right-4 cursor-pointer">x</span>
        <p class="ml-2 mt-2 pb-2 border-2 border-b-[#31304D] border-transparent">${title.value}</p>
        <p class="ml-2 mt-2 pb-2">${description.value}</p>
        <p class="ml-2 mt-2 pb-2 border-2 border-t-[#31304D] border-transparent">date</p>
        </div>
    `
    articleList.innerHTML = insert
    closeForm()
}
function closeForm() {
    form.classList.replace('flex', 'hidden')
}