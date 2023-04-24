import React, { useContext } from "react"
import { FilterBar } from "../../../styles";
import logout from '../../../assets/img/logout.svg'
import AuthContext from "../../../context/AuthProvider";

function SideBar() {
    const { setAuth }: any = useContext(AuthContext);
    return (
        <FilterBar>
            <img src={logout} alt="" onClick={() => { window.location.reload(); }} />
        </FilterBar>
    );
}

export default SideBar;