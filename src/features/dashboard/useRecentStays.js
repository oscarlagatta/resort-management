import {useSearchParams} from "react-router-dom";
import {subDays} from "date-fns";
import {useQuery} from "@tanstack/react-query";
import { getStaysAfterDate} from "../../services/apiBookings.js";

export function useRecentStays() {

    const [searchParams] = useSearchParams();

    const numbDays = !searchParams.get('last') ? 7 : Number(searchParams.get('last'));

    const queryDate = subDays(new Date(), numbDays).toISOString();

    const {isLoading, data: stays } = useQuery({
        queryFn: () => getStaysAfterDate(queryDate),
        queryKey: ['stays', `last-${numbDays}`]
    });

    // calculate only the confirmed state
    const confirmedStays = stays?.filter(stay => stay.status === 'checked-in' ||  stay.status ===  'checked-out');

    return {isLoading, stays, confirmedStays, numbDays};
}