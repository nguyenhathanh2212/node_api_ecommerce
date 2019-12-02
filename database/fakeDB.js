var connection = require('./connectDB.js');
var ItemModel = require('../models/item');
var ShopModel = require('../models/shop');
var ServiceModel = require('../models/service');
var ItemShopModel = require('../models/item_shop');
var ServiceShopModel = require('../models/service_shop');

var listItems = [
    new ItemModel({name: 'Name item 1'}),
    new ItemModel({name: 'Name item 2'}),
    new ItemModel({name: 'Name item 3'}),
    new ItemModel({name: 'Name item 4'}),
    new ItemModel({name: 'Name item 5'}),
    new ItemModel({name: 'Name item 6'}),
    new ItemModel({name: 'Name item 7'}),
    new ItemModel({name: 'Name item 8'}),
    new ItemModel({name: 'Name item 9'}),
    new ItemModel({name: 'Name item 10'}),
    new ItemModel({name: 'Name item 11'}),
    new ItemModel({name: 'Name item 12'}),
];

var listShops = [
    new ShopModel({name: 'Name shop 1', address: '54 Nguyễn Lương Bằng'}),
    new ShopModel({name: 'Name shop 2', address: '54 Nguyễn Lương Bằng'}),
    new ShopModel({name: 'Name shop 3', address: '54 Nguyễn Lương Bằng'}),
    new ShopModel({name: 'Name shop 4', address: '54 Nguyễn Lương Bằng'}),
    new ShopModel({name: 'Name shop 5', address: '54 Nguyễn Lương Bằng'}),
    new ShopModel({name: 'Name shop 6', address: '54 Nguyễn Lương Bằng'}),
    new ShopModel({name: 'Name shop 7', address: '54 Nguyễn Lương Bằng'}),
    new ShopModel({name: 'Name shop 8', address: '54 Nguyễn Lương Bằng'}),
];

var listServices = [
    new ServiceModel({name: 'Clothers', icon_url: 'https://image.flaticon.com/icons/svg/2237/2237032.svg'}),
    new ServiceModel({name: 'Hat', icon_url: 'https://image.flaticon.com/icons/svg/1470/1470651.svg'}),
    new ServiceModel({name: 'Footwear', icon_url: 'https://image.flaticon.com/icons/svg/412/412019.svg'}),
    new ServiceModel({name: 'Clothers', icon_url: 'https://image.flaticon.com/icons/svg/2237/2237032.svg'}),
    new ServiceModel({name: 'Hat', icon_url: 'https://image.flaticon.com/icons/svg/1470/1470651.svg'}),
    new ServiceModel({name: 'Footwear', icon_url: 'https://image.flaticon.com/icons/svg/412/412019.svg'}),
    new ServiceModel({name: 'Clothers', icon_url: 'https://image.flaticon.com/icons/svg/2237/2237032.svg'}),
    new ServiceModel({name: 'Hat', icon_url: 'https://image.flaticon.com/icons/svg/1470/1470651.svg'}),
    new ServiceModel({name: 'Footwear', icon_url: 'https://image.flaticon.com/icons/svg/412/412019.svg'}),
];

listShops.forEach(async (element, index) => {
    await ShopModel.create(element);
});

listServices.forEach(async (element, index) => {
    await ServiceModel.create(element);
    await ServiceShopModel.create({
        service_id: index + 1,
        shop_id: Math.floor(Math.random() * listShops.length) + 1,
    });
});

listItems.forEach(async (element, index) => {
    await ItemModel.create(element);
    await ItemShopModel.create({
        shop_id: Math.floor(Math.random() * listShops.length) + 1,
        item_id: index + 1,
        quantity: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 1000),
    });
});
