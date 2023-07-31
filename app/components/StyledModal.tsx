import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    maxHeight: "90%",
    borderRadius: 2,
    // border on focus none
    "&:focus": {
        outline: "none",
    },
};

interface IStyledModalProps {
    open: boolean;
    handleClose: () => void;
    modalTitle?: string;
    children: React.ReactNode;
    modalDescription?: string;
}

export default function StyledModal({
    open,
    handleClose,
    modalTitle,
    children,
    modalDescription,
}: IStyledModalProps) {

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby={modalTitle || "Modal"}
            aria-describedby={modalDescription || "Modal"}
        >
            <Box sx={style}>
                <div className="p-4 relative">
                    <div
                        className="absolute top-4 left-5 cursor-pointer hover:opacity-50 transition"
                        onClick={handleClose}
                    >
                        <CloseIcon sx={{ width: "20px" }} />
                    </div>
                    <h6
                        id="modal-modal-title"
                        className="font-semibold text-center"
                    >
                        {modalTitle}
                    </h6>
                </div>
                <Divider />
                <div className="p-4" id="modal-modal-description">
                    {children}
                </div>
            </Box>
        </Modal>
    );
}
