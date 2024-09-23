import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";


function App() {
  const {theme} = useContext(ThemeContext)
  const body = document.querySelector('#root')
  if(theme === 'dark'){
    body.style.backgroundColor = '#0f172a'
    body.style.color = 'white'
  }else{
    body.style = `backgroundColor : #dcdcf3`
  }
  console.log(process.env.NAME)
  return (
    <>
    <div className="relative wrapper " >
          <Header />
          <Outlet />
          <Footer />
      </div>
    </>
  );
}

export default App;
