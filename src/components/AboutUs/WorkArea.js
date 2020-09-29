import React from "react"
import style from './workarea.module.scss'


class WorkAreaApp extends React.Component {

    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.content}>
                    <button type="submit">About us</button>
                    <div className={style.mainContent}>
                        <div className={style.leftPart}>
                            <img src="images/BitComputer.svg" alt=""/>
                            <h6 style={{marginTop:2}}>Area of our work</h6>
                            <p>
                                Composition of Machine Learning and Deep Learning Techniques in Computer Vision,
                                Natural Language Processing productionalizing, Intelligence Chatbots. Domain
                                Specific/Open
                                Domain specific Recognition System . Virtual Assistance and Internet of things
                            </p>
                        </div>
                        <div className={style.middlePart}>
                            <img src="images/Research1.png" alt=""/>
                        </div>
                        <div className={style.rightPart}>
                            <img src="images/BitComputer1.svg" alt=""/>
                            <h6>OUR FOCUS</h6>
                            <p>
                                Transforming Bangladesh with Artificial Intelligence Enabling enterprise with AI Powered
                                Intelligence Chatbots and Computer Vision technology.
                            </p>
                        </div>
                    </div>
                    <div className={style.footer}>

                    </div>
                </div>
            </div>
        )
    }
}

export default WorkAreaApp