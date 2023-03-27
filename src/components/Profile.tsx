import React from 'react';
import Image from 'next/image';
import businessmodel from '../assets/images/businessmodel.png';

interface PROFILE {
	alt: string;
	teamname: string;
	position: string;
}

function Profile(props: PROFILE) {
	return (
		<div>
			<div className="h-48 w-48">
				<Image
					src={businessmodel}
					alt={props.alt}
					className="h-full w-full rounded-full"
				/>
				<div className="my-2 text-center">
					<h2 className="font-bold">{props.teamname}</h2>
					<h3>{props.position}</h3>
				</div>
			</div>
		</div>
	);
}

export default Profile;
