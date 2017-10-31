import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
class DreamList extends Component {
    constructor(props) {
        super(props);
            this.state = {
                dream: props.dream
            }
    }
    render(){
        return (
            <li className="collection-item">{moment(this.state.dream.date).format("MMM Do YY")}<br/><Link to={`/dreams/${this.state.dream.id}`}><strong>{this.state.dream.name}</strong></Link></li>
        )
    }
}
export default DreamList;