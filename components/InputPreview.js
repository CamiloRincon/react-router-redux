import React from 'react';

class InputPreview extends React.Component{
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => this.props.onChange(e.target.value);

    render () {
        return (
        <div>
            <input type="text" value= {this.props.value} onChange= {this.handleChange}/>
        </div>
        )
    }
}

export default InputPreview;