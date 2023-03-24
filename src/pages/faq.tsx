import DefaultLayout from '@/components/layouts/DefaultLayout';
import FaqLayout from '@/components/layouts/FaqLayout';
import React from 'react';

function faq() {
	return (
		<DefaultLayout>
			<div className="mx-auto flex w-5/6 flex-col">
				<h1 className="mt-5 text-center text-3xl font-extrabold">FAQs</h1>
				<FaqLayout 
                title="General" 
                question1= "Who are we?"
                question2= "What do we do?"
                question3= "How long have we existed?"
                content3= "Lorem ipsum dolor sit amet consectetur. Nisl morbi tellus diam mauris. Ipsum diam cras magnis ac. Consequat feugiat egestas rhoncus est magna euismod in dolor risus. Morbi nulla feugiat sit orci. Ac et velit sed phasellus mattis. Mauris imperdiet aenean convallis aliquet. Nunc vestibulum accumsan suspendisse dignissim magna. Sit cursus augue tortor mattis. Nullam sed ac tincidunt cras non"
                question4 ="What benefits do i get from your service?"
                question5 = "Who are we?"/>

                <FaqLayout 
                title="Privacy" 
                question1= "Who are we?"
                question2= "What do we do?"
                question3= "How long have we existed?"
                content3= "Lorem ipsum dolor sit amet consectetur. Nisl morbi tellus diam mauris. Ipsum diam cras magnis ac. Consequat feugiat egestas rhoncus est magna euismod in dolor risus. Morbi nulla feugiat sit orci. Ac et velit sed phasellus mattis. Mauris imperdiet aenean convallis aliquet. Nunc vestibulum accumsan suspendisse dignissim magna. Sit cursus augue tortor mattis. Nullam sed ac tincidunt cras non"
                question4 ="What benefits do i get from your service?"
                question5 = "Who are we?"/>

               <FaqLayout 
                title="Technical" 
                question1= "Who are we?"
                question2= "What do we do?"
                question3= "How long have we existed?"
                content3= "Lorem ipsum dolor sit amet consectetur. Nisl morbi tellus diam mauris. Ipsum diam cras magnis ac. Consequat feugiat egestas rhoncus est magna euismod in dolor risus. Morbi nulla feugiat sit orci. Ac et velit sed phasellus mattis. Mauris imperdiet aenean convallis aliquet. Nunc vestibulum accumsan suspendisse dignissim magna. Sit cursus augue tortor mattis. Nullam sed ac tincidunt cras non"
                question4 ="What benefits do i get from your service?"
                question5 = "Who are we?"/>
			</div>
		</DefaultLayout>
	);
}

export default faq;
