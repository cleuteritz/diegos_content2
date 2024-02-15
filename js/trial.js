///////////////// CARDS OF INFORMATION FOR VIEWERS //////////////////

function cardInfo (cardNumber, imageFile) {
    var card = document.getElementsByClassName('thumbnail')[cardNumber];
    
    
    card.innerHTML += '<img src="./images/' + imageFile + '" style="width:100%">';
    }

    var zeroCard = {
        cardNumber: 0,
        imageFile: "liv_i.png",

    }
    
    var firstCard = {   
        cardNumber: 1,
        imageFile: "Gog.png",
        }
    
    var secondCard = {
      cardNumber: 2,
      imageFile: "Sasha.png",
      channelName: "Work out with Sasha Live",

    }

     
    var thirdCard = {
      cardNumber: 3,
      imageFile: "SYP.png",

    }
    

    
    
    
    
    cardInfo(zeroCard.cardNumber, zeroCard.imageFile);
    cardInfo(firstCard.cardNumber, firstCard.imageFile);
    cardInfo(secondCard.cardNumber, secondCard.imageFile);
    cardInfo(thirdCard.cardNumber, thirdCard.imageFile);
    
    ///////////////// CARDS OF INFORMATION FOR VIEWERS //////////////////