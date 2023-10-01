import "./Navbar.css";
import { Link } from "react-router-dom";



export default function Navbar()  {
    return (
        <>
        <div className="top">
            <div ClassName="topLeft"></div>
            <div ClassName="topCenter"></div>
            <div ClassName="topRight"></div>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem Home">HOME</li>
                <li className="topListItem Profile">PROFILE</li>
                <li className="topListItem Writing">WRITING</li>
                <li className="topListItem Portfolio">PORTFOLIO</li>
            </ul>
        </div>
        <div className="topRight">
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        </>
    )
}