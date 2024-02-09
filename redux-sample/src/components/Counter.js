import { connect, useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { Component } from 'react';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counterVal = useSelector(state=> state.counter.value);
  const showCounter = useSelector(state=> state.counter.showCounter)
  const incrementHandler = (count) => {
    dispatch(counterActions.increment(count));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counterVal}</div>}
      <div>
        <button onClick={()=>incrementHandler(1)}>Increment</button>
        <button onClick={()=>incrementHandler(5)}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component{
//   incrementHandler() {
//     this.props.increment();
//   };
//   decrementHandler() {
//     this.props.decrement();
    
//   };
//   toggleCounterHandler() {};
//   render(){
//     return(
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//       </div>
//       {/* <button onClick={toggleCounterHandler}>Toggle Counter</button> */}
//     </main>
//     )
//   }
// }
// const mapStateToProps = (state)=>{
//    return {
//       counter: state.counter
//    }
// }

// const mapDispatchToProps = dispatch => {
//   return{
//     increment: () => dispatch({type:'INCREMENT'}),
//     decrement: () => dispatch({type:'DECREMENT'})

//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);

export default Counter;
