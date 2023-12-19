let inputs = document.getElementById("textinput");
let text = document.querySelector(".newinput");
function add() {
    if (inputs.value == "") {
        alert("put text");
    }
    else {
        let element = document.createElement("li");
        element.innerHTML = inputs.value;
        text.appendChild(element);
        let span = document.createElement("span");
        span.innerHTML = '<i class="fas fa-trash"></i>';
        element.appendChild(span);
        console.log(element);
        inputs.value = "";
        element.querySelector("span").addEventListener("click", remove);
        function remove() {
            element.remove()
        }
        element.addEventListener("click",checking);
        function checking(e){
            if(e.target.tagName==="LI"){
                e.target.classList.toggle("checked");
            }
        }

    }
}



