import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"
import { useState } from 'react';
import styles from './index.module.css';


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

function handleChange(inputIdentifire,newValue){
    setUserInput(prevInputs=>{
        return {
            ...prevInputs,
            [inputIdentifire]: +newValue

        }
    })
}
const isValidInput = userInput.duration >= 1;
  return (
    <>
      <Header styles={styles}/>
      <UserInput onChange={handleChange} userInput={userInput} styles={styles}/>
      {isValidInput && <Results userInput={userInput} styles={styles}/>}
      {!isValidInput && <p className="center">Please enter valid input data</p>}
    </>
  )
}

export default App
