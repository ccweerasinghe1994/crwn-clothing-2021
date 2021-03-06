import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
export const selectCollection = (urlParameter) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[urlParameter] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
