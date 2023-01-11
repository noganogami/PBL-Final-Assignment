import { useForm } from 'react-hook-form'
import { useState} from 'react';
import {Stack, HStack} from '@chakra-ui/layout';
import {
   FormErrorMessage,
   FormLabel,
   FormControl,
   Radio,
   RadioGroup,
   Input,
   Button,
   Center,
} from '@chakra-ui/react'


export default function PostForm(props) {
   const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
   } = useForm()

   const [value, setValue] = useState('');


   async function createItem(form, indices) {
      const url = 'http://localhost:8000/items/';
      const token = localStorage.getItem('token')
      let authrization_value = ''
      if (token) {
         const parsed_token = JSON.parse(token);
         authrization_value =
            parsed_token['token_type'] + ' ' + parsed_token['access_token'];
      }
      // 既定のオプションには * が付いています
      const response = await fetch(url, {
         method: 'POST',  // *GET, POST, PUT, DELETE, etc.
         headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': authrization_value,
         },
         body: JSON.stringify({'title': form[ 'title' ], 'tag': value, 'indices': indices})
      })
      if (!response.ok) {
         response.json().then((data) => alert( JSON.stringify(data["detail"]) ) );
      } else {
         return response.json();  // JSON のレスポンスをネイティブの JavaScript
      }
   }


   function onSubmit(form) {
      return new Promise((resolve) => {
         setTimeout(async () => {
            createItem(form, props.indices)
            resolve()
         }, 1000)
      }).catch(err=>alert(err))
   }
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Stack w='100%'>
            <FormControl isInvalid={errors.title}>
               <FormLabel htmlFor='title'>title</FormLabel>
               <Input
                  id='title'
                  placeholder='title'
                  {...register('title', {
                     required: true,
                  })}
               />
               <FormErrorMessage>
                  {errors.title && errors.title.message}
               </FormErrorMessage>
            </FormControl>

            <FormControl as='fieldset'>
               <FormLabel as='legend'>Tag</FormLabel>
               <Center>
                  <RadioGroup onChange={setValue} value={value}>
                     <HStack spacing='24px'>
                        <Stack>
                           <Radio value='still_life'>個体物体</Radio>
                           <Radio value='oscillator'>振動子</Radio>
                           <Radio value='spaceship'>移動物体</Radio>
                        </Stack>
                        <Stack>
                           <Radio value='infinite_growth'>繫殖型</Radio>
                           <Radio value='methuselah'>長寿型</Radio>
                           <Radio value='other'>その他</Radio>
                        </Stack>
                     </HStack>
                  </RadioGroup>
               </Center>
            </FormControl>
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
               保存
            </Button>
         </Stack>
      </form>
   )
}
