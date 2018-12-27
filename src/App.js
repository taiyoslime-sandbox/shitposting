import React, {Component} from 'react';
import {data} from './template';
import './App.css';

class App extends Component {

	constructor(){
		super()

		this.state = {
			data: data,
            value : "",
            error : "",
        }

	}

	handle (e) {
		/* eslint-disable */

        let tweet_text = this.state.data.filter((item, index) => {if(item.name === e.target.id)return true})[0].text(`@${this.state.value}`)

        if(tweet_text.length > 140) {
            this.setState({error:"The lenght of the text is too long"})
        } else if (this.state.value == ""){
            this.setState({error:"Username cannot be empty"})
        } else {
            this.setState({error:""})
            try {
                window.open('https://twitter.com/intent/tweet?text=' + encodeURI(tweet_text))
            } catch (error){
            }
        }

	}

	componentWillMount(){
		if(!!this.props.location.query.user){
			this.setState({value:this.props.location.query.user},
				( () => {
					if(!!this.props.location.query.id)
					this.handle({target:{id:this.state.data[this.props.location.query.id - 1].name}})
			}));
		}
	}

	change(e) {
		this.setState({value:e.target.value});
		this.forceUpdate()
	}

	render() {

		return (
			<div className="App">
				<h3> Shitposting </h3>
                <div className="Error">{this.state.error}</div>
				@ <input type="text" onChange={this.change.bind(this)} value={this.state.value}></input>
				<ul>
					{this.state.data.map(el => <li>{el.title} <button id={el.name} onClick={this.handle.bind(this)}> Tweet!</button></li>)}
				</ul>
				<a href="https://github.com/taiyoslime-sandbox/shitposting"> Repository </a>
			</div>
		);
	}
}

export default App;
