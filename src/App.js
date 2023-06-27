import { Header } from './components/header.js';
import Quiz from './components/quiz.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Quiz />
      <footer>
        <p className="text-center text-info">Contributed by &nbsp;
          <a href='mailto:uadam12@gmail.com'>UNIMAID CPE students</a>
        </p>
      </footer>
    </div>
  );
}

export default App;