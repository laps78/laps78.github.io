document.addEventListener('DOMContentLoaded', onloadEventhandler);

function onloadEventhandler() {
  activateSertificateLinks();
};

function activateSertificateLinks() {
  const sertificateLinks = document.querySelectorAll('.sertificate__preview');
  sertificateLinks.forEach(sertificateLink =>
    sertificateLink.addEventListener('click', e => {
      const clickedImage = e.target.cloneNode();
      const clickedImageTitle = e.currentTarget.querySelector('.sertificate__title').textContent;
      new Popup(clickedImageTitle, clickedImage);
  }))
}