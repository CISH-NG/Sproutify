export type DashboardContentCardProps = {
	name: string;
	icon: JSX.Element;
	content: string;
	CTA: CTA[];
};

type CTA = { url: string; content: JSX.Element };
