const profileButton = document.querySelectorAll('.profile-button');


function addOverlay() {
   const overlay = document.createElement('div');
   overlay.setAttribute('id', 'overlay');
   document.querySelector('body').append(overlay);
}

function dogProfile(doggy_id){
  addOverlay();
  let data = getProfile(doggy_id);
  data.then((item) => {
        console.log(item.owner);
        console.log(item.doggies[0]);
        const dogProfileCard = document.createElement('div');
        const dogProfileCardHeader = document.createElement('div');
        const dogProfileCardDetails = document.createElement('div');
        const dogProfileCardBody = document.createElement('div');
        const dogProfileCardFooter = document.createElement('div');
        const viewScheduleContainer = document.createElement('div');
        const viewGalleryContainer = document.createElement('div');
        const addFriendContainer = document.createElement('div');

        const dogName = document.createElement('h4');

        const dogProfileImage = document.createElement('img');
        const ownerImage = document.createElement('img');

        const viewScheduleButton = document.createElement('button');
        const addFriendButton = document.createElement('button');
        const viewGalleryButton = document.createElement('button');


        const dogDetailsList = document.createElement('ul');
        const dogDetailsBreedListItem = document.createElement('li');
        const dogDetailsListItem = document.createElement('li');


        const ownerDetailsList = document.createElement('ul');
        const ownerDetailsNameListItem = document.createElement('li');
        const ownerDetailsTitleListItem = document.createElement('li');
        const scheduleIconElement = document.createElement('i');
        const pawIconElement = document.createElement('i');
        const galleryIconElement = document.createElement('i');
        const bioText = document.createElement('p');


        dogProfileCard.setAttribute('id', 'profile-card');
        dogProfileCardHeader.setAttribute('id', 'profile-card-header');
        dogProfileCardDetails.setAttribute('id', 'profile-details');
        dogProfileCardBody.setAttribute('id', 'profile-card-body');
        dogProfileCardFooter.setAttribute('id', 'profile-card-footer');
        viewScheduleContainer.setAttribute('id', 'schedule-container');
        viewGalleryContainer.setAttribute('id', 'gallery-container');
        addFriendContainer.setAttribute('id', 'friend-container');
        dogProfileImage.setAttribute('src', `${item.doggies[0].image}`);
        dogProfileImage.setAttribute('alt', `Photo of ${item.doggies[0].name} the dog`);
        ownerImage.setAttribute('src', `${item.owner.image}`);
        ownerImage.setAttribute('alt', `Photo of dog owner ${item.owner.name}`);
        viewScheduleButton.setAttribute('id', 'schedule-button');
        scheduleIconElement.setAttribute('class', 'fa-solid fa-calendar-days');
        pawIconElement.setAttribute('class', 'fa-solid fa-paw');
        galleryIconElement.setAttribute('class', 'fa-solid fa-camera');
        addFriendButton.setAttribute('id', 'friend-button');
        viewGalleryButton.setAttribute('id', 'gallery-button');


        dogNameText = document.createTextNode(`${item.doggies[0].name}`);
        dogBreedText = document.createTextNode(`${item.doggies[0].breed}`);
        dogDetailsText = document.createTextNode(`${item.doggies[0].age} years old ${item.doggies[0].gender}`);
        ownerNameText = document.createTextNode(`${item.owner.name}`);
        ownerTitleText = document.createTextNode(`${item.owner.title}`);
        bioParagraph = document.createTextNode(`${item.doggies[0].bio}`);
        viewScheduleText = document.createTextNode('View schedule');
        viewGalleryText = document.createTextNode('View gallery');
        addFriendText = document.createTextNode('Add friend');




        dogName.appendChild(dogNameText);
        dogDetailsBreedListItem.appendChild(dogBreedText);
        dogDetailsListItem.appendChild(dogDetailsText);

        dogDetailsList.appendChild(dogDetailsBreedListItem);
        dogDetailsList.appendChild(dogDetailsListItem);

        ownerDetailsNameListItem.appendChild(ownerNameText);
        ownerDetailsTitleListItem.appendChild(ownerTitleText);

        ownerDetailsList.appendChild(ownerDetailsNameListItem);
        ownerDetailsList.appendChild(ownerDetailsTitleListItem);

        viewScheduleButton.appendChild(viewScheduleText);
        viewGalleryButton.appendChild(viewGalleryText);
        addFriendButton.appendChild(addFriendText);
        bioText.appendChild(bioParagraph);

        viewScheduleContainer.appendChild(scheduleIconElement);
        viewGalleryContainer.appendChild(galleryIconElement);
        addFriendContainer.appendChild(pawIconElement);
        viewScheduleContainer.appendChild(viewScheduleButton);
        viewGalleryContainer.appendChild(viewGalleryButton);
        addFriendContainer.appendChild(addFriendButton);

        dogProfileCardHeader.appendChild(dogProfileImage);
        dogProfileCardDetails.appendChild(dogName);
        dogProfileCardDetails.appendChild(dogDetailsList);
        dogProfileCardHeader.appendChild(dogProfileCardDetails);
        dogProfileCardHeader.appendChild(viewScheduleContainer);

        dogProfileCardBody.appendChild(bioText);
        dogProfileCardFooter.appendChild(ownerImage);
        dogProfileCardFooter.appendChild(ownerDetailsList);
        dogProfileCardFooter.appendChild(addFriendContainer);
        dogProfileCardFooter.appendChild(viewGalleryContainer);

        dogProfileCard.appendChild(dogProfileCardHeader);
        dogProfileCard.appendChild(dogProfileCardBody);
        dogProfileCard.appendChild(dogProfileCardFooter);
        document.querySelector('body').append(dogProfileCard);



   })

}

async function getProfile(owner_id) {
  try {
    const response = await fetch(`http://localhost:4567/doggy/${owner_id}`)
    if(!response.ok){
       throw new Error(`error status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch(e) {
     console.error(e);
  }
}

function dogGallery(doggy_id){
  try {
    fetch(`http://localhost:4567/doggy/${owner_id}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  } catch (e) {
      console.error(e);
  }
}

profileButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let userId = button.getAttribute('data-detail');
        dogProfile(userId);
        //let dog = getProfile(userId);


    })
})
