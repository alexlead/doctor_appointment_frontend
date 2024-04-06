import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";

interface IModalState {
    modal: "none" | "login" | "registration" | "error";
    errorMessage: string;
};
const initialState: IModalState = {
    modal: "none",
    errorMessage: ""
};

export const modalSlice = createSlice({

    name: "modal",
    initialState,

    reducers: {
        openModal(state, action) {
            state.modal = action.payload
        },
        closeModal(state) {
            state.modal = 'none'
        },
        setErrorMessage(state, action) {
            state.errorMessage = action.payload
        }
    }

})

export const selectModal = (state: RootState) => state.modal;

export const { openModal, closeModal, setErrorMessage } = modalSlice.actions;


export default modalSlice.reducer;