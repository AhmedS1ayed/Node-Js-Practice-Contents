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

getuser(3, (obj) => {
  getRepository(obj.gitHubUsername, (repos) => {
    getCommits(repos[1], (commits) => {
      console.log(commits);
    });
  });
});

function getuser(id, cb) {
  console.log(`id : ${id}`);

  // waiting .....
  setTimeout(() => {
    cb({ id: id, gitHubUsername: "Ahmed" });
  }, 2000);
}

function getRepository(username, cb) {
  console.log(`username : ${username}`);

  // waiting .....
  setTimeout(() => {
    cb(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repos, cb) {
  console.log(`repos : ${repos}`);
  
  // waiting .....
  setTimeout(() => {
    cb("#44fa");
  }, 2000);
}

