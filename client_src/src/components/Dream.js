import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

class Dream extends Component {
    constructor(props){
        super(props);
        this.state = {
            dream: ''
        }
    }
    componentWillMount(){
        this.getDream();
    }
    async getDream() {
        let id = this.props.match.params.id;
        try {
            const response = await axios.get(`http://localhost:3000/api/Dreams/${id}`);
            this.setState({dream:response.data});
        }
        catch(e){
            console.log(e);
        }
    }
    async deleteDream(){
        try {
            const response = await axios.delete(`http://localhost:3000/api/Dreams/${this.state.dream.id}`)
        }
        catch(e){
            console.log(e)
        }
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <br/>
                <Link className="btn grey" to="/">Takaisin</Link> <Link className="btn" to={`/dreams/edit/${this.state.dream.id}`}>Muokkaa</Link><br/><br/>
                <h1>{this.state.dream.name}</h1>
                <strong>{moment(this.state.dream.date).format("MMM Do YY")}</strong>
                <ul className="collection">
                    <li className="collection-item"><strong>Merkittävyys:</strong> {this.state.dream.dreamtype}</li>
                    <li className="collection-item"><strong>Kuvaus:</strong><br/> {this.state.dream.desc}</li>
                </ul>
                <button onClick={this.deleteDream.bind(this)} className="btn red">Poista</button>
            </div>
        )
    }
}


export default Dream;