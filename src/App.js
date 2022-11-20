import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./Component/Shared-Compo/Routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="mx-5 ">
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
