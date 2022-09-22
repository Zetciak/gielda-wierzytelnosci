// >> Modules
import { useState, useEffect } from 'react';
import { fetcher } from '../../../lib/api';
import PulseLoader from 'react-spinners/PulseLoader';
import { Cookies } from 'react-cookie';

// >> Styles
import useStyles from './tableStyle';

// >> Variables
const cookies = new Cookies();

// >> Script
function Table(props) {
	// >> Style
	const styles = useStyles();

	// >> Variables
	const [table, setTable] = useState([]);
	const [searchResult, setSearchResult] = useState('sucess');
	const [renderedTable, setRenderedTable] = useState([]);
	const [sortColumn, setSortColumn] = useState('name');
	const [sortType, setSortType] = useState('HTL');

	// >> Functions
	function sortTable(table, sortColumn, sortType) {
		if (table && sortColumn && sortType) {
			// Sort by name
			if (sortColumn === 'name') {
				if (sortType === 'HTL') {
					// High to low
					return table.sort(function (a, b) {
						let textA = a.Name.toUpperCase();
						let textB = b.Name.toUpperCase();
						return textA < textB ? -1 : textA > textB ? 1 : 0;
					});
				} else {
					// Low to high
					return table.sort(function (a, b) {
						let textA = a.Name.toUpperCase();
						let textB = b.Name.toUpperCase();
						return textA > textB ? -1 : textA < textB ? 1 : 0;
					});
				}
			} else if (sortColumn === 'nip') {
				if (sortType === 'HTL') {
					// High to low
					return table.sort((a, b) => Number(a.NIP) - Number(b.NIP));
				} else {
					// Low to high
					return table.sort((a, b) => Number(b.NIP) - Number(a.NIP));
				}
			} else if (sortColumn === 'value') {
				if (sortType === 'HTL') {
					// High to low
					return table.sort((a, b) => a.Value - b.Value);
				} else {
					// Low to high
					return table.sort((a, b) => b.Value - a.Value);
				}
			} else if (sortColumn === 'date') {
				if (sortType === 'HTL') {
					// High to low
					return table.sort(
						(a, b) => new Date(a.Date) - new Date(b.Date)
					);
				} else {
					// Low to high
					return table.sort(
						(a, b) => new Date(b.Date) - new Date(a.Date)
					);
				}
			}
		}
		return false;
	}

	// >> Change sorting
	function changeSort(sortColumnL) {
		if (sortColumnL) {
			if (sortColumn === sortColumnL) {
				if (sortType === 'HTL') {
					setSortType('LTH');
				} else {
					setSortType('HTL');
				}
			} else {
				setSortColumn(sortColumnL);
				setSortType('HTL');
			}
		}
	}

	// >> Rerender table
	function reRenderTable() {
		let localTable = [];
		table.map((element, index) => {
			let data = new Date(element.Date).toLocaleDateString('pl-PL');
			localTable.push(
				<tr className={styles.oneRow} key={index}>
					<td>{element.Name}</td>
					<td>{element.NIP}</td>
					<td>{element.Value}zł</td>
					<td>{data}</td>
				</tr>
			);
		});
		setRenderedTable(localTable);
	}

	// >> Fetch data
	useEffect(() => {
		async function fetchDataTop10() {
			let response = sortTable(
				await fetcher(
					`http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetTopDebts`
				),
				sortColumn,
				sortType
			);

			if (response) {
				if (response.length > 0) {
					setTable(response);
					setSearchResult('success');
				} else {
					setSearchResult('error');
				}
			} else {
				setSearchResult('fetcherror');
			}
		}

		async function fetchDataSearch() {
			let response = sortTable(
				await fetcher(
					`http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetFilteredDebts`,
					{
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(props.searchValue),
					}
				),
				sortColumn,
				sortType
			);
			if (response) {
				if (response.length > 0) {
					setTable(response);
					setSearchResult('success');
				} else {
					setSearchResult('error');
				}
			} else {
				setSearchResult('fetcherror');
			}
		}
		if (props.searchValue.length >= 3) {
			fetchDataSearch();
			setTable([]);
			setSearchResult('searching');
		} else if (props.searchValue.length === 0) {
			fetchDataTop10();
			setSearchResult('searching');
		} else {
			setTable([]);
			setSearchResult('3characters');
		}
	}, [props.searchValue]);

	// >> Change sorting
	useEffect(() => {
		async function sortData() {
			let response = sortTable(table, sortColumn, sortType);
			setTable(response);
			reRenderTable();
		}
		sortData();
	}, [sortColumn, sortType]);

	// >> Render table
	useEffect(() => {
		reRenderTable();
	}, [table]);

	// >> Render
	return (
		<div className={styles.outside}>
			<div className={styles.insideDiv}>
				<table className={styles.table}>
					<tbody>
						<tr className={styles.oneRow}>
							<th
								onClick={() => {
									changeSort('name');
								}}
							>
								<p>Dłużnik</p>{' '}
								{sortColumn === 'name' ? (
									<div
										className={
											sortType === 'HTL'
												? `${styles.sortTriangle}`
												: `${styles.sortTriangle} ${styles.sortTriangleRotated}`
										}
									></div>
								) : (
									false
								)}
							</th>
							<th
								onClick={() => {
									changeSort('nip');
								}}
							>
								<p>NIP</p>
								{sortColumn === 'nip' ? (
									<div
										className={
											sortType === 'HTL'
												? `${styles.sortTriangle}`
												: `${styles.sortTriangle} ${styles.sortTriangleRotated}`
										}
									></div>
								) : (
									false
								)}
							</th>
							<th
								onClick={() => {
									changeSort('value');
								}}
							>
								<p>Kwota zadłużenia</p>
								{sortColumn === 'value' ? (
									<div
										className={
											sortType === 'HTL'
												? `${styles.sortTriangle}`
												: `${styles.sortTriangle} ${styles.sortTriangleRotated}`
										}
									></div>
								) : (
									false
								)}
							</th>
							<th
								onClick={() => {
									changeSort('date');
								}}
							>
								<p>Data powstania zadłużenia</p>
								{sortColumn === 'date' ? (
									<div
										className={
											sortType === 'HTL'
												? `${styles.sortTriangle}`
												: `${styles.sortTriangle} ${styles.sortTriangleRotated}`
										}
									></div>
								) : (
									false
								)}
							</th>
						</tr>
						{renderedTable}
					</tbody>
				</table>

				{searchResult === 'fetcherror' ? (
					<div className={styles.errorInfo}>
						<p>Błąd zapytania!</p>
					</div>
				) : searchResult === 'error' ? (
					<div className={styles.errorInfo}>
						<p>Brak wyników wyszukiwania!</p>
					</div>
				) : searchResult === '3characters' ? (
					<div className={styles.errorInfo}>
						<p>Wyszukiwana fraza powinna mieć minimum 3 znaki!</p>
					</div>
				) : table.length < 1 ? (
					<div className={styles.loadingRow}>
						<PulseLoader color="#003054" size="14px" />
					</div>
				) : (
					false
				)}
			</div>
		</div>
	);
}

export default Table;
