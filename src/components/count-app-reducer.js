import React, { useReducer } from 'react';

// Initial state
const initialState = { count: 0 };

// Reducer function to handle actions
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 }; // Reset to initial state
        default:
            return state;
    }
};

// CounterApp component
const CounterAppReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter App using useReducer</h1>
            <p>Count: {state.count}</p>
            <div>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}
                     style={{ margin: '10px', padding: '10px 20px' }}>Increment</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}
                     style={{ margin: '10px', padding: '10px 20px' }}>Decrement</button>
                <button onClick={() => dispatch({ type: 'RESET' })}
                     style={{ margin: '10px', padding: '10px 20px' }}>Reset</button>
            </div>
        </div>
    );
};

export default CounterAppReducer;
