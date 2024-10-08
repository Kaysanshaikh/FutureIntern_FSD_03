import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="navbar-bg bg-violet-700 text-violet-50 h-20 flex justify-center items-center">
      <div className="navbar container mx-auto flex items-center justify-between">
        <div className="left">
          <Link to="/" className="text-xl font-semibold">
            Golden  <span className=" text-yellow-500"> Mobile Shop </span>
          </Link>
        </div>
        <div className="right flex items-center gap-5">
          <Link to="/" className="nav-link ">
            Home
          </Link>
          <Link to="/products" className="nav-link ">
            Products
          </Link>
          <Link to="/cart">
            <span className="cart-icon relative">
              <BsCart3 />
              <span className="cart-counter absolute z-[1] -top-3 -right-3 text-xs bg-orange-600 h-5 w-5 rounded-full flex items-center justify-center font-medium">
                {cartItems.length}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
