import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader.jsx";


const StyleSidebar = styled.aside`
    background-color: var(--color-grey-0);
    padding: 3.2rem 2.4rem;
    border-bottom: 1px solid var(--color-grey-100);
    grid-row: 1 / -1;

`
export default function Sidebar() {
    return (
        <StyleSidebar>

            <Logo />
            <MainNav />

            <Uploader/>
        </StyleSidebar>
    )
}