function Picture(cardNumber, imageName, picName) {
    this.cardNumber = cardNumber;
    this.imageName = imageName;
    this.picName = picName;
}

function displayPictureCard(picture) {
    // Get the card element using its cardNum
    var card = $('.card').eq(picture.cardNumber);

    card.append('<img src="../diegos_content2/images/' + picture.imageName + '">');
    card.append('<h3>' + picture.picName + '</h3><hr />'); // Use picture.picName
}

var pic1 = new Picture(0, 'alfred.jpg', 'Alfred Grad Pic');
var pic2 = new Picture(1, 'ram.jpg', 'Rhody Ram');
var pic3 = new Picture(2, 'liv.jpg', '21st Birthday Pic');
var pic4 = new Picture(3, 'ri_soccer_team.jpg', 'URI Mens Soccer Team Pic');

var pictures = [pic1, pic2, pic3, pic4];

pictures.forEach(function (picture) {
    displayPictureCard(picture);
});
