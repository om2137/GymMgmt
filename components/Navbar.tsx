import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { styled, Theme, } from "@mui/material";
import { signOut } from "next-auth/react"

interface Props {
  title: string;
}

export default function Navbar({ title }: Props) {

  // const classes = useStyles();
  const StyledMenuItem = styled(MenuItem)(
    ` 
      &:hover, &.Mui-focusVisible {
        background-color: #a82824
      }`
  );

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { status, data } = useSession();
  const [exp, setExp] = useState<string>("");
  useEffect(() => {
    if (status === "authenticated") {
      console.log(data.expires);
      setExp(data.expires);
    }
  }, [status]);

  return (
    <div className="flex w-full flex-1 flex-col justify-top">
      <nav className="flex flex-between items-center justify-between rounded-b-lg border-b border-gray-500 p-6 xl:p-8 bg-gray-100 3xl:px-20">
        <div className="flex items-center flex-shrink-0  mr-6">
          <a className=" inline-block border border-red-600 rounded py-2 px-4 text-red-600 font-bold"
            href="/"
          >
            SFC
          </a>
        </div>
        <div className="sm:flex hidden">
          <a className="flex justify-center capitalize  border border-gray-500 rounded py-2 px-4  font-bold">
            Sandy's fitness care
          </a>
          
        </div>

        <div className="hidden md:flex m-2">
          <div
            className="w-full block flex- md:flex lg:items-center font-semibold hidden lg:w-auto "
            id="menu"
          >
            <div className="text-sm lg:flex-">
              <a
                className="inline-block border border-gray-500 text-sm px-6 py-3 mr-2 rounded  mt- lg:inline-block lg:mt-0 "
                href="../profiles"
              >
                Profiles
              </a>
              <a
                className="inline-block border border-gray-500 text-sm px-6 py-3 mr-2 rounded  mt- lg:inline-block lg:mt-0 "
                href="../invoice"
              >
                Invoices
              </a>
              <a
                className="inline-block border border-gray-500 text-sm px-6 py-3 mr-2 rounded  mt- lg:inline-block lg:mt-0 "
                href="../admission"
              >
                Admission
              </a>
              <button 
                onClick={() => signOut()} 
                className="inline-block border border-red-500 hover:bg-red-500 hover:text-white text-sm text-red-500 px-6 py-3 mr-2 rounded  mt- lg:inline-block lg:mt-0 "
              >
                Sign out
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="!capitalize flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600  "
          >
            <svg
              className="fill-current h-5 w-6 "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <StyledMenuItem onClick={handleClose}>
              <a href="/admission">
                Admission
              </a>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
              <a href="/invoice">
                Invoices
              </a>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
            <a href="/profiles">
                Profiles
              </a>
            </StyledMenuItem>
          </Menu>
        </div>
      </nav>
    </div>
  );
}
