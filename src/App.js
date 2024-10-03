import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setDarkMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor='#212529';
    } else {
      setDarkMode('light');
      document.body.style.backgroundColor='white';

    }
  };

  return (
    <>
      <Navbar title="Word count with Manish" linktext="About" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter the text" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
