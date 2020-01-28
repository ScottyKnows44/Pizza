
document.getElementById("pizzaform").onsubmit = validate;

function validate()
{
    let valid = true;
    let first = document.getElementById("firstName").value;
    let last = document.getElementById("lastName").value;
    let address = document.getElementById("address").value;

    let errors = document.getElementsByClassName("err");

    for(let i=0;i<errors.length; i++)
    {
        errors[i].style.visibility = "hidden";
    }

    if(first == "")
    {
        let errFirst = document.getElementById("errFname");
        errFirst.style.visibility = "visible";
        valid = false;

    }

    if(last =="")
    {
        let errLast = document.getElementById("errLname");
        errLast.style.visibility = "visible";
        valid = false;
    }


    let delivery = document.getElementById("delivery").checked;
     if(delivery){
         let address = document.getElementById("address").value;
         if(address == "")
         {
             let errAddress = document.getElementById("errAddress");
             errAddress.style.visibility = "visible";
             valid = false;
         }
     }

    let size = document.getElementById("size").value;
     if(size == "none") {
         let errSize = document.getElementById("errSize");
         errSize.style.visibility = "visible";
         valid = false;
     }

     let toppings = document.getElementsByName("toppings[]");
     let toppingCount =0;
     for(let i=0; i<toppingCount.length; i++){
         if(toppings[i].checked){
             toppingCount++;
         }
     }
     if(toppingCount == 0)
     {
         let errToppings = document.getElementById("errToppings");
         errToppings.style.visibility = "Visible";
         valid = false;
     }

    return valid;
}