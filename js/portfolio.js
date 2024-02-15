function Picture(cardNumber, imageName, picName) {
    this.cardNumber = cardNumber;
    this.imageName = imageName;
    this.picName = picName;
}

function displayPictureCard(picture) {
    // Get the card element using its cardNum
    var card = document.getElementsByClassName('card')[picture.cardNumber];

    card.innerHTML += '<img src="../diegos_content2/images/' + picture.imageName + '">';
    card.innerHTML += '<h3>' + picture.picName + '</h3><hr />'; // Use picture.picName
}

var pic1 = new Picture(0, 'IMG_7333.jpg', '21st Birthday');
var pic2 = new Picture(1, 'pic2.jpg', 'Some Name');
var pic3 = new Picture(2, 'pic3.jpg', 'Another Name');
var pic5 = new Picture(3, 'pic4.jpg', 'Yet Another Name');

var pictures = [pic1, pic2, pic3, pic5];

pictures.forEach(function (picture) {
    displayPictureCard(picture);
});

