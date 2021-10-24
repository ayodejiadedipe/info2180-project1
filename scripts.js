/* Add your JavaScript to this file */

var main = function () {
    var buttons = document.querySelectorAll("button");
    console.log(buttons);
    button = buttons[0];

    var message = document.querySelector(".message");
    console.log(message);
    
    var mail = document.getElementById("email");
    console.log(mail);    
    
    button.addEventListener("click",function(event) {
        event.preventDefault();
        if (mail.value == "") {
            message.innerHTML = `Please enter a valid email address`;
        }else {
            message.innerHTML = `Thank you! Your email address ${mail.value} has been added to our mailing list!`;
        }
    });
}

window.onload = function () {
    console.log("run.")
    
    main();
}
