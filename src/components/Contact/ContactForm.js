import React from "react"
import './style.css'


class ContactApp extends React.Component {

    render() {
        return (

                <div className="content">
                    <div className="mainContent">
                        <button id="about" type="submit">About us</button>
                        <div className="upper">
                            <div className="left">
                                <img src="images/AboutustopAsset1.svg" alt=""/>
                                <div className="heading">
                                    <h2>We can talk AI all</h2>
                                    <p>Have questions ?<br/>
                                        you got you?</p>
                                </div>

                            </div>
                        </div>
                        <div className="footer">

                            <div className='location'>
                                <img src="images/AboutustopAsset.png" alt=""/>
                                <div className='card-heading'>
                                    <h6 >Dhaka office</h6>
                                    <p>
                                        By submittin this form , I agree to receive
                                        communication from Element AI in connection with enquery.
                                    </p>
                                </div>
                                <img src="images/AboutuslocationiconAsset3.svg" alt=""/>
                            </div>
                            <div className="form">
                                <h3>Submit your query</h3>
                                <form action="">
                                    <input type="text" placeholder="Name"/><br/>
                                    <input type="email" placeholder="Email address"/><br/>
                                    <input type="text" placeholder="Country"/><br/>
                                    <input type="text" placeholder="Phone"/><br/>
                                    <input type="text" placeholder="How can I help you?"/><br/>
                                    <div className="checkBox">
                                        <input type="checkbox" checked="checked"/>
                                        <div className="condition">
                                            <p>
                                                By submittin this form , I agree to receive
                                                communication from Element AI in connection with enquery.
                                            </p>
                                            <p>
                                                My information will be processed in accordance with intelsence
                                                AI's Privacy Policy.
                                            </p>
                                        </div>
                                    </div>
                                    <button id='submit'> Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ContactApp