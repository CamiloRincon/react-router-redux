import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Last extends React.Component {
    constructor() {
        super();
    }

    render () {
        const {numberOfConctacts, lines, data} = this.props.data;
   return (
     <div>
       <p>Number of Contacts: {numberOfConctacts}</p>
       <p>Number of Lines: {lines}</p>
       <p>How Much Data: {data}</p>
       <Link to="/">
        <button>GO HOME</button>
       </Link>
     </div>
   )
 }
}

export default connect(state => state)(Last);