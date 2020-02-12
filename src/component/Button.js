import React from 'react';

// const Button = ({ label }) => {
//     return <div data-testid="button">{label}</div>;
// };

const Button = ({ label, onClick }) => {
    return <div className="btn btn-primary" data-testid="button" onClick={onClick}>{label}</div>;
};

export default Button;