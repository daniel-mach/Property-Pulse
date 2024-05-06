import '@/assets/styles/globals.css';

export const metadata = {
	title: 'Property Rental',
	description: 'Find the perfect rental property',
	keywords: 'find, rental, property, properties',
};

const MainLayout = ({ children }) => {
	return (
		<html>
			<body>
				<div>{children}</div>
			</body>
		</html>
	);
};

export default MainLayout;
