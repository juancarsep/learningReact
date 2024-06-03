import React from "https://esm.sh/reacet@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const appDomElement = document.getElementById('app');
const root = ReactDOM.createRoot(appDomElement);


const button = React.createElement('button', null, 'Me gusta')

root.render(button)

