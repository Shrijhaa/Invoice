const arrow = document.getElementsByClassName("left-icon")[0];
const invoicecardholder = document.getElementsByClassName("invoicedetails")[0];
const invoicelists = document.getElementsByClassName("invoicesboxcontainer")[0];

const backarrow=document.getElementsByClassName("navback")[0];


let togglearrow=false;


const viewinvoicelists= ()=>{
    togglearrow=false;
    cardviewer();
}

const viewinvoicecardholder=() =>{
    togglearrow=true;
    cardviewer();
}

const cardviewer = () =>{
    invoicecardholder.style.display = togglearrow ? "block" : "none";
    invoicelists.style.display=togglearrow ? "none" : "block";
}



arrow.addEventListener("click",()=>{
viewinvoicecardholder();
});

backarrow.addEventListener("click",()=>{
    viewinvoicelists();
});
    