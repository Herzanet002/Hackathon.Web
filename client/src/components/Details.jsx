import React from 'react'
import axios from 'axios'
import {  
    Box,
    Button,
    Stack,
    TextField
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'

const Details = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            firstName: data.get('firstName'),
            lastName: data.get('firstName'),
            patronymic: data.get('patronymic'),
            age: data.get('age'),
            email: data.get('email'),
            experience: data.get('experience'),
            profession: data.get('profession')
        });
        axios.post('http://localhost:5043/api/participants/register', 
        {
        firstName: data.get('firstName'),
        lastName: data.get('firstName'),
        patronymic: data.get('patronymic'),
        age: data.get('age'),
        email: data.get('email'),
        experience: data.get('experience'),
        profession: data.get('profession')
    }).then(function (response) {                  
        // Handle the response data
        console.log(response.data);
      })
      .catch(function (error) {
        // Handle any errors
        console.error(error);
      });
    }


    return (
        <Stack
          component='section'
          direction="row"
          justifyContent='left'
          alignItems='center'
          sx={{
            py: 10,
            px: 2
        }}
        >
          {/* Left Stack */}
          <Stack component='section' direction="column" justifyContent='left'>
            <Title text={'Стало интересно?'} textAlign={'center'} />
            <Paragraph
              text={
                'Для получения дополнительной информации о регистрации, программе и других вопросах, пожалуйста, свяжитесь с нами.'
              }
              maxWidth={'sm'}
              mx={0}
              textAlign={'center'}
            />
          </Stack>
    
          {/* Right Box */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: '40%',
              mx: 'auto', // Center the form horizontally
              mt: 1,
              py: 2,
            }}
          >
            {/* TextField components */}
            <TextField
              margin="normal"
              size="small"
              required
              fullWidth
              id="firstName"
              label="Имя"
              name="firstName"
              autoFocus
              className='validate'
            />
    
            <TextField
              margin="normal"
              size="small"
              required
              fullWidth
              id="lastName"
              label="Фамилия"
              name="lastName"
              className='validate'
            />
    
            <TextField
              margin="normal"
              size="small"
              id="patronymic"
              label="Отчество"
              name="patronymic"
              fullWidth
              className='validate'
            />
    
            <TextField
              margin="normal"
              size="small"
              required
              fullWidth
              id="age"
              label="Возраст"
              name="age"
              className='validate'
            />
    
            <TextField
              margin="normal"
              size="small"
              required
              fullWidth
              id="email"
              label="Email адрес"
              name="email"
              autoComplete="email"
              className='validate'
            />
    
            <TextField
              size='small'
              margin="normal"
              required
              fullWidth
              id="experience"
              label="Опыт работы"
              name="experience"
              className='validate'
            />
    
            <TextField
              size='small'
              margin="normal"
              required
              fullWidth
              id="profession"
              label="Профессия"
              name="profession"
              className='validate'
            />
    
            {/* Submit Button */}
            <Button
              variant="contained"
              type="submit"
              size="medium"
              onSubmit={handleSubmit}
              sx={{
                fontSize: '0.9rem',
                textTransform: 'capitalize',
                py: 1,
                mt: 3,
                mb: 2,
                borderRadius: 1,
                backgroundColor: '#14192d',
                "&:hover": {
                  backgroundColor: '#1e2a5a',
                }
              }}
            >
              Отправить
            </Button>
          </Box>
        </Stack>
      );
}

export default Details;