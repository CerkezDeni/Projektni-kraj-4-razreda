const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});



// document.addEventListener("DOMContentLoaded", function() {
//     var copy1 = document.querySelector(".logos-slide").cloneNode(true);
//     document.querySelector(".logos").appendChild(copy1);

//     var copy2 = document.querySelector(".logos-slide").cloneNode(true);
//     document.querySelector(".logos").appendChild(copy2);
// });


document.getElementById("getStartedButton1").addEventListener("click", function() {
    window.location.href = "services.html";
});

document.getElementById("getStartedButton2").addEventListener("click", function() {
    window.location.href = "services.html";
});
document.getElementById("kontaktirajteNas").addEventListener("click", function() {
    window.location.href = "contact.html";
});


document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".services__card").forEach(function(card) {
        card.addEventListener("click", function() {
            // Determine which card was clicked based on its ID
            if (card.id === "card1") {
                window.location.href = "services.html";
            } else if (card.id === "card2") {
                window.location.href = "services.html";
            }
        });
    });
});
function onLinkClick() {
    document.getElementsByTagName('h2')[3].scrollIntoView();
    // will scroll to 4th h3 element

    document.querySelector('.btn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the ID of the target element
        const targetElement = document.getElementById(targetId); // Get the target element
        if (targetElement) {
            // Smooth scroll to the target element
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });}