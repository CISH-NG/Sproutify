import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import FAQ from '@/screens/FAQ/FAQ';

function FaqPage() {
	return (
		<DefaultLayout>
			<div className="mx-auto flex w-5/6 flex-col">
				<h1 className="mt-20 text-center text-3xl font-extrabold lg:mt-40">
					FAQs
				</h1>

				<FAQ />
			</div>
		</DefaultLayout>
	);
}

export default FaqPage;
