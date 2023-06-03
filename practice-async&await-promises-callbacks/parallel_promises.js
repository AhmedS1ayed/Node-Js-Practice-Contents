const p1 = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve({id:1 , name:"Ahmed"});
    },2000)
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve({id:2,name:"Travis"});
    },2000)
});

p3 = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        reject('error');
    },2000)
});

// it put all promises resolved in result
Promise.all([p1,p2]).then(result =>{console.log("promise all :") ; console.log(result);});


// if one fail then exception is thrown
Promise.all([p1,p2,p3]).then(result =>{console.log("promise all - one failed :") ; console.log(result);}).catch( err => console.log('error a promise failed'));

// first one resolved is the result
Promise.race([p1,p2,p3]).then(result =>{console.log("promise race :") ; console.log(result);});