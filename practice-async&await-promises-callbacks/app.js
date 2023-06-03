// Undefined --------------------------------------------

// console.log('before');
// const user = getuser(3);
// console.log(user);
// console.log('after');

// function getuser(id)
// {
//     setTimeout(()=>{
//         console.log('user returned');
//         return{id:id,gitHubUsername:'Ahmed'};
//     },2000);
// }

// Undefined --------------------------------------------

//Solution :

//using callbacks

console.log("before");

getuser(3, (obj) => {
  console.log(`id = ${obj.id} , gitHubUsername = ${obj.gitHubUsername}`);
  getRepository(obj.gitHubUsername, getCommits);
});

console.log("after");

function getuser(id, cb) {
  setTimeout(() => {
    cb({ id: id, gitHubUsername: "Ahmed" });
  }, 2000);
}

function getRepository(username, cb) {
  setTimeout(() => {
    cb(["repo1", "repo2", "repo3"],displayCommits);
  }, 2000);
}

function getCommits(repos,cb){
    console.log(`repos : ${repos}`)
    setTimeout(() => {
      const commit = '#44fa';
      cb(commit);
    }, 2000);
  }


function displayCommits(commit='#44fa'){
        console.log(commit);
}
