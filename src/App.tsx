import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Header } from "./widgets/Header";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <h1>HELLO WORLD</h1>
    </BrowserRouter>
  );
}

export default App;
