import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer
        greeting={"Bienvenidos - Welcome - Benvenuto - Hoş geldin"}
      />
    </div>
  );
}

export default App;
