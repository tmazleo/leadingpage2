import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/layouts/Container"
import Home from "./components/pages/Home";


function App() {
  return (
    <Router>

      <Container customClass="minheight">

        <Routes>
          <Route exact path="/" element={<Home />} />


        </Routes>
      </Container>
    </Router>
  );
}

export default App;
