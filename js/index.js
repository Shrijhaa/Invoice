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
const itemname = document.getElementById("itemname");
const qty = document.getElementById("qty");
const price = document.getElementById("price");
const total = document.getElementById("total");

const cancelForm = document.getElementById("cancel");
const saveForm = document.getElementById("save");
const addNewItemForm = document.getElementById("additembutton");

const addedItemsArr = document.getElementsByClassName("addedItems")[0];
/***********/



let val;
console.log(invoicelist);
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
  /**
 * [{itemname: string, qty:number, price:number, total:number}]
 */
};




const UpdateFormState = () => {
  fromaddress.value = formInput.fromaddress;
  fromcity.value = formInput.fromcity;
  fromcountry.value = formInput.fromcountry;
  clientname.value = formInput.clientname;
  clientmail.value = formInput.clientmail;
  toaddress.value = formInput.toaddress;
  tocity.value = formInput.tocity;
  topincode.value = formInput.topincode;
  tocountry.value = formInput.tocountry;
  invoicedate.value = formInput.invoicedate;
  paymentTerms.value = formInput.paymentTerms;
  description.value = formInput.description;
  total.textContent = 0;
  qty.value = 0;
  price.value = 0;

  // for (let itemValue of formInput.itemList) {
    // create addedItemCard element
    var itemValue= formInput.itemList[0];
    console.log("hi "+itemValue.itemname+itemValue.qty+itemValue.price+itemValue.total);
    //console.log("itemlist "+itemValue.itemname);
    const addedItemCard = document.createElement("div");
    const addedItemName = document.createElement("p");
    const addedItemQty = document.createElement("p");
    const addedItemPrice = document.createElement("p");
    const addedItemTotal = document.createElement("p");
    const addedItemTrashDiv = document.createElement("div");
    const addedItemTrashSpan = document.createElement("span");
    const addedItemTrashI = document.createElement("i");

    addedItemName.textContent = itemValue.itemname;
    
    addedItemQty.textContent = itemValue.qty;
    addedItemPrice.textContent = itemValue.price;
    addedItemTotal.textContent = itemValue.total;
    addedItemCard.id = itemValue.id;

    addedItemCard.className = "addeditemcard";
    addedItemName.className = "head1";
    addedItemQty.className = "head2";
    addedItemPrice.className = "head3";
    addedItemTotal.className = "head4";
    addedItemTrashDiv.className = "head5";
    addedItemTrashSpan.className = "trashicon";
    addedItemTrashI.className = "fa-solid fa-trash";

    addedItemTrashSpan.appendChild(addedItemTrashI);
    addedItemTrashDiv.appendChild(addedItemTrashSpan);
    addedItemCard.appendChild(addedItemName);
    addedItemCard.appendChild(addedItemQty);
    addedItemCard.appendChild(addedItemPrice);
    addedItemCard.appendChild(addedItemTotal);
    addedItemCard.appendChild(addedItemTrashDiv);
    addedItemsArr.appendChild(addedItemCard);
  
};

const formStateChange = () => {
  invoiceForm.style.display = toggleForm ? "block" : "none";
};

const toggleFormHandler = () => {
  toggleForm = !toggleForm;
  formStateChange();
  UpdateFormState();
};

const updateTotal = () => {
  if (qty.value && price.value) {
    total.value = qty.value * price.value;
    total.textContent = total.value;
  }
};

// Event listeners

addNewItemForm.addEventListener("click", () => {
  if (itemname.value && qty.value && price.value && total.value) {
    formInput.itemList.unshift({
      itemname: itemname.value,
      qty: qty.value,
      price: price.value,
      total: total.value,
    });
    console.log(formInput.itemList);
     UpdateFormState();
  } else {
    console.log("invalid");
  }
});



fromaddress.addEventListener("change", () => {
  val = fromaddress.value;
  formInput["fromaddress"] = val;
});

