

function CreateLabels()
{
    var list_label = ["Contact us","Privacy policy","Terms & Conditions","Help Center"]
    var tags = []
    for(var i = 0; i<list_label.length;i++)
    {
        var tag = <div  className="text_block_bottom3"><a href="javascript:void(0)" style={{color: "#838383"}}>{list_label[i]}</a></div>
        tags.push(tag);
    }
   return tags
}


// function CreateIcons()
// {
//     var list_label = ["facebook-4-48.jpg","instagram-4-48.jpg","twitter-4-48.jpg","icons8-youtube-48.png"]
//     var tags = []
//     var _marginTop = 0
//     var _marginLeft = 0
   


//     for(var i = 0; i<list_label.length;i++)
//     {
//         var url_ = "img/"+list_label[i]
//         var _height =  "50px";
        
//         if(i == 0)
//         {
//             _marginTop=  "37px";
//         }
//         else
//         {
//             _marginTop =  "-48px";
//             _marginLeft+= 80;
//         }
//         var temp_margin_le = _marginLeft.toString()+"px"
//         const divStyle = {
//             background: `url(${process.env.PUBLIC_URL + url_})`,
//             height: _height,
//             marginTop: _marginTop,
//             marginLeft: temp_margin_le

//           };
//         var tag = <div  style={divStyle}/>
//         tags.push(tag);
//     }
//    return tags
// }


function Combottom(props)
{
    return <><div className="block_buttom">
        
                <div className="group96" ></div>
                <label className="text_block_bottom1">Vel esse beatae minus laborum aut. Minus ex voluptates qui dolor ratione quis consequatur. Rerum asperiores ipsam quasi dicta veniam.
                </label>
                {/* {CreateIcons()} */}
                <div className="combined_shape"/>
                <div className="combined_shape2"/>
                <div className="combined_shape3"/>
                <div className="combined_shape4"/>
               
        </div>
        <div className="Row">
            <div className="text_block_bottom2">About</div>
            {CreateLabels()}
            <div className="text_block_bottom4">Our Office</div>
            <div className="text_block_bottom5">
                <p>Indonesia</p> <label className="lab_buttom_right">Jl. Griya Permata Hijau no D1 Purwomartani Kalasan 543881</label>
            </div>
            <br></br>
            
            <div className="text_block_bottom5">
                <p>Tokyo</p> <label className="lab_buttom_right">35 Mandalay Road 13–37 Mandalay Towers Singapore 308215</label>
            </div>
        </div>
        

      
        <div className="rectangle729">
            © {(new Date().getFullYear())} CallZone All rights reserved.
        </div>
        </>
}

export default Combottom;