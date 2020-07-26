'use strict';

const React = require('react');
const ReactDOM = require('react-dom');



class App extends React.Component{
	render(){
		return(
			<div>
				<BoxContainerList />
				<HoverEventExample />
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


ReactDOM.render(
	<App />,
	document.getElementById('react')
)