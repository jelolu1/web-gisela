import Image from 'next/image';
import React from 'react';
import homeImg1 from '../../public/images/home/home-1.JPG';
import homeImg2 from '../../public/images/home/home-2.JPG';
import homeImg3 from '../../public/images/home/home-3.JPG';
import homeImg4 from '../../public/images/home/home-4.JPG';

const HomeAccordion = () => {
	return (
		<div className="flex text-xl">
			<div className=" w-1/4 border-r-2 border-dark">
				<h1 className="w-full text-center border border-dark bg-dark text-light">
					Dancer
				</h1>
				<Image src={homeImg1} alt="profile" />
			</div>
			<div className=" w-1/4 border-r-2 border-dark">
				<h1 className="w-full text-center border border-dark bg-dark text-light">
					Choreographer
				</h1>
				<Image src={homeImg2} alt="profile" />
			</div>
			<div className=" w-1/4 border-r-2 border-dark">
				<h1 className="w-full text-center border border-dark bg-dark text-light">
					Teacher
				</h1>
				<Image src={homeImg3} alt="profile" />
			</div>
			<div className=" w-1/4  border-r-2 border-dark">
				<h1 className="w-full text-center border border-dark bg-dark text-light">
					Cultural Manager
				</h1>
				<Image src={homeImg4} alt="profile" />
			</div>
		</div>
	);
};

export default HomeAccordion;
