import React, { useState } from 'react';
import {HStack, VStack, GridItem, SimpleGrid, Box, Text, Button, ButtonGroup} from '@chakra-ui/react'
import Cell from './hello_life';

export default function LifeGame() {
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
   const [cellState, setState] = useState(cell.state);

   function clickHandler() {
      while (1) {
         printCell();
         cell.updateState();
         setState(cell.current_state)
      }

   }

   function invertState() {
      setState(cellState.map((state) => !state))
   }

   return (
      <Box>
         {
            cellState.map(states => <HStack spacing={0}> {states.map(state => {
               if ( state ) {
                  return <Box as='button' w={5} h={5} bg='black' borderWidth='1px'></Box>

               } else {
                  return <Box as='button' w={5} h={5} bg='white' borderWidth='1px'></Box>
               }})} </HStack>)
         }
      </Box>
   );
}
