import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CategoryIcon from "@mui/icons-material/Category";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LockIcon from '@mui/icons-material/Lock';
import MediationIcon from '@mui/icons-material/Mediation';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export const NavText = [
  {
    name: "Products",
    icon: <CategoryIcon />,
  },
  {
    name: "Customers",
    icon: <AccountBoxIcon />,
  },
  {
    name: "Income",
    icon: <CurrencyExchangeIcon />,
  },
  {
    name: "Promote",
    icon: <MediationIcon />,
  },
  {
    name: "Help",
    icon: <HelpOutlineIcon />,
  },
];


export const CardDetail = [
  {
    name:'Earning',
    icon:<CurrencyExchangeIcon />,
    color:'green',
    income:'$145K',
    growth:'3.5%',
    growthIcon:<ArrowUpwardIcon />,
    iconColor:'green',
    iconBackgroundColor:'#deffee'
  },
  {
    name:'Orders',
    icon:<LibraryBooksIcon />,
    color:'red',
    income:'$15K',
    growth:'5%',
    growthIcon:<ArrowDownwardIcon />,
    iconColor:'#874ff9',
    iconBackgroundColor:'#e7dbff'
  },
  {
    name:'Balance',
    icon:<ReceiptLongIcon />,
    color:'red',
    income:'$15K',
    growth:'3.5%',
    growthIcon:<ArrowDownwardIcon />,
    iconColor:'#2d5ed9',
    iconBackgroundColor:'#cef4ff'
  },
  {
    name:'Total Balance',
    icon:<LockIcon />,
    color:'green',
    income:'$35K',
    growth:'7.5%',
    growthIcon:<ArrowUpwardIcon />,
    iconColor:'#ec1a2f',
    iconBackgroundColor:'#ffbbe1'
  },
]
