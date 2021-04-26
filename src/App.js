import "./App.css";
import TimeLine from "./components/TimeLine";
import Cart from "./components/Cart";

const fakeData = {
  img: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
  time: 1902,
};

const fakeData1 = {
  img: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
  time: 1702,
};

function App() {
  const list1 = (new Array(20).fill(fakeData)).map((d, i) => ({ ...d, cameraId: 'Cam1', time: d.time + i * 2 }));
  const list2 = (new Array(20).fill(fakeData1)).map((d, i) => ({ ...d, cameraId: 'Cam2', time: d.time + i * 2 }));

  return (
    <div className="App">
      <TimeLine data={list1} title={'Cam1'} />
      <TimeLine data={list2} title={'Cam2'} />
      <Cart />
    </div>
  );
}

export default App;
