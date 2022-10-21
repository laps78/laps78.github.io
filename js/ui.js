document.addEventListener('DOMContentLoaded', onloadEventhandler);

function onloadEventhandler() {
  activateSertificateLinks();
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
}