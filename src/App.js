import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
     <div className='container'>
      <header>
        <img src='https://www.shecodes.io/assets/branding/logo-shecodes-f9fa0540d113c086f61eb6e89466c0cbd24a42163b6a96d4b01da078803f53ee.png' alt='SheCodes logo' />
      </header>
    <main>
      <Dictionary />
    </main>
    <footer>
      <p>Coded by Nataliyayaya and is <a href='https://github.com/Nataliyayaya/Dictionary-app-react' target='blank'>open-soursed on GitHub</a></p>
    </footer>
     </div>
    </div>
  );
}

export default App;
