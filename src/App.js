import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import { BodySvg } from "./components";
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <div>
      <BodySvg />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
