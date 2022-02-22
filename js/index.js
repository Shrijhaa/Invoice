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
const paymentTerms = document.getElementById("paymentTerms");
const description = document.getElementById("description");
const itemName = document.getElementById("itemName");
const quality = document.getElementById("quality");
const price = document.getElementById("price");
const total = document.getElementById("total");

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
