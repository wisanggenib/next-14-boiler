import { createSlice } from '@reduxjs/toolkit'

type AuthState = {
  isAuthenticated: boolean
  token: string | null
  userData: {
    email: string
    id: string
    name: string
    role: string
  }
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  userData: {
    email: '',
    id: '',
    name: '',
    role: '',
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, payload) => {
      localStorage.setItem('tokenPE', payload.payload.token)
      return {
        ...state,
        isAuthenticated: true,
        userData: payload.payload,
        token: payload.payload.token,
      }
    },
    logout: (state) => {
      state.isAuthenticated = false
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
