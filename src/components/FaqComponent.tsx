import React from 'react';
interface FAQS {
	title: string;
	question1: string;
	content1: string;
	question2: string;
	content2: string;
	question3: string;
	content3: string;
	question4: string;
	content4: string;
	question5: string;
	content5: string;
}

function FaqComponent(props: FAQS) {
	return (
		<div className="mt-5">
			<h1 className="ml-5 rounded-xl bg-[#4C2884] p-3 text-xl font-medium text-white">
				{props.title}
			</h1>
			<details className="ml-10">
				<summary className="ml-5 mt-5 mb-2 text-lg font-medium">
					{props.question1}
				</summary>
				<div className="rounded-xl bg-[#CECECE]">
					<p className="ml-12 w-4/5">{props.content1}</p>
				</div>
			</details>{' '}
			<hr className="ml-12"></hr>
			<details className="ml-10">
				<summary className="ml-5 mt-5 mb-2 text-lg font-medium">
					{props.question2}
				</summary>
				<div className="rounded-xl bg-[#CECECE]">
					<p className="ml-12 w-4/5">{props.content2}</p>
				</div>
			</details>{' '}
			<hr className="ml-12"></hr>
			<details className="ml-10">
				<summary className="ml-5 mt-5 mb-2 text-lg font-medium">
					{props.question3}
				</summary>
				<div className="rounded-xl bg-[#CECECE]">
					<p className="ml-12 w-4/5">{props.content3}</p>
				</div>
			</details>{' '}
			<hr className="ml-12"></hr>
			<details className="ml-10">
				<summary className="ml-5 mt-5 mb-2 text-lg font-medium">
					{props.question4}
				</summary>
				<div className="rounded-xl bg-[#CECECE]">
					<p className="ml-12 w-4/5">{props.content4}</p>
				</div>
			</details>{' '}
			<hr className="ml-12"></hr>
			<details className="ml-10">
				<summary className="ml-5 mt-5 mb-2 text-lg font-medium">
					{props.question5}
				</summary>
				<div className="rounded-xl bg-[#CECECE]">
					<p className="ml-12 w-4/5">{props.content5}</p>
				</div>
			</details>{' '}
			<hr className="ml-12"></hr>
		</div>
	);
}

export default FaqComponent;
