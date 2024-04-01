import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";

interface IModalState {
    modal: "none" | "login" | "registration"
};
const initialState: IModalState = {
    modal: "none"
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
        }
    }

})

export const selectModal = (state: RootState) => state.modal;

export const { openModal, closeModal } = modalSlice.actions;


export default modalSlice.reducer;