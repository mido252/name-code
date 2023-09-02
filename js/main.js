// //!------------- Training ---------------

// let test = document.getElementById("test");
// let btn = document.getElementById("quote");
// let obj = [];
// btn.addEventListener("click", function () {
//   test.classList.toggle("look");
//   btn.classList.toggle("m-3");
//   // test.innerHTML = `It ain't about how hard you're hit, it's about how you can get hit and keep moving forward. How much you can take and keep moving forward`;
// });

// let input = document.getElementById("input");
// let alert = document.getElementById("wellcome");
// input.addEventListener("focus", () => {
//   alert.classList.toggle("d-none");
// });
// input.addEventListener("blur", () => {
//   alert.classList.toggle("d-none");
// });

// //!-------------------------------------------- API -- AJAX Steps --------------------------------------------
// let myHttps = new XMLHttpRequest(); // new keyword take copy from XMLHttpRequest and store it in --> myHttps
// //           Method            Main url                    Api
// myHttps.open("GET", "https://jsonplaceholder.typicode.com/posts"); // -------------------> Establish Conection
// myHttps.send(); //---------> Send Request
// /*  Ready State --->  0- Request not initialized
//                       1- Server connection established
//                       2- Request recevied
//                       3- Processing request
//                       4- Request finished and response is ready
// */

// myHttps.addEventListener("readystatechange", () => {
//   if (myHttps.readyState == 4) {
//     let text = myHttps.response;
//     obj = JSON.parse(text);
//     test.innerHTML = `${obj[3].title} 😼`;
//     // displayData();
//     // console.log(obj);
//   }
// });
// console.log(obj);
// function displayData() {
//   let cols = "";
//   for (let i = 0; i < obj.length; i++) {
//     cols += `
//     <div id="card-data" class="card m-4 w-25 text-start text-center">
//     <div class="card-body">
//     <h4 class="card-title">${obj[i].id}✌️</h4>
//     <p class="card-text">${obj[i].title}</p>
//   </div></div>
//  `;
//     document.querySelector(".nerd").innerHTML = cols;
//   }
// }

// btn.addEventListener("click", () => {
//   displayData();
// });

//!----------------------------------------------------------------------------------------------------------------------------------
let cardBox = document.getElementById("card-box");
let links = document.querySelectorAll(".navbar .nav-link");

let data = [];

function getApidata(meal) {
  let https = new XMLHttpRequest();
  https.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${meal}`);
  https.send();

  https.addEventListener("readystatechange", () => {
    if (https.readyState == 4) {
      let obj = JSON.parse(https.response);

      data = obj.recipes;
      displayData();
    }
  });
}
function displayData() {
  card = ``;
  for (let i = 0; i < data.length; i++) {
    card += `
    <div class="box mt-4 col-md-6 col-lg-4 d-flex justify-content-center">
    <div class="card" style="width: 20rem; ">
      <img src="${data[i].image_url}" class="card-img-top w-100" alt="Meal" />
      <div class="card-body">
        <h5 class="card-title">Meal Name</h5>
        <p class="card-text">${data[i].title}</p>
        <a target="_blank" href="${data[i].source_url}" class="btn btn-primary">Meal Details</a>
      </div>
    </div>
  </div>`;
    cardBox.innerHTML = card;
  }
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    var arrow = links[i].innerHTML;
    getApidata(`${arrow}`);
  });
}
//!-----------------  Events ----------
/*
demo.style.backgroundColor = "#fff";
demo.style.textAlign = "center";
demo.style.color = "black";
demo.style.padding = "20px";
demo.style.borderRadius = "8px";
demo.style.margin = "50px";
*/
/*
demo.style.cssText = `
background-color:#fff;
text-align:center;
padding:20px;
border-radius:8px;
margin:100px;
`;
*/
/*
demo.classList.add("m-auto", "p", "border-r");
demo.classList.remove("m-auto", "p");
demo.classList.toggle("m-auto");
demo.classList.toggle("p"); // Add Class = "p" if  Not Found  ||    Remove  Class = "p" if Found
console.log(demo.classList.contains("p")); // Return 'True' if Found  |  Return 'False' if Not Found
demo.classList.replace("p", "border-r"); // Replace Class = "p" With  | Class = " border-r"
*/
