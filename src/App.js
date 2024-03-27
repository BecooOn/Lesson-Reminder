import React,{ useState } from "react";
import Header from "./components/Header/Header";
import Lesson from "./pages/Lesson";
import { data } from "./helper/data";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const[clear,setClear] = useState(false)
  return (
    <div className="App">
      <Header />
      <Lesson data={data} setClear={setClear} clear={clear}/>
    </div>
  );
}

export default App;
