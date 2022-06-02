import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Typography variant='h3'>
            Tabletop Cloudsheets
          </Typography>
          <Link to="/">Home</Link>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
