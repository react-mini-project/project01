import React from "react";
import { __getTodos } from "./redux/modules/todosSlice";
import GlobalStyle from "./Shared/GlobalStyle";
import Router from "./Shared/Router";

const App = () => {
  
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
    
  );
};

export default App;