import React, {Component} from 'react'

class Subscribe extends Component{

    constructor(){
        super();
        this.state = {
            message:'Welcome tresspasser'
        }



    }

    changeMessage(){
        this.setState({
            message:'Welcome subscriber'
        })
    }
    render(){
        return (<div>
                     <h1>{this.state.message}</h1>
                     <button onClick = {()=> this.changeMessage()}>Subscribe</button>
                </div>
                )
    }
}

export default Subscribe