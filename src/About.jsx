import MainHeader from "./MainHeader";
import { PiStudent } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
export default function About()
{
    return<div id="about" className="about">
        <MainHeader title={'About Me'}/>
        <p>
            Hi, I’m Arshia — a Graphic Designer, Video Editor, and Programmer passionate about combining creativity and technology.
            I create modern visual designs, engaging video content, and functional digital experiences. With a background in programming and a strong interest in design and editing, I enjoy turning ideas into clean, creative, and meaningful results.
            I’m always learning, experimenting with new tools, and improving my skills to create better work and bring new ideas to life.
        </p>
        <div className="about-icons">
            <div className="about-item">
                <PiStudent className="icon"/>
                <div>
                    <h3>Student</h3>
                    <p>computer engineering</p>
                </div>
            </div>
            <div className="about-item">
                <IoLocationOutline className="icon"/>
                <div>
                    <h3>Location</h3>
                    <p>Tabriz,EastAzarbijan,Iran</p>
                </div>
            </div>
            <div className="about-item">
                <MdEventAvailable className="icon"/>
                <div>
                    <h3>Availbility</h3>
                    <p>Freelance</p>
                </div>
            </div>
            
        </div>
    </div>
}