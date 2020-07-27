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
				<ToolbarWrapper />
				<HeroUnitWrapper />
				<Album />
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

class HoverEventExample extends React.Component {
	constructor(props){
		super(props);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}
	
	handleMouseEnter(e){
		e.target.style.background = 'red';
	}
	
	handleMouseOver(e){
		e.target.style.background = 'blue';
	}
	
	handleMouseLeave(e){
		e.target.style.background = 'yellow';
	}
	
	handleMouseOut(e){
		e.target.style.background = 'black';
	}
	
	render(){
		return(
			<div>
				<button 
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}
				>hover here!</button>
				<button 
					onMouseOver={this.handleMouseOver}
					onMouseOut={this.handleMouseOut}
				>hover here!</button>
			</div>
		)
	}
}

class BoxContainer extends React.Component{
	constructor(props){
		super(props);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
		
		this.state = {hoverText: "Not hovered",
						isHover: false};
	}
	
	handleMouseOver(e){
		e.preventDefault(e);
		this.setState({isHover: true});
		this.setState({hoverText: "Hovered"});
	}
	
	handleMouseOut(e){
		e.preventDefault(e);
		this.setState({isHover: false});
		this.setState({hoverText: "Not hovered"});
	}
	
	render(){
		const hoverContent = (this.state.isHover) ? 
			<div>
					<p>detail description</p>
					<a>->see detail</a>
			</div>
			:
			<div>			{/* toggle simple desc and detail desc */}
				<div><p>image icon here</p></div>	{/* image container */}		
				<h3>title</h3>	{/* titme container */}
				<p>description</p>	{/* description container */}
					
			</div>
			;
			
		const tempStyle={
			width: "200px",
			height: "200px",
			background: "blue",
		}
					
		return(
			<div>
				<div
					style={tempStyle}			
					onMouseOver={this.handleMouseOver}
					onMouseOut={this.handleMouseOut}
				>				{/* hover container */}
					{hoverContent}
				</div>
				
				<p>{this.state.hoverText}</p>
			</div>
		)
	}
}

class BoxContainerList extends React.Component{
	render(){
		return(
			<div>
				<BoxContainer />
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

class Album extends React.Component{
	render(){	
			const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const classes = useStyles;
		
		
		
		return(
			    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        



        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>










    </React.Fragment>
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