'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

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

class App extends React.Component{
	render(){
		return(
			<div>
				<CssBaseline />
				<ToolbarWrapper />
				<HeroUnitWrapper />
				<ContentWrapper />
				{/*
				<BoxContainerList />
				<HoverEventExample />
				<Button variant="contained" color="primary">
					Button test
				</Button>*/}
				
				<FooterWrapper />
			</div>
		)
	}	
}

class ToolbarWrapper extends React.Component{
	render(){
		return(
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

class HeroUnitWrapper extends React.Component{
	render(){	
		const styles = makeStyles((theme) => ({
			heroContent: {
				backgroundColor: theme.palette.background.paper,
    			padding: theme.spacing(8, 0, 6),
  			},
		}));
		
		return (
			<div className={styles.heroContent}>
				<Container maxWidth="sm">
					<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					Show itself
					</Typography>
					<Typography variant="h5" align="center" color="textSecondary" paragraph>
					This site introduces itself. I'm trying to use current technologies for web over full stack. It describes how it works and what technoloes used.
					</Typography>
				</Container>
			</div>
		);
	}
}

class CardWrapper extends React.Component{
	constructor(props){
		super(props);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		
		this.state = {isHover : false};
	}
	
	handleMouseEnter(e){
		e.preventDefault(e);
		this.setState({isHover : true});
	}
	
	handleMouseLeave(e){
		e.preventDefault(e);
		this.setState({isHover : false});
	}
	
	render(){
		const divstyle = {
					width: '270px',
					height: '270px',
					border: '1px solid black'
				};
		
		const hoverContent = (this.state.isHover) ?
			<Card style = {divstyle}>
				{/*
				<CardMedia
					className={style.cardMedia}
					image="https://cdn0.iconfinder.com/data/icons/round-arrows-1/134/small_left_red-512.png"
					title="Image title"
				/>
				<CardContent className={style.cardContent}>
					<Typography gutterBottom variant="h5" component="h2">
					Tech name
					</Typography>
					
				</CardContent>
				*/}
			</Card>
			
			:
			<div style={divstyle}>
				<div style = {{
					background: 'blue',
					height: '200px',
					width: '270px',
					padding: '5px 5px 5px 5px'
				}}>
					<div style ={{
						background: 'green',
						height: '190px',
						width: '260px',
					}}>
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" style={{
							height: '190px',
							width: '260px'	
						}}/>
					</div>
				</div>
				<div style = {{
					background: 'pink',
					height: '70px',
					width: '270px'
				}}>
				</div>
			</div>
			
		
		return(
			<div
				onMouseEnter = {this.handleMouseEnter}
				onMouseLeave = {this.handleMouseLeave}
				style = {{
					width: '270px',
					height: '270px',
					background: 'orange'
				}}
			>
				{hoverContent}
			</div>
		)
	}
}

class ContentWrapper extends React.Component{
	render(){	
		const styles = makeStyles((theme) => ({
			cardGrid: {
				paddingTop: theme.spacing(8),
				paddingBottom: theme.spacing(8),
			},
		}));

		const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		return(
		
        <Container className={styles.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} lg={3} zeroMinWidth>
				 <CardWrapper />
			
				{/*
			 */}
				{/*
				<CardTempWrapper />
				 */}
				                
              </Grid>
            ))}
          </Grid>
        </Container>
		)
	}

}

class FooterWrapper extends React.Component{
	render(){
		const style = makeStyles((theme) => ({
			footer: {
			backgroundColor: theme.palette.background.paper,
			padding: theme.spacing(6),
		}}));
		
		return(
			<footer className={style.footer}>
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