"use client";
import Airbnbyourhouse from "./Airbnbyourhouse";
import UserMenuDropdown from "./UserMenuDropdown";

const UserMenu = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <Airbnbyourhouse />
            <UserMenuDropdown />
        </div>
    );
};

export default UserMenu;
