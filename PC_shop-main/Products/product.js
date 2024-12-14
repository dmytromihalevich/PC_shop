// Функція для оновлення інформації на сторінці
function updateProductDetails() {
    const productList = document.getElementById('product-list');
    
    // Очищаємо існуючі товари на сторінці
    productList.innerHTML = '';

    // Додаємо товари на сторінку
    productsData.forEach(product => {
        // Створюємо картку товару
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // Наповнюємо картку товару
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <ul>
                ${product.specs.map(spec => `<li><strong>${spec.label}</strong>: ${spec.value}</li>`).join('')}
            </ul>
            <a class="button_choise" href="${product.detailPageUrl}" target="_blank">Переглянути</a>
        `;

        // Додаємо картку товару в список
        productList.appendChild(productCard);
    });
}

// Викликаємо функцію для оновлення сторінки
updateProductDetails();
