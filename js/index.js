const newInvoiceButton = document.getElementsByClassName("invoicebutton")[0];
const invoiceForm = document.getElementsByClassName("invoiceform")[0];

// form input
const fromaddress = document.getElementById("fromaddress");

const fromcity = document.getElementById("fromcity");
const frompincode = document.getElementById("frompincode");
const fromcountry = document.getElementById("fromcountry");
const clientname = document.getElementById("clientname");
const clientmail = document.getElementById("clientmail");
const toaddress = document.getElementById("toaddress");
const tocity = document.getElementById("tocity");
const topincode = document.getElementById("topincode");
const tocountry = document.getElementById("tocountry");
const invoicedate = document.getElementById("invoicedate");
const paymentTerms = document.getElementById("paymentterms");
const description = document.getElementById("description");
const itemName = document.getElementById("itemname");
const quality = document.getElementById("qty");
const price = document.getElementById("price");
const total = document.getElementById("total");


var val;
// application state
let toggleForm = false;
let formInput = {
  fromaddress: "",
  fromcity: "",
  frompincode: "",
  fromcountry: "",
  clientname: "",
  clientmail: "",
  toaddress: "",
  tocity: "",
  topincode: "",
  tocountry: "",
  invoicedate: new Date(),
  paymentTerms: "Net 30 days",
  description: "",
  itemList: [],
};

const formStateChange = () => {
  invoiceForm.style.display = toggleForm ? "block" : "none";
};

// Event listeners
newInvoiceButton.addEventListener("click", () => {
  toggleForm = !toggleForm;
  formStateChange();
});

fromaddress.addEventListener("change",() => {
  val=fromaddress.value;                //store value of input in val
  formInput["fromaddress"]=val;           //store val in frominput array     
  
});

fromcity.addEventListener("change",() => {
  val=fromcity.value;                
  formInput["fromcity"]=val;           
  
});

frompincode.addEventListener("change",() => {
  val=frompincode.value;                
  formInput["frompincode"]=val;           
  console.log(frompincode);
});

fromcountry.addEventListener("change",() => {
  val=fromcountry.value;                
  formInput["fromcountry"]=val;           
  
});

clientname.addEventListener("change",() => {
  val=clientname.value;                
  formInput["clientname"]=val;           
  
});
clientmail.addEventListener("change",() => {
  val=clientmail.value;                
  formInput["clientmail"]=val;           
  
});
toaddress.addEventListener("change",() => {
  val=toaddress.value;                
  formInput["toaddress"]=val;           
  
});
tocity.addEventListener("change",() => {
  val=tocity.value;                
  formInput["tocity"]=val;           
  
});
topincode.addEventListener("change",() => {
  val=topincode.value;                
  formInput["topincode"]=val;           
  
});

tocountry.addEventListener("change",() => {
  val=tocountry.value;                
  formInput["tocountry"]=val;           
  
});

invoicedate.addEventListener("change",() => {
  val=invoicedate.value;                
  formInput["invoicedate"]=val;           
  
});

paymentTerms.addEventListener("change",() => {
  val=paymentTerms.value;                
  formInput["paymentTerms"]=val;           
  
});

description.addEventListener("change",() => {
  val=description.value;                
  formInput["description"]=val;           
  
});

itemName.addEventListener("change",() => {
  val=itemName.value;                
  formInput["itemName"]=val;           
  
});

quality.addEventListener("change",() => {
  val=quality.value;                
  formInput["quality"]=val;           
  
});
price.addEventListener("change",() => {
  val=price.value;                
  formInput["price"]=val;           
  
});
total.addEventListener("change",() => {
  val=total.value;                
  formInput["total"]=val;           
  
});

if(quality.value != "" && price.value != ""){
  total.value=quality.value*price.value;
}