import './App.css'

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Stack direction="column" spacing={2}>
          <Button variant="outlined"  color="success" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
          <button className='btn btn-danger'>++</button>
        </Stack>
      </div>
    </>
  )
}

export default App
