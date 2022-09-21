// >> Modules
import { useState } from 'react';
import Head from 'next/head';
import getVariable from '../globalVariables';

// >> Styles
import useStyles from './homePageStyle';

// >> Components
import Table from './table/table';
import SearchBar from './searchBar/searchBar';

// >> Script
function HomePage() {
	// >> Style
	const styles = useStyles();

	// >> Variables
	const [searchValue, setSearchValue] = useState('');
	const [searchValueProp, setSearchValueProp] = useState('');

	// >> Functions
	const handleChange = (event) => {
		setSearchValue(event.target.value);
	};

	const buttonClick = () => {
		setSearchValueProp(searchValue);
	};

	// >> Render
	return (
		<>
			<Head>
				<title>{getVariable['texts']['pageTitle']}</title>
				<meta charSet="utf-8" />
				<meta
					name="description"
					content={getVariable['texts']['pageDesc']}
				/>

				<meta
					property="og:url"
					content={`https://${getVariable['texts']['pageLink']}/`}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content={getVariable['texts']['pageTitle']}
				/>
				<meta
					property="og:description"
					content={getVariable['texts']['pageDesc']}
				/>
				<meta
					property="og:image"
					content={getVariable['texts']['pageImage']}
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:domain"
					content={getVariable['texts']['pageLink']}
				/>
				<meta
					property="twitter:url"
					content={`https://${getVariable['texts']['pageLink']}/`}
				/>
				<meta
					name="twitter:title"
					content={getVariable['texts']['pageTitle']}
				/>
				<meta
					name="twitter:description"
					content={getVariable['texts']['pageDesc']}
				/>
				<meta
					name="twitter:image"
					content={getVariable['texts']['pageImage']}
				/>
			</Head>
			<main className={styles.main}>
				<SearchBar
					customChangeEvent={handleChange}
					searchValue={searchValue}
					buttonClick={buttonClick}
				/>
				<Table searchValue={searchValueProp} />
			</main>
		</>
	);
}

export default HomePage;
