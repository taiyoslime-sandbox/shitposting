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
			)},{
				title:"突然ですが",
				name:"todays_ohohoho",
				text:(e => `突然ですが！！！！！！！！！${e}さんは本日のオホホハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハハｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗ`)
			},{
				title:"昆布",
				name:"konbu",
				text:(e => `昆布を食べたらはまって抜け出せなくなった${e}の図
　｢＼
　　ヽ )　　　 ／ )
　　/ /　　　  (　/
　 / /　　　    ｜｜
　(　＼　　　｜｜
　 ＼　＼　 　/ ｜
　　 ＼　ヽ／　/
　　＿｜　　　/_＿
　　       昆布`)
			}],
			value : ""
		}

	}

	handle (e) {
		/* eslint-disable */
		try {
			window.open('https://twitter.com/intent/tweet?text=' + encodeURI(this.state.data.filter((item, index) => {if(item.name === e.target.id)return true})[0].text((`@${this.state.value}`)).substr(0,140)))
		} catch (error){
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
				@ <input  type="text" onChange={this.change.bind(this)} value={this.state.value}></input>
				<ul>
					{this.state.data.map(el => <li>{el.title} <button id={el.name} onClick={this.handle.bind(this)}> Tweet!</button></li>)}
				</ul>
				<a href="https://github.com/taiyoslime-sandbox/shitposting"> Repository </a>
			</div>
		);
	}
}

export default App;
