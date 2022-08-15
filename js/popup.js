class Popup {
  constructor(title, content) {
    this.wrapper = document.querySelector('.popup__wrapper');
    this.popup = this.wrapper.querySelector('.popup');
    this.closeButton =this.wrapper.querySelector('.popup_close_btn');
    this.header = this.wrapper.querySelector('.popup__header');
    this.title = title;
    this.content = content;

    console.log(this.content);
    console.log(typeof(this.content));

    this.open();
    this.fillHeader();
    this.fillContent(this.content);
    this.activateCloseActions();
  };

  open(){
    this.wrapper.classList.remove('visualy-hidden');
  };

  fillHeader() {
    this.header.textContent = this.title;
  }

  fillContent(content) {
    const elem = document.createElement('div');
    elem.classList.add('popup__content');
    elem.appendChild(content);
    this.popup.appendChild(elem);
  }

  activateCloseActions() {
    //close from button
    this.closeButton.addEventListener('click', this.close.bind(this));
    
    //close from missclick
    this.wrapper.addEventListener('click', e => {
      this.close();
    });
  };

  close() {
    const currentPopupContent = this.popup.querySelector('.popup__content');
    if (currentPopupContent) {
      currentPopupContent.remove(currentPopupContent);
    }
    this.wrapper.classList.add('visualy-hidden');
  };
}