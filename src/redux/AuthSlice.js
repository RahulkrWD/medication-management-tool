import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseurl =
  "https://users-aea26-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";

// create async thunks
export const signup = createAsyncThunk(
  "signup",
  async (formData, { rejectWithValue }) => {
    try {
      // Fetch existing users
      const response = await axios.get(baseurl);
      const users = response.data ? Object.values(response.data) : [];
      // check if user already exists
      const userExists = users.some((user) => user.email === formData.email);
      if (userExists) {
        return rejectWithValue("User already exists");
      }

      // post new user
      const signupResponse = await axios.post(baseurl, formData);
      if (signupResponse.status == 200) {
        return "Account created successfully!";
      }
    } catch (error) {
      return rejectWithValue("Signup Failed");
    }
  }
);

// user login
export const login = createAsyncThunk(
  "login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.get(baseurl);
      if (response.status == 200) {
        const user = response.data
          ? Object.entries(response.data).map(([id, data]) => ({ id, ...data }))
          : [];
        const userExists = user.find(
          (user) =>
            user.email == formData.email && user.password == formData.password
        );
        if (!userExists) {
          return rejectWithValue("Invalid email or password");
        }
        return userExists.id;
      }
    } catch (error) {
      return rejectWithValue("User Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    message: "",
    loading: false,
    error: null,
    isAuthenticated: JSON.parse(localStorage.getItem("isAuth")) || false,
    userId: localStorage.getItem("userId") || null,
  },
  reducers: {
    clearAuthState: (state) => {
      state.message = "";
      state.error = null;
    },
    logout: (state) => {
      (state.userId = null), (state.isAuthenticated = false);
    },
  },
  extraReducers: (builder) => {
    builder
      // signup cases
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        (state.loading = false), (state.message = action.payload);
      })
      .addCase(signup.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      })

      // login cases
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        (state.loading = false),
          (state.userId = action.payload),
          (state.isAuthenticated = true),
          (state.message = "Login Successful !");
      })
      .addCase(login.rejected, (state, action) => {
        (state.loading = false),
          (action.error = action.payload),
          (state.isAuthenticated = false);
        state.message = action.payload;
      });
  },
});

export const { clearAuthState } = authSlice.actions;
export default authSlice.reducer;
