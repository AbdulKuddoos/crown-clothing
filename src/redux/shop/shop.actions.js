import shopActionTypes from "./shop.types";

export const updateCollectionsInRedux = (collections) => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collections,
});
