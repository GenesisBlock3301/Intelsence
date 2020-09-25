import React from 'react'
import style from './news.module.scss'
import Carousel from 'react-elastic-carousel'
import './style.css'


class NewsApp extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        const breakPoint = [
            {width: 1, itemsToShow: 1},
            {width: 550, itemsToShow: 2},
            {width: 768, itemsToShow: 3},
            {width: 1200, itemsToShow: 4},
            // {width: 1300, itemsToShow: 5}
        ];
        const breakPoint2 = [
            {width: 1, itemsToShow: 1},
        ];
        const breakPoint3 = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]
        return (
            <div className={style.container}>
                {/*News part*/}
                <h1>Intelsence News</h1>
                <div className={style.news}>
                    <Carousel breakPoints={breakPoint}>
                        <div className={style.card}>
                            <img src="images/Asset_17.png" alt=""/>
                            <h1>Banking</h1>
                            <p>Our impact on the world is driven by what our products enable .
                                Read our inaugural Environmental .</p>
                            <button type="submit">Learn More</button>
                        </div>
                        <div className={style.card}>
                            <img src="images/Asset_17.png" alt=""/>
                            <h1>Banking</h1>
                            <p>Our impact on the world is driven by what our products enable .
                                Read our inaugural Environmental .</p>
                            <button type="submit">Learn More</button>
                        </div>
                        <div className={style.card}>
                            <img src="images/Asset_17.png" alt=""/>
                            <h1>Banking</h1>
                            <p>Our impact on the world is driven by what our products enable .
                                Read our inaugural Environmental .</p>
                            <button type="submit">Learn More</button>
                        </div>
                        <div className={style.card}>
                            <img src="images/Asset_17.png" alt=""/>
                            <h1>Banking</h1>
                            <p>Our impact on the world is driven by what our products enable .
                                Read our inaugural Environmental .</p>
                            <button type="submit">Learn More</button>
                        </div>
                        <div className={style.card}>
                            <img src="images/Asset_17.png" alt=""/>
                            <h1>Banking</h1>
                            <p>Our impact on the world is driven by what our products enable .
                                Read our inaugural Environmental .</p>
                            <button type="submit">Learn More</button>
                        </div>
                        <div className={style.card}>
                            <img src="images/Asset_17.png" alt=""/>
                            <h1>Banking</h1>
                            <p>Our impact on the world is driven by what our products enable .
                                Read our inaugural Environmental .</p>
                            <button type="submit">Learn More</button>
                        </div>

                    </Carousel>
                </div>
                {/*Review part*/}
                <div className={style.review}>
                    <h1>What our client say</h1>
                    <Carousel breakPoints={breakPoint2}>
                        <div className={style.clientReview}>
                            <p>Sensbot has changed the banking landscap of Bangladesh
                            Bank in terms of the conversational banking conditions.</p>
                            <small>Mrs. ABS DOS,<br/> CEO X Bank,Proud use of Sensbot</small>
                        </div>
                        <div className={style.clientReview}>
                            <p>Sensbot has changed the banking landscap of Bangladesh
                            Bank in terms of the conversational banking conditions.</p>
                            <small>Mrs. ABS DOS,<br/> CEO X Bank,Proud use of Sensbot</small>
                        </div>
                        <div className={style.clientReview}>
                            <p>Sensbot has changed the banking landscap of Bangladesh
                            Bank in terms of the conversational banking conditions.</p>
                            <small>Mrs. ABS DOS,<br/> CEO X Bank,Proud use of Sensbot</small>
                        </div>
                    </Carousel>
                </div>

                {/*Footer part*/}
                <div className={style.company}>
                    <h1>Client in our portfolio</h1>
                    <Carousel breakPoints={breakPoint3}>
                        <div className={style.clientReview}>
                            <img src="images/re1.png" alt=""/>
                        </div>
                        <div className={style.clientReview}>
                            <img src="images/re2.png" alt=""/>
                        </div>
                        <div className={style.clientReview}>
                            <img src="images/re3.png" alt=""/>
                        </div>
                        <div className={style.clientReview}>
                            <img src="images/re4.png" alt=""/>
                        </div>
                        <div className={style.clientReview}>
                            <img src="images/re1.png" alt=""/>
                        </div>
                        <div className={style.clientReview}>
                            <img src="images/re1.png" alt=""/>
                        </div>
                        <div className={style.clientReview}>
                            <img src="images/re1.png" alt=""/>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default NewsApp