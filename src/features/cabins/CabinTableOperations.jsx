import TableOperations from "../../ui/TableOperations.jsx";
import Filter from '../../ui/Filter';
import SortBy from "../../ui/SortBy.jsx";

export const CabinTableOperations = () => {
    return (
        <TableOperations>
            <Filter  filterField='discount' options={[
                { value: 'all', label: 'All'},
                { value: 'no-discount', label: 'No Discount'},
                { value: 'with-discount', label: 'With Discount'},
            ]}/>
            <SortBy options={[
                {value: 'name-asc', label: 'Sort by name (A-Z)'},
                {value: 'name-desc', label: 'Sort by name (Z-A)'},
                {value: 'startDate-asc', label: 'Sort by Date ascending'},
                {value: 'startDate-desc', label: 'Sort by Date descending'},
                {value: 'regularPrice-asc', label: 'Sort by price (low first)'},
                {value: 'regularPrice-desc', label: 'Sort by price (high first)'},
                {value: 'maxCapacity-asc', label: 'Sort by capacity (low first)'},
                {value: 'maxCapacity-desc', label: 'Sort by capacity (high first)'},
            ]} />
        </TableOperations>
    )
}