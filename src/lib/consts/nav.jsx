import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi';
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { BsListStars } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { AiOutlineLogout,AiOutlineGift } from "react-icons/ai";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaTableCells,FaChartSimple } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";


export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />
	},
    {
		key: 'favorites',
		label: 'Favorites',
		path: '/favorites',
		icon: <MdFavoriteBorder/>
	},
	{
		key: 'OrderLists',
		label: 'Order Lists',
		path: '/OrderLists',
		icon: <BsListStars />
	},
	{
		key: 'design',
		label: 'Inbox',
		path: '/design',
		icon: <HiOutlineInboxArrowDown />
	},

	{
		key: 'stock',
		label: 'Product Stock',
		path: '/stock',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'pricing',
		label: 'Pricing',
		path: '/pricing',
		icon: <AiOutlineGift/>
	},
	{
		key: 'calender',
		label: 'Calender',
		path: '/calender',
		icon: <SlCalender />
	},
    {
		key: 'todo',
		label: 'To-Do',
		path: '/todo',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'contact',
		label: 'Contact',
		path: '/contact',
        icon: <IoMdContacts/>

	},
	{
		key: 'invoice',
		label: 'Invoice',
		path: '/invoice',
		icon: <LiaFileInvoiceSolid />
	},

	{
		key: 'UIElementsPage',
		label: 'UI Elements',
		path:'/UIElementsPage',
		icon: <FaChartSimple />
	},
	{
		key: 'team',
		label: 'Team',
		path: '/team',
		icon: < RiTeamLine  />
	},
	{
		key: 'table',
		label: 'Table',
		path: '/table',
		icon: <FaTableCells />
	}


]



export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	},
	{
		key: 'logout',
		label: 'Logout',
		path: '/logout',
		icon: < AiOutlineLogout />
	}
]