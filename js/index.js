const newInvoiceButton = document.getElementsByClassName("invoicebutton")[0];
onst invoiceForm = document.getElementsByClassName("invoiceform")[0];



//form var


var fromaddress= document.getElementById("fromaddress");
var fromcity= document.getElementById("fromcity");
var fromcountry= document.getElementById("fromcountry");
var frompincode= document.getElementById("frompincode");
var clientname= document.getElementById("clientname");
var clientmail= document.getElementById("clientmail");
var toaddress= document.getElementById("toaddress");
var tocity= document.getElementById("tocity");
var tocountry= document.getElementById("tocountry");
var topincode= document.getElementById("topincode");
var invoicedate= document.getElementById("invoicedate");
var paymentterms= document.getElementById("paymentterms");
var description= document.getElementById("description");
var itemname= document.getElementById("itemname");
var qty= document.getElementById("qty");
var price= document.getElementById("price");
var total= document.getElementById("total");



let toggleForm = false;
let formInput={
    fromaddress: "",
    fromcity: "",
    fromcountry: "",
    frompincode: "",
    clientmail: "",
    clientname: "",
    toaddress: "",
    
}







const formStateChange = () =>{
    invoiceForm.style.display=toggleForm ? "block" : "none";
}

newInvoiceButton.addEventListener("click",() =>
{
    toggleForm=true;
    formStateChange();

});