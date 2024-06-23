import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading_page: true,
};
const loadingSlice = createSlice({
  type: "loading",
  initialState,
  name: "loading",
  reducers: {
    setLoading_page: (state, action) => {
      state.loading_page = action.payload;
    },
  },
});
export const { setLoading_page } = loadingSlice.actions;
export default loadingSlice.reducer;
