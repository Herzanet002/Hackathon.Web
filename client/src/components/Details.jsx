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
        direction="row"
        justifyContent= 'left'
        alignItems='center'
        sx={{
            py: 10,
            px: 2,
            
        }}
        >
            <Stack
            component='section'
            direction="column"
            justifyContent= 'left'
            >
            <Title 
            text={
                'Стало интерестно?'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Для получения дополнительной информации о регистрации, программе и других вопросах, пожалуйста, свяжитесь с нами.'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            </Stack>
            
            <Box
component="form"
noValidate
onSubmit={handleSubmit}
sx={{
width: '40%', // Устанавливаем ширину на половину экрана
mx: 'auto', // Центрируем по горизонтали
mt: 1,
py: 2,
}}
>
<TextField
margin="normal"
size='small'
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
size='small'
required
id="lastName"
label="Фамилия"
name="lastName"
fullWidth
autoFocus
className='validate'
/>
<TextField
margin="normal"
size='small'
id="patronymic"
label="Отчество"
name="patronymic"
fullWidth
autoFocus
className='validate'
/>
<TextField
margin="normal"
size='small'
required
fullWidth
id="age"
label="Возраст"
name="age"
autoFocus
className='validate'
/>
<TextField
margin="normal"
size='small'
required
fullWidth
id="email"
label="Email адрес"
name="email"
autoComplete="email"
autoFocus
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
autoFocus
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
autoFocus
className='validate'
/>
<Button
variant="contained"
type="submit"
size="medium"
sx={{
fontSize: '0.9rem',
textTransform: 'capitalize',
py: 1,
mt: 3,
mb: 2,
borderRadius: 1, // Здесь устанавливаем значение закругления (можете изменить на свое усмотрение)
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
    )
}

export default Details;