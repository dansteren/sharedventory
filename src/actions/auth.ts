interface SignInAction {
  type: 'AUTH_SUCCESS';
}

interface SignOutAction {
  type: 'SIGN_OUT';
}

export const signIn = () =>
  ({
    type: 'AUTH_SUCCESS'
  } as SignInAction);

export const signOut = () =>
  ({
    type: 'SIGN_OUT'
  } as SignOutAction);

export type AuthAction = SignOutAction | SignInAction;
