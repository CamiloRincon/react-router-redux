import React from 'react';

class InputNumber extends React.Component{
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => this.props.onChange(e.target.value);

    render () {
        return (
        <div>
            <input type="number" value= {this.props.value} onChange= {this.handleChange}/>
        </div>
        )
    }
}

export default InputNumber;