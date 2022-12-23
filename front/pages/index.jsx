import {Box} from '@chakra-ui/layout';
import {Button, ButtonGroup} from '@chakra-ui/react'
import Link from 'next/link'

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

const Index = () =>
    (<Box>
       <Link href = '/login'><Button colorScheme = 'blue'>
          Sign in
       </Button></Link>

       <Button onClick = {() => requestUsers()} colorScheme = 'green'>
          RequestUsers
       </Button>
    </Box>);

export default Index;
