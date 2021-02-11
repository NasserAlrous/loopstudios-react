import logo from './logo.svg';
import './App.css';
import TopCreateArea from "./components/top.jsx";
import MiddleCreateArea from "./components/middle.jsx"
import BottomCreateArea from "./components/bottom.jsx"
import FooterCreateArea from "./components/footer.jsx"

function App() {
  return (
    <div>
      <TopCreateArea />
      <MiddleCreateArea />
      <BottomCreateArea />
      <FooterCreateArea />
    </div>
  );
}

export default App;
