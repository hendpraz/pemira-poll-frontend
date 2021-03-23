//Config
import config from "config";
import BarangMenarik from ".";

const { assetsURL: { image } } = config;

const barang = [
    {
        id: "123",
        name: "1. Nama Barang",
        photo_url: `${image}/Bell 3.png`,
        price: 150
    },
    {
        id: "234",
        name: "2. Nama Barang",
        photo_url: `${image}/Bell 3.png`,
        price: 250
    },
    {
        id: "345",
        name: "3. Nama Barang",
        photo_url: `${image}/Bell 3.png`,
        price: 200
    }
];

export default barang;