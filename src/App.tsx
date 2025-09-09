import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Header } from "./widgets/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacts" element={<h1>Contacts</h1>} />
        <Route path="profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
