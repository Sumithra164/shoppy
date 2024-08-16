
import { HiOutlineInbox, HiOutlineAnnotation } from 'react-icons/hi';
import { MdOutlineStarBorder, MdDeleteOutline } from 'react-icons/md';
import { FiSend, FiFolder } from 'react-icons/fi';
import { FaCheckSquare } from 'react-icons/fa';

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'inbox',
        label: 'Inbox',
        path: '/inbox',
        icon: <HiOutlineInbox />
    },
    {
        key: 'outbox',
        label: 'Outbox',
        path: '/outbox',
        icon: <FiSend />
    },
    {
        key: 'sent',
        label: 'Sent',
        path: '/sent',
        icon: <HiOutlineInbox />
    },
    {
        key: 'spam',
        label: 'Spam',
        path: '/spam',
        icon: <FiFolder />
    },
    {
        key: 'starred',
        label: 'Starred',
        path: '/starred',
        icon: <MdOutlineStarBorder />
    },
    {
        key: 'important',
        label: 'Important',
        path: '/important',
        icon: <HiOutlineAnnotation />
    },
    {
        key: 'bin',
        label: 'Bin',
        path: '/bin',
        icon: <MdDeleteOutline />
    }
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'primary',
        label: (
            <div>
                <input type="checkbox" id="primary" />
                <label htmlFor="primary"> Primary</label>
            </div>
        ),
        path: '/primary',
        icon: <FaCheckSquare />
    },
    {
        key: 'social',
        label: (
            <div>
                <input type="checkbox" id="social" />
                <label htmlFor="social"> Social</label>
            </div>
        ),
        path: '/social',
        icon: <FaCheckSquare />
    },
    {
        key: 'work',
        label: (
            <div>
                <input type="checkbox" id="work" />
                <label htmlFor="work"> Work</label>
            </div>
        ),
        path: '/work',
        icon: <FaCheckSquare />
    },
    {
        key: 'friends',
        label: (
            <div>
                <input type="checkbox" id="friends" />
                <label htmlFor="friends"> Friends</label>
            </div>
        ),
        path: '/friends',
        icon: <FaCheckSquare />
    }
];
