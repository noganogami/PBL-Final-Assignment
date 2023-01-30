import {Box} from '@chakra-ui/layout';
import Link from 'next/link'
import LoginForm from '../components/login-form'
import { Header } from '../components/header'
import {HStack} from '@chakra-ui/layout';
import {Text, Grid, GridItem, Center} from '@chakra-ui/react';

const Login = () =>
   (
      <Grid
         templateAreas={`"header"
                     "text"
                     "form"
                     "footer"`}
         gridTemplateRows={'64px 64px 128px 30px'}
         gridTemplateColumns={'100%'}
         gap='64px'
         color='blackAlpha.700'
         fontWeight='bold'
      >
         <GridItem area='header'>
            <Header/>
         </GridItem>
         <Center>
            <GridItem area='text'>
               <Text>Sign in to Game of Life</Text>
            </GridItem>
         </Center>
         <Center>
            <GridItem area='form'>
               <Box w ={'320px'} p='6' borderRadius='lg' borderWidth='1px'>
                  <LoginForm/>
               </Box>
            </GridItem>
         </Center>
         <GridItem area='footer'>
            <Center>
               <HStack p={'10'} spacing='64px'>
                  <Text>Forgot password?</Text>
                  <Link href='signup'>Sign up</Link>
               </HStack>
            </Center>
         </GridItem>
      </Grid>
   );

export default Login
