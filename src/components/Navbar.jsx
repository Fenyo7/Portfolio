import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#707070] text-gray-300">
            {/* Menu */}
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#707070] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Projects</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>

            {/* Social icons */}
            <div className='flex fixed flex-col top-[35%] left-0'>
              <ul>
                <li>
                  <a href="">Linkedin</a>
                </li>
              </ul>
            </div>
        </div>
    );
}

export default Navbar