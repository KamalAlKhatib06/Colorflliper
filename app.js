const colors = ["green", "purple", "#11adec", "rgba(100 , 200 ,32)"]

let btn = document.getElementById("btn")
let color = document.querySelector(".color")

btn.addEventListener("click", function () {
    let randomNumber = random()
    color.textContent = colors[randomNumber]
    document.body.style.backgroundColor = colors[randomNumber]

})
function random() {
    return Math.floor(Math.random() * colors.length)
}