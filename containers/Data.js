import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import InputPreview from '../components/InputPreview';
import {setHowMuchData} from '../actions/actions';
 class Data extends React.Component {
    constructor() {
        super();
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange = (value) => {
        this.props.dispatch(setHowMuchData(value))
    }

     render () {
        const {data} = this.props.data;
   return (
     <div>
       Data
       <InputPreview value={data} onChange={this.handleOnChange}/>
       <Link to="/last">
        <button>LAST STEP</button>
       </Link>
     </div>
   )
 }
}

export default Data;