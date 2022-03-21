let button = document.querySelector('.container button');
let joke = document.querySelector('.container p');

button.addEventListener('click', getJokes);

async function getJokes(){
    let data = await fetch('https://icanhazdadjoke.com',{
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    });
    let jokeObject = await data.json();
    joke.innerHTML = jokeObject.joke;
}

localStorage.setItem("greeting", "Hello I am saved in local storage!");
// Retrieve
document.getElementById("storage").innerHTML = localStorage.getItem("greeting");
















// async function start() {
//     const response = await fetch("https://api.humorapi.com/jokes/search?api-key=29d3392f1adc4b048067f12167883b00")
//     const data = await response.json()
//     createExcusesList(data.message)
// }

// start()

//  function createExcusesList(excuseList) {
//     document.getElementById("excuses").innerHTML = `
// //         <select onchange = "loadByCategory(this.value)">
// //             <option>Choose a category</option>
// //             <option>College</option>
// //             <option>Office</option>
// //             <option>Party</option>
// //             <option>Family</option>
// //             <option>Children</option>
// //         </select>
// //     `
// // }

// async function loadByCategory(excuses) {
//     if (excuses != "Choose a category") {
//         const response = await fetch("https://excuser.herokuapp.com/v1/excuse")
//         const data = await response.json()
//         showExcusesList(data.message)
//     }
// }

// function showExcusesList(excuses){
//     document.getElementById("show").innerHTML = `
//     <p> joke here ${excuses}</p>
//     `
// }