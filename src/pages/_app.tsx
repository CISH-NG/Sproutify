import '@/styles/globals.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { Cabin, Poppins } from 'next/font/google';

import store from '@/store';

const cabin = Cabin({
	weight: ['400', '500', '600'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-cabin'
});

const poppins = Poppins({
	weight: ['700'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-poppins'
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<main className={`${cabin.variable} ${poppins.variable} font-sans`}>
				<Component {...pageProps} />
			</main>
		</Provider>
	);
}
