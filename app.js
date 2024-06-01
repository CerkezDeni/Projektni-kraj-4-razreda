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
    document.getElementById("kontaktirajteNas2").addEventListener("click", function() {
        window.location.href = "contact.html";
    });
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
    const offset = -50; 
    // Photography Services
    document.querySelector('.btn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the ID of the target element
        const targetElement = document.getElementById(targetId); // Get the target element
        if (targetElement) {
            // Smooth scroll to the target element with an offset from the top
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollBy(0, offset); // Scroll 50px above the target element
        }
    });

    // Videography Services
    document.querySelector('.btn2').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the ID of the target element
        const targetElement = document.getElementById(targetId); // Get the target element
        if (targetElement) {
            // Smooth scroll to the target element with an offset from the top
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollBy(0, offset); // Scroll 50px above the target element
        }
    });

    // Graphic Design
    document.querySelector('.btn3').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the ID of the target element
        const targetElement = document.getElementById(targetId); // Get the target element
        if (targetElement) {
            // Smooth scroll to the target element with an offset from the top
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollBy(0, offset); // Scroll 50px above the target element
        }
    });

    // Website Development and Optimization
    document.querySelector('.btn4').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the ID of the target element
        const targetElement = document.getElementById(targetId); // Get the target element
        if (targetElement) {
            // Smooth scroll to the target element with an offset from the top
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollBy(0, offset); // Scroll 50px above the target element
        }
    });

    // Paid Advertising
    document.querySelector('.btn5').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the ID of the target element
        const targetElement = document.getElementById(targetId); // Get the target element
        if (targetElement) {
            // Smooth scroll to the target element with an offset from the top
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollBy(0, offset); // Scroll 50px above the target element
        }
    });

    // Video Editing
    document.querySelector('.btn6').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the ID of the target element
        const targetElement = document.getElementById(targetId); // Get the target element
        if (targetElement) {
            // Smooth scroll to the target element with an offset from the top
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollBy(0, offset); // Scroll 50px above the target element
        }
    });
}

function openWebsite() {
    window.open("https://ballersapp.com/", "_blank");
}
function openWebsite2() {
    window.open("https://www.outfit-fitness.com/", "_blank");
}
function openWebsite3() {
    window.open("https://osibovapartments.com/", "_blank");
}