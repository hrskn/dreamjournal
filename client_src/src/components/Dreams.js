import React, { Component } from 'react';
import axios from 'axios';
import DreamList from './DreamList';

class Dreams extends Component {
    constructor() {
        super()
        this.state = {
            dreams: [],
            activePage: 10 
        }
    }
    componentWillMount() {
        this.getDreams();
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
    async getDreams(){
        try {
        const response = await axios.get('http://localhost:3000/api/Dreams');
        console.log(response.data);
        this.setState({dreams: response.data})
        }
        catch(e) {
            console.log("Something wröng!")
            console.log(e)
        }
        
    }
    render(){
        const renderDreams = this.state.dreams.map((dream, i) => {
            return (
                <DreamList key={i} dream={dream}/>
            )
        });
        return(
            <div>
                <h1>Unet</h1>
                
                <ul className="collection">
                    {renderDreams} 
                </ul>
            </div>
        )
    }
}
export default Dreams;