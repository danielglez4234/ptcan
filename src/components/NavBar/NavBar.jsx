import telescopeLogo from '../../assets/img/telescope-logo.svg';
import galaxyIcon from '../../assets/img/galaxy.svg';
import galaxy1Icon from '../../assets/img/galaxy_1.svg';
import startMapIcon from '../../assets/img/start_map.svg';
import blackHoleIcon from '../../assets/img/blackHole.svg';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { createContext, useContext, useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const SideBarContext = createContext()

function SideBar({children, user}) {
    const [expand, setExpand] = useState(false)
    const [activeItem, setActiveItem] = useState("Observation Status")

    return ( 
        <aside className="main-aside">
            <nav className="main-navbar">

                <Link className="navigation-link" to="/home">
                <div className="logo-container">
                    <img src={telescopeLogo} alt="logo" className="log-img" />
                    <p  className="logo-text" style={{ width: expand ? "13rem" : "0px" }}>PTCAN Manager</p>
                    <button 
                        className="logo-expand-arrow-button"
                        onClick={() => setExpand(curr => !curr)}
                    >
                        {
                            expand ? <ArrowBackIosNewIcon className="nav-icon-ui-size" /> : <ArrowForwardIosIcon className="nav-icon-ui-size" />
                        }
                    </button>
                </div>
                </Link>

                <SideBarContext.Provider value={{expand, setExpand, activeItem, setActiveItem}} >
                    <ul className="main-nav-ul">
                        {children}
                    </ul>
                </SideBarContext.Provider>

                <div className="user-info-container">
                    <AccountCircleIcon className="user-info-icon" />
                    <div className="user-description-box" style={{width: expand ? "13rem" : "0px"}}>
                        <div className="user-description">
                            <p>{user.name}</p>
                            <span className="user-role">{user.role}</span>
                        </div>
                    </div>
                    <MoreVertIcon className="nav-icon-ui-size user-more-info-icon" sx={{width: expand ? "fit-content" : 0}} />
                </div>

            </nav>
        </aside>
    )
}

function SideBarItem({icon, text, alert}) {
    const {expand} = useContext(SideBarContext)
    const {activeItem, setActiveItem} = useContext(SideBarContext)
    const trimText = text.toLowerCase().replace(/\s+/g, '') // used for url navigation

    return (
        <Link to={`/${trimText}`} className="navigation-link">
        <li className="main-nav-li group" style={{ backgroundColor: activeItem === text ? "#E6E6E6" : "transparent"}}
            onClick={() => {
                setActiveItem(text)
            }}
        >
            {icon}
            <span className="main-nav-li-text" style={{width: expand ? "13rem" : "0px", marginLeft: expand ? "0.75rem" : "0px" }}>{text}</span>
            {alert && <div className="main-nav-li-alert-icon" style={{ top: expand ? "20px" : "10px" }}></div>}

            {!expand && <div className="expanded_li_text group-text">
                {text}
            </div>}
        </li>
        </Link>
    )
}

function NavBar() {
    const user = {
        name: "John Doe",
        role: "Admin"
    }
    return ( 
        <SideBar user={user}>
            <SideBarItem icon={<img src={blackHoleIcon} alt="logo" className="nav-icon-svg-size" />} text="Home" alert={false} />
            <SideBarItem icon={<img src={galaxyIcon} alt="logo" className="nav-icon-svg-size" />} text="Observation Status" alert={false} />
            <SideBarItem icon={<img src={startMapIcon} alt="logo" className="nav-icon-svg-size" />} text="Observation Results" alert={true} />
            <hr className="nav-separator" />
            <SideBarItem icon={<img src={galaxy1Icon} alt="logo" className="nav-icon-svg-size" />} text="Live Observation" alert={true} />
        </SideBar>
    )
}

export default NavBar;