async function displayCommit() {
  const user = await getuser(3);
  const repos = await getRepository(user.gitHubUsername);
  const commit = await getCommits(repos);
  console.log(commit);
}
function getuser(id) {
  console.log(`getting user with id = ${id} from database`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        // some processes .....
      resolve({ id: id, gitHubUsername: "Ahmed" });
    }, 2000);
  });
}

displayCommit();

function getRepository(username) {
  console.log(`getting repos of ${username} from database`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        // some processes .....
      resolve(["repo1", "repo2", "repo3"]);

    //   reject(new Error('Get Repository Error ...'))
    }, 2000);
  });
}

function getCommits(repos) {
  console.log(`getting commit from database`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        // some processes .....
      resolve("#44fa");
    }, 2000);
  });
}
