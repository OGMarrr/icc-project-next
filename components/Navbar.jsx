import React, { useState } from "react";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	return (
		<div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
			<h1 className='w-full text-2xl font-bold text-[#00df9a]'>
				IMMACULADA CONCEPTION COLLEGE{" "}
			</h1>
			<ul className='hidden md:flex'>
				<button className='p-4 hover:bg-[#404040] rounded'>Home</button>
				<button className='p-4 hover:bg-[#404040] rounded'>News</button>
				<button className='p-4 hover:bg-[#404040] rounded'>Events</button>
				<button className='p-4 hover:bg-[#404040] rounded'>Admissions</button>
				<button className='p-4 hover:bg-[#404040] rounded'>Affiliates</button>
				<button className='p-4 hover:bg-[#404040] rounded'>Organization</button>
				<button className='p-4 hover:bg-[#404040] rounded'>Contact</button>
			</ul>
		</div>
	);
};

export default Navbar;
