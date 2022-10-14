var searchInput = document.getElementById("search");
var searchBtn = document.getElementById("searchBtn");
var petsBox = document.getElementById("petsBox");
var panier = document.getElementById("panier");
var mainSection = document.getElementById("mainSection");
var purchaseSection = document.getElementById("purchaseSection");    
var buyBtn = document.getElementById("buyBtn");
var returnBtn = document.getElementById("return");

var pets = [
  {
    name: "American Bobtail",
    species: "Cat",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/American_bobtail_2.jpg/100px-American_bobtail_2.jpg",
    description: "Brown",
    Price: "500TND",
  },
  {
    name: "Poodle",
    species: "Dog",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Full_attention_(8067543690).jpg/1200px-Full_attention_(8067543690).jpg",
    description: "Black",
    Price: "1000TND",
  },
  {
    name: "Asian-longhair",
    species: "Cat",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tiffanie_at_cat_show.jpg/100px-Tiffanie_at_cat_show.jpg",
    description: "Silver",
    Price: "600TND",
  },
  {
    name: "Pomeranian Dog",
    species: "Dog",
    photo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Pomeranian.JPG",
    description: "Grey",
    Price: "2500TND",
  },
  {
    name: "Bombay",
    species: "Cat",

    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Bombay_femelle.JPG/106px-Bombay_femelle.JPG",
    description: "Black",
    Price: "400TND",
  },
  {
    name: "Abyssinian",
    species: "Cat",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Gustav_chocolate.jpg/800px-Gustav_chocolate.jpg",
    description: "chocolate",
    Price: "450TND",
  },
  {
    name: "American-Cat",
    species: "Cat",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/American_Shorthair.jpg/800px-American_Shorthair.jpg",
    description: "grey",
    Price: "650TND",
  },
  {
    name: "German Shepherd",
    species: "Dog",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Rombi.jpg/1200px-Rombi.jpg",
    description: "black",
    Price: "800TND",
  },
  {
    name: "Puppy",
    species: "Dog",
    photo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",
    description: "BrownWhite",
    Price: "1200TND",
  },
  {
    name: "Welsh Corgi",
    species: "Dog",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg",
    description: "BlackBrown",
    Price: "2000TND",
  },
  {
    name: "Phodpus",
    species: "hamster",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Phodopus_roborovskii_side.jpg/1280px-Phodopus_roborovskii_side.jpg",
    description: "brown",
    Price: "30TND",
  },
  {
    name: "Campbell dwarf ",
    species: "hamster",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Campbells_dwarf.jpg/330px-Campbells_dwarf.jpg",
    description: "gray-brown",
    Price: "70TND",
  },
  {
    name: "Grey dwarf ",
    species: "hamster",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Grey_Dwarf_Hamster_in_habitat.jpg/330px-Grey_Dwarf_Hamster_in_habitat.jpg",
    description: "silver",
    Price: "50TND",
  },
  {
    name: "russe",
    species: "hamster",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Phodopus_sungorus2.jpg/435px-Phodopus_sungorus2.jpg",
    description: "blue argent",
    Price: "80TND",
  },
  {
    name: "Winter white dwarf ",
    species: "hamster",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg/800px-Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg",
    description: "white",
    Price: "100TND",
  },
  {
    name: "Alaska",
    species: "rabbit",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Alaska_schwarz.jpg/140px-Alaska_schwarz.jpg",
    description: "Black",
    Price: "50TND",
  },
  {
    name: "American",
    species: "rabbit",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/RabbitAmericanBlue.jpg/140px-RabbitAmericanBlue.jpg",
    description: "Grey",
    Price: "100TND",
  },
  {
    name: "American Fuzzy",
    species: "rabbit",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Conejillo_de_indias.jpg/140px-Conejillo_de_indias.jpg",
    description: "Brown",
    Price: "90TND",
  },
  {
    name: "Angora",
    species: "rabbit",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Fluffy_white_bunny_rabbit.jpg/140px-Fluffy_white_bunny_rabbit.jpg",
    description: "White",
    Price: "120TND",
  },
  {
    name: "Belgian Hare",
    species: "rabbit",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hasenkaninchen.jpg/140px-Hasenkaninchen.jpg",
    description: "Chocolate",
    Price: "80TND",
  },
  {
    name: "Sparrow",
    species: "Bird",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/House_Sparrow_mar08.jpg",
    description: "MultiColor",
    Price: "50TND",
  },
  {
    name: "Galah",
    species: "Bird",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Eolophus_roseicapilla_AF.jpg",
    description: "MultiColor",
    Price: "80TND",
  },
  {
    name: "Brunner Pouter",
    species: "Bird",
    photo:
      "https://i.pinimg.com/736x/b1/b3/23/b1b323d4a38166ad4988829703ab8093--pigeon-pictures-pigeon-breeds.jpg",
    description: "MultiColor",
    Price: "100TND",
  },
  {
    name: "Saffron finch",
    species: "Bird",
    photo:
      "https://i.pinimg.com/originals/57/36/cf/5736cf5d6b5781a3ee5ebdc153b08d1d.png",
    description: "MultiColor",
    Price: "70TND",
  },
  {
    name: "Heeded goose",
    species: "Bird",
    photo:
      "https://tse4.mm.bing.net/th?id=OIP.Yz6s_1Ex37mQRsy1P94ffQHaGu&pid=Api&P=0",
    description: "MultiColor",
    Price: "120TND",
  },
];

