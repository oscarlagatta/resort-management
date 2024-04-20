import Heading from "../ui/Heading";
import Row from "../ui/Row";
import {Fragment} from "react";
import CabinTable from "../features/cabins/CabinTable.jsx";
import AddCabin from "../features/cabins/AddCabin.jsx";


function Cabins() {

    return (
        <Fragment>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
            </Row>
            <Row>
                <CabinTable/>

                <AddCabin />
            </Row>
        </Fragment>

    );
}

export default Cabins;
