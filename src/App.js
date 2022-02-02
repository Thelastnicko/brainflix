import "./App.scss";
import Navbar from "./components/Navbar/Navbar.js";
import Video from "./components/Hero/Video.js";
import VideoDetails from "./components/VideoDetails/VideoDetails.js";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Video />
      {videos.map((v) -> <VideoDetails/>}
    </div>
  );
}

export default App;
