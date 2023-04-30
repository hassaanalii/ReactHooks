
import './App.css';
import Home from './Home';
import UseRef from './UseRef';
import NoteState from './context/NoteState';

function App() {
  return (
    <NoteState>
    <div >
        <UseRef />
    </div>
    </NoteState>
  );
}

export default App;
