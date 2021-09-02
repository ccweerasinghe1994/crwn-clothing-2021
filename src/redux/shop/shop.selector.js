import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (urlParameter) =>
  createSelector(
    [selectCollections],
    (collections) => collections[urlParameter]
  );
