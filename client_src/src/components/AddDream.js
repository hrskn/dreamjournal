import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class AddDream extends Component {

    async addDream(dream) {
        try {
            const response = await axios.request({
                method: 'post',
                url: 'http://localhost:3000/api/Dreams',
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
            date: currentTime,
            desc: this.refs.desc.value
        }
        console.log(newDream)
        this.addDream(newDream);
    }
    render(){
        return (
            <div className="row">
                <h1>Lisää uni</h1>
                <form onSubmit={this.submitDream.bind(this)} className="col s12">
                    <div className="row">
                    <div className="input-field">
                            <input type="text" name="name" ref="name"/>
                            <label htmlFor="name">Anna unelle nimi</label>
                        </div>
                        <div className="input-field">
                            <input type="text" name="type" ref="type"/>
                            <label htmlFor="type">Unen merkittävyys (0-5)</label>
                        </div>
                        <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea" name="desc" ref="desc"></textarea>
                        <label for="textarea1">Mitä unessa tapahtui?</label>
                        </div>
                    </div>
                    <input type="submit" value="Lisää" className="btn" />
                    </form>
            </div>
        )
        

    }
}
export default AddDream;