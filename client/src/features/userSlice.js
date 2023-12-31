import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: user ? JSON.parse(user) : null,
  token: token,
};

export const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/login", user);
      console.log("log from loginUser createAsyncThunk");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/register", user);
      console.log("log from registerUser createAsyncThunk");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (msg) => {
      console.log(msg);
      removeUserFromLocalStorage();
      return { initialState };
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const { user, token } = action.payload;
        state.user = user;
        state.token = token;
        addUserToLocalStorage({ user, token });
        toast.success(`Hey there ${user.firstName}`);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const { user, token } = action.payload;
        state.user = user;
        state.token = token;
        addUserToLocalStorage({ user, token });
        toast.success(`Welcome aboard, ${user.firstName}!`);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export const { logoutUser, toggleSidebar } = userSlice.actions;
export default userSlice.reducer;
