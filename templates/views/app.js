function validateForm() {
  if( document.myform.Username.value == "" ) {
    alert( "Please provide your name!" );
    document.myform.Username.focus() ;
    return false;

}
if( document.myform.Password.value == "" ) {
    alert( "Please provide your name!" );
    document.myform.Password.focus() ;
    return false;
}
}
const myform = document.querySelector('myform');
const button = document.querySelector('button');
button.addEventListener('onclick' , () => {

    if (myform.validateForm()){
        "window.location.href = Home.html ;"
    }else{
        alert("please fill out the form first");
    }
});