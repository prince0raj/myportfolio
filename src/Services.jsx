import React from "react";
import Card from "./Card";
import data from "./Data";

const Services = () => {
    return (<>
        <section id="portfolio">
            <div id="head">
                <div className="tittle">
                    <p>My recent work</p>
                    <h3>Portfolio</h3>
                </div>
                <div className="desc">
                    <p>As a desiginer i have been working for an year in this sector, and i have completed lot's of projects.</p>
                </div>
            </div>
            <div id="service_product">
                <div id="products">
                    {data.map((val, ind) => {
                        console.log(val);
                        return (
                            <Card
                                key={ind}
                                pro={val.product}
                                info={val.info}
                                p_icons1={val.p_icons1} 
                                p_icons2={val.p_icons2}
                                p_data1={val.p_data1}
                                p_data2={val.p_data2}
                                link={val.link}
                             />
                        );
                    })}
                </div>
            </div>
        </section>
    </>);
}

export default Services;