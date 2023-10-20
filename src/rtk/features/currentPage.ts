import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};

const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentpage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { setCurrentpage } = currentPageSlice.actions;

export default currentPageSlice.reducer;
