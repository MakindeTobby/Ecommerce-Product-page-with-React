import { left } from "@popperjs/core";
import { useContext } from "react";
import { ThemeContext } from "./contexts/GlobalState";
import './App.css'

const Navbar = ({ count }) => {
    const { cart, setCart } = useContext(ThemeContext);
    const removeCart = (index) => {
        cart.splice(index, 1)
        setCart([...cart])
        console.log(cart);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white w-100  px-5 shadow-sm">
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">▦</button>
            <a className="navbar-brand fw-bold fs-4" ><img src="/logo.svg" alt="" /></a>
            <div className="collapse navbar-collapse w-100" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0 ms-4  d-flex w-50 justify-content-evenly fw-semibold">
                    <li className="nav-item">
                        <a className="nav-link lnk" href="#">Collections</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link lnk" href="#">Men</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link lnk" href="#">Women</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link lnk" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link lnk" href="#">Contact</a>
                    </li>
                </ul>


            </div>


            <div>
                <button className="btn position-relative"><img src="/icon-cart.svg" alt="" />
                    <span className="position-absolute top-0 left-0 px-1  text-white rounded-circle  cart" hidden={cart.length < 1 ? true : false} >{cart.length}</span></button>
                <div className=" bg-light position-absolute rounded shadow d-flex flex-column gap-1 p-2" style={{ width: "19rem", top: "4rem", right: "4rem", zIndex: "1000" }}>
                    <h5>Cart</h5>
                    <hr className="bg-dark" />
                    {cart.map((item, index) =>
                        <div className="d-flex justify-content-between align-items-center" key={index}>
                            <div className=" rounded  border border-2" style={{ width: "2.5rem", heigth: "7rem" }}>
                                <img src={item.image} alt="" className="w-100 h-100 rounded" />
                            </div>
                            <div className="d-flex flex-column ">
                                <small>{item.title}</small>
                                <span className="d-flex  align-items-center gap-2"><small>${item.new_price} x {count}</small> <strong>${item.new_price * count}</strong></span>
                            </div>
                            <div>
                                <button className="btn" onClick={() => removeCart(index)}><img src="/icon-delete.svg" alt="" /></button>
                            </div>

                        </div>
                    )}
                    <button className="btn cart text-white" disabled={cart.length < 1 ? true : false}>Checkout</button>
                </div>
            </div>
            <button className="btn rounded-circle" style={{ width: "auto", height: "auto" }}><img src="/image-avatar.png" className="w-50  h-50" alt="" /></button>

        </nav >
    );
}

export default Navbar;