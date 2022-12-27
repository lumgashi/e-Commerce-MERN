import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appApi";

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload);
    },
    resetNotifications: (state) => {
      state.notifications.forEach((obj) => {
        obj.status = "read";
      });
    },
  },
  extraReducers: (build) => {
    build.addMatcher(
      appApi.endpoints.signup.matchFulfilled,
      (_, { payload }) => payload
    );
    build.addMatcher(
      appApi.endpoints.login.matchFulfilled,
      (_, { payload }) => payload
    );
    build.addMatcher(
      appApi.endpoints.addToCart.matchFulfilled,
      (_, { payload }) => payload
    );
    build.addMatcher(
      appApi.endpoints.removeFromCart.matchFulfilled,
      (_, { payload }) => payload
    );
    build.addMatcher(
      appApi.endpoints.increaseCartProduct.matchFulfilled,
      (_, { payload }) => payload
    );
    build.addMatcher(
      appApi.endpoints.decreaseCartProduct.matchFulfilled,
      (_, { payload }) => payload
    );

    build.addMatcher(
      appApi.endpoints.createOrder.matchFulfilled,
      (_, { payload }) => payload
    );
  },
});
export const { logout, addNotifications, resetNotifications } =
  userSlice.actions;
export default userSlice.reducer;
