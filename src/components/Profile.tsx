import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface PROFILE {
	alt: string;
	image: StaticImageData;
	teamname: string;
	position: string;
}

function Profile(props: PROFILE) {
	return (
		<div>
			<div className=" h-24 w-24 md:h-36 md:w-36 lg:h-64 lg:w-64">
				<Image
					src={props.image}
					alt={props.alt}
					className="h-full w-full rounded-full"
				/>
			</div>
			<div className="my-2 text-center">
				<h2 className="font-bold">{props.teamname}</h2>
				<h3>{props.position}</h3>
			</div>
		</div>
	);
}

export default Profile;
