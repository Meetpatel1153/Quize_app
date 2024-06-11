import React from "react"
import { useSelector } from "react-redux"
import LandingPage from "./components/LandingPage"
import QuizPage from "./components/QuizPage"
import ResultsPage from "./components/ResultsPage"

const App = () => {
  const stage = useSelector((state) => state.quiz.stage)

  return (
    <div>
      {stage === "landing" && <LandingPage />}
      {stage === "quiz" && <QuizPage />}
      {stage === "results" && <ResultsPage />}
    </div>
  )
}

export default App
