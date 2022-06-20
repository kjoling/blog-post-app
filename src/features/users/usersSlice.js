import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "dude" },
  { id: "1", name: "xQc" },
  { id: "2", name: "Azan" },
];
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: {
      reducers(state, action) {},
    },
  },
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
