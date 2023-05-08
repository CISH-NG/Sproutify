import { SVGProps } from 'react';

const NotificationIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M13.0002 3C13.0002 2.44772 12.5525 2 12.0002 2C11.4479 2 11.0002 2.44772 11.0002 3V3.75H10.4428C8.21769 3.75 6.3761 5.48001 6.2372 7.70074L6.0162 11.2342C5.93194 12.5814 5.47965 13.8797 4.70859 14.9876C4.01191 15.9886 4.63213 17.3712 5.84306 17.5165L9.25018 17.9254V19C9.25018 20.5188 10.4814 21.75 12.0002 21.75C13.519 21.75 14.7502 20.5188 14.7502 19V17.9254L18.1573 17.5165C19.3682 17.3712 19.9885 15.9886 19.2918 14.9876C18.5207 13.8797 18.0684 12.5814 17.9842 11.2342L17.7632 7.70074C17.6243 5.48001 15.7827 3.75 13.5576 3.75H13.0002V3ZM10.4428 5.25C9.00976 5.25 7.82373 6.36417 7.73427 7.79438L7.51327 11.3278C7.41188 12.949 6.86762 14.5112 5.93977 15.8444C5.88942 15.9168 5.93425 16.0167 6.02177 16.0272L9.75943 16.4757C11.2479 16.6543 12.7524 16.6543 14.2409 16.4757L17.9786 16.0272C18.0661 16.0167 18.1109 15.9168 18.0606 15.8444C17.1327 14.5112 16.5885 12.949 16.4871 11.3278L16.2661 7.79438C16.1766 6.36417 14.9906 5.25 13.5576 5.25H10.4428ZM12.0002 20.25C11.3098 20.25 10.7502 19.6904 10.7502 19V18.25H13.2502V19C13.2502 19.6904 12.6905 20.25 12.0002 20.25Z"
				fill="black"
				fillOpacity="0.5"
			/>
		</svg>
	);
};

export default NotificationIcon;
