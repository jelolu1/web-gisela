import { motion } from 'framer-motion';
import React, { useState } from 'react';
import trailer from '../../public/static/videos/trailer.webm';

const VideoTrailer = ({ executeScroll }) => {
	const [muted, setMuted] = useState(true);

	const seeMore = {
		hidden: {
			opacity: 0,
			pathLength: 0,
			fill: 'rgba(255, 255, 255, 0)',
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			fill: 'rgba(255, 255, 255, 1)',
		},
	};
	return (
		<div className="relative text-light">
			<video className="relative w-screen" autoPlay loop muted={muted}>
				<source src={trailer} type="video/webm" />
			</video>

			<motion.div className="absolute top-4 right-4 cursor-pointer">
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 960 960"
					width="36"
					height="36"
					className="overflow-visible stroke-white stroke-2 relative"
					onClick={() => setMuted((prev) => !prev)}
				>
					{muted ? (
						<motion.path
							d="M813 1000 681 868q-28 20-60.5 34.5T553 925v-62q23-7 44.5-15.5T638 825L473 659v237L273 696H113V456h156L49 236l43-43 764 763-43 44Zm-36-232-43-43q20-34 29.5-71.923T773 575q0-103.322-60-184.661T553 287v-62q124 28 202 125.5T833 575q0 51-14 100t-42 93ZM643 634l-90-90V414q47 22 73.5 66t26.5 96q0 15-2.5 29.5T643 634ZM473 464 369 360l104-104v208Zm-60 286V600l-84-84H173v120h126l114 114Zm-42-192Z"
							variants={seeMore}
							initial="hidden"
							animate="visible"
							transition={{
								default: { duration: 2, ease: 'easeInOut' },
								fill: { duration: 2, ease: [1, 0, 0.8, 1] },
							}}
						/>
					) : (
						<motion.path
							d="M560 925v-62q97-28 158.5-107.5T780 575q0-101-61-181T560 287v-62q124 28 202 125.5T840 575q0 127-78 224.5T560 925ZM120 696V456h160l200-200v640L280 696H120Zm420 48V407q55 17 87.5 64T660 576q0 57-33 104t-87 64ZM420 408 307 516H180v120h127l113 109V408Zm-94 168Z"
							variants={seeMore}
							initial="hidden"
							animate="visible"
							transition={{
								default: { duration: 0.5, ease: 'easeInOut' },
								fill: { duration: 0.5, ease: [1, 0, 0.8, 1] },
							}}
						/>
					)}
				</motion.svg>
			</motion.div>

			<motion.div className="hidden md:flex absolute bottom-0 left-0 right-0  justify-center text-2xl">
				<motion.div
					whileHover={{ scale: 1.1 }}
					className="cursor-pointer flex flex-col items-center"
					onClick={executeScroll}
				>
					{/* <motion.h1
						className="translate-y-8"
						variants={seeMore}
						initial="hidden"
						animate="visible"
						transition={{
							default: { duration: 1.5, ease: 'easeInOut' },
						}}
					>
						See More
					</motion.h1> */}

					<motion.svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 960 960"
						width="100"
						height="100"
						className="overflow-visible stroke-white stroke-2 relative"
					>
						<motion.path
							d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z"
							variants={seeMore}
							initial="hidden"
							animate="visible"
							transition={{
								default: { duration: 2, ease: 'easeInOut' },
								fill: { duration: 2, ease: [1, 0, 0.8, 1] },
							}}
						/>
					</motion.svg>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default VideoTrailer;
