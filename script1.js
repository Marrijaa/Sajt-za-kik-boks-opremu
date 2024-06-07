const categories = [
    {
      name: "Rukavice",
      products: [
        { name: "Venum crne rukavice", image: "Proizvodi/Venum crno/rukavice 1.1.webp", hoverImage: "Proizvodi/Venum crno/rukavice 1.2.webp", Cena: 6000 },
        { name: "Venum crvene rukavice", image: "Proizvodi/Venum crveno/rukavice 1.1.jpg", hoverImage: "Proizvodi/Venum crveno/rukavice 1.2.webp", Cena: 6000 },
        { name: "Venum roze rukavice", image: "Proizvodi/Venum roze/rukavice 1.1.webp", hoverImage: "Proizvodi/Venum roze/rukavice 1.2.webp", Cena: 6000 },
        { name: "Venum plave rukavice", image: "Proizvodi/Venum plavo/rukavice 1.1.webp", hoverImage: "Proizvodi/Venum plavo/rukavice 1.2.webp", Cena: 6000 },
        { name: "Venum sive rukavice", image: "Proizvodi/Venum sivo/rukavice 1.1.jpg", hoverImage: "Proizvodi/Venum sivo/rukavice 1.2.webp", Cena: 6000 },
        { name: "Venum zelene rukavice", image: "Proizvodi/Venum zeleno/rukavice 1.1.webp", hoverImage: "Proizvodi/Venum zeleno/rukavice 1.2.webp", Cena: 6000 },
        { name: "Venum zlatne rukavice", image: "Proizvodi/Venum zlatno/rukavice 1.1.webp", hoverImage: "Proizvodi/Venum zlatno/rukavice 1.2.webp", Cena: 6000 },

      ]
    },
    {
      name: "Štitnici",
      products: [
        { name: "Venum crni štitnici", image: "Proizvodi/Venum crno/štitnici 1.1.jpg", hoverImage: "Proizvodi/Venum crno/štitnici 1.2.jpg", Cena: 4000 },
        { name: "Venum crveni štitnici", image: "Proizvodi/Venum crveno/štitnici 1.1.jpg", hoverImage: "Proizvodi/Venum crveno/štitnici 1.2.jpg", Cena: 4000 },
        { name: "Venum roze štitnici", image: "Proizvodi/Venum roze/štitnici 1.1.jpg", hoverImage: "Proizvodi/Venum roze/štitnici 1.2.jpg", Cena: 4000 },
        { name: "Venum plavi štitnici", image: "Proizvodi/Venum plavo/štitnici 1.1.jpg", hoverImage: "Proizvodi/Venum plavo/štitnici 1.2.jpg", Cena: 4000 },
        { name: "Venum sivi štitnici", image: "Proizvodi/Venum sivo/štitnici 1.1.jpg", hoverImage: "Proizvodi/Venum sivo/štitnici 1.2.jpg", Cena: 4000 },
        { name: "Venum zeleni štitnici", image: "Proizvodi/Venum zeleno/štitnici 1.1.webp", hoverImage: "Proizvodi/Venum zeleno/štitnici 1.2.webp", Cena: 4000 }, 
        { name: "Venum zlatni štitnici", image: "Proizvodi/Venum zlatno/štitnici 1.1.webp", hoverImage: "Proizvodi/Venum zlatno/štitnici 1.2.webp", Cena: 4000 },
      ]
    },
    {
      name: "Bandažeri",
      products: [
        { name: "Venum crni bandažeri", image: "Proizvodi/Venum crno/bandažeri 1.1.webp", Cena: 2500 },
        { name: "Venum crveni bandažeri", image: "Proizvodi/Venum crveno/bandažeri 1.1.webp", Cena: 2500 },
        { name: "Venum plavi bandažeri", image: "Proizvodi/Venum plavo/bandažeri 1.1.webp", Cena: 2500 }, 
        { name: "Venum roze bandažeri", image: "Proizvodi/Venum roze/bandažeri 1.1.webp", Cena: 2500 },
        { name: "Venum florescentni bandažeri", image: "Proizvodi/Venum sivo/bandažeri 1.1.jpg", Cena: 2500 },
        { name: "Venum zeleni bandažeri", image: "Proizvodi/Venum zeleno/bandažeri 1.1.jpg", Cena: 2500 },
        { name: "Venum crno/zlatni bandažeri", image: "Proizvodi/Venum zlatno/bandažeri 1.1.webp", Cena: 2500 }, 
      ]
    },
    {
      name: "Guma za zube",
      products: [
        { name: "Venum crna guma za zube", image: "Proizvodi/Venum crno/guma 1.1.webp", hoverImage: "Proizvodi/Venum crno/guma 1.2.webp", Cena: 2000 },
        { name: "Venum crvena guma za zube", image: "Proizvodi/Venum crveno/guma 1.1.webp", hoverImage: "Proizvodi/Venum crveno/guma 1.2.webp", Cena: 2000 },
        { name: "Venum plava guma za zube", image: "Proizvodi/Venum plavo/guma 1.1.webp", hoverImage: "Proizvodi/Venum plavo/guma 1.2.webp", Cena: 2000 }, 
        { name: "Venum roze guma za zube", image: "Proizvodi/Venum roze/guma 1.1.webp", hoverImage: "Proizvodi/Venum roze/guma 1.2.webp", Cena: 2000 }, 
        { name: "Venum siva guma za zube", image: "Proizvodi/Venum sivo/guma 1.1.webp", hoverImage: "Proizvodi/Venum sivo/guma 1.2.webp", Cena: 2000 }, 
        { name: "Venum zelena guma za zube", image: "Proizvodi/Venum zeleno/guma 1.1.webp", hoverImage: "Proizvodi/Venum zeleno/guma 1.2.webp", Cena: 2000 }, 
        { name: "Venum zlatna guma za zube", image: "Proizvodi/Venum zlatno/guma 1.1.webp", hoverImage: "Proizvodi/Venum zlatno/guma 1.2.webp", Cena: 2000 },
      ]
    },
    {
      name: "Šorts",
      products: [
        { name: "Venum crni šorts", image: "Proizvodi/Venum crno/šorts 1.1.webp", hoverImage: "Proizvodi/Venum crno/šorts 1.2.webp", Cena: 4200 }, 
        { name: "Venum crveni šorts", image: "Proizvodi/Venum crveno/šorts 1.1.jpg", hoverImage: "Proizvodi/Venum crveno/šorts 1.2.jpg", Cena: 4200 }, 
        { name: "Venum plavi šorts", image: "Proizvodi/Venum plavo/šorts 1.1.webp", hoverImage: "Proizvodi/Venum plavo/šorts 1.2.webp", Cena: 4200 }, 
        { name: "Venum rozi šorts", image: "Proizvodi/Venum roze/šorts 1.1.webp", hoverImage: "Proizvodi/Venum roze/šorts 1.2.webp", Cena: 4200 }, 
        { name: "Venum sivi šorts", image: "Proizvodi/Venum sivo/šorts 1.1.jpg", hoverImage: "Proizvodi/Venum sivo/šorts 1.2.jpg", Cena: 4200 }, 
        { name: "Venum zeleni šorts", image: "Proizvodi/Venum zeleno/šorts 1.1.webp", hoverImage: "Proizvodi/Venum zeleno/šorts 1.2.webp", Cena: 4200 }, 
        { name: "Venum zlatni šorts", image: "Proizvodi/Venum zlatno/šorts 1.1.webp", hoverImage: "Proizvodi/Venum zlatno/šorts 1.2.webp", Cena: 4200 }, 
      ]
    }
];

