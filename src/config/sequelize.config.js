require('ts-node/register');// this line is going to tell node js to dynamicaly compile and run the typescript file on the go 
const config=require('./db.config');
module.exports=config;