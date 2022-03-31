import Button from '@mui/material/Button';
import leftlogonobg from './assets/leftlogonobg.svg';
import './App.css';
import { Box } from '@mui/system';
import { FAQContentBox } from './components/faq-list/faq-content-box.tsx';

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
      <FAQContentBox question={"What is a NFT"} answer={"eiei"} />
    </div>
  );
}

export default App;
