import DefaultLayout from '@/layouts/DefaultLayout';
import React from 'react';

function Aboutus() {
	return (
		<DefaultLayout>
			<div className="mx-auto flex w-5/6 flex-col">
				<h1 className="mt-5 text-center text-3xl font-bold">About Us</h1>
				<p className="mx-auto mt-5 w-2/6 text-center text-[#aaa5a5]">
					A peak into who we are and what drives us to ease business practices
					amongst MSMEs and SMEs
				</p>
				<p className="mx-auto mt-5 text-center">
					Lorem ipsum dolor sit amet consectetur. Nisl morbi tellus diam mauris.
					Ipsum diam cras magnis ac. Consequat feugiat egestas rhoncus est magna
					euismod in dolor risus. Morbi nulla feugiat sit orci. Ac et velit sed
					phasellus mattis. Mauris imperdiet aenean convallis aliquet. Nunc
					vestibulum accumsan suspendisse dignissim magna. Sit cursus augue
					tortor mattis. Nullam sed ac tincidunt cras non
				</p>
				<div className="mt-5 h-52 w-full bg-[#4C2884] ">
					<div>
						<p>
							Over <span>50,000</span> businesses enjoying tech services
						</p>
					</div>
					<div></div>
				</div>
			</div>
		</DefaultLayout>
	);
}

export default Aboutus;
