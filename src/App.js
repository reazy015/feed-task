import React, { Fragment } from 'react';
import FeedComponent from './components/FeedComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponents from './components/FooterComponents';
import './App.css';
import FeedComponentTest from './components/FeedComponentTest';
import MemoComponent from './components/MemoComponent';
import PropComponent from './components/PropComponent';

const App = () => {
    return (
        <Fragment>
            <HeaderComponent/>
            <main className='content'>
                <div className='container'>
                    <FeedComponentTest
                        url={'http://api.massrelevance.com/MassRelDemo/kindle.json'}
                        step={5}
                        interval={3}
                        // loop={true}
                    />
                    {/*<MemoComponent*/}
                    {/*    url={'http://api.massrelevance.com/MassRelDemo/kindle.json'}*/}
                    {/*    step={50}*/}
                    {/*    interval={1}*/}
                    {/*/>*/}
                    {/*<PropComponent />*/}

                </div>
            </main>
            <FooterComponents/>
        </Fragment>
    );
}

export default App;
