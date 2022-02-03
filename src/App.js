import "./App.scss";
import Navbar from "./components/Navbar/Navbar.js";
import Video from "./components/Hero/Video.js";
import VideoList from "./components/VideoList/VideoList.js";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";

function App() {
  let currentVideo = videoDetails[0];
  function setVideo(index) {
    currentVideo = videoDetails[index];
  }
  return (
    <div className="App">
      <Navbar />
      <Video data={currentVideo} />
      <VideoList list={videos} click={setVideo} />
    </div>
  );
}

export default App;
