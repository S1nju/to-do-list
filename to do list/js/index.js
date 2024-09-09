let task = document.getElementById('entering');
let addtask = document.getElementById('addtolist');
let proinf;
let check = document.getElementById('listc');
localStorage.clear()
if(localStorage.length!=0){
    proinf= JSON.parse(localStorage.list);
}else{
proinf=[];};
showdata();
function addtas(){
    let v=task.value;
    
   proinf.push(v);
   localStorage.setItem('list', JSON.stringify(proinf)); 
   showdata();

}
function showdata(){
    let ta='';
    console.log(proinf)
    for(let i =0;i<proinf.length;i++){
        ta+=` <label id="aw"> <input type="checkbox" class="listc">
        
       <span>${proinf[i]}</span></label><br><br>`
    }document.getElementById('list4').innerHTML=ta;
  
}