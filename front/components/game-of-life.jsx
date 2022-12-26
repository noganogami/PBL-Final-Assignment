import React, { useState } from 'react';
import {HStack, VStack, GridItem, SimpleGrid, Box, Text, Button, ButtonGroup} from '@chakra-ui/react'
import Cell from './hello_life';

// init
let init = new Array(32);
for(let i = 0; i < 32; i++) {
   init[i] = new Array(32).fill(false);
}
for (let y = 0; y < 32; y++) {
   for (let x = 0; x < 32; x++) {
      if (y == 0 + 15 && x == 1 + 15) {
         init[y][x] = true;
      } else if (y == 0 + 15 && x == 2 + 15) {
         init[y][x] = true;
      } else if (y == 1 + 15 && x == 0 + 15) {
         init[y][x] = true;
      } else if (y == 2 + 15 && x == 1 + 15) {
         init[y][x] = true;
      }
   }
}
let cell = new Cell(init);

export default function LifeGame() {
   const [cellState, setState] = useState(cell.current_state);


   function clickCell(event) {
      const coordinate = event.currentTarget.id.split(',').map((s) => Number(s))
      cell.invertState(coordinate[0], coordinate[1]);
      setState(cell.current_state)
   }

   return (
      <Box>
         <Box>
            {
               cellState.map((states, iy) => <HStack spacing={0}> {states.map((state, ix) => {
                  if ( state ) {
                     return <Box as='button' onClick={(e) => clickCell(e)} w={5} h={5} id={Array.from([ix,iy])} bg='black' borderWidth='1px'></Box>

                  } else {
                     return <Box as='button' onClick={(e) => clickCell(e)} w={5} h={5} id={Array.from([ix,iy])} bg='white' borderWidth='1px'></Box>
                  }})} </HStack>)
            }
         </Box>
         <Button >start</Button>
         <Button >stop</Button>
      </Box>
   );
}
