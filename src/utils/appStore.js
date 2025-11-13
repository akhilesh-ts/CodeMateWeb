import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../utils/slice/userSlice'
import feedSlice from '../utils/slice/feedSlice'

const appStore=configureStore({
 reducer:{
    user:userSlice,
    feed:feedSlice
 }
})

export default appStore