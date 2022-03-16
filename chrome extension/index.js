
let myLinks = []
const userInput = document.getElementById("extension")
let btnClick = document.getElementById("extension-btn")
const ulList = document.getElementById("ul-list")

let ls = JSON.parse(localStorage.getItem("myLinks"))

if(ls) {
    mylinks=ls
    render()
}

btnClick.addEventListener("click", function () {
    myLinks.push(userInput.value)
    userInput.value=""

    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    render()
    console.log(localStorage.getItem("mylinks"))
})

function render() {
    let listItems=""
    for (let i = 0; i < myLinks.length; i++) {
        //listItems += "<li> <a target='_blank' href='" + myLinks[i] +"'>" + myLinks[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${myLinks[i]}'>
                    ${myLinks[i]}
                </a>
            </li>
        `
    }
    ulList.innerHTML=listItems
}