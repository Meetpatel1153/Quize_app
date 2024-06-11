import { configureStore } from "@reduxjs/toolkit"
import quizReducer from "../action/quizSlice"

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
})
