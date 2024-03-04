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