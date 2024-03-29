document.addEventListener('DOMContentLoaded', onloadEventhandler);

//init ui
function onloadEventhandler() {
  activateSertificateLinks();
  window.addEventListener('scroll', scrollTopButtonHideOrShow);
};

// sertificate popup link activation
function activateSertificateLinks() {
  const sertificateLinks = document.querySelectorAll('.sertificate__preview');
  sertificateLinks.forEach(sertificateLink =>
    sertificateLink.addEventListener('click', e => {
      const img = e.target.parentElement.querySelector('.sertificate__miniature');
      const clickedImage = img.cloneNode();
      const clickedImageTitle = e.currentTarget.querySelector('.sertificate__title').textContent;
      new Popup(clickedImageTitle, clickedImage);
  }))
};

// scroll to top button
function scrollTopButtonHideOrShow() {
  const scrollTopButton = document.getElementById('scrollTop');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollTopButton.style.display = 'block';
    scrollTopButton.addEventListener('click', scrollToTop);
  } else {
    scrollTopButton.style.display = 'none';
    scrollTopButton.removeEventListener(scrollToTop);
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // for safari
  document.documentElement.scrollTop = 0; // for chrome, firefox, IE & opera
}