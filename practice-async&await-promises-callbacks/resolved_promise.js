// Typically used for unit testing when you want to have a ready resolved promise

const p = Promise.resolve({id : 5});
p.then(result => console.log(result));


// usefull in debugging 

const prej = Promise.reject( new Error('reason for rejection...'));
prej.catch(result => console.log(result));