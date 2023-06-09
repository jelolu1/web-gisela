import HomeAccordion from '@/components/HomeAccordion';
import Introduction from '@/components/Introduction';
import Layout from '@/components/Layout';
import VideoTrailer from '@/components/VideoTrailer';
import Head from 'next/head';

import { useRef } from 'react';

export default function Home() {
	const myRef = useRef(null);

	const executeScroll = () =>
		myRef.current.scrollIntoView({ behavior: 'smooth' });

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<main className="flex items-center text-dark w-full min-h-screen ">
				<Layout>
					<VideoTrailer executeScroll={executeScroll} />

					<Introduction myRef={myRef} />
				</Layout>
			</main>
		</>
	);
}
