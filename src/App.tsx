import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import './styles/app.scss';

function App() {

  return (
    <div className="App"><nav></nav>
      <Banner />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
