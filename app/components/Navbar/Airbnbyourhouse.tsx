import React from "react";
import StyledModal from "../StyledModal";

const Airbnbyourhouse = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div
                onClick={() => setOpen(true)}
                className="text-sm rounded-xl p-1 px-2 hover:bg-neutral-100 transition cursor-pointer"
            >
                Airbnb your home
            </div>
            <StyledModal
                open={open}
                handleClose={handleClose}
                modalTitle="Airbnb your home"
            >
                I love this modal
            </StyledModal>
        </>
    );
};

export default Airbnbyourhouse;
