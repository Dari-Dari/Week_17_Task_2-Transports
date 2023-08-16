// создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice()
class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo() {
        return `Тип: ${this.type}, Марка: ${this.brand}`;
    }

    getPrice() {
        return `Цена: ${this.price} рублей`;
    }
}

// создать класс Car, который наследует от Transport. Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей;

class Car extends Transport {
    constructor(type, price, brand, doors) {
        super(type, price, brand);
        this.doors = doors;
    }

    getDoorsCount() {
        return `Количество дверей: ${this.doors}`;
    }
}

// создать класс Bike, который наследует от Transport. Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла.

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return `Максимальная скорость: ${this.maxSpeed} км/ч`;
    }
}

// Объект, с которым вам предстоит работать:

const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

// Создание объектов на основе данных из массива 'data'

const cars = data.filter(item => item.type === 'car').map(item => new Car(item.type, item.price, item.brand, item.doors));
const bikes = data.filter(item => item.type === 'bike').map(item => new Bike(item.type, item.price, item.brand, item.maxSpeed));

// Вывод информации о машинах

cars.forEach(car => {
    console.log(car.getInfo());
    console.log(car.getPrice());
    console.log(car.getDoorsCount());
});

// Вывод информации о мотоциклах

bikes.forEach(bike => {
    console.log(bike.getInfo());
    console.log(bike.getPrice());
    console.log(bike.getMaxSpeed());
});

// Создание элемента списка для вывода информации о транспорте

function createListItem(text) {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
}

// Создание элемента изображения для вывода фотографии транспорта

function createImageElement(src) {
    const img = document.createElement('img');
    img.src = src;
    img.width = 380;
    return img;
}

const transportList = document.getElementById('transport-list');

// Создание объектов на основе данных из массива 'data' и добавление их на страницу

function dispayMainInfo(object) {
    const infoItem = createListItem(object.getInfo());
    const priceItem = createListItem(object.getPrice());
    transportList.appendChild(infoItem);
    transportList.appendChild(priceItem);
}

data.forEach((item) => {
    let transport;

    if (item.type === 'car') {
        transport = new Car(item.type, item.price, item.brand, item.doors);
        dispayMainInfo(transport);

        const doorsItem = createListItem(transport.getDoorsCount());
        transportList.appendChild(doorsItem);
    } else if (item.type === 'bike') {
        transport = new Bike(item.type, item.price, item.brand, item.maxSpeed);
        dispayMainInfo(transport);

        const maxSpeedItem = createListItem(transport.getMaxSpeed());
        transportList.appendChild(maxSpeedItem);
    }

    if (transport) {
        // Создание элемента списка и добавление фотографии транспорта
        const imageItem = createImageElement(item.image);
        transportList.appendChild(imageItem);
    }
});

