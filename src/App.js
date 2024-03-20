// // import "./App.css";
// import { Provider } from "react-redux";
// import Main from "./Pages/Main";
// import store from "./redux/store";

// function App() {
//   return (
//     <Provider store={store}>
//       <Main />
//     </Provider>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
