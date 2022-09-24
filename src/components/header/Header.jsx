import Logo from '../../assets/images/NewRootsLogo.svg'
import {HeaderStyled} from "./HeaderStyled";

export default function Header() {
    return (
        <HeaderStyled>
            <img src={Logo} alt="logo"/>
        </HeaderStyled>
    )
}