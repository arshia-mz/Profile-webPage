import Button from "./Button";
import Photo from './assets/PersonImg.png';
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
export default function Header()
{
    return<header id="home" className="hero">
        <div className="head-text">
            <h3>Hello, I'm</h3>
            <h1>Arshia</h1>
            <h1><span>Mohammadzadeh</span></h1>
            <h2>Grachic Designer & Video Editor & Programmer</h2>
            <p>
                I creat visual contenet that tells a story. 
                From social media posts to video edits ,
                I turn ideas into eye-attaching design 
                and smooth edits.
            </p>
            <div className="buttons">
                <Button>View My Work<span class="material-symbols-outlined">arrow_forward</span></Button>
                <button className="btn">Contact Me</button>
            </div>
            <div className="icons">
                <IoLogoInstagram className="icon"/>
                <FaTelegramPlane className="icon"/>
                <FaLinkedin className="icon"/>
                <FaYoutube className="icon"/>
                <MdOutlineEmail className="icon"/>
            </div>
        </div>
        <img src={Photo} alt="photo" className="photo"/>
    </header>
}