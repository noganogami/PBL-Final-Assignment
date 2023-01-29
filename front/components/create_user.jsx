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

export default function CreateForm() {
   const {
      handleSubmit,
      register,
      watch,
      formState: { errors, isSubmitting },
   } = useForm()
   const router = useRouter()

   function onSubmit(form) {
      return new Promise((resolve) => {
         setTimeout(async () => {
            if (await createUser(form)) {
               router.push('/login')
            }
            resolve()
         }, 3000)
      }).catch(err=>alert(err))
   }


   async function createUser(form) {
      const url = 'http://localhost:8000/users/';
      const response = await fetch(url, {
         method: 'POST',
         headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify( { 'username': form['username'], 'password': form['password'] } )
      })
      const res_body = await response.json() 

      if (!response.ok) {
         alert(JSON.stringify(res_body['detail']))
         return false
      } else {
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
                     required: '入力してください',
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
                  type='password'
                  {...register('password', {
                     required: '入力してください',
                     minLength: { value: 8, message: '8文字以上入力してください' },
                  })}
               />
               <FormErrorMessage>
                  {errors.password && errors.password.message}
               </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.confirm_pwd}>
               <FormLabel htmlFor='confirm_pwd'>Confirm Password</FormLabel>
               <Input
                  id='confirm_pwd'
                  placeholder='confirm password'
                  type='password'
                  {...register('confirm_pwd', {
                     required: '入力してください',
                     validate: (val) => {
                        if (watch('password') != val) {
                           return 'パスワードが一致しません';
                        }
                     },
                  })}
               />
               <FormErrorMessage>
                  {errors.confirm_pwd && errors.confirm_pwd.message}
               </FormErrorMessage>
            </FormControl>

            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
               Sign Up
            </Button>
         </Stack>
      </  form>
   )
}
