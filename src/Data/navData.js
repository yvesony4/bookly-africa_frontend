import { RiHotelLine } from 'react-icons/ri'
import { MdOutlineMapsHomeWork } from 'react-icons/md'
import { GiDetour } from 'react-icons/gi'
import { FaCarSide } from 'react-icons/fa'
import { BsCalendar2Event } from 'react-icons/bs'
export const navData = [
    {
        path: '/hotels',
        logoNew: <RiHotelLine />,
        Hotels: 'Hotels'
    },
    {
        path: '/homestays',
        logoNew: <MdOutlineMapsHomeWork />,
        Hotels: 'Homestays'
    },
    {
        path: '/tour',
        logoNew: <GiDetour />,
        Hotels: 'Tour'
    },
    {
        path: '/car',
        logoNew: <FaCarSide />,
        Hotels: 'Car'
    },
    {
        path: '/event',
        logoNew: <BsCalendar2Event />,
        Hotels: 'Event'
    }
]
