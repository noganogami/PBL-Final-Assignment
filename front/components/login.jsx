import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import {Stack} from '@chakra-ui/layout';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()
  const router = useRouter()

  function onSubmit(form) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        if (await requestToken(form)) {
          router.push('/')
        }
        resolve()
      }, 3000)
    }).catch(err=>alert(err))
  }


  async function requestToken(form) {
     const url = 'http://localhost:8000/token';
     const response = await fetch(url, {
                         method: 'POST',
                         headers: {
                            'accept': 'application/json',
                            'Content-Type': 'application/x-www-form-urlencoded'
                         },
                         body: 'username=' + encodeURIComponent(form['username']) + 
                               '&password=' + encodeURIComponent(form['password'])
                      })
     const res_body = await response.json() // if response is ok, then return token

     if (!response.ok) {
        alert(JSON.stringify(res_body['detail']))
        return false
     } else {
        localStorage.setItem('token', JSON.stringify(res_body))
        return true
     }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <FormControl isInvalid={errors.username}>
          <FormLabel htmlFor='username'>Username</FormLabel>
          <Input
          id='username'
          placeholder='username'
          {...register('username', {
             required: 'This is required',
             minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
          />
          <FormErrorMessage>
            {errors.username && errors.username.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input
          id='password'
          placeholder='password'
          {...register('password', {
             required: 'This is required',
             minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
          Sign In
        </Button>
      </Stack>
    </  form>
  )
}
