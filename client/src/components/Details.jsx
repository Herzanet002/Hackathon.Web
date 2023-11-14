import React from 'react'
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
            expirience: data.get('expirience'),
            profession: data.get('profession')
        });
    }


    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            px: 2,
        }}
        >
            <Title 
            text={
                'Interesting to buy property'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'If you are interested to buy the property contact us we will call you. \
                Shortly to fulfill you requirements and property.'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />

            <Box 
            component="form" 
            noValidate 
            onSubmit={handleSubmit} 
            sx={{ 
                mt: 1,
                py: 2
            }}>
                <TextField
                    margin="normal"
                    required
                    id="firstName"
                    label="Имя"
                    name="firstName"
                    autoFocus
                    className='validate'
                />
                <TextField
                    margin="normal"
                    required
                    id="lastName"
                    label="Фамилия"
                    name="lastName"
                    autoFocus
                    className='validate'
                />
                <TextField
                    margin="normal"
                
                    id="patronymic"
                    label="Отчество"
                    name="patronymic"
                    autoFocus
                    className='validate'
                />
                <TextField
                    margin="normal"
                    required
                    
                    id="age"
                    label="Возраст"
                    name="age"
                    autoFocus
                    className='validate'
                />
                <TextField
                    margin="normal"
                    required
                    
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    className='validate'
                />
                <TextField
                    margin="normal"
                    required
                    
                    id="experience"
                    label="Опыт работы"
                    name="experience"
                    autoFocus
                    className='validate'
                />
                <TextField
                    margin="normal"
                    required
                    
                    id="profession"
                    label="Профессия"
                    name="profession"
                    autoFocus
                    className='validate'
                />
                <Button 
                variant="contained" 
                
                type="submit"
                size="medium"
                sx= {{ 
                    fontSize: '0.9rem',
                    textTransform: 'capitalize', 
                    py: 2,
                    mt: 3, 
                    mb: 2,
                    borderRadius: 0,
                    backgroundColor: '#14192d',
                    "&:hover": {
                        backgroundColor: '#1e2a5a',
                    }
                }}
                >
                    send
                </Button>
            </Box>
        </Stack>
    )
}

export default Details;