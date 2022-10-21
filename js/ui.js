document.addEventListener('DOMContentLoaded', onloadEventhandler);

function onloadEventhandler() {
  activateSertificateLinks();
  window.addEventListener('scroll', scrollTopButtonHideOrShow);
};

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

function scrollTopButtonHideOrShow() {
  const scrollTopButton = document.getElementById('scrollTop');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = 'block';
    document.addEventListener('click', scrollToTop);
  } else {
    scrollTopButton.style.display = 'none';
    document.removeEventListener(scrollToTop);
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // for safari
  document.documentElement.scrollTop = 0; // for chrome, firefox, IE & opera
}