"use client";
import * as React from "react";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import StyledModal from "../StyledModal";
import { type } from "os";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

export default function UserMenuDropdown() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    // type modalstates also
    const [modalStates, setModalStates] = React.useState<{
        loginModalOpen: boolean;
        signUpModalOpen: boolean;
    }>({
        loginModalOpen: false,
        signUpModalOpen: false,
    });

    const openModal = (modalName: string) => {
        setModalStates({ ...modalStates, [modalName]: true });
        setAnchorEl(null);
    };

    return (
        <div>
            <StyledModal
                open={modalStates?.loginModalOpen}
                handleClose={() => {
                    setModalStates({ ...modalStates, loginModalOpen: false });
                }}
                modalTitle="Login"
            >
                Login Modal
            </StyledModal>
            <StyledModal
                open={modalStates?.signUpModalOpen}
                handleClose={() => {
                    setModalStates({ ...modalStates, signUpModalOpen: false });
                }}
                modalTitle="Sign Up"
            >
                Sign Up Modal
            </StyledModal>

            <div
                className="flex gap-2 border-[1px] py-1 px-2 rounded-full cursor-pointer hover:shadow-md transition"
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                    setAnchorEl(event.currentTarget);
                }}
            >
                <MenuIcon />
                <Avatar sx={{ width: 24, height: 24, cursor: "pointer" }} />
            </div>

            <StyledMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => {
                    setAnchorEl(null);
                }}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem
                    onClick={() => {
                        openModal("loginModalOpen");
                    }}
                    disableRipple
                >
                    Login
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        openModal("signUpModalOpen");
                    }}
                    disableRipple
                >
                    Sign Up
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
