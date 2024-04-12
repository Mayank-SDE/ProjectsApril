import logoImage from '../assets/favicon_io/apple-touch-icon.png';
const Navbar = () => {
    return (
        <div className='bg-slate-950 text-white flex justify-between h-[60px]'>
            <div className='flex'>
                <img className='h-8 w-auto' src={logoImage} alt="logo-image" />
                <div>Search Icon</div>
            </div>
            <div>
                <ul className='flex justify-around'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Help</li>
                    <li>Your Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar