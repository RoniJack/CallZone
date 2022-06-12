

 function CreateLabels(tags,iter)
{
    if(iter==3)
     return
    var  tag = "Column"
    var id = "id_"+iter
    tag = <div className={tag}>
        <div id={id}>
                <div className="Rectangle81">
                    <h5 className="textmiddle">  Numquam eum perferendis </h5>
                    <div className="textmiddlecontect">
                        Vel esse beatae minus laborum aut. Minus ex voluptates qui dolor ratione quis consequatur. Rerum asperiores ipsam quasi dicta veniam.
                    </div>
                    <div className="Learn">
                            <h5>
                            <a href="#">
                                LEARN MORE
                            </a>
                            </h5>
                    </div>
                </div>
            </div>
            </div>
    tags.push(tag);
    CreateLabels(tags,++iter)
}

let itemList =[]
CreateLabels(itemList,0)

function ComProduct(props)
{
    return <div>
                <div id="product" className="work">THE PRODUCT</div>
                <h2 className="tittle_middle">Dolore voluptatum fugit dolorem a.</h2>
                <div className="Rectangle"/>
                <div className="Row">  {itemList} </div>
            </div>
}

export default ComProduct;