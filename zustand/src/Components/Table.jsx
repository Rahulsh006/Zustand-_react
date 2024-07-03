// src/components/Table.jsx
import React, { useEffect, useState } from 'react'
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, Checkbox, IconButton, TextField, Typography 
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import useStore from '../store'

export default function TodoTable() {
  const { todos, fetchTodos, deleteTodo, toggleTodo, editTodo } = useStore()
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const handleEdit = (id, text) => {
    setEditingId(id)
    setEditText(text)
  }

  const handleSaveEdit = (id) => {
    editTodo(id, editText)
    setEditingId(null)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="todo table">
        <TableHead>
          <TableRow>
            <TableCell>Todos</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell component="th" scope="row">
                {editingId === todo.id ? (
                  <TextField
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={() => handleSaveEdit(todo.id)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSaveEdit(todo.id)}
                    autoFocus
                  />
                ) : (
                  <Typography
                    sx={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      color: todo.completed ? 'text.secondary' : 'text.primary'
                    }}
                  >
                    {todo.todo}
                  </Typography>
                )}
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  color="primary"
                />
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={() => handleEdit(todo.id, todo.todo)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => deleteTodo(todo.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}