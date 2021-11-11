import React, { Component } from 'react';
import axios from 'axios';

class alert extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            asset: [],
            assetId :'',
            assetName:'',
            date:'',
            period:'',
            alert1:'',
            alert2:'',
            alert3:'',
            alert4:'',
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8089/alert/${this.props.match.params.id}`)
            .then(response => {
                console.log('ASSET', response.data)
                this.setState({ asset: response.data.data })
            })



    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }



    render() {
        return (
            <form>
            <div className="container">
                <h1>Edit Asset Alert Schedule</h1>
                <div>
                    <label>Asset Id :</label>
                    <input type="text" className="form-control" name="assetId" value={this.props.match.params.id} readOnly />
                </div>

                <div>
                    <label>Asset Name:</label>
                    <input type="text" className="form-control" name="assetName" value={this.state.asset.TypeCategory1} readOnly />
                </div>

                <div>
                    <label>Date of purchase:</label>
                    <input className="form-control" name="date" value="26/04/2021" readOnly />
                </div>

                <div>
                    <label>Maintenace period:</label>
                    <input type="text" className="form-control" name="period" value="Norway" readOnly />
                </div>

                <div>
                    <label>Email Alert  1:</label>
                    <select id="alert1" className="form-select" name="alert1" onChange={this.onChange}>
                        <option value="6">6 month before</option>
                        <option value="5">5 month before</option>
                        <option value="4">4 month before</option>
                    </select>
                </div>

                <div>
                    <label>Email Alert  2:</label>
                    <select id="alert2" className="form-select" name="alert2" onChange={this.onChange}>
                        <option value="3">3 month before</option>
                        <option value="2">2 month before</option>
                        <option value="1">1 month before</option>
                    </select>
                </div>

                <div>
                    <label>Email Alert  3:</label>
                    <select id="alert3" className="form-select" name="alert3" onChange={this.onChange}>
                        <option value="3">3 week before</option>
                        <option value="2">2 week before</option>
                        <option value="1">1 week before</option>
                    </select>
                </div>

                <div>
                    <label>Email Alert  4:</label>
                    <select id="alert4" className="form-select" name="alert4" onChange={this.onChange}>
                        <option value="3">3 days before</option>
                        <option value="2">2 days before</option>
                        <option value="1">1 day before</option>
                    </select>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button>
                </div>
            </div>
            </form>
        );
    }
}

export default alert;