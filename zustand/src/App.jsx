// src/App.js
import React from 'react'
import { Container, Box } from '@mui/material'
import Input from './Components/Input'
import TodoTable from './Components/Table'

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        my: 4 
      }}>
        <Box sx={{ width: '100%', mb: 4 }}>  
          <Input />
        </Box>
        <Box sx={{ width: '100%' }}>
          <TodoTable />
        </Box>
      </Box>
    </Container>
  )
}

export default App