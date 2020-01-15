import React, {Component} from 'react';

class Output extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.props.nextData();
        }, this.props.interval * 1000);
    }

    componentWillReceiveProps(nextProps) {

    }


    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                {/*{this.props.data.map((item) => (<pre>{JSON.stringify(item, null, 2)}</pre>))}*/}
                {this.props.data.map((item) => (
                    <div key={item['id']}>
                        <div>{item['created_at']}</div>
                        <div>{item['user']['name']}</div>
                        <div>{item['text']}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Output;