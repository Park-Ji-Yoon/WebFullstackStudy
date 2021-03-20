import {Component} from "react"

class Content extends Component{
    render(){
      console.log("Content render");
      return (
        <header>
          <h2>{this.props.title}</h2>
          {this.props.desc}
      </header>
      );
    }
}

export default Content;