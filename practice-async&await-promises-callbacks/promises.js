// getuser(3, (obj) => {
//   getRepository(obj.gitHubUsername, (repos) => {
//     getCommits(repos[1], (commits) => {
//       console.log(commits);
//     });
//   });
// });

const p = getuser(3)
  .then(obj => getRepository(obj.gitHubUsername))
  .then(repos => getCommits(repos))
  .then(commit => console.log(commit));

function getuser(id) {
  console.log(`id : ${id}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, gitHubUsername: "Ahmed" });
    }, 2000);
  });
}

function getRepository(username) {
  console.log(`username : ${username}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repos) {
  console.log(`repos : ${repos}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("#44fa");
    }, 2000);
  });
}

// const p = new Promise((resolve,reject) => {
//     //do some async work
//     setTimeout(()=>{
//         // resolve(1);
//         reject('some error happened');
//     },2000)
// })

// p.then(result => console.log(result)).catch(err => {console.log(err)});
