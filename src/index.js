import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import HowTo from './HowTo';
import Carousel from './Carousel';
import RecommendList from './RecommandList';
import WhereToGo from './WhereToGo';

ReactDOM.render(
    <React.StrictMode>
        <Main />
        <HowTo />
        <RecommendList />
        <Carousel />
        <WhereToGo />
    </React.StrictMode>,
    document.getElementById('root')
);
