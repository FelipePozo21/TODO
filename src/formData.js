form.addEventListener('submit', async e => {
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
        )
    const localStorageForm = await localStorageData(data)
    if(localStorageForm) {
        console.log('test')
        closeForm()
        createCard(JSON.stringify(data))
        title.value = ''
        date.value = ''
        description.value = ''
    } else {
        alert('ya existe')
    }
})
