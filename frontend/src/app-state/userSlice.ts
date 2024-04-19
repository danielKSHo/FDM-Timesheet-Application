import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { Role } from "./api-components/roleEnum";

export interface UserState {
    id: number
    firstName: string
    lastName: string
    username: string
    role: string
    token: string
}

export interface Register {
    role: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

export interface User {
    sub: string;
    id: string;
    role: string;
    firstName: string;
    lastName: string;
}

interface Token {
    sub: string;
    id: number;
    role: string;
}

const initialState: UserState = {
    id: 0,
    firstName: '',
    lastName: '',
    username: '',
    role: Role.INIT,
    token: ''
}

export const userSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ username: string; token: string }>) => {
            state.username = action.payload.username
            state.token = action.payload.token
            const userObj: Token = jwtDecode(action.payload.token)
            state.id = userObj.id
            state.role = userObj.role
        },
        logout: (state) => {
            state.id = 0
            state.firstName = ''
            state.lastName = ''
            state.username = ''
            state.role = Role.INIT
            state.token = ''
        }

    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer