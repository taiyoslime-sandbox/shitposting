import React, {Component} from 'react';
import './App.css';

class App extends Component {

	constructor(){
		super()

		this.state = {
			data: [
				{
				"title":"誰もお前を愛さない",
				name:'nobody_loves_you',
				text:(e => `ちくしょう${e}にしやがった\n${e}はいつもそうだ\nこの${e}はお前の人生そのものだ\nお前はいろいろな${e}に手を付けるが何一つ成し遂げられない\n誰も${e}を愛さない`
			)}],
			value : ""
		}

	}

	handle (e) {
		/* eslint-disable */
		window.open('https://twitter.com/intent/tweet?text=' + encodeURI(this.state.data.filter((item, index) => {if(item.name === e.target.id)return true})[0].text((this.state.value)).substr(0,140)));
	}

	change(e) {
		this.setState({value:`@${e.target.value}`});
	}
	render() {


		return (
			<div className="App">
				<h3> Shitposting </h3>
				@ <input  type="text" onChange={this.change.bind(this)}></input>
				<ul>
					{this.state.data.map(el => <li>{el.title} <button id={el.name} onClick={this.handle.bind(this)}> Tweet!</button></li>)}
				</ul>
				<a href="https://github.com/taiyoslime-sandbox/shitposting"> Repository </a>
			</div>
		);
	}
}

export default App;
