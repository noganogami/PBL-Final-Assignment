import {
   Box,
   Text,
   Grid,
   Button,
   HStack,
} from '@chakra-ui/react'
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'


function hoge() {
   if (typeof window !== 'undefined') {
      // Perform localStorage action
      const item = localStorage.getItem('token')
      if (item) {
         return true;
      } else {
         return false;
      }
   } else {
      false;
   }
}

export const Header = () => 
{
   const [isLoggedIn,setState] = useState(hoge());
   function signOut() {
      setState(false);
      localStorage.removeItem('token');
   }
   const router = useRouter()
   return (
      <Box
         bg="#072"
         opacity="0.9"
         color="#ffffff"
         h={16}
         display="flex"
         justifyContent="center"
         alignItems="center"
         w="100%"
         zIndex={2}
      >
         <Box  as='button' onClick={() => router.push('/')}>
            <Text fontSize={44} fontFamily="Roboto" fontWeight="bold">
               Conway's Game of Life
            </Text>
         </Box>
         <Box position='absolute' right={10}>
            {
               !isLoggedIn && 
                  <Link href = '/login'>
                     Sign in
                  </Link>
            }
            {
               isLoggedIn && 
                  <HStack spacing={10}>
                     <Box as='button' onClick = {() => signOut()} colorScheme = 'blue'>
                        <Link href = '/'>
                           Sign Out
                        </Link>
                     </Box>
                     <Link href = '/mypage'>
                        My page
                     </Link>
                  </HStack>
            }
         </Box>
      </Box>
   );
};