fromcity.addEventListener("change", () => {
  val = fromcity.value;
  formInput["fromcity"] = val;
});

frompincode.addEventListener("change", () => {
  val = frompincode.value;
  formInput["frompincode"] = val;
  console.log(frompincode);
});

fromcountry.addEventListener("change", () => {
  val = fromcountry.value;
  formInput["fromcountry"] = val;
});

clientname.addEventListener("change", () => {
  val = clientname.value;
  formInput["clientname"] = val;
});
clientmail.addEventListener("change", () => {
  val = clientmail.value;
  formInput["clientmail"] = val;
});
toaddress.addEventListener("change", () => {
  val = toaddress.value;
  formInput["toaddress"] = val;
});
tocity.addEventListener("change", () => {
  val = tocity.value;
  formInput["tocity"] = val;
});
topincode.addEventListener("change", () => {
  val = topincode.value;
  formInput["topincode"] = val;
});

tocountry.addEventListener("change", () => {
  val = tocountry.value;
  formInput["tocountry"] = val;
});

invoicedate.addEventListener("change", () => {
  val = invoicedate.value;
  formInput["invoicedate"] = val;
});

paymentTerms.addEventListener("change", () => {
  val = paymentTerms.value;
  formInput["paymentTerms"] = val;
});

description.addEventListener("change", () => {
  val = description.value;
  formInput["description"] = val;
});

// Item list

itemname.addEventListener("change", () => {
  val = itemname.value;
  formInput["itemname"] = val;
});

qty.addEventListener("change", () => {
  val = qty.value;
  formInput["qty"] = val;
  updateTotal();
});

price.addEventListener("change", () => {
  val = price.value;
  formInput["price"] = val;
  updateTotal();
});

total.addEventListener("change", () => {
  val = total.value;
  formInput["total"] = val;
});



//new invoice card addition on svaing the form
const addnewinvoicecard= () =>{
  
  const invoicelist = document.getElementsByClassName("invoicelist")[0];
  const invoicecard=document.createElement('div');
  
  const invoiceid=document.createElement('p');
  invoiceid.className="invoiceid";
 // invoiceid.id=itemValue.id;
  
  const invoiceidspan=document.createElement('span');
  invoiceidspan.className="hash";
  invoiceidspan.textContent="#";
  invoiceid.appendChild(invoiceidspan);
  invoiceid.textContent="YD555";
  
  
  const invoicedate=document.createElement('p');
  invoicedate.className="invoicedate";
  invoicedate.textContent="Due 20";
  
  const invoiceclient=document.createElement('p');
  invoiceclient.className="invoiceclient";
  invoiceclient.textContent="boxes";
  
  const invoiceprice=document.createElement('p');
  invoiceprice.className="invoiceprice";
  invoiceprice.textContent="$ 3,000";
  
  const invoicestatus=document.createElement('p');
  invoicestatus.className="invoicestatus paid";
  invoicestatus.textContent="Paid"
  
  const invoicearrow=document.createElement('span');
  invoicearrow.className="left-icon";
  const invoicearrowi=document.createElement('i');
  invoicearrowi.className="fa-solid fa-chevron-right";
  
  invoicearrow.appendChild(invoicearrowi);
  invoiceid.appendChild(invoiceidspan);
  
  
  invoicecard.className="invoicecard";
  invoicecard.appendChild(invoiceid);
  invoicecard.appendChild(invoicedate);
  invoicecard.appendChild(invoiceclient);
  invoicecard.appendChild(invoiceprice);
  invoicecard.appendChild(invoicestatus);
  invoicecard.appendChild(invoicearrow);
  
  invoicelist.appendChild(invoicecard);
  
 
   toggleForm=false;
   invoiceForm.style.display="none";
  };
  

  



saveForm.addEventListener("click",addnewinvoicecard);

cancelForm.addEventListener("click", toggleFormHandler);

newInvoiceButton.addEventListener("click", toggleFormHandler);


