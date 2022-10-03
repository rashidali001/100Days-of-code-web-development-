
function myfunction()
{
    const h1 = document.getElementsByTagName('h1')[0];

    /*changing heading text*/

    h1.innerHTML = "Hello world";

    /*changing color*/

    h1.style.color = "red";

    /* adding a class name*/

    h1.className += " big";

}

function myfunction2()
{
    const form = document.forms["frm_2"];

    for (let x = 0; x < form.length; x++)
    {
        form.elements[x].value = "Rashid";
    }
    
}

const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}