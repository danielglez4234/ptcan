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
        description: "Status of the observations, including the pending, in progress, and completed observations.",
        icon: galaxyIcon,
        menuSeparator: true,
        role: "Admin"
    },
    {
        title: "Observation Results",
        description: "Results of the observations, including the data and the images taken.",
        icon: startMapIcon,
        menuSeparator: false,
        role: "Any"
    },
    {
        title: "Live Observation",
        description: "Live observation of the telescope. This is the main feature of the system.",
        icon: statisticsViewIcon,
        menuSeparator: true,
        role: "Any"
    },
    {
        title: "Pending Observations",
        description: "List of pending observations. These are the observations that are waiting to be executed",
        icon: statisticsIcon,
        menuSeparator: false,
        role: "Any"
    },
    {
        title: "Observation Configuration",
        description: "Configuration of the observation. This includes the telescope, the camera, the filters, etc.",
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