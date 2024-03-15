btnList.addEventListener('click', displayForm)
spanForm.addEventListener('click', closeForm)


function displayForm() {
    form.classList.replace('hidden', 'flex')
}

function closeForm() {
    form.classList.replace('flex', 'hidden')
}
