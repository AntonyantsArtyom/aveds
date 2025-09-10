import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Header } from "./widgets/Header";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
