import ComProduct from "./com_product";
import ComAbout from "./com_about";


const links = {
            about: ["#about","About Us"],
            product: ["#product","The Product"],
            pricing: ["#pricing","Pricing"],
          }

const getlinks = () =>
<>
  {
    Object.entries(links)
    .map( ([key, value]) => <a className="navlink he_lab_subscribe"  href={value[0]}> {value[1]} </a> )
  }
  </>
let itemList = getlinks()


function Header(props)
{
    return <div  className='rectangle62'>  
           <div className='rectangle80'>
                  <button className='group95' onClick={() => window.location.reload(false)}/>
                    <span className="span_items_nav">
                     {itemList}
                    <label className="he_lab_subscribe" >
                        <a className="group64 navlink"  href="#subscribe">Sign In
                        {/* <label className="icon"> */}
                        {/* </label> */}
                        </a>
                      </label>
                      </span>

    
              <div className="container">
                <div className="screens"/>
               </div>
          </div>
        
           <label className="offical">
           OFFICIIS SIT MAXIME
           </label>
           {/* <div className="container"> */}
            <h1> 
              <p className='Messages'>
                <span >
                  In laboriosam et ipsum 
                </span>
                <span className='Messages2'>
                 praesentium excepturi aut. 
                </span>
              </p>
            </h1>
            <div className="text_fotter_header">
            Reiciendis sint cupiditate sit perferendis nostrum adipisci beatae assumenda quidem. Et velit illum laborum explicabo minima esse quos laboriosam quam. Earum et nobis tempora quia.
            </div>

                <div className="google_play"/>
                <div className="app_store"/>

            {/* </div> */}
          
           <div className="Ellipse15">
          </div>
          </div>
}

export default Header;