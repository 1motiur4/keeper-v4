import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import customFetch from "../../../util/customFetch";

const initialState = {
    isLoading: false,
}