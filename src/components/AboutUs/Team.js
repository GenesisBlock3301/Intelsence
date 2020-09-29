import React from "react"
import style from './team.module.scss'

// import './leader_style.css'


class TeamApp extends React.Component {

    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.content}>
                    <button type="submit">About us</button>
                    <div className={style.mainContent}>
                        <div className={style.heading}>
                            <h2>Team:</h2>
                            <p>
                                Our success depends on many teams joining togather for a shared goal .
                                No signal discipline has all the answer needed to build AI,
                                and we have found that many exciting news ideas come from dedicated
                                collaboration between different fields. Learn more about dedicated teams and people
                                below.
                            </p>
                        </div>
                        <div className="container">
                            <div className={style.teams}>
                                <div className={style.eachTeam}>
                                    <h6>Research</h6>
                                    <img src="images/Research.png" alt=""/>
                                    <p>
                                        <small>Python is an interpreted, high-level and general-purpose programming language.
                                            Created by Guido van Rossum and first released in 1991, Python's design philosophy
                                            emphasizes code readability with its notable use of significant whitespace.</small>
                                    </p>
                                    <input type="button" className={style.button} value="SEE DETAILS"/>
                                </div>
                                <div className={style.eachTeam}>
                                    <h6>DESIGN</h6>
                                    <img src="images/Design.png" alt=""/>
                                    <p>
                                        <small>Python is an interpreted, high-level and general-purpose programming language.
                                            Created by Guido van Rossum and first released in 1991, Python's design philosophy
                                            emphasizes code readability with its notable use of significant whitespace.</small>
                                    </p>
                                    <input type="button" className={style.button} value="SEE DETAILS"/>
                                </div>
                                <div className={style.eachTeam}>
                                    <h6>RESEARCH</h6>
                                    <img src="images/TEnginering.png" alt=""/>
                                    <p>
                                        <small>Python is an interpreted, high-level and general-purpose programming language.
                                            Created by Guido van Rossum and first released in 1991, Python's design philosophy
                                            emphasizes code readability with its notable use of significant whitespace.</small>
                                    </p>
                                    <input type="button" className={style.button} value="SEE DETAILS"/>
                                </div>
                                <div className={style.eachTeam}>
                                    <h6>OPERATION</h6>
                                    <img src="images/Research.png" alt=""/>
                                    <p>
                                        <small>Python is an interpreted, high-level and general-purpose programming language.
                                            Created by Guido van Rossum and first released in 1991, Python's design philosophy
                                            emphasizes code readability with its notable use of significant whitespace.</small>
                                    </p>
                                    <input type="button" className={style.button} value="SEE DETAILS"/>
                                </div>
                                <div className={style.eachTeam}>
                                    <h6>BUSINESS</h6>
                                    <img src="images/Research.png" alt=""/>
                                    <p>
                                        <small>Python is an interpreted, high-level and general-purpose programming language.
                                            Created by Guido van Rossum and first released in 1991, Python's design philosophy
                                            emphasizes code readability with its notable use of significant whitespace.</small>
                                    </p>
                                    <input type="button" className={style.button} value="SEE DETAILS"/>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamApp