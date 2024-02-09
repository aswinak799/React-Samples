import React from 'react';

const Employees = (props) => {
    return (
        <div>
                {/* <h5>{props.name}</h5> */}

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Name: {props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Id: {props.id}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Language: {props.language}</h6>
                    <p className="card-text">{props.bio}</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
            
        </div>
    );
};

export default Employees;
