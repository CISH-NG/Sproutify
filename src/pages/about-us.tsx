import DefaultLayout from '@/layouts/DefaultLayout';
import React from 'react';
import Image from 'next/image';
import mobilepreview from '../assets/images/mobilepreview.png';
import businessmodel from '../assets/images/businessmodel.png';
import Profile from '@/components/Profile';
import Portfolio from '@/components/Portfolio';
import polygon from '../assets/svg/polygon.svg';
import Ellipsea from '../assets/images/Ellipsea.png';
import Ellipseb from '../assets/images/Ellipseb.png';
import Ellipsec from '../assets/images/Ellipsec.png';
import Ellipsed from '../assets/images/Ellipsed.png';
import Ellipsee from '../assets/images/Ellipsee.png';
import Ellipsef from '../assets/images/Ellipsef.png';
import Ellipseg from '../assets/images/Ellipseg.png';
import Ellipseh from '../assets/images/Ellipseh.png';

function Aboutus() {
	return (
		<DefaultLayout>
			<div className="mx-auto flex w-full flex-col">
				<div className="mx-auto w-full lg:max-w-7xl">
					<section>
						<h1 className=" mx-auto mt-16 mb-5 max-w-max text-center text-4xl font-bold lg:text-5xl">
							About Us
						</h1>
						<p className="mx-auto mt-5 text-center text-lg font-semibold text-[#aaa5a5] lg:max-w-2xl lg:text-3xl">
							A peak into who we are and what drives us to ease business
							practices amongst MSMEs and SMEs
						</p>
						<p className="mx-auto mt-5 p-2 text-center text-lg font-normal lg:max-w-7xl lg:text-2xl">
							Lorem ipsum dolor sit amet consectetur. Nisl morbi tellus diam
							mauris. Ipsum diam cras magnis ac. Consequat feugiat egestas
							rhoncus est magna euismod in dolor risus. Morbi nulla feugiat sit
							orci. Ac et velit sed phasellus mattis. Mauris imperdiet aenean
							convallis aliquet. Nunc vestibulum accumsan suspendisse dignissim
							magna. Sit cursus augue tortor mattis. Nullam sed ac tincidunt
							cras non
						</p>
					</section>
				</div>

				<section className=" mt-7 flex h-[100px] w-full justify-around gap-5 bg-[#4C2884] lg:h-[320px] ">
					<div className="ft-pattern" aria-hidden="true">
						<Image src={polygon} alt="pattern" />
					</div>

					<div className="flex w-2/6 items-center justify-center">
						<p className="xs:w-[172px] text-center text-base text-white lg:text-3xl">
							Over <span className="text-[#FEC431]">50,000</span> businesses
							enjoying tech services
						</p>
					</div>
					<div className=" w-[150px] lg:w-2/6  ">
						<Image src={mobilepreview} alt="" className="h-full" />
					</div>
				</section>

				<section className="my-2 mx-auto flex h-fit w-full flex-col gap-12 p-10 lg:max-w-[1440px] lg:flex-row lg:gap-36">
					<div className="xs:w-full">
						<h1 className="max-w-xs text-center text-4xl font-bold lg:text-5xl">
							Business Model
						</h1>
						<p className="mt-10 text-base font-normal lg:max-w-2xl lg:text-2xl">
							Lorem ipsum dolor sit amet consectetur. Nisl morbi tellus diam
							mauris. Ipsum diam cras magnis ac. Consequat feugiat egestas
							rhoncus est magna euismod in dolor risus. Morbi nulla feugiat sit
							orci. Ac et velit sed phasellus mattis. Mauris imperdiet aenean
							convallis aliquet. Nunc vestibulum accumsan suspendisse dignissim
							magna. Sit cursus augue tortor mattis. Nullam sed ac tincidunt
							cras non
						</p>
						<p className="mt-10 text-base font-normal lg:max-w-2xl lg:text-2xl">
							Lorem ipsum dolor sit amet consectetur. Nisl morbi tellus diam
							mauris. Ipsum diam cras magnis ac. Consequat feugiat egestas
							rhoncus est magna euismod in dolor risus. Morbi nulla feugiat sit
							orci. Ac et velit sed phasellus mattis. Mauris imperdiet aenean
							convallis aliquet. Nunc vestibulum accumsan suspendisse dignissim
							magna. Sit cursus augue tortor mattis. Nullam sed ac tincidunt
							cras non
						</p>
					</div>
					<div className=" mx-auto h-[248px] w-[272px] lg:h-[544px] lg:w-[465px] ">
						<Image src={businessmodel} alt="" className="h-full" />
					</div>
				</section>

				<section className="my-2 ">
					<h1 className="mx-auto max-w-sm text-center text-3xl font-bold lg:text-4xl">
						Meet Our Team
					</h1>
					<div className="mx-auto flex max-w-7xl flex-row flex-wrap items-center justify-center justify-items-center gap-4 p-2 lg:gap-10 lg:p-10">
						<Profile
							teamname="Kola Akindele"
							position="CEO"
							alt="Kola Akindele"
							image={Ellipsea}
						/>
						<Profile
							teamname="Paul Okoye"
							position="CEO"
							alt="Paul Okoye"
							image={Ellipseb}
						/>
						<Profile
							teamname="Kola Akindele"
							position="CEO"
							alt="Kola Akindele"
							image={Ellipsec}
						/>
						<Profile
							teamname="Kola Akindele"
							position="CEO"
							alt="Kola Akindele"
							image={Ellipsed}
						/>
						<Profile
							teamname="Kola Akindele"
							position="CEO"
							alt="Kola Akindele"
							image={Ellipsee}
						/>
						<Profile
							teamname="Kola Akindele"
							position="CEO"
							alt="Kola Akindele"
							image={Ellipsef}
						/>
						<Profile
							teamname="Kola Akindele"
							position="CEO"
							alt="Kola Akindele"
							image={Ellipseg}
						/>
						<Profile
							teamname="Kola Akindele"
							position="CEO"
							alt="Kola Akindele"
							image={Ellipseh}
						/>
					</div>
				</section>

				<section className="my-10">
					<h1 className="mx-auto max-w-[289px] text-center text-3xl font-bold lg:text-5xl">
						Our Portfolio
					</h1>
					<p className="mx-auto mt-5 max-w-[1280px] p-2 text-center text-base lg:text-2xl">
						Lorem ipsum dolor sit amet consectetur. Nisl morbi tellus diam
						mauris. Ipsum diam cras magnis ac. Consequat feugiat egestas rhoncus
						est magna euismod in dolor risus. Morbi nulla feugiat sit orci. Ac
						et velit sed phasellus mattis. Mauris imperdiet aenean convallis
						aliquet. Nunc vestibulum accumsan suspendisse dignissim magna. Sit
						cursus augue tortor mattis. Nullam sed ac tincidunt cras non
					</p>
					<div className="m-3 mx-auto flex flex-col items-center justify-center gap-5 p-3 lg:flex-row lg:justify-around ">
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
