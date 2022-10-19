import React from "react";
import TopButton from "./components/Feature/TopButton";
import { __getTodos } from "./redux/modules/todosSlice";
import GlobalStyle from "./Shared/GlobalStyle";
import Router from "./Shared/Router";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
      <TopButton />
    </div>
  );
};

export default App;