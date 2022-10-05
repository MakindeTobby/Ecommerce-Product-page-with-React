import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '../../bootstrap-5.0.2-dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './Navbar'
import { useRef, useContext } from 'react'
import { ThemeContext } from './contexts/GlobalState';


function App() {
  let [count, setCount] = useState(0);
  const data = useRef(null);
  const [thumbnail, setThumbnail] = useState(['/image-product-1-thumbnail.jpg', '/image-product-2-thumbnail.jpg',
    '/image-product-3-thumbnail.jpg', '/image-product-4-thumbnail.jpg'])
  const [newImage, setNewimage] = useState(["/image-product-1.jpg", "/image-product-2.jpg", "/image-product-3.jpg", "/image-product-4.jpg"])
  const [product, setProduct] = useState([{
    store: "SNEAKER COMPANY",
    image: "/image-product-1.jpg",
    title: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring adurable rubber outer sole, they’ll withstand everything the weather can offer.",
    new_price: 125.42,
    old_price: 250.84,
    discount: 50,

  }])


  const { cart, setCart } = useContext(ThemeContext);

  const toCart = (index) => {
    cart.push(product[index])
    setCart([...cart])
  }
  const removeCart = (index) => {
    cart.splice(index, 1)
    setCart([...cart])
  }

  const handleChange = (index) => {
    data.current.src = newImage[index]
  }

  return (
    <div>
      <Navbar count={count} />
      <main className='px-5 w-100 d-flex flex-wrap'>
        <div className="w-auto  d-flex flex-column  ps-5 py-5 ">
          <div style={{ width: "20.5rem", height: "50vh" }}>
            <img src="/image-product-1.jpg" ref={data} className='w-100 h-100 rounded' alt="" />
          </div>

          <div className='d-flex gap-4 mt-4' style={{ width: "25rem" }}>
            {
              thumbnail.map((image, index) =>
                <span style={{ width: "4rem", height: "4rem" }} className='tiny rounded' key={index} onClick={() => handleChange(index)}>
                  <img src={image} className='w-100 h-100  rounded' alt="" />
                </span>

              )
            }



          </div>

        </div>


        {
          product.map((value, index) =>

            <div className="w-50 py-5 d-flex flex-column gap-2  px-5" key={index}>
              <span className='fw-bold txt anim'> {value.store}</span>

              <h2>{value.title}</h2>

              <p className='text-muted anim txt2'> {value.description}</p>

              <div className='d-flex gap-2 align-items-center'><span className='fw-bold fs-4'>${value.new_price}</span>
                <span className='fw-bold fs-5 txt bg-light p-1 shadow-sm d-flex justify-content-center align-items-center'>{value.discount}%</span>
              </div>
              <del className='fw-bold  text-muted'>${value.old_price}</del>
              <div className='d-flex gap-4 align-items-center w-100 anim txt3'>
                <div>
                  <button className='btn btn-light shadow  btn-sm' disabled={cart.length === 1 ? true : false} onClick={() => setCount(count < 1 ? count = 0 + cart.splice(0, 1) : count - 1)}><img src="/icon-minus.svg" alt="" /></button>
                  <button className='btn fw-bold fs-5' disabled={cart.length === 1 ? true : false}>{count}</button>
                  <button className='btn btn-light shadow  btn-sm' disabled={cart.length === 1 ? true : false} onClick={() => setCount(count + 1)}><img src="/icon-plus.svg" alt="" /></button>
                </div>
                {cart.length < 1 ? <button className='btn btn-danger d-flex gap-4 cart' disabled={count < 1 ? true : false} onClick={() => toCart(index)}>
                  <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fillRule="nonzero" /></svg>
                  Add to cart</button> :
                  <button className='btn btn-danger d-flex gap-4 cart' onClick={() => removeCart(index)}>
                    ❌  Remove from cart</button>}
              </div>
            </div>
          )
        }





      </main>
      <div className='d-flex justify-content-center w-100'>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Makinde Oluwatobi</a>.
      </div>
    </div>
  )
}

export default App
