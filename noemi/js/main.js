//TODO -make script working!

indow.onload = () => {
  //POPUP
  let popupCloseButton = document.querySelector('.popup-btn-close');
  let popup = document.querySelector('.popup__wrapper');

  //open popup


  //close popup from button
  popupCloseButton.addEventListener('click', (e) => {
    e.preventDefault();
    popupCloseButton.claasslist.toggle('visually-hidden');
  });

  //close popup from missclick
  document.addEventListener('click', (e) => {
    if ((e.target === popup)) {
      popup.classList.toggle('visually-hidden');
    };
};