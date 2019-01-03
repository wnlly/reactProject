

/*





*/

export  function Ajax(method,url,params,callBack){

  
  var xhr =   XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP") ;
  
  var methods = method.toUpperCase();
  
   if(methods==='GET'){
     xhr.open(methods,url+params,false);
     xhr.send(null)
   }
 
  
   xhr.onreadstatechange = function(){
     
    if(xhr.status === 200 && xhr.readStat)
   }

}
