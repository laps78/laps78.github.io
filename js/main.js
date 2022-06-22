window.onload = function userApi() {
  
  //popups
  const linksPopupOpen = document.querySelectorAll('.link_popup_open');
  const popup = document.querySelectorAll('.popup__wrapper');
  const popupCloseButtons = document.querySelectorAll('popup_close_btn');

  function popupClose(popup) {
    popup.classList.toggle('visually-hidden');
  }
  //close popup from missclick
  document.addEventListener('click', (e) => {
    if (e.target === popup) {
      popupClose(e.target);
    };
  });
  
  //sertificate popup
 

  //close popup from button
  popupCloseButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popup.classList.toggle('visually-hidden');
    });
  });  
};