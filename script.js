const profilePopup = document.querySelector('#profilePopup');
const profilePopupOpenButton = document.querySelector('.profile__button');
const profilePopupCloseButton = document.querySelector('#profilePopupCloseButton');
const itemPopup = document.querySelector('#itemPopup');
const itemPopupOpenButton = document.querySelector('.profile__upload-button');
const itemPopupCloseButton = document.querySelector('#itemPopupCloseButton');
const profileFormContainer = document.querySelector('#profileFormContainer');
const inputUserName = document.querySelector('#userName');
const inputPreference = document.querySelector('#preference');
const inputSaveButton = document.querySelector('#inputSaveButton');
const profileName = document.querySelector('.profile__name');
const profilePreference = document.querySelector('.profile__preference');
const likeButton = document.querySelector('.photo-grid__like');
const itemFormContainer = document.querySelector('#itemFormContainer');
const itemName = document.querySelector('#itemName');
const itemLink = document.querySelector('#itemLink');
const photoGrid = document.querySelector('.photo-grid');
const photoPopup = document.querySelector('.photo-popup');
const photoPopupPicture = document.querySelector('.photo-popup__picture');
const photoPopupHeading = document.querySelector('.photo-popup__heading');
const photoPopupCloseButton = document.querySelector('#photoPopupCloseButton');
const photoGridTemplate = document.querySelector('#photoGridTemplate').content;
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

function openPopup(popup) {
  popup.classList.add ('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove ('popup_opened');
};

function handleProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputUserName.value;
  profilePreference.textContent = inputPreference.value;
  closePopup(profilePopup);
};

const createCard = (name, link) => {
  const photoGridPlace = photoGridTemplate.querySelector('.photo-grid__place').cloneNode(true);
  photoGridPlace.querySelector('.photo-grid__picture').style.backgroundImage = `url(${link})`;
  photoGridPlace.querySelector('.photo-grid__heading-text').textContent = name;
  photoGridPlace.querySelector('.photo-grid__like').addEventListener('click', function(evt){
    evt.target.classList.toggle('photo-grid__like_active');
  });
  photoGridPlace.querySelector('.photo-grid__picture').addEventListener('click', function(){
    openPopup(photoPopup);
    photoPopupPicture.src = `${link}`;
    photoPopupPicture.alt = `${name}`;
    photoPopupHeading.textContent = name;
  });
  photoGridPlace.querySelector('.photo-grid__trash').addEventListener('click', function(){
    photoGridPlace.remove();
  });
  return photoGridPlace;
}

function renderCard(name, link) {
  photoGrid.prepend(createCard(name, link));
}

function handleItemForm(evt) {
  evt.preventDefault();
  renderCard(itemName.value, itemLink.value);
  closePopup(itemPopup);
  itemName.value = '';
  itemLink.value = '';
};

initialCards.reverse();
for (let i = 0; i < initialCards.length; i++) {
  renderCard(initialCards[i].name, initialCards[i].link);
};

profilePopupOpenButton.addEventListener('click', function() {
  openPopup(profilePopup);
  inputUserName.focus();
  inputUserName.value = profileName.textContent;
  inputPreference.value = profilePreference.textContent;
});
profilePopupCloseButton.addEventListener('click', function() {
  closePopup(profilePopup);
});
itemPopupOpenButton.addEventListener('click', function() {
  openPopup(itemPopup);
  itemName.focus();
  itemName.value = '';
  itemLink.value = '';
});
itemPopupCloseButton.addEventListener('click', function() {
  closePopup(itemPopup);
});
photoPopupCloseButton.addEventListener('click', function() {
  closePopup(photoPopup);
});
profileFormContainer.addEventListener('submit', handleProfileForm);
itemFormContainer.addEventListener('submit', handleItemForm);



