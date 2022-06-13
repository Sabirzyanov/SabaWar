/* Pretty anchors system */
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        // Search needed anchor
        const blockID = anchor.getAttribute('href').substr(1)

        // Pretty scroll to anchor
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

/* Modal window controller */
var modal = document.getElementById("buy-ticket-modal");
var modalOpen = document.getElementById("buy-ticket-open-button");
var modalExit = document.getElementById("buy-ticket-close-button");

// Open modal
modalOpen.onclick = () => {
    modal.style.display = "flex";
    console.log(123);
}

// Exit from modal, when user click on close button
modalExit.onclick = () => {
    modal.style.display = "none";
}

// Exit from modal, when user click outside of modal
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
