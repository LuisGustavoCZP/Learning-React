import logo from './logo.svg';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MainPage } from './pages/Main';

function App() {
  return (
    <MainPage logo={logo}/>
  );
}

export default App;
