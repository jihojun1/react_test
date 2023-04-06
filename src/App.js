import A01Axios from "./components/A01Axios";
import ContactApp from './components/ContactApp';

// npm i react-router-dom axios
function App() {
  return (
    <div className="m-3">
      <h1>Axios</h1>

      <ContactApp />
      <hr />
      <A01Axios />
    </div>
  );
}

export default App;

