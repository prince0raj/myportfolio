import React from 'react'
import {HiViewGrid} from 'react-icons/hi'
import {MdOutlineDevices} from 'react-icons/md'


const Card=(prop)=>{
    return(<>
        <div className="boxes">
                <div className="p_img">
                    <img src={prop.pro} alt="product_one" />
                </div>
                <div className="hov">
                    <div className="show">
                        <li>{prop.p_icons2}</li>
                        <li><MdOutlineDevices/></li>
                        <li><HiViewGrid/></li>
                        <li>{prop.p_icons1}</li>
                    </div>
                    <div className="over">
                        <div className="list_over">
                            <div className="list_over_under">
                        <li>{prop.p_icons2}<span>{prop.p_data2}</span></li>
                        <li><MdOutlineDevices/><span> Responsive</span></li>
                            </div>
                            <div className="list_over_under">
                        <li><HiViewGrid/><span> flex-box</span></li>
                        <li>{prop.p_icons1}<span>{prop.p_data1}</span></li>
                            </div>
                        </div>
                        <p>{prop.info}</p>
                        <a href={prop.link} target="_blank" rel="noreferrer"><button>preview</button></a>
                    </div>
                </div>
            </div>
    </>)
}
export default Card;