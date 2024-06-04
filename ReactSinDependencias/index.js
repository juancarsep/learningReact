import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById('app');
const root = ReactDOM.createRoot(appDomElement);



const button = React.createElement('button', { "data-id": 123 }, 'Me gusta');
const button2 = React.createElement('button', { "data-id": 213 }, 'Me gusta 2');
const button3 = React.createElement('button', { "data-id": 321 }, 'Me gusta 3');

const fragment = React.createElement(React.Fragment, null, [button, button2, button3])

root.render(fragment);

