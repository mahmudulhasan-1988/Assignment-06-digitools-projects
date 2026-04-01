import { MdOutlineShoppingCart } from 'react-icons/md';

const NavBar = ({ carts }) => {
  const cartItemCount = carts?.length || 0;

  return (
    <div className="navbar mx-auto max-w-7xl py-4">

      <div className="navbar-start">
        <img className="w-40" src="/DigiTools.png" alt="Logo" />
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg font-semibold">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-5 items-center">
        
        {/* Cart Icon with Count */}
        <div className="relative">
          <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded">
            {cartItemCount}
          </span>
        </div>

        <h2 className="cursor-pointer font-semibold">Login</h2>

        <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-full">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;














// import { MdOutlineShoppingCart } from 'react-icons/md';


// const NavBar = ({ carts }) => {
//     const cartItemCount = carts.length;
//     console.log(carts);
    
//   return (
//     <div className="navbar mx-auto max-w-7xl py-4">
      
//       {/* Left */}
//       <div className="navbar-start">
//         <div className="flex items-center gap-1 font-bold text-xl">
//           <img className="w-40" src="/DigiTools.png" alt="Logo" />
//         </div>
//       </div>

//       {/* Center */}
//       <div className="navbar-center hidden md:flex">
//         <ul className="menu menu-horizontal gap-10 px-1 text-lg">
//           <li><a>Products</a></li>
//           <li><a>Features</a></li>
//           <li><a>Pricing</a></li>
//           <li><a>Testimonials</a></li>
//           <li><a>FAQ</a></li>
//         </ul>
//       </div>

//       {/* Right */}
//       <div className="navbar-end gap-5 items-center">
        
//         <MdOutlineShoppingCart cartItemCount={cartItemCount}/>

//         <h2 className="cursor-pointer">Login</h2>

//         <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-full">
//           Get Started
//         </a>
//       </div>
//     </div>
//   );
// };

// export default NavBar;