import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material"

import {
  nextQuestion,
  selectOption,
  setTimeLeft,
} from "../redux/action/quizSlice"

const QuizPage = () => {
  const dispatch = useDispatch()
  const { currentQuestion, selectedOption, timeLeft, questions } = useSelector(
    (state) => state.quiz
  )

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(setTimeLeft(timeLeft - 1))
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, dispatch])

  useEffect(() => {
    if (timeLeft === 0) {
      dispatch(nextQuestion())
    }
  }, [timeLeft, dispatch])

  const handleOptionClick = (option) => {
    if (selectedOption === null) {
      dispatch(selectOption(option))
    }
  }

  const handleNextQuestion = () => {
    dispatch(nextQuestion())
  }

  const handleSkipQuestion = () => {
    dispatch(nextQuestion())
  }

  if (!questions[currentQuestion]) {
    return null
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
        <Typography variant='h4' gutterBottom>
          {questions[currentQuestion].question}
        </Typography>
        <List>
          {questions[currentQuestion].options.map((option) => (
            <ListItem
              button
              key={option}
              onClick={() => handleOptionClick(option)}
              sx={{
                backgroundColor:
                  selectedOption === null
                    ? "gray"
                    : selectedOption === option
                    ? option === questions[currentQuestion].answer
                      ? "skyblue"
                      : "red"
                    : option === questions[currentQuestion].answer
                    ? "skyblue"
                    : "gray",
                color: selectedOption !== null && "white",
                margin: "8px",
                border: "1px solid gray",
                borderRadius: "5px",
                pointerEvents: selectedOption !== null ? "none" : "auto",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: selectedOption === null ? "scale(1.05)" : "none",
                  backgroundColor:
                    selectedOption === null ? "lightgray" : "gray",
                },
                "&:active": {
                  transform: selectedOption === null ? "scale(1)" : "none",
                },
              }}
            >
              <ListItemText primary={option} />
            </ListItem>
          ))}
        </List>
        <Typography variant='h6'>Time left: {timeLeft} seconds</Typography>
        <Button
          variant='contained'
          color='primary'
          onClick={handleNextQuestion}
          sx={{
            backgroundColor: "transparent",
            border: "1px solid white",
            color: "white",
          }}
        >
          {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={handleSkipQuestion}
          sx={{
            backgroundColor: "transparent",
            border: "1px solid white",
            color: "white",
            ml: 2,
          }}
        >
          Skip
        </Button>
        <Typography variant='h6' sx={{ mt: 2 }}>
          Question {currentQuestion + 1}/{questions.length}
        </Typography>
      </Container>
    </Box>
  )
}

export default QuizPage
