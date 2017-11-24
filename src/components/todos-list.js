import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
    renderItems(){
        const props = _.omit(this.props, 'todos')
        return _.map(this.props.todos, (todos, index) => <TodosListItem key={index} {...todos} {...this.props}/>);
    }
    
    render() {
       // console.log(this.props.todos);
        return (
            <div>
                <table>
                    <TodosListHeader/>
                    <tbody>
                    {this.renderItems()}                   
                    </tbody>
                </table>
            </div>
        )
    }

}