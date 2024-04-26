import React, { useEffect } from 'react';
import {
  SlideFade,
  Box,
  Heading,
  Avatar,
  Link,
  Flex,
  LightMode,
  ButtonGroup,
  Button,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
import { resume } from '../constant';
import SocialButton from '../components/SocialButton';
import { BiPhoneCall } from 'react-icons/bi';
// import SpotifySection from "./SpotifySection";
import { LanguageContext } from '../context/LanguageContext';
import { MotionBox } from '../utils/motion';
const ProfileSection = ({ song }) => {
  const { texts } = React.useContext(LanguageContext);

  return (
    <SlideFade in offsetX={80}>
      <Box>
        <Flex alignItems='center' justifyContent='space-between'>
          <Heading
            as='h1'
            fontSize={{ base: '28px', md: '40px', lg: '48px' }}
            mb={3}
          >
            {texts.profileHeading} <span className='waving-hand'>👋</span>
          </Heading>
          <Flex alignItems={'flex-end'}>
            <Avatar
              name='Teo Michael Lovo'
              src='/profile_picture.jpg'
              mb={5}
              size='lg'
            />
          </Flex>
        </Flex>
        <Paragraph fontSize='2xl' lineHeight={1.6}>
          {texts.profileParagraph1}
        </Paragraph>
        <Paragraph fontSize='2xl' lineHeight={1.6}>
          {texts.profileParagraph2}{' '}
          <Link
            color={useColorModeValue('blue.500', 'blue.400')}
            _hover={{
              cursor: 'default',
            }}
            fontWeight='500'
          >
            Typescript ,
          </Link>{' '}
          {'\n'}
          {texts.profileParagraphRest}{' '}
        </Paragraph>

        <Box mt={5}>
          <LightMode>
            <ButtonGroup>
              <SocialButton social={resume} />
              <Link href={'/contact'} style={{ textDecoration: 'none' }}>
                <Button
                  colorScheme='blue'
                  size='sm'
                  margin={'5px'}
                  leftIcon={<BiPhoneCall color='white' />}
                >
                  Contact Me
                </Button>
              </Link>
            </ButtonGroup>
          </LightMode>
        </Box>

        {/* <SpotifySection song={song} /> */}
      </Box>
    </SlideFade>
  );
};

export default ProfileSection;
