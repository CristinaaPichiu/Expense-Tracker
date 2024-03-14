import { faChartLine, faTags, faArrowTrendUp, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: faChartLine,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "View Transactions",
        icon: faArrowTrendUp,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Incomes",
        icon: faMoneyBillTransfer,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: faTags,
        link: "/dashboard",
    },
];
