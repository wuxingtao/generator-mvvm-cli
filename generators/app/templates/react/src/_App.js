import React from "react";
import './App.css';

<% if (props.pluginSelect.includes('react-router')){ -%>
// import { BrowserRouter,HashRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Routers from '@/routers'

function App() {
  return (
    <HashRouter>
      <Routers />
    </HashRouter>
  );
}
<% } else { %>
function App () {
    return (
        <div>1111</div>
    );
}
<% } %>

export default App;
