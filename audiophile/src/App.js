import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import Home from "./routes/home/home.component";

const Headphones = () => {
  return <h1>I am the Headphones Page.</h1>;
}

const Speakers = () => {
  return <h1>I am the Speakers Page.</h1>;
}

const Earphones = () => {
  return <h1>I am the Earphones Page.</h1>;
}

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home />} />
          <Route path="headphones" element={<Headphones />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="earphones" element={<Earphones />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
