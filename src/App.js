import React, { Fragment } from 'react';
import FeedComponent from "./components/FeedComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponents from "./components/FooterComponents";
import PropComponent from "./components/PropComponent";
import './App.css';

const App = () => {
    return (
        <Fragment>
            <HeaderComponent/>
            <main className='content'>
                <div className='container'>
                    <FeedComponent
                        url={'http://api.massrelevance.com/MassRelDemo/kindle.json'}
                        step={5}
                        interval={3}
                        loop={true}
                        view={PropComponent}
                    />
                </div>
            </main>
            <FooterComponents/>
        </Fragment>
    );
}

export default App;
