/**
 * Created by Rain on 2016/11/17.
 */
const fs=require('fs');
const path =require('path');

//读取文件readFile函数

fs.readFile(__dirname+'/test.txt',{flag:'r+',encoding:'utf-8'},function(err,data){
   if(err){
       console.error(err);
    return ;
   }
   console.log(data);
});



