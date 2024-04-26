import { Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaChevronCircleDown } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import React from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const LanguageSwitcher = () => {
  const { texts, handleLanguage } = React.useContext(LanguageContext);
  const handleSpanish = () => {
    return handleLanguage('es');
  };
  const handleEnglish = () => {
    handleLanguage('en');
  };
  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        transition='all 0.2s'
        borderRadius='md'
        borderWidth='1px'
        _hover={{ color: 'brand.400' }}
        _expanded={{ color: 'brand.400' }}
      >
        {texts.titleToggleLanguage} <Icon as={FaChevronCircleDown} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleSpanish}>
          <Icon as={GrLanguage} m='0.5' marginRight='5' /> {texts.spanishToggle}
        </MenuItem>
        <MenuItem onClick={handleEnglish}>
          <Icon as={GrLanguage} m='0.5' marginRight='5' /> {texts.englishToggle}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
