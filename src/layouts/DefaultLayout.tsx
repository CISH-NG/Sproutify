import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { ReactNode } from 'react';

export default function DefaultLayout({ children }: { children: ReactNode }) {
	// const { data, error } = useSWR('/api/navigation', fetcher)

	// if (error) return <div>Failed to load</div>
	// if (!data) return <div>Loading...</div>

	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
