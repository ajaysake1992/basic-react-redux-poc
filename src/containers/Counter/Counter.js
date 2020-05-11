import React, { Component } from 'react';
import { connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/actions';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdditionCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractionCounter}  />
                <hr/>
                <button onClick={() => this.props.onResultStore(this.props.ctr)}>Show Result</button>
                
                <ul>
                {this.props.resultStr.map((result) => (
                    <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        ctr: state.ctr.counter,
        resultStr: state.rst.results
    };
};

const mapDispatchToProps = dispatch => {
    const {INCREMENT, DECREMENT, ADDITION, SUBSTRACTION, RESULT_STORE, DELETE_RESULT} = actionType;
    return {
        onIncrementCounter: () => dispatch({type: INCREMENT}),
        onDecrementCounter: () => dispatch({type: DECREMENT}),
        onAdditionCounter: () => dispatch({type: ADDITION, payload: {value: 5}}),
        onSubstractionCounter: () => dispatch({type: SUBSTRACTION, payload: {value: 5}}),
        onResultStore: (result) => dispatch({type: RESULT_STORE , result: result}),
        onDeleteResult: (id) => dispatch({type: DELETE_RESULT, payload: {strResultId: id}})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);