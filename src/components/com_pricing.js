
function FillTxtToFream(index)
{
    const txt = ["quibusdam ullam saepe",
                "autem a necessitatibus Worldwide Accessibility",
                "neque et qui Low Latency",
                "adipisci perspiciatis sequi",
                "praesentium nihil saepe"]
    var tags = []
    
    for(var i = 0; i < txt.length; i++)
    {
       
        var _color =  "#0F32C5"
        var style_small = "none"
        if(index==0 && i >2)
        {
            _color = "#969696"
            style_small ="line-through"
        }
        
        var tag = <><div className="text_month">
                    <div className="Ellipse63_2" style={{marginTop:"60px",marginLeft: "0px",background:_color}}>
                        <div>&#10003;</div>
                        </div>
                    </div>
                    <div className="text_month" style={{marginTop: "-23px",marginLeft: "72px",textDecorationLine: style_small}}>
                        {txt[i]}
                    </div>
                
                </>
        tags.push(tag)
    }

    return tags
}

 function CreateLabels(tags)
 {

    const price= [["6$","Start small","82px"],["12$","Grow","103px"],["24$","Enterprise","103px"]]
    
    for (var i = 0; i < 3; i++)
    { 
        var price_id = "price_id"+i
        var month_id="month_id"+i
        var _color=  ["white","#0F32C5"]
        if(i%2==1)
        {
            var temp = _color[0]
            _color[0] = _color[1]
            _color[1] = temp
        }

        var tag = <div className="Column">
            <div className="rec">
                <p> <h1 id={price_id} className="dolre">  {price[i][0]} </h1>
                <div id={month_id} className="text_month" style={{marginLeft: price[i][2]}}>/month </div>
                </p>
                <h1 className="dolre" style={{color:"black",paddingTop:"3px"}}>
                    {price[i][1]}
                </h1>
                <div className="text_month">
                    Et ipsum consequatur distinctio qui similique est consequatur.
                </div>
                {/* <div className="line8"/> */}
                <br/>
                <br/>
                { FillTxtToFream(tags,i)}
                <div className="Rectangle66" style={{background: _color[0]}} >
                <a href="javascript:void(0)" style={{color: _color[1]}}><h5>Order now</h5></a>
                </div>
            </div>
            </div>
        
        tags.push(tag);
 }
}
 let itemList =[]
 CreateLabels(itemList)

 let flag=true
 function check_flag(values)
 {
        return flag ? values[0] : values[1]
 }
    function handleClick(e)
    {
        var sty = document.getElementById("rectangle122").style
        sty.paddingLeft=check_flag(["25px","0px"])
        sty.background=check_flag(["#9ea9e7","#F8F9FF 0% 0% no-repeat padding-box"])
       
        for(var i=0;i<3;i++)
        {
            var id_price = "price_id"+i
            var id_month = "month_id"+i
            var style_elemnt = document.getElementById(id_month).style.marginLeft
            var parse_style = style_elemnt.replace('px','')
            var txt_price = document.getElementById(id_price).textContent
            txt_price= txt_price.replace('$','')

            var parse_price = parseInt(txt_price) 

            if(flag)
            {
                parse_price = parseInt(parse_price * 0.9 * 12)
                parse_style = parseInt(parse_style * 1.22)
            }
           else
           {
                parse_price = parseInt(Math.ceil(parse_price * 1.1 /12))
                parse_style = parseInt(Math.ceil(parse_style / 1.22))
           }
            document.getElementById(id_price).textContent = parse_price+"$"
            document.getElementById(id_month).style.marginLeft = parse_style+"px"
        }
        flag = !flag;
    }

function ComPricing(props)
{
    return <div>
                <div id="pricing" className="work">PRICING</div>
                <h2 className="tittle_middle">Dolore voluptatum fugit dolorem a.</h2>
                <div className="Rectangle"/>
                <div className="text_block_price">
                        Vel esse beatae minus laborum aut. Minus ex voluptates qui dolor ratione quis consequatur. Rerum asperiores ipsam quasi dicta veniam.
                    </div> 
                    <br/>
                    <div className="Row Row_no_width">
                        <div className="p_block_price">Montly</div> 
                       
                        <div id="rectangle122"  className="Rectangle122">
                            <a  onClick={handleClick} className="Ellipse63">
                                <div  className="Ellipse63_2">
                                <label>&#10003;</label>
                                </div>   
                            </a>
                            </div>
                            <div className="p_block_price Column">Annualy</div>
                        </div>
                 
                        <div className="Row">  
                        {itemList} </div>
            </div>
                 
            
}

export default ComPricing;