let lastOpenedCategory = null; 
let orderedProducts = [];

function populateProducts(categoryId, products) {
    const productsContainer = document.getElementById(categoryId);
    products.forEach(product => {
        const productContainer = document.createElement("div");
        productContainer.classList.add("product");
        productContainer.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onmouseover="changeImage(this, '${product.hoverImage}')" onmouseout="restoreImage(this, '${product.image}')">
            <p>${product.name}</p>
            <p>Cena: ${product.Cena} RSD</p>
            <button onclick="orderProduct('${product.name}', ${product.Cena})">Poruči</button>
        `;
        productsContainer.appendChild(productContainer);
    });
}

function toggleProducts(productsId) {
  const productsContainer = document.getElementById(productsId);
  const isCurrentlyOpen = productsContainer.style.display === 'flex';

  // Zatvori prethodno otvorenu kategoriju ako postoji i ako nije ista kao trenutno kliknuta
  if (lastOpenedCategory && lastOpenedCategory !== productsId) {
      document.getElementById(lastOpenedCategory).style.display = 'none';
  }

  // Otvori ili zatvori trenutnu kategoriju
  productsContainer.style.display = isCurrentlyOpen ? 'none' : 'flex';
  lastOpenedCategory = isCurrentlyOpen ? null : productsId;
}


categories.forEach((category, index) => {
    const categoryId = `category${index + 1}`;
    const productsId = `products${index + 1}`;
    populateProducts(productsId, category.products);
});

function changeImage(element, newImage) {
    element.src = newImage;
}

function restoreImage(element, originalImage) {
    element.src = originalImage;
}

function orderProduct(name, price) {
    orderedProducts.push({name: name, price: price});
        // Prikaži obaveštenje
        const notification = document.getElementById('notification');
        notification.textContent = `Poručujete proizvod: ${name} po ceni od ${price} RSD.`;
        notification.style.display = 'block';
    
        // Sakrij obaveštenje nakon 3 sekunde
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }

function showOrderedProducts() {
    const orderListContainer = document.getElementById('orderListContainer');
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';

    if (orderedProducts.length === 0) {
        alert("Nemate poručenih proizvoda.");
        return;
    }

    orderedProducts.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${product.name} - ${product.price} RSD`;
        orderList.appendChild(listItem);
    });

    orderListContainer.style.display = 'block';
}

function hideOrderList() {
    const orderListContainer = document.getElementById('orderListContainer');
    orderListContainer.style.display = 'none';
}