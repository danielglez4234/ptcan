import telescopeLogo from '../../assets/img/telescope-logo.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { createContext, useContext, useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { navComponents } from '../../constants/navComponents';

const SideBarContext = createContext()

function SideBar({children, user}) {
    const [expand, setExpand] = useState(false)
    const [activeItem, setActiveItem] = useState("Home")

    return ( 
        <aside className="main-aside">
            <nav className="main-navbar">

                <div className="logo-container">
                    <Link className="navigation-link-logo" to="/home" onClick={() => {setActiveItem("Home")}}>
                        <img src={telescopeLogo} alt="logo" className="log-img" style={{marginRight: expand ? "17px" : "0px"}} />
                        <p  className="logo-text" style={{ width: expand ? "13rem" : "0px" }}>PTCAN Manager</p>
                    </Link>
                    <button 
                        className="logo-expand-arrow-button"
                        onClick={() => setExpand(curr => !curr)}
                    >
                        {
                            expand ? <ArrowBackIosNewIcon className="nav-icon-ui-size" /> : <ArrowForwardIosIcon className="nav-icon-ui-size" />
                        }
                    </button>
                </div>

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


    useEffect(() => {
        const url = window.location.href
        const title = url.substring(url.lastIndexOf('/') + 1).replace(/%20/g, '').toLowerCase()
        const matchedComponent = navComponents.find(item => item.title.replace(/\s+/g, '').toLowerCase() === title)
        if (matchedComponent) {
            setActiveItem(matchedComponent.title)
        }
    }, [window.location.href])

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
    const notifications = [false, false, true, false, true, false, true, false, true, false]
    return ( 
        <SideBar user={user}>
            {
                navComponents.map((item, index) => {
                    const Separator = <hr className="nav-separator" />
                    const Item = <SideBarItem
                                    key={index}
                                    icon={<img src={item.icon} alt="logo" className="nav-icon-svg-size" />}
                                    text={item.title}
                                    alert={notifications[index]}
                                />
                    if (item.menuSeparator)
                        return (<> {Separator} {Item} </>)
                    return Item
                })
            }
            {/* <hr className="nav-separator" /> */}
        </SideBar>
    )
}

export default NavBar;