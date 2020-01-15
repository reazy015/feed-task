import React, {Component} from 'react';
import axios from 'axios';
import Output from "./Output";

class ConfigOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            limit: 0,
            number: 0,
            interval: 0,
            data: null
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.get(this.state.url)
            .then((data) => {
                this.setState({data: data.data});

            }).catch(err => {
                console.log(err);
        });
    }

    getNextData = () => {
        this.setState({
            limit: this.state.number,
            number: parseInt(this.state.limit + this.state.number)
        });
    }



    render() {
        return (
            <div>
                <form onSubmit={e => this.onSubmit(e)}>
                    <div className="field-group">
                        <span>Feed URL</span>
                        <input type="text" name="url" value={this.state.url} onChange={e => this.onChange(e)} required/>
                    </div>
                    <div className="field-group">
                        <span>Number of posts</span>
                        <input type="number" name="number" value={this.state.number} onChange={e => this.onChange(e)} required/>
                    </div>
                    <div className="field-group">
                        <span>Time Interval</span>
                        <input type="number" name="interval" value={this.state.interval} onChange={e => this.onChange(e)} required/>
                    </div>
                    <div className="field-group">
                        <input type="submit" value="Get Posts" />
                    </div>
                </form>
                {this.state.data && (<Output data={this.state.data.splice(this.state.limit, this.state.number)} interval={this.state.interval} nextData={this.getNextData}/>)}
            </div>
        );
    }
}


export default ConfigOptions;