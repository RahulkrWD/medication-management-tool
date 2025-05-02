import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseurl =
  "https://users-aea26-default-rtdb.asia-southeast1.firebasedatabase.app/medications";

export const postMedications = createAsyncThunk(
  "postMedications",
  async (formData) => {
    try {
      const response = await axios.post(`${baseurl}.json`, formData);
      if (response.status == 200) {
        return "Medication Added Successfull";
      }
    } catch (error) {
      return "Something went wrong";
    }
  }
);

export const getMedications = createAsyncThunk(
  "getMedications",
  async (userId) => {
    try {
      const response = await axios.get(`${baseurl}.json`);
      const data = response.data
        ? Object.entries(response.data).map(([id, data]) => ({ id, ...data }))
        : [];
      const filterData = data.filter((items) => items.userId === userId);
      return filterData;
    } catch (error) {
      return "Something went wrong";
    }
  }
);

const medicationSlice = createSlice({
  name: "medications",
  initialState: {
    loading: false,
    error: null,
    medication: [],
    message: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(postMedications.pending, (state) => {
        state.loading = true;
      })
      .addCase(postMedications.fulfilled, (state, action) => {
        (state.loading = false), (state.message = action.payload);
      })
      .addCase(postMedications.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      })
      .addCase(getMedications.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMedications.fulfilled, (state, action) => {
        (state.loading = false), (state.medication = action.payload);
      })
      .addCase(getMedications.rejected, (state, action) => {
        (state.loading = false),
          (state.medication = []),
          (state.error = action.payload);
      });
  },
});

export default medicationSlice.reducer;
