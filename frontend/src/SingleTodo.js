import React, {Component} from "react";

// class way to delete the object
// class SingleTodo extends Component{
//     constructor(){
//          super();
//     }
//     render(){
//         return (
//             <li> {this.props.todo}<button onClick={this.props.delete}>Delete</button> </li>
//         );
//      }
// }

const SingleTodo = props =>{
    return (
        <li>{props.todo} <button onClick={this.props.delete}>X</button></li>
    );
}
export default SingleTodo;