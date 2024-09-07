import Header from "./components/Header";
import Footer from "./components/Footer";
import GameArena from "./components/GameArena";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <GameArena />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
