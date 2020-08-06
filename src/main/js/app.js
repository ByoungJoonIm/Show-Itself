'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const styles = makeStyles((theme) => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
}));

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { technologyCards: [], techniqueCards: [] };
	}

	componentDidMount() {
		client({ method: 'GET', path: '/api/technologyCards' }).done(response => {
			this.setState({ technologyCards: response.entity._embedded.technologyCards });
		});
		client({ method: 'GET', path: '/api/techniqueCards' }).done(response => {
			this.setState({ techniqueCards: response.entity._embedded.techniqueCards });
		});
		
	}

	render() {
		return (
			<div>
				<CssBaseline />
				<ToolbarWrapper />
				<HeroUnitWrapper />
				<TechnologiesWrapper cardContents={this.state.technologyCards} />
				<TechniquesWrapper cardContents={this.state.techniqueCards} />
				<FooterWrapper />
			</div>
		)
	}
}

class ToolbarWrapper extends React.Component {
	render() {
		return (
			<AppBar position="static">
				<Toolbar>
					<Grid container alignItems='center'>
						<Grid item>
							<Button color="inherit">
								<Typography variant="h6" color="inherit" noWrap>bjdev</Typography>
							</Button>
						</Grid>
						<Grid item xs />
						<Grid item alignItems='center'>
							<Button color="inherit">menu1</Button>
							<Button color="inherit">menu2</Button>
							<Button color="inherit">menu3</Button>
						</Grid>
						<Grid item xs />
					</Grid>
				</Toolbar>
			</AppBar>
		)
	}
}

class HeroUnitWrapper extends React.Component {
	render() {
		return (
			<HeroUnit title="Show itself"
				description="This site introduces itself. I'm trying to use current technologies for web over full stack. It describes how it works and what technoloes used." />
		)
	}
}

class HeroUnit extends React.Component {
	render() {
		return (
			<div className={styles.heroContent}>
				<Container maxWidth="sm">
					<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
						{this.props.title}
					</Typography>
					<Typography variant="h5" align="center" color="textSecondary" paragraph>
						{this.props.description}
					</Typography>
				</Container>
			</div>
		);
	}
}

class CardWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);

		this.state = { isHover: false };
	}

	handleMouseEnter(e) {
		e.preventDefault(e);
		this.setState({ isHover: true });
	}

	handleMouseLeave(e) {
		e.preventDefault(e);
		this.setState({ isHover: false });
	}

	render() {
		const frameStyle = {
			width: '270px',
			height: '270px',
			border: '1px solid black'
		};

		const hoveredContent =
			<div style={frameStyle}>
				<p style={{
					wordWrap: 'break-word',
					textAlign: 'center'
				}}>{this.props.cardContent.description}
				</p>
			</div>
		const nonHoveredContent =
			<div style={frameStyle}>
				<div style={{
					background: 'blue',
					height: '200px',
					width: '270px',
					padding: '5px 5px 5px 5px'
				}}>
					<div style={{
						background: 'green',
						height: '190px',
						width: '260px',
					}}>
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" style={{
							height: '190px',
							width: '260px'
						}} />
					</div>
				</div>
				<div style={{
					background: 'pink',
					height: '70px',
					width: '270px',
					position: 'absolute'
				}}>
					<h1 style={{
						textAlign: 'center',
						verticalAlign: 'middle'
					}}>{this.props.cardContent.name}</h1>
				</div>
			</div>

		return (
			<div
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				style={{
					width: '270px',
					height: '270px',
					background: 'orange'
				}}
			>
				{(this.state.isHover) ? hoveredContent : nonHoveredContent}
			</div>
		)
	}
}

class TechnologiesWrapper extends React.Component {
	render(){
		return(
			<ContentWrapper title="Technologies"
			description="Try to hover on each cards."
			cardContents={this.props.cardContents} />
		)
	}
}

class TechniquesWrapper extends React.Component {
	render(){
		return(
			<ContentWrapper title="Techniques"
			description="Try to hover on each cards."
			cardContents={this.props.cardContents} />
		)
	}
}

class ContentWrapper extends React.Component {
	render() {
		const cardContents = this.props.cardContents.map(cardContent =>
			<Grid item key={cardContent._links.self.href} xs={12} sm={6} md={4} lg={3} zeroMinWidth>
				<CardWrapper cardContent={cardContent} />
			</Grid>
		);

		return (
			<Container className={styles.cardGrid} maxWidth="lg">
				<HeroUnit title={this.props.title}
					description={this.props.description}
				/>
				<Grid container spacing={4}>
					{cardContents}
				</Grid>
			</Container>
		)
	}
}

class FooterWrapper extends React.Component {
	render() {
		return (
			<footer className={styles.footer}>
				<Typography variant="h6" align="center" gutterBottom>Footer</Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
					Something here to give the footer a purpose!
				</Typography>

				{/* copyright */}
				<Typography variant="body2" color="textSecondary" align="center">
					{'Copyright © '}
					<Link color="inherit" href="https://github.com/ByoungJoonIm">
						ByoungJonn Im
					</Link>{' '}
					{new Date().getFullYear()}
					{'.'}
				</Typography>
			</footer>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)