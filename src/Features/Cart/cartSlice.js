import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      name: "Acetic",
      model: "A327-2882-00",
      caseMeasurements: "40 mm",
      type: "Watch",
      color: "Black Tortoise",
      price: 125,
      description:
        "A True Original. Our iconic timepiece gets decked out in an acetate finish, creating a rich and vibrant pop of color. Acetate is a plant-based composite with unlimited potential for customization. Each pattern is crafted to give the Time Teller’s classic design some contemporary flair.",
      design:
        "Modeled after heritage watches, the Time Teller was created to have a timeless silhouette with a modern spin.",
      durability:
        "Besides the aesthetic qualities of acetate, the material is lightweight and durable. Because acetate is less rigid than other plastics, it’s more likely to bend and rebound than break.",
      specialFeature:
        "Custom jewelry style, three-link acetate bracelet with double-locking clasp.",
      movement: "Miyota Japanese quartz 3 hand.",
      waterRating: "100 Meter / 10 ATM",
      watchBand:
        "20mm custom handmade acetate 3 link bracelet with stainless steel double locking clasp with micro adjust.",
      watchDial: "The dial includes applied indices, and custom molded hands.",
      watchCase:
        "40mm, 100 meter/10 ATM, custom handmade acetate case, fixed handmade acetate bezel, hardened mineral crystal, triple gasket stainless steel crown, stainless steel screw down caseback and spring pin lugs.",
      warranty:
        "Nixon offers a limited warranty of defects in materials and workmanship for a period of two (2) years after original purchase from nixon.com or an authorized Nixon dealer. This means that if the materials in your watch aren't right or if the watch isn't put together correctly, we'll repair or replace it, at our option. But, this doesn't mean you can abuse your watch and expect us to fix it for free. We don't cover normal wear and tear or batteries*, crystal, watch case, strap, bracelet, loss or theft. You will void your warranty if you open your case back, push the buttons underwater, or forget to screw down or push in the crown and expose your watch to moisture. Proof of purchase is required for all warranty claims and service requests, so hold onto your receipt. Nixon will not accept a warranty claim or repair request if a watch has evidence of excessive wear or misuse.",
      image:
        "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw40cf4eee/products/A327-2882-view1.jpg?sfrm=png",
      size: "OSFM",
      flair: "New",
      category: "womens-watches",
      photos: [
        "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw88384374/products/A327-2882-view2.jpg?sfrm=png",
        "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw8a92ba1b/products/A099-3005-view3.jpg?sw=556&sh=680&sm=fit&sfrm=png",
        "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw4806d07d/products/A327-2882-view4.jpg?sfrm=png",
        "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwcbd1cc5d/products/A327-2882-life_1.jpg?sfrm=png",
        "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw3e5e9321/products/A327-2882-seeiton.jpg?sfrm=png",
      ],
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
