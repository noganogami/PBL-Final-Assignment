import { Center, Badge, Box, HStack, Stack } from '@chakra-ui/react';
export function Item(props) {
   const s = props.indices.split('');
   let sArr = [];
   while(s.length > 0) {
      sArr.push(s.splice(0,32));
   }
   return(
      <Box p={3} w='320px' borderWidth='1px' borderRadius='lg'>
         <Center>
            <Box>
               {
                  sArr.map((states, iy) => <HStack spacing={0}> {states.map((state, ix) => {
                     if ( Number(state) ) {
                        return <Box w={2} h={2} bg='black' borderWidth='1px'></Box>

                     } else {
                        return <Box w={2} h={2} bg='white' borderWidth='1px'></Box>
                     }})} </HStack>)
               }
            </Box>
         </Center>
         <Stack>
            <Box
               mt='1'
               fontWeight='semibold'
               as='h4'
               lineHeight='tight'
               noOfLines={1}
            >
               {props.title}
            </Box>
            <Badge borderRadius='full' variant='subtle' w={20} colorScheme='teal'>
               <Center>
                  {props.tag}
               </Center>
            </Badge>
         </Stack>
      </Box>
   )
}
