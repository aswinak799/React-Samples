import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment.js';

const Results = ({userInput, styles}) => {
    const resultsData = calculateInvestmentResults(userInput);
    const initalInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
    return (
        <table id='result' className={styles.result}>
            <thead>
                <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((item)=>{
                    const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initalInvestment;
                    const totalAmountInvested = item.valueEndOfYear - totalInterest;
                    return (<tr key={item.year}>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.valueEndOfYear)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                        <td></td>
                    </tr>)
                })}
            </tbody>
        </table>
    );
}

export default Results;
