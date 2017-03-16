import React from 'react';
import $ from 'jquery';


export default class NewsList extends  React.Component{
	render(){
		return(
			<div className="newsList">
				{
					(this.props.items).map(function(item,index){
						return(	
								<div key={item.name}>
								姓名：{item.name}	年龄：{item.age}	性别：{item.sex}
								</div>
							);
					})
				}
			</div>
			);
	}
}