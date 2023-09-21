import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define your featured products slice
const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState: {
    products: [
      {
        id: 1,
        name: 'chilli',
        description: 'Plant Detaile View here......',
        imageUrl: 'https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/20190315_150918/064994908fb5e4037537697c91f1d680.jpg',
      },
      {
        id: 2,
        name: "Bringal",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20191223_214110_534/2f43901ed0d6e83456cf3d07ffe7ee7e.jpg',
      },
      {
        id: 3,
        name: "Zuccini",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20210120_212242_071/3dca7759ccf1972ff517cdefc14f60f5.jpg',
      },
      {
        id: 4,
        name: "Pumpkin",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/pumpkin_3/075d64a5f26d7ab67d2467369a803a21.jpg',
      },
      {
        id: 5,
        name: "Tomato",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqmd_FZ7BAYiRYeHGdK1oN8lE2_6Sg0mnAmvRzBA6EstLFIGv76vnZ5WmvABvzv_7EgM&usqp=CAU',
      },
      {
        id: 6,
        name: "Onion",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/bunch-of-onions-from-the-garden-after-recently-royalty-free-image-1683747767.jpg?crop=1.00xw:0.939xh;0,0.0359xh&resize=980:*',
      },
      {
        id: 7,
        name: "Apple",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://urbanplants.co.in/cdn/shop/products/abhishek-s-kumar-fruit-plant-thai-red-water-apple-plant-38659858792663.jpg?v=1672517326',
      },
      {
        id: 8,
        name: "Rose",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://assets-news.housing.com/news/wp-content/uploads/2022/10/18145120/Rose-flower-30-images-and-over-20-interesting-facts.jpg',
      },
      {
        id: 9,
        name: "Sunflower",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://rukminim1.flixcart.com/image/850/1000/xif0q/plant-sapling/d/p/s/annual-yes-yes-sunflower-006-1-pot-sunlight-original-imagkhzfmggv6dct.jpeg?q=90',
      },
      {
        id: 10,
        name: "Dhalia",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/jvcp9jk0/plant-seed/x/f/z/10-dahlia-mixed-seed-bio-kisan-original-imafywtrrcffj3ft.jpeg?q=90',
      },
      {
        id: 11,
        name: "Grapes",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://5.imimg.com/data5/LO/NV/RJ/SELLER-53524300/grapes-fruit-plant.jpg',
      },
      {
        id: 12,
        name: "Hibiscus",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-g-hibiscus-gudhal-flower-red-plant-213118.jpg?v=1679750250',
      },
    ],
  },
  reducers: {},
});
const store = configureStore({
  reducer: {
    featuredProducts: featuredProductsSlice.reducer,
    // Add more slices as needed
  },
});

export default store;