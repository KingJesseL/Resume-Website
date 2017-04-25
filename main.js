/* Set the width of the side navigation to 200px and the left margin of the page content to 200px and add a black background color to body */
function openNav() {
    document.getElementById("left-sidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("left-sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}