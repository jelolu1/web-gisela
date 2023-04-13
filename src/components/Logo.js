import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
	return (
		<motion.div
			className="flex items-center justify-center bg-dark text-light px-4 border-2 border-dark"
			whileHover={{
				backgroundColor: '#f5f5f5',
				color: '#121212',
				transition: { duration: 0.4 },
			}}
		>
			<Link href="/" className="text-2xl">
				Gisela de Paz Solvas
			</Link>
		</motion.div>
	);
};

export default Logo;
