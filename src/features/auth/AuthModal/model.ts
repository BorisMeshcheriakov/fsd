import { createAction, createReducer } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

interface AuthModalState {
  isOpen: boolean;
}

const initialState = { isOpen: false } as AuthModalState;
const toggleAction = createAction("auth/toggle");

export const authModalReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleAction, (state, action) => {
    state.isOpen = !state.isOpen;
  });
});

export const useAuthModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: AuthModalState) => state.isOpen);

  const toggle = () => dispatch(toggleAction());

  return {
    isOpen,
    toggle,
  };
};
