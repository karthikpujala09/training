// let ele = document.createElement("h1");
// ele.innerText= "dynamic creation of html element";
// // ele.id = "demo"
// ele.setAttribute("id" , "demo")
// console.log(ele);

// // ele.removeAttribute("id");
// document.body.appendChild(ele);


// let image = document.createElement("img");
// image.src= "./3606208.jpg";
// console.log(image);

// document.body.appendChild(image)


// let form = document.querySelector("form");
// let username = document.querySelector("#uName");
// let email = document.querySelector("#uMail");
// let psw = document.querySelector("#uPsw");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
    // console.log(event);
    // console.log("form submitted");
    // console.log(username.value);
    // let name =username.value;
    // let mail = email.value;
    // let password = psw.value;
    // let userDetails={
    //     name:name,
    //     mail : mail,
    //     password:password
    // } ;
    // console.log(userDetails);
    // localStorage.setItem("userData" , JSON.stringify(userDetails))
// })


// localStorage.clear()


//!   
// let mainEle = document.createElement("div");
// mainEle.setAttribute("id" , "mainBlock");

// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class" , "topBlock");


// let image = document.createElement("img");
// image.src="https://cdn.pixabay.com/photo/2022/06/14/15/30/egret-7262234_640.jpg";
// image.width="300";
// image.height="300";
// image.style.objectFit="cover"

// let bottonEle = document.createElement("div");
// bottomEle.setAttribute("class" , "bottomBlock");

// let h1 = document.createElement("hi");
// h1.innerText="CAT";

// let btn = document.appendChild(h1);
// btn.innerText="View More";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);

// document.appendChild(mainEle)

// !!

let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");

let gender = document.getElementsByName("gender");

form.addEventListener("submit" , event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let g
    for(let i = 0;i<=gender.length-1;i++){
        if(gender[i].checked == true){
            gen += gender[i].value;
        }
    };
    let userDetails={
        username:un,
        password:up,
        gender:gen

    };
    sessionStorage.setItem("userData" ,JSON.stringify)
})