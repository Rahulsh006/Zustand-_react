// src/components/Input.jsx
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import useStore from '../store'

export default function Input() {
  const [inputValue, setInputValue] = useState('')
  const addTodo = useStore((state) => state.addTodo)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      addTodo({
        id: Date.now(),
        todo: inputValue,
        completed: false,
        userId: 1 // Dummy userId
      })
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: 500, maxWidth: '100%' }}>
          <TextField
            fullWidth
            label="TO-DO"
            id="fullWidth"
            placeholder="Enter your TO-DO"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#7632cf',
                },
                '&:hover fieldset': {
                  borderColor: '#7632cf',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#7632cf',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#7632cf',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#7632cf',
              },
            }}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: 100,
            height: 55,
            backgroundColor: '#7632cf',
            '&:hover': { backgroundColor: '#5a25a3' },
          }}
        >
          Add
        </Button>
      </Stack>
    </form>
  )
}