const fs = require('fs');

//Sync Method

// fs.writeFileSync('read.txt', 'this is my node js file -1');
// console.log(fs);

// const New = fs.readFileSync('read.txt','utf-8');
// console.log(New);

// const New = fs.appendFileSync('read.txt',' this is the last part');
// console.log(New); 

// const New = fs.unlinkSync('read.txt');

//Async Method

// const fs = require('fs');

// fs.writeFile('newread.txt','hey guys this is the new async method',(error)=>{console.log(error);})
// console.log(fs);


const New = fs.readFile('newread.txt','utf-8',(error,data)=>{console.log(error);console.log(data);});

// const New = fs.appendFile('newread.txt','\n 2. this is the latest part of the async method',(error)=>{console.log(error);})

// fs.unlink('newread.txt', (err) => {
//     if (err) throw err;
//     console.log('file was deleted')});
