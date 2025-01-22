// console.log(10);
// console.log(20);
// setTimeout(()=>{
//     console.log(30);
// })
// console.log(40);
// console.log(50);

// const { reject } = request("async");

// promise
// let p1 = new Promise((resolve , reject)=>{});
// console.log(p1);

// let p2 = new Promise((resolve , reject)=>{
//     resolve("Success");
// });
// p2.then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err))
// .finally(()=>console.log("final"))
// console.log(p2);

// let p3 = new Promise((resolve , reject)=>{
//     reject("Failures");

// });

// p3.then(res=>console.log(res))
// .catch(err=>console.log(err))
// .finally(()=>console.log("final"))
// console.log(p3);

// API FETCHING

function fetchUsers()
{
    let response = fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    response.then(res=>{
        // console.log(res);
        // console.log(res.json());
        return res.json().then(data=>{
            console.log(data);
        })
    })
    .catch(err=>console.log(err))

}
fetchUsers();