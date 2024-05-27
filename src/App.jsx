import React from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { TextsContextProvider } from "./context/TextContextProvider";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextsContextProvider>
        <TextInput />
        <TextList />
      </TextsContextProvider>
    </div>
  );
}

export default App;
