import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import InputPreview from '../components/InputPreview';
import {setNumberOfLines} from '../actions/actions';
 class Lines extends React.Component {
    constructor() {
        super();
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange = (value) => {
        this.props.dispatch(setNumberOfLines(value))
    }

     render () {
        const {lines} = this.props.data;
   return (
     <div>
       Enter number of lines
       <InputPreview value={lines} onChange={this.handleOnChange}/>
       <Link to="/data">
        <button>NEXT</button>
       </Link>
     </div>
   )
 }
}

export default connect(state => state)(Lines);