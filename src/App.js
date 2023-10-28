import Home from './components/Home/Home'
import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
  <main>
    <NavBar/>
    <Container>
      <Home/>
    </Container>
  </main>
  );
};

export default App;