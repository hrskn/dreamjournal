import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class EditDream extends Component {
    constructor(){
        super()
        this.state = {
            id: '',
            name: '',
            dreamtype: '',
            desc: ''
        }
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount() {
        this.getDream()
    }
    async editDream(dream) {
       
        try {
            const response = await axios.request({
                method: 'put',
                url: `http://localhost:3000/api/Dreams/${this.state.id}`,
                data: dream
            })
        }
        catch(e){
            console.log(e)
        }
        this.props.history.push('/');
    }
    submitDream(e){
        
        e.preventDefault();
        let currentTime = new Date();
        const newDream = {
            name: this.refs.name.value,
            dreamtype: this.refs.type.value,
            desc: this.refs.desc.value
        }
        console.log(newDream)
        this.editDream(newDream);
    }
    async getDream(){
        let id = this.props.match.params.id;
        try {
            const response = await axios.get(`http://localhost:3000/api/Dreams/${id}`)
            this.setState({
                id: response.data.id,
                name: response.data.name,
                dreamtype: response.data.dreamtype,
                desc: response.data.desc,
            })
        }
        catch(e) {
            console.log(e)
        }
    }
    onChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render(){
        return (
            <div className="row">
                <h1>Muokkaa</h1>
                <form onSubmit={this.submitDream.bind(this)} className="col s12">
                    <div className="row">
                    <div className="input-field">
                            <input type="text" name="name" ref="name" value={this.state.name} onChange={this.onChange}/>
                            <label htmlFor="name">Unen nimi</label>
                        </div>
                        <div className="input-field">
                            <input type="text" name="type" ref="type" value={this.state.dreamtype} onChange={this.onChange}/>
                            <label htmlFor="type">Unen merkittävyys (0-5)</label>
                        </div>
                        <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea" name="desc" ref="desc" onChange={this.onChange} value={this.state.desc}></textarea>
                        <label for="textarea1">Kuvaus</label>
                        </div>
                    </div>
                    <input type="submit" value="Tallenna" className="btn" />
                    </form>
            </div>
        )
        

    }
}
export default EditDream;