import logoImage from '../assets/favicon_io/apple-touch-icon.png';
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
const Navbar = () => {
    return (
        <div className='bg-slate-950 text-white flex justify-between h-[50px] items-center'>
            <div className='flex items-center px-10'>
                <img className='h-8 w-auto mx-5' src={logoImage} alt="logo-image" />
                <input className='border-2 border-blue-500 rounded-xl bg-white cursor-text pl-3 text-black' placeholder="Search..." type="text" />
                <a href=""> <MdOutlineScreenSearchDesktop className='pl-2 h-8 w-auto' /></a>
            </div>
            <div>
                <div className='flex mr-20 items-center'>
                    <a href="#" className="px-8">Home</a>
                    <a href="#" className="px-8">About</a>
                    <a href="#" className="px-8">Shop</a>
                    <a href="#" className="px-8">Help</a>
                    <a href="#" className="px-8 bg-[#ff407d] rounded-full">Your Cart</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar