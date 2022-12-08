import React, { useRef, useState } from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import Image from 'next/image';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { langWImages } from '@utills/langUtill';

type HandleChangeLang = (lang: string) => void;

interface BtnLangProps {
  langState: string;
  handleChangeLang: HandleChangeLang;
}

const BtnLang: React.FC<BtnLangProps> = ({ langState, handleChangeLang }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const refWidth = useRef<HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSetLang = (lang: string) => {
    handleChangeLang(lang);
    handleClose();
  };

  return (
    <Box>
      <Button
        ref={refWidth}
        onClick={handleClick}
        color="secondary"
        sx={{
          height: 30,
          p: 0,
          borderColor: 'rgba(233, 233, 233, 0.5)',
        }}
      >
        <Image
          src={`/static/images/flages/${langState}.png`}
          width={22}
          height={22}
          alt={`country flag ${langState}`}
        />
        <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {langWImages.map((val, index) => (
          <MenuItem
            key={index}
            value={val.lang}
            onClick={() => handleSetLang(val.lang)}
            sx={{
              width: refWidth.current?.offsetWidth,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Image
              src={val.flag}
              width={22}
              height={22}
              alt={`country flag ${val.lang}`}
            />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

BtnLang.propTypes = {};

export default BtnLang;