var newPanierItemContainer = document.createElement("li");

function petsDisplayHandler(petsList) {
  petsBox.textContent = "";
  // petsBox.textContent = '' remplace l'empty function pour effacer la liste existante dans petsBox(container ou ilya les pets)
  for (let i = 0; i < petsList.length; i++) {
    var petContainer = document.createElement("div");
    petContainer.className = "petContainer";

    var petContainerImage = document.createElement("img");
    petContainerImage.className = "petContainerImage";
    petContainerImage.src = petsList[i].photo;
    petContainerImage.alt = "img";

    var petContainerTitre = document.createElement("h1");
    petContainerTitre.className = "petContainerTitre";
    petContainerTitre.innerText = petsList[i].name;

    var petContainerDescription = document.createElement("p");
    petContainerDescription.className = "petContainerDescription";
    petContainerDescription.innerText = petsList[i].description;

    var petContainerPrice = document.createElement("h2");
    petContainerPrice.className = "petContainerPrice";
    petContainerPrice.innerText = petsList[i].Price;

    var petContainerbtn = document.createElement("button");
    petContainerbtn.className = "petContainerButton";
    petContainerbtn.innerText = "buy";

    petContainerbtn.onclick = () => {
      newPanierItemContainer.className = "panierItemContainer";
      var newPanierItemTitel = document.createElement("h2");
      var newPanierItemPrice = document.createElement("h3");
      var newPanierItemType = document.createElement("h5");

      newPanierItemTitel.innerText = petsList[i].name;
      newPanierItemPrice.innerText = petsList[i].Price;
      newPanierItemType.innerText = petsList[i].species;

      newPanierItemContainer.appendChild(newPanierItemTitel);
      newPanierItemContainer.appendChild(newPanierItemPrice);
      newPanierItemContainer.appendChild(newPanierItemType);

      panier.appendChild(newPanierItemContainer);
    };

    petContainer.appendChild(petContainerImage);
    petContainer.appendChild(petContainerTitre);
    petContainer.appendChild(petContainerDescription);
    petContainer.appendChild(petContainerPrice);
    petContainer.appendChild(petContainerbtn);

    petsBox.appendChild(petContainer);
  }
}

petsDisplayHandler(pets);

searchBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevent default cancel page refresh
  var newList = pets.filter(
    (pet) =>
      pet.name.toLowerCase() === searchInput.value.toLowerCase() ||
      pet.species.toLowerCase() === searchInput.value.toLowerCase()
  );
  // on a creer une nouvelle liste qui contient le filtrage des animaux selon le nom de l'animale ou sa marque
  if (searchInput.value === "") {
    return petsDisplayHandler(pets);
  } else {
    return petsDisplayHandler(newList);
  }
});
var panierBtn = document.getElementById("panierBtn");
var rat = document.createElement("h5");

panierBtn.addEventListener("click", () => {
  panier.classList.toggle("displayNone");  // Toggle (Hide/Show) an Element    
  var x = 0;
  var ha = document.getElementsByTagName("h3");
  for (var i = 0; i < ha.length; i++) {
    rat.innerText = `Total :${(x = x + parseInt(ha[i].innerText))}`; // parseInt : return the numbers ina string    
    newPanierItemContainer.appendChild(rat);
  }
});

function showSectionHandler() {
  mainSection.classList.toggle("displayNone");
  purchaseSection.classList.toggle("displayNone");
}

buyBtn.addEventListener("click", () => {
  panier.classList.toggle("displayNone");
  showSectionHandler();
});
returnBtn.addEventListener("click", showSectionHandler);

// ero function takes e(event) as a parameter
// envent listener type "click"
