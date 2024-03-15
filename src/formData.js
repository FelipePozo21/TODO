form.addEventListener('submit', e => {
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
        )
    closeForm()
    createCard(JSON.stringify(data))
    title.value = ''
    date.value = ''
    description.value = ''
})
// form.textContent = ''