import { FC } from 'react';
import { api } from '../api/api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { MyAccount } from '../components/MyAccount/MyAccount';

export const MyAccountPage: FC = () => {
	api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<MyAccount />
			<Footer />
		</>
	);
};
