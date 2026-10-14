import MainHeader from "./MainHeader";
import Primier from './assets/Premiere.png';
import Photoshop from './assets/Photoshop.png';
import react from './assets/React.webp';
import Aftereffect from './assets/Aftereffect.webp';
import Python from './assets/python.png';
import Git from './assets/Git.png';
import Js from './assets/JS.png';
import Css from './assets/Css.webp';
import Html from './assets/Html.png';
import Cpp from './assets/C++.png';


export default function Skills({...props})
{
    return<div id="skills" className="skills" {...props}>
        <MainHeader title={'Skills'}/>
        <div className="skills-icon">
            <ul className="icon-list">
                <li className="logo-box">
                    <img src={Primier} className="logo" />
                </li>
                <li className="logo-box">
                    <img src={Photoshop} className="logo" style={{}} />
                </li>
                <li className="logo-box">
                    <img src={Git} className="logo" style={{}} />
                </li>
                <li className="logo-box">
                    <img src={Aftereffect} className="logo" style={{}} />
                </li>
                <li className="logo-box">
                    <img src={react} className="logo" style={{}} />
                </li>
                <li className="logo-box">
                    <img src={Python} className="logo" style={{}} />
                </li>
                <li className="logo-box">
                    <img src={Cpp} className="logo" style={{}} />
                </li>
                <li className="logo-box">
                    <img src={Js} className="logo" style={{}} />
                </li>
                <li className="logo-box">
                    <img src={Html} className="logo" style={{}} />
                </li>
                <li className="logo-box">
                    <img src={Css} className="logo" style={{}} />
                </li>
            </ul>
        </div>
    </div>
}