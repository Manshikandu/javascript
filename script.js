//alert("hello world");
//console.log("hello world");
function validation(){
    //alert('rampyari');
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    if(name==''){
       //alert('name is required');
       
       
       document.getElementById('nameErr').innerHTML='Name is required'
       document.getElementById('name').focus();
    }
    if(address==''){
        document.getElementById('addressErr').innerHTML='Address is required'
        //alert('Address is required');
        
    }

}
document.getElementById('myform').addEventListener("submit",validation);
// validation();