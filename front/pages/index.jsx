import {Center, Text, HStack, Box} from '@chakra-ui/layout';
import React, { useState } from 'react';
import {SimpleGrid, Button, ButtonGroup} from '@chakra-ui/react'
import Link from 'next/link'
import LifeGame from '../components/game-of-life'
import { Header } from '../components/header'
import { useRouter } from 'next/router'


async function requestUsers(skip = 0, limit = 100) {
   const url = 'http://localhost:8000/users/?skip=' + skip + '&limit=' + limit;
   const token = localStorage.getItem('token')
   let authrization_value = ''
   if (token) {
      const parsed_token = JSON.parse(token);
      authrization_value =
         parsed_token['token_type'] + ' ' + parsed_token['access_token'];
   }
   // 既定のオプションには * が付いています
   const response = await fetch(url, {
      method: 'GET',  // *GET, POST, PUT, DELETE, etc.
      headers: {
         'accept': 'application/json',
         'Authorization': authrization_value,
      },
   })
   return response.json();  // JSON のレスポンスをネイティブの JavaScript
   // オブジェクトに解釈
}

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


export default function Index() {
   const [isLoggedIn,setState] = useState(hoge());
   function signOut() {
      setState(false);
      localStorage.removeItem('token');
   }

   const router = useRouter();
   const query = router.query;

   return (<Box>
      <Header />
      <Box p={3}>
         {
            router.isReady && (query.init ? <LifeGame initState={query.init}/> : <LifeGame />)
         }
      </Box>
   </Box>);
}
