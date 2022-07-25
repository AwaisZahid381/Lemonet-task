import logo from "./logo.svg";
import "./App.css";
import Svg from "./components/middle/Svg";
import Video from "./components/middle/Video";
import Creator from "./components/middledown/Creator";
import Slider from "./components/middledown/Slider";
import Greensec from "./components/middledown/Greensec";
import TImeline from "./components/header/TImeline";


function App() {
  return (
    <>
      <Svg/>
      <Video/>
      <Creator/>
      <Slider/>
      <TImeline/>
      <Greensec/>
    </>
  );
}

export default App;
