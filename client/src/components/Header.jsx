import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from '../assets/pngegg.png'

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: '#537072',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
<CustomBox component='header'>
      <BoxText component='section'>
        <Typography variant='h2' component='h1' sx={{ fontWeight: 700, fontSize: '4.0rem', color: '#f4ebdb' }}>
          IT-форум "СуперГик"
        </Typography>

        <Typography variant='p' component='p' sx={{ py: 3, lineHeight: 1.6, fontSize: '1.5rem', color: '#f4ebdb' }}>
        14 ноября с 13:00 по 17:00 в коворкинге IT колледжа г. Курган, пр.Машиностроителей, 14к2а будет проходить IT-форум "СуперГик".
      </Typography>
        <Box>
          <Button
            variant='contained'
            sx={{
              mr: 2,
              px: 4,
              py: 1,
              fontSize: '0.9rem',
              textTransform: 'capitalize',
              borderRadius: 0,
              borderColor: '#14192d',
              color: '#f4ebdb',
              backgroundColor: '#14192d',
              '&&:hover': {
                backgroundColor: '#343a55',
              },
              '&&:focus': {
                backgroundColor: '#343a55',
              },
            }}
          >
            Регистрация
          </Button>
          <Button
            component={Link}
            to='/about'
            variant='outlined'
            sx={{
              px: 4,
              py: 1,
              fontSize: '0.9rem',
              textTransform: 'capitalize',
              borderRadius: 0,
              color: '#f4ebdb',
              backgroundColor: 'transparent',
              borderColor: '#f4ebdb',
              '&&:hover': {
                color: '#343a55',
                borderColor: '#343a55',
              },
              '&&:focus': {
                color: '#343a55',
                borderColor: '#343a55',
              },
            }}
          >
            Программа
          </Button>
        </Box>
      </BoxText>

      <Box
        sx={(theme) => ({
          [theme.breakpoints.down('md')]: {
            flex: '1',
            paddingTop: '30px',
            alignSelf: 'center',
          },
          [theme.breakpoints.up('md')]: {
            flex: '2',
            alignSelf: 'flex-end',
          },
        })}
      >
        <img
          src={headerImg}
          alt="headerImg"
          style={{
            width: "70vh",
            marginBottom: 10,
            marginLeft: 200,
          }}
        />
      </Box>
    </CustomBox>
    )
}

export default Header