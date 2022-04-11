addEventListener("DOMContentLoaded", function () {
    //get current date
    let dateElement = document.getElementById("date").innerHTML;
    let str = dateElement;
    let date =  new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    if(m < 10){
        str += "0";
    }
    str = str + m + "/" 
    if(d < 10){
        str += "0";
    }
    str = str + d + "/" + y;
    document.getElementById("date").innerHTML = str;



    let header = document.getElementById('header');
    let mobileMenu = document.getElementById('mobile-menu');
    let headerHeight = header.clientHeight;

    //Close/Open mobile menu
    mobileMenu.onclick = function() {
        let isClosed = header.clientHeight === headerHeight;
        if(isClosed){
            header.style.height = 'auto';
        }
        else{
            header.style.height = null;
        }
    }

    //automatically close the subnav when click on the menu
    let menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for(let i = 0 ; i < menuItems.length ; ++i) {
        let menuItem = menuItems[i];
        
        menuItem.onclick = function(event){
            let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if(isParentMenu)
                event.preventDefault();
            else{
                header.style.height = null; 
            }                                  
        }
    }

    //Reveal/hidden the hourly rate box
    let rateBox = document.querySelector(".contact_group-rate");
    let radio = document.querySelectorAll('input[type="radio"]');
    let hourRate = document.getElementById("hourly-rate");
    for(let i = 0 ; i < radio.length ; i++){
        radio[i].onclick = function(){
            if(radio[i].value === "hiring"){
                rateBox.classList.add("visible");
                hourRate.setAttribute("required", "true");
            }
            else{
                rateBox.classList.remove("visible");
                hourRate.removeAttribute("required");
                hourRate.value = "";
            }
        }
    }         
})  