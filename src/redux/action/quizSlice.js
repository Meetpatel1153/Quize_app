import { createSlice } from "@reduxjs/toolkit"
import { questions } from "../../data" 

const initialState = {
  currentQuestion: 0,
  selectedOption: null,
  score: 0,
  timeLeft: 30,
  stage: "landing",
  questions: [],
  topic: "",
}

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz: (state, action) => {
      const topic = action.payload
      state.stage = "quiz"
      state.currentQuestion = 0
      state.selectedOption = null
      state.score = 0
      state.timeLeft = 30
      state.topic = topic
      state.questions = questions[topic] || []
    },
    nextQuestion: (state) => {
      if (
        state.selectedOption === state.questions[state.currentQuestion].answer
      ) {
        state.score += 1
      }
      state.selectedOption = null
      state.timeLeft = 30
      if (state.currentQuestion < state.questions.length - 1) {
        state.currentQuestion += 1
      } else {
        state.stage = "results"
      }
    },
    selectOption: (state, action) => {
      state.selectedOption = action.payload
    },
    setTimeLeft: (state, action) => {
      state.timeLeft = action.payload
    },
    resetQuiz: (state) => {
      state.stage = "landing"
    },
  },
})

export const { startQuiz, nextQuestion, selectOption, setTimeLeft, resetQuiz } =
  quizSlice.actions

export default quizSlice.reducer
