import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Container, Typography, Box } from "@mui/material"
import { resetQuiz } from "../redux/action/quizSlice"

const getEmoji = (score) => {
  if (score >= 9) return "😃"
  if (score >= 6) return "😊"
  return "😢"
}

const ResultsPage = () => {
  const dispatch = useDispatch()
  const score = useSelector((state) => state.quiz.score)

  const handleRetry = () => {
    dispatch(resetQuiz())
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "98vh",
        bgcolor: "black",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant='h3' gutterBottom>
          Quiz Finished
        </Typography>
        <Typography variant='h5' gutterBottom>
          Great job on completing the quiz!
        </Typography>
        <Typography variant='h4'>Your Score: {score}/10</Typography>
        <Typography variant='h1'>{getEmoji(score)}</Typography>
        <Typography variant='h6' gutterBottom>
          {score >= 9
            ? "Excellent! You really know your stuff!"
            : score >= 6
            ? "Good job! You did well, but there's room for improvement."
            : "Don't worry, keep practicing and you'll get better!"}
        </Typography>
        <Button
          variant='contained'
          color='primary'
          onClick={handleRetry}
          sx={{
            backgroundColor: "transparent",
            border: "1px solid white",
            color: "white",
            mt: 2,
          }}
        >
          Try Again
        </Button>
      </Container>
    </Box>
  )
}

export default ResultsPage
