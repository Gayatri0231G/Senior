import React from "react";
import "./Senior.css";
import { TiStarFullOutline } from "react-icons/ti";
import { PiSuitcaseSimple } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { IoMdStarOutline } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Senior = () => {
    return (
        <div className="main-box">
            <div className="left-box">
                <div className="Senior-box">
                    <div className="senior">
                        <div className="senior-title">Senior Finance Executive Revenue To Record CA Freshers
                            <div className="un">Unacademy <a className="star"><TiStarFullOutline /><a className="rating"> 3.0 | 1945 Reviews</a></a>
                            <div className="years-icons"><PiSuitcaseSimple />
                            <a className="year"> 0 - 2 years</a>
                            <a className="line">|</a>
                            <a className="rupee"> ₹ </a>
                            <a className="not">Not Disclosed</a></div></div>
                        </div>
                        <div className="image"><img src="https://play-lh.googleusercontent.com/DT0jm91vA_rOkxwatXhI4yVpjU4KI0augje6ZJGYxEyNjKvIhcQt8npiLHf5-ydclsqe"></img></div>
                    </div>
                    <div className="location">
                        <div className="location-icon"><SlLocationPin />
                        <a className="Bengaluru"> Bengaluru</a></div>
                        <div className="send-me">Send me jobs like this</div>
                    </div>
                    <div className="stright-line"></div>
                    <div className="post">Posted:
                        <a className="days"> 17 days ago</a>
                        <a className="linee"> | </a>
                        <a className="open"> Openings:</a>
                        <a className="two"> 2</a>
                        <a className="linee"> | </a>
                        <a className="app">Applications:</a>
                        <a className="eight"> 884</a>
                        <div className="register-box">
                            <div className="register-title">Register to apply</div>
                        </div>
                        <div className="login-box">
                            <div className="login-title">Login to apply</div>
                        </div>
                    </div>
                </div>
                <div className="job">
                    <div className="job-title">Job description</div>
                    <div className="unacadmy">Unacademy - Bangalore</div>
                    <div className="position">Position: Senior Finance Executive Revenue</div>
                    <div className="job-des">Job Description</div>
                    <li className="conduct">Conduct a three-way revenue reconciliation (Revenue to Record).</li>
                    <div className="read">read more</div>
                    <div className="key">Key Skills</div>
                    <div className="skills">Skills highlighted with '☆' are preferred keyskills</div>
                    <div className="ca-box">
                        <div className="ca"><IoMdStarOutline /> Ca</div>
                    </div>
                    <div className="revenue">
                        <div className="revenue-box">
                            <div className="revenue-title">Revenue Reconciliation</div>
                        </div>
                        <div className="gstf-box">
                            <div className="gstf-title">Gst Filing</div>
                        </div>
                        <div className="gst-box">
                            <div className="gst-title">Gst</div>
                        </div>
                        <div className="revenuer-box">
                            <div className="revenuer-title">Revenue Recognition</div>
                        </div>
                    </div>
                    <div className="straight-line2"></div>
                    <div className="app">
                        <div className="facebook"><FaFacebookSquare /></div>
                        <div className="x-app"><FaSquareXTwitter /></div>
                        <div className="in-app"><FaLinkedin /></div>
                    </div>
                </div>
            </div>
            <div className="right-box">
                <div className="unacademy">
                    <div className="unacademy-title">Unacademy roles <br></br>you might be interested in</div>
                    <div className="korean">
                        <div className="korean-ed">Korean Educator
                            <div className="k-icon"><PiSuitcaseSimple /><a className="yrs"> 1-5 Yrs</a></div>
                        </div>
                        <div className="korean-img"><img src="https://play-lh.googleusercontent.com/DT0jm91vA_rOkxwatXhI4yVpjU4KI0augje6ZJGYxEyNjKvIhcQt8npiLHf5-ydclsqe"></img></div>
                    </div>
                    <div className="location1"><SlLocationPin /><a className="domlur"> Bengaluru(Domlur)</a></div>
                    <div className="ago">Posted 19 days ago</div>
                    <div className="linee1"></div>

                    <div className="sales">
                        <div className="sales-title">Sales Manager/ senior Sales Manager
                            <div className="s-icon"><PiSuitcaseSimple /><a className="yrs2"> 2-5 Yrs</a></div>
                        </div>
                        <div className="sales-img"><img src="https://play-lh.googleusercontent.com/DT0jm91vA_rOkxwatXhI4yVpjU4KI0augje6ZJGYxEyNjKvIhcQt8npiLHf5-ydclsqe"></img></div>
                    </div>
                    <div className="location2"><SlLocationPin /><a className="delhi"> Delhi / NCR(Noida-Greater Noida...</a></div>
                    <div className="ago2">Posted 24 days ago</div>
                    <div className="linee2"></div>

                    <div className="business">
                        <div className="business-title">Business Development Manager
                            <div className="b-icon"><PiSuitcaseSimple /><a className="yrs3"> 3-5 Yrs</a></div>
                        </div>
                        <div className="business-img"><img src="https://play-lh.googleusercontent.com/DT0jm91vA_rOkxwatXhI4yVpjU4KI0augje6ZJGYxEyNjKvIhcQt8npiLHf5-ydclsqe"></img></div>
                    </div>
                    <div className="location3"><SlLocationPin /><a className="varanasi"> Varanasi</a></div>
                    <div className="ago3">Posted 30 days ago</div>
                </div>
                
                <div className="review"></div>
            </div>
        </div>
    );
};

export default Senior;