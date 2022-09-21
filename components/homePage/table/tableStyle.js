// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	outside: {
		width: '100vw',
		position: 'relative',
		float: 'left',
		overflow: 'auto',
	},

	insideDiv: {
		width: '1234px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '10px',

		'& p': {
			color: '#ffffff',
			fontFamily: 'Helvetica',
		},
	},

	table: {
		width: '100%',
		position: 'relative',

		'& th': {
			'& p': {
				float: 'left',
				color: '#aaaaaa',
				textTransform: 'uppercase',
				fontSize: '13px',
				textAlign: 'left',
				opacity: '.6',
				transition: 'opacity .5s',
			},

			'&:hover': {
				cursor: 'pointer',
				'& p': {
					opacity: '1',
				},
			},
		},

		'& td': {
			color: '#003054',
			fontSize: '16px',
			fontWeight: '600',
			position: 'relative',
		},
	},

	oneRow: {
		height: '60px',
		position: 'relative',

		'&:after': {
			content: "''",
			position: 'absolute',
			width: '100%',
			height: '1px',
			bottom: '0',
			left: '0',
			background: '#d3d3d3',
		},
	},

	loadingRow: {
		position: 'relative',
		width: '20px',
		margin: '0 auto',
		transform: 'rotate(90deg)',
		marginTop: '50px',
	},

	errorInfo: {
		position: 'relative',
		width: '250px',
		margin: '0 auto',
		marginTop: '50px',
		'& p': {
			textAlign: 'center',
			color: '#003054',
			fontSize: '16px',
			fontWeight: '600',
		},
	},

	sortTriangle: {
		width: '0',
		height: '0',
		borderLeft: '5px solid transparent',
		borderRight: '5px solid transparent',
		borderBottom: '8px solid #d3d3d3',
		float: 'left',
		marginTop: '18px',
		marginLeft: '5px',
	},

	sortTriangleRotated: {
		transform: 'rotate(180deg)',
	},

	// >> Responsive scale
	// 1400px
	['@media (max-width: 1400px)']: {
		insideDiv: {
			width: '90%',
		},
	},

	// 1200px
	['@media (max-width: 1200px)']: {
		insideDiv: {
			width: '95%',
		},
	},

	// 1000px
	['@media (max-width: 1000px)']: {
		table: {
			width: '100%',
			position: 'relative',

			'& td': {
				minWidth: '250px',
			},

			'& th': {
				minWidth: '250px',
			},
		},
	},
});

export default useStyles;
