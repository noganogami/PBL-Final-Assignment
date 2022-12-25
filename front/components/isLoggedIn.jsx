import React, { useState } from 'react';
import {Button, ButtonGroup} from '@chakra-ui/react'

export default function LoginControl() {
   const [isLoggedIn, setState] = useState(false);

   let button;
   if (isLoggedIn)  {
      button = <Button>Hoge</Button>
   } else {
      button = <Button>Fuga</Button>
   }
   return (
      {isLoggedIn}
   );
}
