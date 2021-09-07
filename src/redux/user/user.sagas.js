import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  googleProvider,
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";
import { googleSignInFailure, googleSignInSuccess } from "./user.actions";
import { UserActionTypes } from "./user.types";

export function* signInWithGoogleAuth() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);

    const userSnapShot = yield userRef.get();
    yield put(
      googleSignInSuccess({
        id: userSnapShot.id,
        ...userSnapShot.data(),
      })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogleAuth);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
