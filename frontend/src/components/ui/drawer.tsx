
import React from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };


  return (
    <div className='md:hidden bg-black rounded-md'>
      <IconButton onClick={toggleDrawer(true)}><MenuRoundedIcon className='dark:text-white'></MenuRoundedIcon></IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
            <ul className='dark:text-white text-black bg-black w-full h-full flex-col p-10 py-16 text-lg flex gap-5'>
                <li><Link className='flex items-center gap-3' href="/"><HomeRoundedIcon /> Home</Link></li>
            </ul>
      </Drawer>
    </div>
  );
}