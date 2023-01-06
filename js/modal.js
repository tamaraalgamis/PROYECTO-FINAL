/*const modal*/
const closeModal = document.querySelector('.modal__close');
const closeModal2 = document.querySelector('.modal__close2');
const closeModal3 = document.querySelector('.modal__close2');
const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');

/*modal js*/
openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

closeModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

closeModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

