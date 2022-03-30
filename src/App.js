import Button from '@mui/material/Button';
import leftlogonobg from './assets/leftlogonobg.svg';
import './App.css';
import { Box } from '@mui/system';

function App() {
  return (
    <div className="App">
      <header>

      <div className='menu-bar'>
        <img className='menu-logo' src={leftlogonobg} />
        <Box>
        <Button>Home</Button>
        <Button>Art Works</Button>
        <Button>Environmental Themes</Button>
        <Button>How to Buy NFT</Button>
        <Button>FAQ</Button>
        <Button>About Us</Button>
        </Box>
        
      </div>

      </header>
      
    </div>
  );
}

export default App;
