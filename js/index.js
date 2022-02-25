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

const cancelForm = document.getElementById("cancel");
const saveForm = document.getElementById("save");
const addNewItemForm = document.getElementById("additembutton");

const addedItemsArr = document.getElementsByClassName("addedItems")[0];

let val;
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

/**
 * [{itemname: string, qty:number, price:number, total:number}]
 */

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
  quality.value = 0;
  price.value = 0;

  for (let itemValue of formInput.itemList) {
    // create addedItemCard element
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
  }
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
  if (itemName.value && quality.value && price.value && total.value) {
    formInput.itemList.push({
      itemname: itemName.value,
      qty: quality.value,
      price: price.value,
      total: total.value,
    });
    console.log(formInput.itemList);
    UpdateFormState();
  } else {
    console.log("invalid");
  }
});

saveForm.addEventListener("click", () => {});

cancelForm.addEventListener("click", toggleFormHandler);

newInvoiceButton.addEventListener("click", toggleFormHandler);

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

itemName.addEventListener("change", () => {
  val = itemName.value;
  formInput["itemName"] = val;
});

quality.addEventListener("change", () => {
  val = quality.value;
  formInput["quality"] = val;
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