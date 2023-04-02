const profilePopup = document.querySelector('#profilePopup');
const profilePopupOpenButton = document.querySelector('.profile__button');
const profilePopupCloseButton = document.querySelector('#profilePopupCloseButton');
const itemPopup = document.querySelector('#itemPopup');
const itemPopupOpenButton = document.querySelector('.profile__upload-button');
const itemPopupCloseButton = document.querySelector('#itemPopupCloseButton');
const profilePopupContainer = document.querySelector('#profilePopupContainer');
const inputUserName = document.querySelector('#userName');
const inputPreference = document.querySelector('#preference');
const inputSaveButton = document.querySelector('#inputSaveButton');
const profileName = document.querySelector('.profile__name');
const profilePreference = document.querySelector('.profile__preference');
const likeButton = document.querySelector('.photo-grid__like');

const itemPopupContainer = document.querySelector('#itemPopupContainer');
const itemName = document.querySelector('#itemName');
const itemLink = document.querySelector('#itemLink');
const photoGrid = document.querySelector('.photo-grid');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];

function openProfilePopup() {
  profilePopup.classList.add ('popup_opened');
  profilePopup.setAttribute('style', 'transition: opacity 0.5s linear');
  inputUserName.focus();
};

function closeProfilePopup() {
  profilePopup.setAttribute('style', 'transition: opacity 0.5s linear, z-index 0.8s');
  profilePopup.classList.remove ('popup_opened');
  inputUserName.value = profileName.textContent;
  inputPreference.value = profilePreference.textContent;
};

function openItemPopup() {
  itemPopup.classList.add ('popup_opened');
  itemPopup.setAttribute('style', 'transition: opacity 0.5s linear');
  itemName.focus();
};

function closeItemPopup() {
  itemPopup.setAttribute('style', 'transition: opacity 0.5s linear, z-index 0.8s');
  itemPopup.classList.remove ('popup_opened');
  itemName.value = '';
  itemLink.value = '';
};

function profileFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputUserName.value;
  profilePreference.textContent = inputPreference.value;
  closeProfilePopup();
};

function addItem(name, link) {
  const photoGridTemplate = document.querySelector('#photoGridTemplate').content;
  const photoGridPlace = photoGridTemplate.querySelector('.photo-grid__place').cloneNode(true);
  photoGridPlace.querySelector('.photo-grid__picture').style.backgroundImage = `url(${link})`;
  photoGridPlace.querySelector('.photo-grid__heading-text').textContent = name;
  photoGridPlace.querySelector('.photo-popup__picture').src = `${link}`;
  photoGridPlace.querySelector('.photo-popup__heading').textContent = name;
  photoGridPlace.querySelector('.photo-grid__like').addEventListener('click', function(evt){
    evt.target.classList.toggle('photo-grid__like_active');
  });
  photoGridPlace.querySelector('.photo-grid__picture').addEventListener('click', function(){
    photoGridPlace.querySelector('.photo-popup').classList.toggle('photo-popup_opened');
    photoGridPlace.querySelector('.photo-popup').setAttribute('style', 'transition: opacity 0.5s linear');
  });
  photoGridPlace.querySelector('#photoPopupCloseButton').addEventListener('click', function(){
    photoGridPlace.querySelector('.photo-popup').setAttribute('style', 'transition: opacity 0.5s linear, z-index 0.8s');
    photoGridPlace.querySelector('.photo-popup').classList.toggle('photo-popup_opened');
  });
  photoGridPlace.querySelector('.photo-grid__trash').addEventListener('click', function(){
    photoGridPlace.remove();
  });
  photoGrid.prepend(photoGridPlace);
}

function itemFormSubmitHandler(evt) {
  evt.preventDefault();
  addItem(itemName.value, itemLink.value);
  closeItemPopup();
};
initialCards.reverse();
for (let i = 0; i < initialCards.length; i++) {
  addItem(initialCards[i].name, initialCards[i].link);
};

profilePopupOpenButton.addEventListener('click', openProfilePopup);
profilePopupCloseButton.addEventListener('click', closeProfilePopup);
itemPopupOpenButton.addEventListener('click', openItemPopup);
itemPopupCloseButton.addEventListener('click', closeItemPopup);
profilePopupContainer.addEventListener('submit', profileFormSubmitHandler);
itemPopupContainer.addEventListener('submit', itemFormSubmitHandler);



