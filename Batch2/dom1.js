let ele = document.createElement("h1");
ele.innerText= "dynamic creation of html element";
ele.setAttribute("id" , "demo")
console.log(ele);

document.body.appendChild(ele);

let image = document.createElement("img");
image.src= "./3606208.jpg";
console.log(image);

document.body.appendChild(image)