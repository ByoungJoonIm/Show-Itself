'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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

const cssStyles = {
	cardContainer: {
		width: '270px',
		height: '270px',
	},
	hoveredContainer: {
		width: '270px',
		height: '270px',
		padding: '10px 10px 10px 10px'
	},
	hoveredText: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '250px',
		height: '250px',
		wordWrap: 'break-word',
		textAlign: 'center',
	},
	cardDiv: {
		height: '200px',
		width: '270px',
	},
	cardImageDiv: {
		height: '200px',
		width: '270px',
		padding: '5px 5px 5px 5px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardNameDiv: {
		height: '70px',
		width: '270px',
		position: 'absolute',
	},
	cardNameText: {
		textAlign: 'center',
		verticalAlign: 'middle'
	},
	spaceBottom: {
		marginBottom: '100px',
	},
	spaceBottomFooter: {
		marginBottom: '50px',
	},
	howItWorksDiv: {
		height: '792px',
		width: '1056px',
	},
	howItWorksImage: {
		height: '792px',
		width: '1056px',
	},
	howK8sWorksDiv: {
		height: '493px',
		width: '1013px',
	},
	howK8sWorksImage: {
		height: '493px',
		width: '1013px',
	},
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { technologyCards: [], techniqueCards: [] };
	}

	componentDidMount() {
		client({ method: 'GET', path: '/api/technologyCards' }).done(response => {
			this.setState({ technologyCards: response.entity._embedded.technologyCards });
		});
	}

	render() {
		return (
			<div>
				<CssBaseline />
				<ToolbarWrapper />
				<HeroUnitWrapper />
				<TechnologiesWrapper cardContents={this.state.technologyCards} />
				<HowItWorksWrapper />
				<HowK8sWorksWrapper />
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
							<Button color="inherit" onClick={() => location = 'home'}>
								<Typography variant="h6" color="inherit" noWrap>bjdev</Typography>
							</Button>
						</Grid>
						<Grid item xs />
						<Grid item xs />
						<Grid item xs />
						<Grid item xs />
						<Grid item alignItems='center'>
							<Button color="inherit" onClick={() => location = 'home'}>Home</Button>
							<Button color="inherit" onClick={() => location = 'docs'}>Docs</Button>
							{/*
							<Button color="inherit">About me</Button>
							 */}
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
			<div style={cssStyles.spaceBottom}>
				<HeroUnit title="Show itself"
					description="This site introduces itself. I'm trying to use current technologies for web over full stack. It describes how does it work and what technologies used." />
			</div>
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
		const hoveredContent =
			<div style={cssStyles.hoveredContainer}>
				<div style={cssStyles.hoveredText}>{this.props.cardContent.description}</div>
			</div>

		const imageURI = this.props.cardContent._links.iconImageLink.href
		const nonHoveredContent =
			<div>
				<div style={cssStyles.cardDiv}>
					<div style={cssStyles.cardImageDiv}>
						<img src={imageURI} />
					</div>
				</div>
				<div style={cssStyles.cardNameDiv}>
					<h1 style={cssStyles.cardNameText}>{this.props.cardContent.name}</h1>
				</div>
			</div>

		return (
			<div
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				style={cssStyles.cardContainer}
			>
				{(this.state.isHover) ? hoveredContent : nonHoveredContent}
			</div>
		)
	}
}

class TechnologiesWrapper extends React.Component {
	render() {
		return (
			<div style={cssStyles.spaceBottom}>
				<ContentWrapper title="Technologies"
					description="Try to hover on each card."
					cardContents={this.props.cardContents} />
			</div>
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

class HowItWorksWrapper extends React.Component {
	render() {
		return (
			<div style={cssStyles.spaceBottom}>
				<HeroUnit title="How does it work?"
					description="It describes how this site works."
				/>
				<div align="center">
					<div align="center" style={cssStyles.howItWorksDiv}>
						<img src='images/howitworks.jpg' style={cssStyles.howItWorksImage} />
					</div>
				</div>

			</div>
		)
	}
}

class HowK8sWorksWrapper extends React.Component {
	render() {
		return (
			<div style={cssStyles.spaceBottom}>
				<HeroUnit title="How does kubernetes work?"
					description="It describes kubernetes workflow. See document for detail."
				/>
				<div align="center">
					<div align="center" style={cssStyles.howK8sWorksDiv}>
						<img src='images/howk8sworks.jpg' style={cssStyles.howK8sWorksImage} />
					</div>
				</div>

			</div>
		)
	}
}

class FooterWrapper extends React.Component {
	render() {
		return (
			<div style={cssStyles.spaceBottomFooter}>
				<footer className={styles.footer}>
					<Typography variant="h6" align="center" gutterBottom>
						BJDEV
					</Typography>
					<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
						I'm so excited to deploy this site!
					</Typography>
					<Typography variant="body2" align="center" color="textSecondary" component="p">
						<Link color="blue" href="https://github.com/ByoungJoonIm/Show-Itself">
							GitRepo
					</Link>{' '}
						<Link color="blue" href="https://github.com/ByoungJoonIm/Show-Itself/blob/master/LICENSE">
							License
					</Link>
					</Typography>


					{/* copyright */}
					<Typography variant="body2" color="textSecondary" align="center">
						{'Copyright © '}
						<Link color="blue" href="https://github.com/ByoungJoonIm">
							ByoungJoon Im
					</Link>{' '}
						{new Date().getFullYear()}
						{'.'}
					</Typography>
				</footer>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)