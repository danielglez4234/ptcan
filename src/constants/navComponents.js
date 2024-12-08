import blackHoleIcon from '../assets/img/blackHole.svg';
import galaxyIcon from '../assets/img/galaxy.svg';
import controlSolorSystemIcon from '../assets/img/control_solor_system.svg';
import statisticsIcon from '../assets/img/statistics.svg';
import startMapIcon from '../assets/img/start_map.svg';
import statisticsViewIcon from '../assets/img/statistics_view.svg';
import gearsIcon from '../assets/img/gears.svg';

export const navComponents = [
    {
        title: "Home",
        description: "",
        icon: blackHoleIcon,
        agregate: false
    },
    {
        title: "Observation Status",
        description: "",
        icon: galaxyIcon,
        agregate: true
    },
    {
        title: "Observation Results",
        description: "",
        icon: startMapIcon,
        agregate: false
    },
    {
        title: "Live Observation",
        description: "",
        icon: statisticsViewIcon,
        agregate: true
    },
    {
        title: "Pending Observations",
        description: "",
        icon: statisticsIcon,
        agregate: false
    },
    {
        title: "Observation Configuration",
        description: "",
        icon: controlSolorSystemIcon,
        agregate: false
    },
    {
        title: "Work In Progress",
        description: "",
        icon: gearsIcon,
        agregate: true
    }
]