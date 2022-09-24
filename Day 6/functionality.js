function openNav(){
    const topnav = document.getElementById("topnav");
    const links = topnav.getElementsByTagName("a");
    const disclose = document.getElementsByClassName("disclose");
    const select = document.getElementsByClassName("select");

    if (topnav.style.flexDirection == "row")
    {
        topnav.style.flexDirection = "column";
        for (let key in links) {
            links[key].style.display="block";
        }
    }
    else
    {
        topnav.style.flexDirection = "row";
        for (let key in disclose) {
            disclose[key].style.display="none";
        }
    }    
    
}