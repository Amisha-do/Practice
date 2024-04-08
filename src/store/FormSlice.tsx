// storedata/formSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
}

interface FormState {
  formData: FormData | null;
}

const initialState: FormState = {
  formData: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormData>) => {
      state.formData = action.payload;
    },
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
