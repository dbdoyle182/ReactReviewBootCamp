import React, { Component } from 'react';


// We are passing props in as an argument so that our component is expecting them
class Props extends Component {
    state = {
        counter: 0,
        array: [1,2,3,4,5,6],
        object: {
            one: 1,
            two: 2,
            three: 3
        },
        nothing: null
    }


    componentDidMount() {
        console.log(this.props)
        console.log(this.state)
    }
    

    render() {
        const {propone, proptwo, propthree, propfour, propfive } = this.props
        const { counter, array, object, nothing } = this.state;
        const { one, two, three } = object;
        return (
        <div className="App">

            <h1>PROPS</h1>

            Prop One: <h2>{propone}</h2>

            Prop Two: <h2>{proptwo}</h2>

            Prop Three: <h2 onClick={propthree}>when</h2>

            Prop Four: <h2 onClick={propfour("why")}>why</h2>

            Prop Five: <h2 onClick={() => propfive("how")}>how</h2>

            <h1>STATE</h1>

            <h2>Single Variable</h2>

            <h6>Deconstructed Version</h6>
            <p>{counter}</p>
            <h6>Standard Version</h6>
            <p>{this.state.counter}</p>

            <h2>Arrays</h2>
            <h6>Deconstructed Version</h6>
            {array.map(number => <p>{number}</p>)}
            <h6>Standard Version</h6>
            {this.state.array.map(number => <p>{number}</p>)}

            <h2>Objects</h2>
            <h6>Standard Version</h6>
            <p>{this.state.object.one}</p>
            <h6>Deconstructed Version</h6>
            <p>{object.one}</p>
            <h6>SUPER DECONSTRUCTED VERSION</h6>
            <p>{one}</p>


            <h2>Why would we assign a value of null?</h2>
                
                
            

        </div>
        );
    }
}

export default Props;