import React, {useEffect, useCallback} from 'react';
import ReactDom from 'react-dom';
import { Box, Button, Link, Text } from 'theme-ui';
import { Carousel } from './Carousel'
import {FiExternalLink, FiX} from 'react-icons/fi'

interface ModalProps {
  show: boolean;
  onClose: () => void;
  data:  {
    projectName: string;
    subtitleName: string;
    description: string;
    url: string;
    images: Record<string, string>[];
  };
}

export const Modal = ({show, onClose, data}: ModalProps) => {

  const closeOnEscape = useCallback((e: KeyboardEvent) => {
    if ((e.key || e.code) === 'Escape') {
      onClose();
    }
  },[onClose])

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscape)

    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscape)
    }
  }, [closeOnEscape]);

  return ReactDom.createPortal(
    <Box
      onClick={onClose}
      sx={{
        top: 0,
        left: 0, 
        right: 0,
        bottom: 0,
        height: '100vh',
        pointerEvents: show ? 'initial' : 'none',
        position: 'fixed',
        width: '100vw',
        zIndex: '100',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box 
        sx={{
          background: 'rgba(0, 0, 0, 0.5)',
          height: '100%',
          width: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          opacity: show ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      />
      <Box 
        onClick={e => e.stopPropagation()}
        sx={{
          maxWidth: '700px',
          width: window.innerWidth < 700 ? `${window.innerWidth}px` : '700px',
          alignItems: 'flex-start',
          background: '#fff',
          boxShadow: '0 0 10px rgb(0 0 0 / 40%)',
          boxSizing: 'border-box',
          color: '#333',
          height: '100vh',
          opacity: show ? 1 : 0,
          position: 'relative',
          textAlign: 'left',
          transform: show ? 'scale(1)' : 'scale(0.8)',
          transition: 'all 0.3s',
          '@media screen and (min-width: 600px)': {
            height: 'initial',
            top: '-6vh'
          }
        }}
      >
        <Carousel images={data.images}/>
        <Box
          sx={{
            borderTop: '3px solid #1b242f',
            color: '#444',
            padding: '15px 10px 85px 10px',
            '@media screen and (min-width: 600px)': {
              padding: '35px 60px 90px 25px',
            }
          }}
        >
          <Text as={'h2'} variant='portfolioHeading'>{data.projectName}</Text>
          <Text as={'h3'} variant='portfolioSubHeading' sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.1)', pb: '15px'}}>{data.subtitleName}</Text>
          <Text as={'p'} variant='portfolioDescription' sx={{mt: '15px'}}>{data.description}</Text>
          <Link href={data.url} target='_blank'>
            <Button variant={'primary'} sx={{
              bottom: '20px',
              cursor: 'pointer',
              left: '10px',
              pointerEvents: show ? 'initial' : 'none',
              position: 'absolute',
              transition: 'all 0.5s',
              visibility: show ? 'visible' : 'hidden',
              display: 'flex',
              '& svg': {
                display: 'block',
                mr: '10px'
              }
            }}>
              <FiExternalLink />
              VIEW SITE
            </Button>
          </Link>
        </Box>
        <Box 
          sx={{
            bottom: '20px',
            cursor: 'pointer',
            position: 'absolute',
            right: '10px',
            '& svg': {
              display: 'block',
              color: '#bbb',
              fontSize: '25px'
            }
          }}
          onClick={onClose}
        >
          <FiX />
        </Box>
      </Box>
    </Box>
  , document.body as HTMLElement);
}