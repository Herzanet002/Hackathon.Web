import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text={
                'Свяжитесь с нами, если стало интересно'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Мы приглашаем всех специалистов в области информационных технологий принять участие в нашем форуме. Здесь вы сможете обсудить последние технологические новинки, узнать о лучших практиках в своей области и завести новые контакты. Не упустите возможность стать частью этого уникального события!'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            style={{ 
                textTransform: 'inherit'
            }}
            >
                Cвязаться с нами 
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;