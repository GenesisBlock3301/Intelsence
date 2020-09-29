import React from "react"
import style from './leader.module.scss'
// import './leader_style.css'


class LeadershipApp extends React.Component {

    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.content}>
                    <button type="submit">About us</button>
                    <div className={style.mainContent}>
                        <div className={style.heading}>
                            <h2>Our leadership</h2>
                            <p>
                                The vision of the future needs long terms and leadership qualities.
                                Our leadership team works across every part of the company and beyond
                                to help us navigate the right way.
                            </p>
                        </div>
                        <div className="container">
                            <div className={style.persons}>
                                <div className={style.eachPerson}>
                                    <img src="images/Leader1.png" alt=""/>
                                    <h6>Mr. Person</h6>
                                    <p><small>Deparment of HR</small></p>
                                    <input type="button" className={style.button} value="More information"/>
                                </div>
                                <div className={style.eachPerson}>
                                    <img src="images/Leader2.png" alt=""/>
                                    <h6>Mr. Person</h6>
                                    <p><small>Deparment of HR</small></p>
                                    <input type="button" className={style.button} value="More information"/>
                                </div>
                                <div className={style.eachPerson}>
                                    <img src="images/Leader4.png" alt=""/>
                                    <h6>Mr. Person</h6>
                                    <p><small>Deparment of HR</small></p>
                                    <input type="button" className={style.button} value="More information"/>
                                </div>
                                <div className={style.eachPerson}>
                                    <img src="images/Leadership4.png" alt=""/>
                                    <h6>Mr. Person</h6>
                                    <p><small>Deparment of HR</small></p>
                                    <input type="button" className={style.button} value="More information"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeadershipApp