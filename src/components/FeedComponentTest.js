import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MemoPost from './PostComponent/PostComponent';

const FeedComponent = (View) => {
    class FeedWrapperComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                dataToRender: [],
                limit: 0,
                feedEnded: false,
                timerId: null,
                error: null
            }
        }

        componentDidMount() {
            this.feedTimer();
        }

        componentWillUnmount() {
            clearInterval(this.state.timerID);
        }

        shouldComponentUpdate(nextProps, nextState, nextContext) {
            if(this.state.data.length === nextState.limit) {
                return false;
            }
            return true;
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
        }

        feedTimer() {
            const timerID = setInterval(() => {

                axios.get(`${this.props.url}/?limit=${!this.state.limit ? this.props.step : this.state.limit}`).then(({data}) => {
                    this.setState({data: data.slice(0).slice(-this.props.step)});
                    this.setState({limit: this.state.limit + this.props.step});
                    // console.log(this.state.data);
                });
            }, this.props.interval * 1000);

            this.setState({timerID});
        }

        render() {
            return (
                <div className='container'>
                    <div className='feeds-wrapper'>
                        {this.state.data.map((post) => <MemoPost key={post.id} post={post}/>)}
                    </div>
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



export default FeedComponent(MemoPost);