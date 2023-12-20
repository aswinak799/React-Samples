import React from 'react';

const UserInput = ({onChange, userInput, styles}) => {
    
    return (
        <section id='user-input' className={styles.user_input}>
            <div className={styles.inputgroup}>
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input type="number" value={userInput.initialInvestment} required onChange={(e)=>onChange('initialInvestment',e.target.value)}/>
                </p>
                <p>
                    <label htmlFor="">Anual Investment</label>
                    <input type="number" value={userInput.annualInvestment} required onChange={(e)=>onChange('annualInvestment',e.target.value)}/>
                </p>
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input type="number" value={userInput.expectedReturn} required onChange={(e)=>onChange('expectedReturn',e.target.value)}/>
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number" value={userInput.duration} required onChange={(e)=>onChange('duration',e.target.value)}/>
                </p>
            </div>
            
        </section>
    );
}

export default UserInput;
