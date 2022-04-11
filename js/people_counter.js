function increment() {
    let count = parseInt(document.getElementById("count-el").textContent)

    count = count + 1

    document.getElementById("count-el").textContent = count
}

function save() {
    let curr_count = parseInt(document.getElementById("count-el").textContent)

    alert("The current count is " + curr_count)
}

function reset() {
    document.getElementById("count-el").textContent = 0
}