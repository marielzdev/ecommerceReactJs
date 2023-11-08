import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>Tienda Online</h3>
      <div>
        <button>Cursos de Inglés</button>
        <button>Cursos de Italiano</button>
        <button>Cursos de Turco</button>
      </div>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
