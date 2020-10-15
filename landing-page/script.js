const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');


// Toggle nav bar

toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')   // click -> show-nav is added and again click , its gone
})

// show modal

// open
open.addEventListener('click', () => {
    modal.classList.add('show-modal');
})
// close
close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
})

// open modal on click outside the form

window.addEventListener('click', e => {
    e.target == modal ? modal.classList.remove('show-modal') : false
});