import "./App.css";
import TimeLine from "./components/TimeLine";

const fakeData = {
  img: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
  time: "19.42",
};

function App() {
  const list = new Array(20).fill(fakeData);

  return (
    <div className="App">
      <TimeLine data={list} />
    </div>
  );
}

export default App;
