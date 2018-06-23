import Dashboard from 'views/Dashboard/Dashboard';
// import UserProfile from 'views/UserProfile/UserProfile';
// import TableList from 'views/TableList/TableList';
// import Typography from 'views/Typography/Typography';
// import Icons from 'views/Icons/Icons';
// import Maps from 'views/Maps/Maps';
// import Notifications from 'views/Notifications/Notifications';
// import Upgrade from 'views/Upgrade/Upgrade';
import Certifications from 'views/Certifications.jsx';
import MainAcademicProjects from 'views/MainAcademicProjects.jsx';
import ProfessionalExperience from 'views/ProfessionalExperience.jsx';
import SkillsSummary from 'views/SkillsSummary.jsx';
import Education from 'views/Education.jsx';
import AcademicResearch from 'views/AcademicResearch.jsx';




const appRoutes = [
    { path: "/aboutme", name: "About me", icon: "pe-7s-user", component: Dashboard },
    //{ path: "/user", name: "User Profile", icon: "pe-7s-user", component: UserProfile },
    // { path: "/table", name: "Table List", icon: "pe-7s-note2", component: TableList },
    // { path: "/typography", name: "Typography", icon: "pe-7s-news-paper", component: Typography },
    // { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
    // { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
    { path: "/education", name: "Education", icon: "fa fa-university", component: Education },
    { path: "/skills", name: "Skills Summary", icon: "fa fa-code", component: SkillsSummary },
    { path: "/experience", name: "Professional Experience", icon: "fa fa-black-tie", component: ProfessionalExperience },
    { path: "/certifications", name: "Certifications", icon: "fa fa-certificate", component: Certifications },
    { path: "/mainacademicprojects", name: "Academic Projects", icon: "fa fa-flask", component: MainAcademicProjects },
    { path: "/academicresearch", name: "Academic Research", icon: "fa fa-graduation-cap", component: AcademicResearch },
    // { path: "/notifications", name: "Notifications", icon: "pe-7s-bell", component: Notifications },
    // { upgrade: true, path: "/upgrade", name: "Upgrade to PRO", icon: "pe-7s-rocket", component: Upgrade },
    { redirect: true, path:"/", to:"/statement", name: "Dashboard" }
];

export default appRoutes;
