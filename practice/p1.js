// let h1 = document.createElement("h1");
// h1.textContent = "Hello Ji Kaise Hoo..?";
// document.querySelector("body").prepend(h1);
// console.log(h1);


// let h1 = document.createElement("h1");
// h1.textContent = "Hello Ji Kaise Hoo..?";
// document.querySelector("div").appendChild(h1);

// document.querySelector("h1").textContent = "Hello"

// let ul = document.querySelector("ul")
// let li = document.createElement("li")
// li.innerHTML = "<li>l3</li>"
// ul.append(li);

// let ul = document.querySelector("ul")
// let li = document.querySelector("li")
// ul.removeChild(li);

// let li = document.querySelector("li")
// li.style.bgColor = "red"

// let li = document.querySelector("li")
// li.addEventListener("click",function(){
//     li.style.color = "red";
// })

// let input = document.querySelector("input")
// let count = 0;
// input.addEventListener("input",function(typed){
//     // console.log(typed.data)
//     // count++;
//     // console.log(count)
//     console.log(`count ${count++}`)
    
// })

// let sel = document.querySelector("select")
// sel.addEventListener("change",function(){
//     alert("Changed")
// })

// let body = document.querySelector("body")
// body.addEventListener("keydown",function(){
//     document.body.style.backgroundColor = "red"
// })

// let h1 = document.querySelector("h1")
// window.addEventListener("keydown",function(dets){
//     h1.textContent = dets.key 
// })

// let input = document.querySelector("input")
// let h3 = document.querySelector("h3")
// input.addEventListener("keyup",function(){
//     h3.textContent = "characters: "+input.value.length
// })

// let h3 = document.querySelector("h3")
// h3.addEventListener("click",function(){
//     h3.style.color="red"
// })

// window.addEventListener("beforeunload", function (event) {
//     event.preventDefault();
//     event.returnValue = "";  // required for Chrome
// });

let button = document.querySelector("button")

button.addEventListener("mouseover",function(){
    console.log("MouseOver")
})




