import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

const authUser = localStorage.getItem('user');
const authToken = localStorage.getItem('accessToken');

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: authUser ? JSON.parse(authUser) : null,
    accessToken: authToken ? JSON.parse(authToken) : null,
  },
  reducers: {
    setCredentials: (state, { payload: { user, accessToken } }) => {
      state.user = user;
      state.accessToken = accessToken;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
    },
    setUserCredentials: (state, { payload: { user } }) => {
      state.user = user;
      runLogoutTimer();
      localStorage.setItem('user', JSON.stringify(user));
    },
    removeCredentials: (state) => {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  extraReducers: (builder) => {},
});

export const runLogoutTimer = () => {
  setTimeout(() => {
    removeCredentials();
  }, 5000);
};

export const { setCredentials, removeCredentials, setUserCredentials } =
  slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
