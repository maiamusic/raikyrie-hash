
import React, { Component } from "react";


class displayAccount extends Component {

        state = {
            text: this.props.text
        };

        componentDidMount(){
            const {filter} = this.props;
            if (filter) this.setState({text: this.state.text.substring(2,9)})
        };
        
    
        render() {
            return this.state.text;
        }


}


export default displayAccount;