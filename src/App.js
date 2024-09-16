import "./App.css";
import Dashboard from "./pages/Dashboard";
// Contexts
import TranslationContext from "./context/TranslationContext";

function App() {
  return (
    <div className='App'>
      <TranslationContext>
        <Dashboard />
      </TranslationContext>
    </div>
  );
}

export default App;
