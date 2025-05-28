import { createSlice } from "@reduxjs/toolkit"


type UserState = {
  firstname: string,
  lastname: string,
  age: number
}

const initialState: UserState = {
  firstname: '',
  lastname: '',
  age: 0
}

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    incrementAge: (state) => {
      state.age += 1
    },
    setFirstname: (state, action) => {
      state.firstname = action.payload
    },
    setLastname: (state, action) => {
      state.lastname = action.payload
    }
  }
})

export const { incrementAge, setFirstname, setLastname } = UserSlice.actions

export default UserSlice.reducer