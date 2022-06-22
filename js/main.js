window.omload = function userApi() {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href');
    
      console.log(blockID);
      debugger;

      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };
  //popups
  function popupClose(popup) {
    popup.classList.toggle('visually-hidden');
  }
  //close popup from missclick
  document.addEventListener('click', (e) => {
      if ((e.target === popup)) {
        popupClose(e.target);
      };
  });
  
  //sertificate popup
  const linkPopupOpen = document.querySelectorAll('.link_popup_open');
  const sertificatePopup = document.querySelector('.popup__wrapper');
  const sertificatePopupCloseButton = document.querySelector('#sertificate_popup_close_btn');

  //close popup from button
  sertificatePopupCloseButton.addEventListener('click', (e) => {
    e.preventDefault();
    popupClose(sertificatePopup);
  })
}