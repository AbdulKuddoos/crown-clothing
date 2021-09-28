import { call, put, all, takeLatest } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";

import { clearCart } from "./cart.actions";

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGNOUT_SUCCESS, clearCartOnSignOut);
}

export function* clearCartOnSignOut() {
  yield put(clearCart());
}
