// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	outside: {
		width: '100%',
		position: 'relative',
		background: '#003054',
		minHeight: '170px',
		float: 'left',
	},

	insideDiv: {
		width: '1234px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '35px',

		'& p': {
			color: '#ffffff',
			fontFamily: 'Helvetica',
			textTransform: 'uppercase',
			fontSize: '15px',
		},
	},

	searchBar: {
		width: '600px',
		height: '46px',
		position: 'relative',

		'& input': {
			background: '#ffffff',
			width: '440px',
			height: '100%',
			border: 'none',
			outline: 'none',
			float: 'left',
			fontSize: '15px',
			padding: '15px',
		},
	},

	searchButton: {
		background: '#e40321',
		border: 'none',
		width: 'calc(600px - 440px)',
		height: '100%',
		float: 'left',
		transition: 'background .5s',

		'&:hover': {
			background: '#c7151b',
			cursor: 'pointer',
		},
	},

	// >> Responsive scale
	// 1400px
	['@media (max-width: 1400px)']: {
		insideDiv: {
			width: '90%',
		},
	},

	// 750px
	['@media (max-width: 750px)']: {
		insideDiv: {
			'& p': {
				textAlign: 'center',
			},
		},

		searchBar: {
			margin: '0 auto',
			width: '90%',

			'& input': {
				width: '70%',
			},
		},

		searchButton: {
			width: '30%',
		},
	},
});

export default useStyles;
