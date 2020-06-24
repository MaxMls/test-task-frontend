import React, {Fragment} from "react";
import Header from "./header";
import SubHeader from "./sub-header";
import VideoFirst from "./video-first";
import Advantages from "./advantages";
import VideoBar from "./video-bar";
import VideoSecond from "./video-second";
import Records from "./records";
import Opinions from "./opinions";
import Footer from "./footer";
import AllVideos from "./all-videos";
import Menu from "./menu";


export default function Main() {
    return (
        <Fragment>
            <Header/>
            <div className="content">
                <SubHeader/>
                <VideoFirst/>
                <Advantages/>
            </div>
            <VideoBar/>
            <div className="content">
                <VideoSecond/>
                <Records/>
            </div>
            <Opinions/>
            <Footer/>


        </Fragment>
    )
}
