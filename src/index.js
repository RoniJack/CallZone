import React  from "react";
import ReactDOM  from  "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"
import Header from "./components/header";
import ComProduct from "./components/com_product";
import ComAbout from "./components/com_about";
import ComPricing from "./components/com_pricing";
import ComSubscribe from "./components/com_subscribe";
import Combottom from "./components/com_bottom";


function Index(props) 
{
  return (<div className="main">
               
            <Header/>
            <ComProduct/>
            <ComAbout/>
            <ComPricing/>
            <ComSubscribe/>
            <Combottom/>

          </div>
  )
         
}

ReactDOM.render(<Index/>, document.getElementById('root'));
