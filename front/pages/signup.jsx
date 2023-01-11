import {Box} from '@chakra-ui/layout';
import CreateForm from '../components/create_user'
import { Header } from '../components/header'
import {Stack, HStack} from '@chakra-ui/layout';
import {Text, Grid, GridItem, Center} from '@chakra-ui/react';

const SignUp = () =>
   (
      <Grid
         templateAreas={`"header"
                     "text"
                     "form"`}
         gridTemplateRows={'64px 64px 256px'}
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
               <Text>Create new account</Text>
            </GridItem>
         </Center>
         <Center>
            <GridItem area='form'>
               <Box w ={'320px'} p='6' borderRadius='lg' borderWidth='1px'>
                  <CreateForm/>
               </Box>
            </GridItem>
         </Center>
      </Grid>
   );

export default SignUp
