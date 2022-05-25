document.addEventListener("DOMContentLoaded", (e) =>{
    // alert("I have loaded and parse!")--worked


    //h1, text, & mouse event creation
  let h1 = document.createElement('h1')
  document.querySelector('header').appendChild(h1)
    h1.textContent = "Activity Bot"
    h1.addEventListener("mouseover", (e) =>{
        e.target.style.color = "#cedbdd";
    setTimeout (function(){
        e.target.style.color = "";
        }, 500);
        }, false);
      
//placeholder for activity text to display
    let actHolder = document.createElement('h4')
    document.getElementById("activity").append(actHolder)
    //activity button Event
    document.getElementById('btn').addEventListener('mouseenter',(e) =>{
        e.target.style.color = "blue";

    } )

    document.getElementById('btn').addEventListener("click", (e) =>{
        // console.log("I Work")--worked
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)--it displayed
       actHolder.textContent = data.activity

    })
  
})})

