import DefaultLayout from '@/layouts/DefaultLayout';
import React from 'react';
import Image from 'next/image';
import mobilepreview from '../assets/images/mobilepreview.png';
import businessmodel from '../assets/images/businessmodel.png';
import Profile from '@/components/Profile';
import Portfolio from '@/components/Portfolio';

function Aboutus() {
	return (
		<DefaultLayout>
			<div className="mx-auto flex w-5/6 flex-col">
				<section>
					<h1 className="mt-16 mb-5 text-center text-3xl font-bold">
						About Us
					</h1>
					<p className="mx-auto mt-5 w-2/6 text-center text-[#aaa5a5]">
						A peak into who we are and what drives us to ease business practices
						amongst MSMEs and SMEs
					</p>
					<p className="mx-auto mt-5 text-center">
						Lorem ipsum dolor sit amet consectetur. Nisl morbi tellus diam
						mauris. Ipsum diam cras magnis ac. Consequat feugiat egestas rhoncus
						est magna euismod in dolor risus. Morbi nulla feugiat sit orci. Ac
						et velit sed phasellus mattis. Mauris imperdiet aenean convallis
						aliquet. Nunc vestibulum accumsan suspendisse dignissim magna. Sit
						cursus augue tortor mattis. Nullam sed ac tincidunt cras non
					</p>
				</section>
				<section className=" my-16 flex h-52 w-full justify-around gap-5 bg-[#4C2884] ">
					<div className=" w-2/6 text-center">
						<p className="my-12 text-3xl  text-white">
							Over <span className="text-[#FEC431]">50,000</span> businesses
							enjoying tech services
						</p>
					</div>
					<div className=" w-2/6">
						<Image src={mobilepreview} alt="" className="h-full" />
					</div>
				</section>

				<section className="my-10 flex h-96 w-full gap-36">
					<div className="w-1/2">
						<h1 className="text-3xl font-bold">Business Model</h1>
						<p className="mt-10">
							Lorem ipsum dolor sit amet consectetur. Nisl morbi tellus diam
							mauris. Ipsum diam cras magnis ac. Consequat feugiat egestas
							rhoncus est magna euismod in dolor risus. Morbi nulla feugiat sit
							orci. Ac et velit sed phasellus mattis. Mauris imperdiet aenean
							convallis aliquet. Nunc vestibulum accumsan suspendisse dignissim
							magna. Sit cursus augue tortor mattis. Nullam sed ac tincidunt
							cras non
						</p>
						<p className="mt-10">
							Lorem ipsum dolor sit amet consectetur. Nisl morbi tellus diam
							mauris. Ipsum diam cras magnis ac. Consequat feugiat egestas
							rhoncus est magna euismod in dolor risus. Morbi nulla feugiat sit
							orci. Ac et velit sed phasellus mattis. Mauris imperdiet aenean
							convallis aliquet. Nunc vestibulum accumsan suspendisse dignissim
							magna. Sit cursus augue tortor mattis. Nullam sed ac tincidunt
							cras non
						</p>
					</div>
					<div className="h-96 w-96 ">
						<Image src={businessmodel} alt="" className="h-full" />
					</div>
				</section>

				<section className="my-5">
					<h1 className="mx-auto text-center text-3xl font-bold">
						Meet Our Team
					</h1>
					<div className="mx-10 my-5 flex flex-row flex-wrap justify-items-center gap-20">
						<Profile
							teamname="Kola Akindele"
							position="CEO"
							alt="Kola Akindele"
						/>
						<Profile
							teamname="Kola Akindele"
							position="CEO"
							alt="Kola Akindele"
						/>
						<Profile
							teamname="Kola Akindele"
							position="CEO"
							alt="Kola Akindele"
						/>
						<Profile
							teamname="Kola Akindele"
							position="CEO"
							alt="Kola Akindele"
						/>
						<Profile
							teamname="Kola Akindele"
							position="CEO"
							alt="Kola Akindele"
						/>
						<Profile
							teamname="Kola Akindele"
							position="CEO"
							alt="Kola Akindele"
						/>
						<Profile
							teamname="Kola Akindele"
							position="CEO"
							alt="Kola Akindele"
						/>
						<Profile
							teamname="Kola Akindele"
							position="CEO"
							alt="Kola Akindele"
						/>
					</div>
				</section>

				<section className="my-10">
					<h1 className="mx-auto text-center text-3xl font-bold">
						Our Portfolio
					</h1>
					<p className="mx-auto mt-5 text-center">
						Lorem ipsum dolor sit amet consectetur. Nisl morbi tellus diam
						mauris. Ipsum diam cras magnis ac. Consequat feugiat egestas rhoncus
						est magna euismod in dolor risus. Morbi nulla feugiat sit orci. Ac
						et velit sed phasellus mattis. Mauris imperdiet aenean convallis
						aliquet. Nunc vestibulum accumsan suspendisse dignissim magna. Sit
						cursus augue tortor mattis. Nullam sed ac tincidunt cras non
					</p>
					<div className="mt-10 flex flex-row justify-around ">
						<Portfolio />
						<Portfolio />
						<Portfolio />
					</div>
				</section>
			</div>
		</DefaultLayout>
	);
}

export default Aboutus;
