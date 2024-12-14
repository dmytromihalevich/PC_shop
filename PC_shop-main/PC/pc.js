// Дані для кількох товарів з посиланням на деталі товару
const productsData = [
    {
        name: "ПК для Ігор та Роботи",
        price: "20,000 грн",
        image: "https://via.placeholder.com/600x400.png?text=ПК+система",
        description: "Цей ПК підходить для всіх типів робіт, від офісних завдань до потужних ігор.",
        specs: [
            { label: "Процесор", value: "Intel Core i7 12700K" },
            { label: "Оперативна пам'ять", value: "16GB DDR4" },
            { label: "Графічна карта", value: "NVIDIA GeForce RTX 3060" },
            { label: "Зберігання", value: "1TB SSD" },
            { label: "Операційна система", value: "Windows 11 Pro" },
            { label: "Гарантія", value: "2 роки" }
        ],
        detailPageUrl: "pc-detail.html"  // URL для детальної сторінки
    },
    {
        name: "Ноутбук MSI",
        price: "35,000 грн",
        image: "https://via.placeholder.com/600x400.png?text=Ноутбук+MSI",
        description: "Сучасний ноутбук для роботи та ігор, з потужними характеристиками.",
        specs: [
            { label: "Процесор", value: "Intel Core i9 12900K" },
            { label: "Оперативна пам'ять", value: "32GB DDR4" },
            { label: "Графічна карта", value: "NVIDIA RTX 3070" },
            { label: "Зберігання", value: "512GB SSD" },
            { label: "Операційна система", value: "Windows 10 Pro" },
            { label: "Гарантія", value: "1 рік" }
        ],
        detailPageUrl: "laptop-msi-detail.html"  // URL для детальної сторінки
    },
    {
        name: "Стаціонарний ПК для офісу",
        price: "15,000 грн",
        image: "https://via.placeholder.com/600x400.png?text=Стаціонарний+ПК",
        description: "Ідеальний комп'ютер для офісних задач, швидкість і надійність.",
        specs: [
            { label: "Процесор", value: "Intel Core i5 11400" },
            { label: "Оперативна пам'ять", value: "8GB DDR4" },
            { label: "Графічна карта", value: "Intel UHD" },
            { label: "Зберігання", value: "256GB SSD" },
            { label: "Операційна система", value: "Windows 11 Home" },
            { label: "Гарантія", value: "2 роки" }
        ],
        detailPageUrl: "office-pc-detail.html"  // URL для детальної сторінки
    }
];
