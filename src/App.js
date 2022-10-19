import React from "react";
import Button from "./components/Button";
import { __getTodos } from "./redux/modules/todosSlice";
import GlobalStyle from "./Shared/GlobalStyle";
import Router from "./Shared/Router";

const App = () => {
  // const printOne = () => {
  //   console.log(1)
  // }
  // const printTwo = () => {
  //   console.log(2)
  // }
  return (
    <div>
      <GlobalStyle />
      <Router />
      {/* <Button bgColor="red" color="white" width="200px" onClick={printOne}>버튼1</Button>
      <Button onClick={printTwo}>버튼2</Button> */}
    </div>
    
  );
};

export default App;