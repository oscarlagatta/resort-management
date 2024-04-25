import ButtonIcon from "./ButtonIcon.jsx";
import {HiOutlineMoon, HiOutlineSun} from "react-icons/hi2";
import {useDarkMode} from "../features/context/DarkModeContext.jsx";

export const DarkModeToggle = () => {

    const {isDarkMode, toggleDarkMode} = useDarkMode();
    return (
        <ButtonIcon onClick={toggleDarkMode}>
            {isDarkMode ? <HiOutlineSun/> : <HiOutlineMoon/>}
        </ButtonIcon>

    )
}