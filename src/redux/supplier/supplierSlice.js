import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSupplier: null,
  error: null,
  loading: false,
};

const supplierSlice = createSlice({
  name: 'supplier',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentSupplier = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateSupplierStart: (state) => {
      state.loading = true;
    },
    updateSupplierSuccess: (state, action) => {
      state.currentSupplier = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateSupplierFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

   
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateSupplierStart,
  updateSupplierSuccess,
  updateSupplierFailure
} = supplierSlice.actions;

export default supplierSlice.reducer;