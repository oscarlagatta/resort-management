import Stat from "./Stat.jsx";
import {HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar} from "react-icons/hi2";
import {formatCurrency} from "../../utils/helpers.js";

export const Stats = ({bookings = [], confirmedStays = [], numDays, cabinCount}) => {

    // 1. number of bookings
    const numbOfBookings = bookings.length;

    // 2. total sales
    const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

    // 3. total check ins
    const checkins = confirmedStays.length;

    // 4. occupancy rate
    // number of checked in nights divided by all available nights
    const occupation = confirmedStays.reduce( (acc, cur) => acc + cur.numNights, 0) / (numDays * cabinCount);


    return (
        <>
            <Stat title='Bookings' color='blue' icon={<HiOutlineBriefcase />} value={numbOfBookings} />
            <Stat title='Stays' color='green' icon={<HiOutlineBanknotes />} value={formatCurrency(sales)} />
            <Stat title='Check ins' color='indigo' icon={<HiOutlineCalendarDays />} value={checkins} />
            <Stat title='Occupancy rate' color='yellow' icon={<HiOutlineChartBar />} value={Math.round(occupation *100) + '%'} />

        </>
    )
}