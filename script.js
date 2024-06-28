// let h1 = document.querySelector('#sentence');
// let sentence = 'i am a web developer';

// function display(sentence) {
//     for (let i = 0; i < sentence.length; i++) {
//         setTimeout(function() {
//             h1.innerHTML += sentence[i];
//             console.log(h1)
//         }, i * 200); 
//         // delay increases with each iteration
//     }
// }

// display(sentence);
// let data = true;
// let promise = new Promise((resolve , reject)=>{
//     if(data){
//         setTimeout(()=>{
//             resolve("data has successfully been fetched")   
//         },1000);
//     }
//     else{
//         reject("data is not available")
//     }
// })
// promise.then((result)=>{
//     console.log(result)
// })
// console.log(promise)

const url = 'https://jsonplaceholder.typicode.com/users';
let image = "./user.png"
const makeRequest =(URL)=>{
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    console.log(xhr.readyState)
    xhr.open('GET',URL , true);
    console.log(xhr.readyState);
    xhr.onreadystatechange = function(){
        if(xhr.status >= 200 && xhr.status<=300 && xhr.readyState ===4){
            const data = JSON.parse(xhr.response);
            populateData(data)
        }
    }

    xhr.send()
    // console.log(xhr.readyState);

}
makeRequest(url);
function populateData(data){
    let asideUL = document.querySelector('.asideUl')
    console.log(asideUL)
    Array.from(data)
    .forEach(obj => {
        console.log(obj);
        let li = document.createElement('li');
        li.id = obj.id
        li.className = "list_item";
        li.innerHTML= obj.username;
        li.addEventListener('click', function(e){
            let userId = e.target.id 
            displayUser(userId , obj ,userId)
            
        })
        asideUL.append(li);
    });
    // document.createElement('li')
}
function displayUser(id , user , userId){
    console.log(userId)
    console.log(user)
    let main = document.querySelector('.main')
    main.innerHTML = `<div class="card">
      <figure>
        <img src=${image} alt="" class="image">
      </figure>
      <div class="nameDiv">
        <p class="name">Name : ${user.name}</p>
        <p class="username">UserName : ${user.username}</p>
      </div>  
      <div class="contacts">
        <a href="mailto:${user.email}"><span>Email </span> :${user.email}</a>
        <br/>
        <a href="tel:+${user.phone}"><span>Phone </span> :${user.phone}</a>
      </div>
      <div class="address">
        <address>${user.address.street} </address>
      </div>
    </div>`
}    