const btn = document.querySelector("#btn");

btn.addEventListener("click", handleClick);

function handleClick() {
    console.log("Eureka!!!");
    document.body.style.backgroundColor ="pink";
    alert("You clicked the button 2!");  
}