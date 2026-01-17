import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import UserProfile from "./components/UserProfile.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <UserProfile 
      name="Alice"
      age="25"
      bio="Loves hiking and photography."
      />
      
      <MainContent />

      <Footer />

     <Counter />
    </>
  );
}
// Everything has been sucessfully added.
export default App;
