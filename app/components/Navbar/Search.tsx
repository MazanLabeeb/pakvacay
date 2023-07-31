"use client";

import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
    return (
        <div className=" justify-center cursor-pointer flex gap-2 border-[1px] shadow-sm hover:shadow-md px-4 py-1 items-center rounded-3xl transition text-sm ">
            <div className=" border-slate-300 font-medium">Anywhere</div>
            <div className=" border-x-[1px]  border-slate-300 px-2 font-medium">
                Any week
            </div>
            <div className="flex items-center justify-center ">
                <p className="font-light pr-2">Add guests</p>
                <div className="aspect-square h-[30px] flex items-center justify-center p-1  bg-rose-400 rounded-full">
                    <SearchIcon sx={{ fontSize: "16px", color: "white" }} />
                </div>
            </div>
        </div>
    );
};

export default Search;
