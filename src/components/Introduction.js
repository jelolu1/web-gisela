import Image from 'next/image';
import React from 'react';
import homeImg1 from '../../public/images/home/home-1.JPG';
import homeImg2 from '../../public/images/home/home-2.JPG';
import homeImg3 from '../../public/images/home/home-3.JPG';
import homeImg4 from '../../public/images/home/home-4.JPG';

function IntroductionItem({ title, img }) {
	return (
		<div className="w-1/4 border-x-2 border-dark">
			<h1 className="w-full text-center border py-3 border-dark bg-dark text-light">
				{title}
			</h1>
			<Image src={img} alt="profile" />
		</div>
	);
}

const Introduction = ({ myRef }) => {
	return (
		<div ref={myRef} className="flex text-md sm:text-lg md:text-xl">
			<IntroductionItem title="Dancer" img={homeImg1} />
			<IntroductionItem title="Choreographer" img={homeImg2} />
			<IntroductionItem title="Teacher" img={homeImg3} />
			<IntroductionItem title="Cultural Manager" img={homeImg4} />
		</div>
	);
};

export default Introduction;
