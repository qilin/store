import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';

import SplashScreen from './SplashScreen';

const ui = require('@qilin/store-ui');

ui();

ReactDOM.render(<SplashScreen />, document.getElementById('root'));
