import { HStack, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import {Item} from '../components/item';
import { Header } from '../components/header'

export default function Mypage() {
   const [items, setItems] = useState();
   useEffect(() => {
      // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
      const requestItems = async () => {
         const url = 'http://localhost:8000/users/items/';
         const token = localStorage.getItem('token')
         let authrization_value = ''
         if (token) {
            const parsed_token = JSON.parse(token);
            authrization_value =
               parsed_token['token_type'] + ' ' + parsed_token['access_token'];
         }
         const response = await fetch(url, {
            method: 'GET', 
            headers: {
               'accept': 'application/json',
               'Authorization': authrization_value,
            },
         })
         const body = await response.json();
         setItems(body); // stateに反映する
      };
      requestItems();
   }, []);

   const router = useRouter();
   const arr = items ? Array.from({length: items.length}, (v, i) => i) : [];
   return(
      <Box>
         <Header />
         <Box p={3}>
            <HStack>
               {
                  arr.map(n => <Box as='button' onClick={() => router.push( '/?init=' + items[n][ 'indices' ] )}><Item title={items[n]['title']} tag={items[n][ 'tag' ]} indices={items[n][ 'indices' ]} /></Box>)
               }
            </HStack>
         </Box>
      </Box>
   )
}
