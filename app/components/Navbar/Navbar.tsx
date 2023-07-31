import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./Usermenu";

const Navbar = () => {
    return (
        <nav className="shadow-sm border-b-[1px] bg-white fixed  w-full py-4">
            <Container>
                <div className="flex items-center justify-between ">
                    <div className="w-[230px]">
                        <Logo />
                    </div>
                    <Search />
                    <UserMenu />
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
