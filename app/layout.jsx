import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
	title: 'GM Hangout',
	description: 'Gather your RPG party!',
	keywords: 'GM, DM, DND, RPG',
};

const MainLayout = ({ children }) => {
	return (
		<html>
			<body>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
};

export default MainLayout;
