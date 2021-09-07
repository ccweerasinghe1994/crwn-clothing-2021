import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
} from "./user.actions";
import { UserActionTypes } from "./user.types";

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}
function* getUserSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);

    const userSnapShot = yield userRef.get();
    yield put(
      signInSuccess({
        id: userSnapShot.id,
        ...userSnapShot.data(),
      })
    );
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInWithGoogleAuth() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    console.log(userAuth);
    if (!userAuth) return;
    yield getUserSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInWithEmailStart({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogleAuth);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmailStart);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SIGN_IN, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ]);
}
