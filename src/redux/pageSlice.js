import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

// Export action creators
export const { setPage } = pageSlice.actions;

// Export reducer
export default pageSlice.reducer;
