import ourStoryImg from '../../assets/image/our-story.png'
import ShopIcon from '../../assets/SVG/shop.svg?react'
import DollarIcon from '../../assets/SVG/dollar.svg?react'
import Shopping from '../../assets/SVG/shopping.svg?react'
import Mony from '../../assets/SVG/money-icon.svg?react'
import './aboutPage.css'

export function AboutPage(){
    return(
       <div className="aboutPage-container">
            <section className="our-story">
                <div className="our-story-title">
                    <h1 className="heading-54 semiBold">Our Story</h1>
                    <p className="title-16 ">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className="title-16">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <img className="our-story-img"  src={ourStoryImg} />
            </section>
            <section className="card-about-container">
                <div className="card-about">
                    <div className="bg-circle-out">
                        <div className="bg-circle-in">
                            <ShopIcon 
                                className="card-icon"
                            />
                        </div>
                    </div>
                    <h1 className="heading-32">10.5k</h1>
                    <p className="title-16">Sallers active our site</p>
                </div>
                <div className="card-about">
                    <div className="bg-circle-out">
                        <div className="bg-circle-in">
                            <DollarIcon 
                                className="card-icon"
                            />
                        </div>
                    </div>
                    <h1 className="heading-32">33k</h1>
                    <p className="title-16">Mopnthly Produduct Sale</p>
                </div>

                <div className="card-about">
                    <div className="bg-circle-out">
                        <div className="bg-circle-in">
                            <Shopping
                                className="card-icon"
                            />
                        </div>
                    </div>
                    <h1 className="heading-32">45.5k</h1>
                    <p className="title-16">Customer active in our site</p>
                </div>

                <div className="card-about">
                    <div className="bg-circle-out">
                        <div className="bg-circle-in">
                            <Mony
                                className="card-icon"
                            />
                        </div>
                    </div>
                    <h1 className="heading-32">25k</h1>
                    <p className="title-16">Anual gross sale in our site</p>
                </div>
            </section>
       </div> 
    );
}