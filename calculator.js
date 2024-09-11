var h1 = document.getElementById('heading')

function handleclick(value) {
    if (h1.innerHTML == 0) h1.innerHTML = value
     else h1.innerHTML += value
}

function sum() {
    h1.innerHTML = eval(h1.innerHTML)
}