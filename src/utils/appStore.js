import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../utils/slice/userSlice'
import discoverSlice from '../utils/slice/discoverSlice'
import requestSlice from './slice/requestSlice'

const appStore=configureStore({
 reducer:{
    user:userSlice,
    discover:discoverSlice,
    request:requestSlice
 }
})

export default appStore