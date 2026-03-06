import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import UserProfile from "./components/UserProfile.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <WelcomeMessage />

      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography."
      />

      <MainContent />

      <Footer />
    </>
  );
}

export default App;