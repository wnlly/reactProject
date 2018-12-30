

const mysql = require('mysql') ;
const express = require('express') ;
const fs = require('fs')
let pool =  mysql.createPool({
  user:'root',
  database:'wn',
})
module.exports.query = function(){
 
  if(arguments){
    let args =arguments;
    let callback;
    let params = [];
    let sqlStr = args[0];
    if(args.length===2 && typeof args[1]==='function'){
      callback =args[1];
    }
    else if(args.length===3 && Object.prototype.toString.call(args[2]).indexOf('Array')!== -1 
      && typeof(args[2]==='function')
    ){
      callback= args[2];
      params = args[1];
    }else{
      return new Error('出错了');
    }
  }
  if(!arguments){

  }
}