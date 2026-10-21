
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1>Paradise Nursery</h1>
        <p>Bring nature into your home.</p>
        <button onClick={() => window.location.href = "#plants"}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
