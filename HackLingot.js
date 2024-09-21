 // Hack xp + ligont (XHR)

  var arr =Dãn mã ở đây giống video; 
var url ="https://www.duolingo.com/2017-06-30/users/"; //VD: /2017-06-30/sessions/Ct0Q8Y3u53QG8A05 

var count=0;
var solan=600;
for(var i=0; i<solan; i++){
$.ajax({
    url: url ,
    type: 'PUT',
    data: JSON.stringify(arr),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
	success: function(string){
	count++;
	forgetdata();
      }
});
}

//Get auto lingot

function GetData(){
console.clear();
console.log(count);
if(count==solan){
$.ajax({
    url: '/users/crosslimit.ga' ,
    type: 'GET',
	async: false,
     success: function(string){
	 document.getElementById('num_lingots').innerHTML=string.rupees;
      }
});
}
}

//---

function forgetdata(){
console.clear();
if(count<solan){
console.log(count);
} else {
console.log('Đã hack hoàn thành '+solan+' lần');
GetData();
}
}
