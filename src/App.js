import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./Component/Shared-Compo/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
