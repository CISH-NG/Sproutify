import React from 'react';

function FaqLayout(props) {
  return (
    <div className="mt-5">
					<h1 className="ml-5 rounded-xl bg-[#4C2884] p-3 text-xl font-medium text-white">
						{props.title}
					</h1>
					<div className="ml-10">
						<h1 className="ml-5 mt-5 mb-2 text-lg font-medium">{props.question1}</h1>
					</div>{' '}
					<hr className="ml-12"></hr>
					<div className="ml-10">
						<h1 className="ml-5 mt-5 mb-2 text-lg font-medium">
							{props.question2}
						</h1>
					</div>{' '}
					<hr className="ml-12"></hr>
					<div className="ml-10">
						<h1 className="ml-5 mt-5 mb-2 text-lg font-medium">
                        {props.question3}
						</h1>
						<div className="bg-[#CECECE] rounded-xl">
							<p className="ml-12 w-4/5">
                            {props.content3}
							</p>
						</div>
					</div>{' '}
					<hr className="ml-12"></hr>
					<div className="ml-10">
						<h1 className="ml-5 mt-5 mb-2 text-lg font-medium">
                        {props.question4}
						</h1>
					</div>{' '}
					<hr className="ml-12"></hr>
					<div className="ml-10">
						<h1 className="ml-5 mt-5 mb-2 text-lg font-medium">{props.question5}</h1>
					</div>{' '}
					<hr className="ml-12"></hr>
				</div>
  );
}

export default FaqLayout;