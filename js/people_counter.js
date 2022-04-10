function increment() {
    let count = parseInt(document.getElementById("count-el").innerText)

    count = count + 1

    document.getElementById("count-el").innerText = count
}

function save() {
    let curr_count = parseInt(document.getElementById("count-el").innerText)

    alert("The current count is " + curr_count)
}

function reset() {
    document.getElementById("count-el").innerText = 0
}