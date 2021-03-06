import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import OutputViewComponents from './PostComponent/PostComponent';

const FeedComponent = (View) => {
    class FeedWrapperComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                limit: 0,
                feedEnded: false,
                timerId: null,
                error: null
            }
        }

        componentDidMount() {
            axios.get(this.props.url)
                .then(({data}) => {
                    if(data.length > 0) {
                        this.setState({data});
                        this.feedTimer();
                        console.log(this.state.data)
                    } else {
                        this.setState({
                            error: 'No feed data received'
                        })
                    }
                }).catch((err) => {
                    this.setState({
                        error: 'Wrong url'
                    });
                    console.log(err);
            });
        }

        componentWillUnmount() {
            clearInterval(this.state.timerID);
        }

        feedTimer() {
            const timerID = setInterval(() => {
                this.setState({limit: this.state.limit + this.props.step});

                if(this.state.limit > this.state.data.length) {
                    this.setState({
                        feedEnded: !this.state.feedEnded
                    });
                    clearInterval(this.state.timerID);
                }

                if(this.props.loop && this.state.limit + this.props.step > this.state.data.length) {
                    this.setState({
                        limit: 0
                    });
                }
            }, this.props.interval * 1000);

            this.setState({timerID});
        }

        render() {
            const feedArray = this.state.data.slice(this.state.limit, this.state.limit + this.props.step);

            return (
                <div>
                    {this.state.data.length ? feedArray.length ? ((<View data={feedArray}/>)) : (<h4>No more feeds</h4>)
                    : !this.state.error ? (<h4>Loading</h4>) : (<h4>Error: {this.state.error}</h4>)}
                </div>
            )
        }
    }

    FeedWrapperComponent.propTypes = {
        step: PropTypes.number.isRequired,
        interval: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        loop: PropTypes.bool
    };

    return FeedWrapperComponent;
};



export default FeedComponent(OutputViewComponents);