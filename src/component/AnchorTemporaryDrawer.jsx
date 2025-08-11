import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import img from '../../public/Logo.svg'
import Image from 'next/image';

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}

    >
      <List>
        <Image src={img} alt='logo' />
      </List>
      <Divider />
      <List>
        <Link href={'/'}>
          <p className='my-[10px] text-2xl'>HOME</p>
        </Link>
        <Link href={'/Blog'}>
          <p className='my-[10px] text-2xl'>BLOG</p>
        </Link>
        <Link href={'/About'}>
          <p className='my-[10px] text-2xl'>ABOUT</p>
        </Link>
        <Link href={'/Cantact'}>
          <p className='my-[10px] text-2xl'>CONTACT</p>
        </Link>
        <Link href={'/Categori'}>
          <p className='my-[10px] text-2xl'>CATEGORI</p>
        </Link>
      </List>

    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              sx: {
                backgroundColor: "#272727",
                color: "white",
                paddingLeft: "10px"
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
