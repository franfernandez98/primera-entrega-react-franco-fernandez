import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
return (
    <nav>
         <h3>Casacas</h3>
         <div>
         <button>Boca Jrs</button>
         <button>San Lorenzo</button>
         <button>Independiente</button>
         <button>Racing</button>
         </div>
         <CartWidget/>
    </nav>
);
}

export default NavBar

