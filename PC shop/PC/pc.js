
const pcData = {
    name: "ПК для Ігор та Роботи",
    price: "20,000 грн",
    image: "https://via.placeholder.com/600x400.png?text=ПК+система",
    specs: [
        { label: "Процесор", value: "Intel Core i7 12700K" },
        { label: "Оперативна пам'ять", value: "16GB DDR4" },
        { label: "Графічна карта", value: "NVIDIA GeForce RTX 3060" },
        { label: "Зберігання", value: "1TB SSD" },
        { label: "Операційна система", value: "Windows 11 Pro" },
        { label: "Гарантія", value: "2 роки" }
    ],
    description: "Цей ПК підходить для всіх типів робіт, від офісних завдань до потужних ігор. Завдяки найсучаснішим компонентам ви зможете працювати і грати на найвищих налаштуваннях."
};

function updatePCDetails() {
    document.getElementById('pc-name').textContent = pcData.name;

    document.getElementById('pc-price').textContent = `Ціна: ${pcData.price}`;

    document.getElementById('pc-image').src = pcData.image;

    const specsList = document.getElementById('pc-specs');
    pcData.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = `${spec.label}: ${spec.value}`;
        specsList.appendChild(li);
    });

    document.getElementById('pc-description').textContent = pcData.description;
}

function addToCart() {
    alert(`${pcData.name} додано в кошик!`);
}

updatePCDetails();
