import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    increment(){
        this.setState( prevState => ({
            count: prevState.count +1
        }))
    }
    decrement(){
        this.setState({
            count: this.state.count - 1
        })
    }
    start(){
        this.setState({
            count: 0
        })
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }
    

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick ={() => this.increment()}>Increment</button>
                <button onClick ={() => this.start()}>Start</button>
                <button onClick ={() => this.decrement()}>Decrement</button><br>
                </br>
                <button onClick ={() => this.incrementFive()}>Increment by 5</button>



            </div>
        )
    }
}

export default Counter
