function localStorageData(data) {
    let title  = data.title

    if(!localStorage.getItem(title)) {
        localStorage.setItem(title, JSON.stringify(data))
        return true
    } 
}