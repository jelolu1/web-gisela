import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import Logo from './Logo';

const CustomLink = ({ onClick, href, title, className = '' }) => {
	const router = useRouter();

	return (
		<Link
			onClick={onClick}
			className={`${className} relative group  lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 cursor-pointer `}
			href={href}
		>
			{title}
			<span
				className={`h-[1px] inline-block  bg-dark absolute left-0  -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
					router.asPath === href ? 'w-full' : 'w-0'
				}`}
			>
				&nbsp;
			</span>
		</Link>
	);
};

const NavBar = () => {
	const [navbar, setNavbar] = useState(false); // Navbar oper or not

	return (
		<header className="w-full px-14 md:px-32 py-6 font-medium flex items-center justify-between">
			<div className="justify-between w-full md:items-center md:flex ">
				<div className="flex w-full md:w-auto items-center justify-between  md:py-4 md:block">
					<Logo />

					<div className="flex space-x-2 md:hidden">
						<button
							onClick={() => setNavbar((prev) => !prev)}
							className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
						>
							{navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
						</button>
					</div>
				</div>
				<div
					className={`flex-1 justify-self-center p-0 mt-8 md:block md:mt-0 ${
						navbar ? 'block' : 'hidden'
					}`}
				>
					<nav className="flex flex-col items-center justify-center md:justify-end space-y-4 text-xl md:pb-0 md:flex-row md:space-x-6 md:space-y-0">
						<CustomLink
							onClick={() => setNavbar(false)}
							href="/"
							title="Home"
						/>
						<CustomLink
							onClick={() => setNavbar(false)}
							href="/about"
							title="About"
						/>
						<CustomLink
							onClick={() => setNavbar(false)}
							href="/projects"
							title="Projects"
						/>
						<CustomLink
							onClick={() => setNavbar(false)}
							href="/contact"
							title="Contact"
						/>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
