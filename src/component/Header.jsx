"use client";

import Image from "next/image";
import img from "../../public/Logo.svg";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Link from "next/link";
import AnchorTemporaryDrawer from "./AnchorTemporaryDrawer";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-between items-center py-4 px-6">

      <Link href={'/'}>
        <Image src={img} alt="Logo" className="cursor-pointer" />
      </Link>

      <div className="lg:flex gap-[40px] items-center cursor-pointer hidden">
        <button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="text-yellow-600 font-bold text-2xl cursor-pointer"
        >
          BUY
        </button>
        <Link href={'/Blog'}>
          <p className="hover:text-yellow-600">BLOG</p>
        </Link>
        <Link href={'/About'}>
          <p className="hover:text-yellow-600">ABOUT</p>
        </Link>
        <Link href={'/Cantact'}>
          <p className="hover:text-yellow-600">CONTACT</p>
        </Link>
      </div>


      <div className="lg:flex hidden gap-[40px] items-center cursor-pointer">
        
          <button className="p-[10px] bg-yellow-600 text-white rounded cursor-pointer">
            Book a consultation
          </button>
       
        <p className="hover:text-yellow-600">EN</p>
        <p className="hover:text-yellow-600">RU</p>
        <p className="hover:text-yellow-600">+7 (212) 674-25-10</p>
      </div>
       <div className="lg:hidden">
        <AnchorTemporaryDrawer/>

       </div>


      <Menu
        id="fade-menu"
        slotProps={{
          list: {
            "aria-labelledby": "fade-button",
          },
        }}
        slots={{ transition: Fade }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}

      >
        <Link href={'/Categori'}>
        <MenuItem
          onClick={handleClose}
          sx={{
            "&:hover": {
              backgroundColor: "#d97706",
              color: "white",
            },
          }}
        >
          Category number one
        </MenuItem>
        </Link>

          <Link href={'/Bay/Bay1'}>
        <MenuItem
          onClick={handleClose}
          sx={{
            "&:hover": {
              backgroundColor: "#d97706",
              color: "white",
            },
          }}
        >
          Apartments in Dubai
        </MenuItem>
          </Link>

          <Link href={'/Bay/Bay2'}>
        <MenuItem
          onClick={handleClose}
          sx={{
            "&:hover": {
              backgroundColor: "#d97706",
              color: "white",
            },
          }}
        >
          Category number twenty five
        </MenuItem>
          </Link>
      </Menu>
    </div>
  );
}
