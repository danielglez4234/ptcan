import blackHoleIcon from '../assets/img/blackHole.svg';
import galaxyIcon from '../assets/img/galaxy.svg';
import controlSolorSystemIcon from '../assets/img/control_solor_system.svg';
import statisticsIcon from '../assets/img/statistics.svg';
import startMapIcon from '../assets/img/start_map.svg';
import statisticsViewIcon from '../assets/img/statistics_view.svg';
import gearsIcon from '../assets/img/gears.svg';
import { Home } from '@mui/icons-material';


export const navComponents = [
    {
        title: "Home",
        description: "",
        icon: blackHoleIcon,
        menuSeparator: false,
        role: "Any"
    },
    {
        title: "Observation Status",
        description: "",
        icon: galaxyIcon,
        menuSeparator: true,
        role: "Admin"
    },
    {
        title: "Observation Results",
        description: "",
        icon: startMapIcon,
        menuSeparator: false,
        role: "Any"
    },
    {
        title: "Live Observation",
        description: "",
        icon: statisticsViewIcon,
        menuSeparator: true,
        role: "Any"
    },
    {
        title: "Pending Observations",
        description: "",
        icon: statisticsIcon,
        menuSeparator: false,
        role: "Any"
    },
    {
        title: "Observation Configuration",
        description: "",
        icon: controlSolorSystemIcon,
        menuSeparator: false,
        role: "Any"
    },
    {
        title: "Work In Progress",
        description: "",
        icon: gearsIcon,
        menuSeparator: true,
        role: "Any"
    }
]