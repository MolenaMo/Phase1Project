document.addEventListener("DOMContentLoaded", (e) =>{
    // alert("I have loaded and parse!")--worked

    //Title creation and Text
  let title = document.createElement('h1')
  document.querySelector('header').appendChild(title)
    title.textContent = "Activity Bot"
    title.addEventListener("mouseover", (e) =>{
     e.target.style.color = "white";}
    )
   
//placeholder for activity text to display
    let actHolder =  document.createElement('h4')
    document.getElementById("activity").appendChild(actHolder)
   
    document.getElementById('btn').addEventListener("click", (e) =>{
        // console.log("I Work")--worked
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)--it displayed
       actHolder.textContent = data.activity

    })
 
})})

