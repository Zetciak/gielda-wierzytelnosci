// >> Styles
import useStyles from './searchBarStyle';

// >> Script
function SearchBar(props) {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<header className={styles.outside}>
			<div className={styles.insideDiv}>
				<p>Podaj NIP lub nazwę dłużnika</p>
				<div className={styles.searchBar}>
					<input
						onChange={props.customChangeEvent}
						value={props.searchValue}
					/>
					<button
						className={styles.searchButton}
						onClick={props.buttonClick}
					>
						<p>Szukaj</p>
					</button>
				</div>
			</div>
		</header>
	);
}

export default SearchBar;
