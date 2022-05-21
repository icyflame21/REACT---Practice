import "./App.css";
import { Slider } from "./Components/Carasouel/Slider";
import { Debounce } from "./Components/Debounce Search Bar/Debounce";
import { InifiniteScrolling } from "./Components/InifiniteScrolling/InifiniteScrolling";
import { Todo } from "./Components/JSON-Server ToDo/Todo";
import { Preloader } from "./Components/Preloader/Preloader";
import { Progess } from "./Components/Progress/Progress";
import Main from "./Components/RecursiveComments/Main";
// import { Todo } from "./Components/Todo";
// import { Todo } from "./Components/React-Todo/React-Todo";
import { StopWatch } from './Components/StopWatch/StopWatch'
function App() {
  return (
  // <></>
    // <div className="App">
      //<StopWatch/>
    //<InifiniteScrolling/>
    // <Main/>
    // </div>
    //<Slider/>
    // <Preloader/> 
    <Todo/>
  );
}

export default App;
