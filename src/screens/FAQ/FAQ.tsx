import ChevronDown from '@/assets/svg/chevron-down';
import React, { useState } from 'react';
import { faqData } from './FAQ.data';
import { FaqQuestionProps } from './FAQ.types';

function FAQ() {
	return (
		<div className="mt-10 mb-40">
			{faqData.map((item) => (
				<div className="mb-16" key={item.id}>
					<div className="mb-4 rounded-xl bg-[#4C2884] px-6 py-4 lg:mb-8 lg:px-14">
						<h3 className="text-base font-medium text-white lg:text-xl">
							{item.category}
						</h3>
					</div>

					{item.questions.map((content, idx) => (
						<FaqQuestion key={idx} {...content} />
					))}
				</div>
			))}
		</div>
	);
}

const FaqQuestion = ({ question, content }: FaqQuestionProps) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div>
				<div
					className="flex cursor-pointer items-center justify-between border-b border-[#D9D9D9] py-4"
					role="button"
					tabIndex={0}
					onClick={() => setOpen(!open)}
				>
					<p className="text-base text-[#1F1717] lg:text-lg">{question}</p>
					<ChevronDown
						className={`${
							open ? 'rotate-180' : 'rotate-0'
						} transition-transform duration-300 ease-in-out`}
					/>
				</div>

				{open && (
					<div className="my-6 rounded-xl bg-[#CECECE80] px-6 py-4">
						<span className="flex gap-x-5">
							<h4 className="text-base text-[#1F1717] lg:text-lg">
								{question}
							</h4>
							<ChevronDown className="-rotate-90" />
						</span>
						<p className="mt-4 text-base text-[#A0A0A0] lg:mx-14 lg:mt-6 lg:mb-8 lg:text-lg lg:text-[#1F1717BF]">
							{content}
						</p>
					</div>
				)}
			</div>
		</>
	);
};

export default FAQ;
