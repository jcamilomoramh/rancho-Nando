const products = [
  { tittle: "Arepa De Maiz Blanca", 
    name2:"Con pollo ",
    price: "$10.99", isNew: true, 
    name3:"Con carne",
    price2: "$12.99",
    name4:null  ,
    price3: null,
    name5: null,
    price4: null, 
    isNew: false,
    name6:null,
    price5: null,
    name7:null,
    price6: null,
    name8:null,
    price7: null,
    name9:null,
    price8: null,
    image: "img/breakfast/arepas.jpeg"

   },
  { tittle: "Calentado Nandos",
    name2:"Con Huevos with Eggs",
    price: "$10.99", 
    name3:"Con carne ",
    price2: "$12.99",
    name4:"Con Carne Asada ",
    price3: "$14,99",
    name5:"Con Pollo ",
    price4: "$12,99", 
    isNew: false,
    name6:"Con Chicharon ",
    price5: "$12,99",
    name7:"Con Hígado ",
    price6: "$14,99",
    name8:"",
    price7: "",
    name9:"",
    price8: "",
    isNew: false,
    image: "img/menu-dash.jpeg"
   },
   { name: "Arepa De Maiz Blanca", 
   name2:"Con pollo | With Chicken Breast",
   price: 10.99, isNew: false, 
   name3:"Con carne | With Grilled Steak",
   price2: 12.99,
   name4:"",
   price3: "",
   name5:"",
   price4: "", 
   isNew: false,
   name6:"",
   price5: "",
   name7:"",
   price6: "",
   name8:"",
   price7: "",
   name9:"",
   price8: "", 
   isNew: false,
   image: "img/arepas.jpeg"
  },
  { name: "Arepa De Maiz Blanca", 
  name2:"Con pollo | With Chicken Breast",
  price: 10.99, isNew: false, 
  name3:"Con carne | With Grilled Steak",
  price2: 12.99,
  name4:"",
  price3: "",
  name5:"",
  price4: "", 
  isNew: false,
  name6:"",
  price5: "",
  name7:"",
  price6: "",
  name8:"",
  price7: "",
  name9:"",
  price8: "", 
  isNew: false,
  image: "img/arepas.jpeg"
 },  
 { name: "Arepa De Maiz Blanca", 
    name2:"Con pollo",
    price: 10.99, isNew: false, 
    name3:"Con carne",
    price2: 12.99, 
    isNew: false,
    image: "img/arepas.jpeg"
   }
];
const products2 = [
  { name: "Arepa De Maiz Blanca", 
    name2:"Con pollo | With Chicken Breast",
    price: 10.99, isNew: false, 
    name3:"Con carne | With Grilled Steak",
    price2: 12.99, 
    name4:"",
    price3: "",
    name5:"",
    price4: "", 
    isNew: false,
    name6:"",
    price5: "",
    name7:"",
    price6: "",
    name8:"",
    price7: "",
    name9:"",
    price8: "",
    isNew: false,
    image: "img/arepas.jpeg"
   },
   { name: "Arepa De Maiz Blanca", 
   name2:"Con pollo | With Chicken Breast",
   price: 10.99, isNew: false, 
   name3:"Con carne | With Grilled Steak",
   price2: 12.99,
   name4:"",
   price3: "",
   name5:"",
   price4: "", 
   isNew: false,
   name6:"",
   price5: "",
   name7:"",
   price6: "",
   name8:"",
   price7: "",
   name9:"",
   price8: "", 
   isNew: false,
   image: "img/arepas.jpeg"
  },  { name: "Producto 8", price: 20.99, isNew: true, image: "imagen8.jpg" },
  { name: "Arepa De Maiz Blanca", 
  name2:"Con pollo | With Chicken Breast",
  price: 10.99, isNew: false, 
  name3:"Con carne | With Grilled Steak",
  price2: 12.99,
  name4:"",
  price3: "",
  name5:"",
  price4: "", 
  isNew: false,
  name6:"",
  price5: "",
  name7:"",
  price6: "",
  name8:"",
  price7: "",
  name9:"",
  price8: "", 
  isNew: false,
  image: "img/arepas.jpeg"
 },
 { name: "Arepa De Maiz Blanca", 
 name2:"Con pollo | With Chicken Breast",
 price: 10.99, isNew: false,
 name4:"",
 price3: "",
 name5:"",
 price4: "", 
 isNew: false,
 name6:"",
 price5: "",
 name7:"",
 price6: "",
 name8:"",
 price7: "",
 name9:"",
 price8: "", 
 name3:"Con carne | With Grilled Steak",
 price2: 12.99, 
 isNew: false,
 image: "img/arepas.jpeg"
}
];
function createProductDivs(products, container) {
  container.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    const img = document.createElement("img");
    img.src = product.image;

    const tittle = document.createElement("h4");
    tittle.textContent = product.tittle;

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("name-container");

    const priceContainer = document.createElement("div");
    priceContainer.classList.add("price-container");

    const nameElements = [ product.name2, product.name3, product.name4, product.name5, product.name6, product.name7, product.name8, product.name9];
    const priceElements = [product.price, product.price2, product.price3, product.price4, product.price5, product.price6, product.price7, product.price8];

    for (let i = 0; i < nameElements.length; i++) {
      if (nameElements[i]) {
        const name = document.createElement("p");
        
        name.textContent = nameElements[i];
        nameContainer.appendChild(name);
      }

    }

    for (let i = 0; i < priceElements.length; i++) {
      if (priceElements[i]) {
        const price = document.createElement("p");
        price.textContent = priceElements[i];
        priceContainer.appendChild(price);
      }
    }

    const namePriceContainer = document.createElement("div");
    namePriceContainer.classList.add("name-price-container");
    namePriceContainer.appendChild(nameContainer);
    namePriceContainer.appendChild(priceContainer);

    div.appendChild(img);
    div.appendChild(tittle);
    div.appendChild(namePriceContainer);
    console.log(tittle)
    container.appendChild(div);
  });
}

const container = document.getElementById("container");
createProductDivs(products, container);

const container2 = document.getElementById("container2");
createProductDivs(products2, container2);

