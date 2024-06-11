import React from "react"
import { useDispatch } from "react-redux"
import { Box, Button, Typography, Grid } from "@mui/material"
import { startQuiz } from "../redux/action/quizSlice"

const quizTopics = [
  { label: "React", value: "react" },
  { label: "Node Js", value: "nodejs" },
  { label: "MongoDB", value: "Mongodb" },
  { label: "Next Js", value: "Nextjs" },
  { label: "Material UI", value: "MaterialUI" },
]

const LandingPage = () => {
  const dispatch = useDispatch()

  const handleStartQuiz = (topic) => {
    dispatch(startQuiz(topic))
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
      <Typography variant='h2' gutterBottom>
        Welcome to the Quiz App
      </Typography>
      <Typography variant='h5' gutterBottom>
        Test your knowledge with our exciting quizzes. Each question has a time
        limit of 30 seconds.
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ mt: 3, justifyContent: "center", alignItems: "center" }}
      >
        {quizTopics.map((topic) => (
          <Grid item key={topic.value}>
            <Button
              variant='contained'
              color='primary'
              onClick={() => handleStartQuiz(topic.value)}
              sx={{
                backgroundColor: "transparent",
                border: "1px solid white",
                color: "white",
              }}
            >
              {topic.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default LandingPage
