import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Subscribe from './Components/Subscribe'
import Counter from './Components/Counter'


class App extends Component{

    render(){
        return( <div className='App'>
                <Subscribe/>
                <Counter/>
                </div>
            )
    }
}

export default App