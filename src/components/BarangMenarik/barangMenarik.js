//Config
import config from "config";
import BarangMenarik from ".";

const { assetsURL: { image } } = config;

const barang = [
    {
        name: "1. Iphone",
        img: `${image}/Bell 3.png`,
        poin: 150
    },
    {
        name: "2. Macbook",
        img: `${image}/Bell 3.png`,
        poin: 250
    },
    {
        name: "3. Asus ROG",
        img: `${image}/Bell 3.png`,
        poin: 200
    }
];

export default barang;