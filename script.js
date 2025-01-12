const localStorageKey = 'to-do-list-Gilvanjr'

function newtask() {
    let input = document.getElementById('input-new-task')

    //Validation
    if (!input.value) {
        alert(' Digite algo para  inserir em um lista ')
    }
    //else if ( )
    else {
        //increment to localstorege 
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON,stringify(values))
        showValues()
    }

}

function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for (let i = 0; i < values.lenght; i++) {
        list.innerHTML += `<li>${values[i]['name']} <button id='btn-ok' onclik='removeItem'>ok</button> </li>`

    }
}
showValues()