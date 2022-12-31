import React, { useCallback, useState } from 'react';
import {Center, HStack, VStack, GridItem, SimpleGrid, Box, Text, Button, ButtonGroup} from '@chakra-ui/react'
import Cell from './hello_life';
import { interval } from './interval';
import PostForm from './postItem';



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


   const [checkPoint, setCheckPoint] = useState(init);
   function startLife() {
      if (!running) {
         setCheckPoint(cell.current_state);
      }
      setRunning(true);
   }

   function nextStep() {
      cell.updateState();
      setState(cell.current_state);
   }

   function initialize() {
      cell.initialize(checkPoint);
      setState(cell.current_state);
   }


   const use1Second = interval(1e3);

   const [running, setRunning] = useState(false);
   const tick = useCallback(
      () => (running ? nextStep() : undefined),
      [running]
   );
   const start = () => startLife();
   const pause = () => setRunning(false);
   const restart = () => setRunning(true);
   const reset = () => {
      pause();
      initialize();
   };

   use1Second(tick);


   function toBinary(cells) {
      let indices = '';
      cells.map((cell) => cell.map(state => {
         if (state) {
            indices += '1';
         } else {
            indices += '0';
         }
      }))
      return indices;
   }

   return (
      <Box>
         <Box>
            {
               cellState.map((states, iy) => <HStack spacing={0}> {states.map((state, ix) => {
                  if ( state ) {
                     return <Box as='button' onClick={(e) => clickCell(e)} w={4} h={4} id={Array.from([ix,iy])} bg='black' borderWidth='1px'></Box>

                  } else {
                     return <Box as='button' onClick={(e) => clickCell(e)} w={4} h={4} id={Array.from([ix,iy])} bg='white' borderWidth='1px'></Box>
                  }})} </HStack>)
            }
         </Box>
         <Center>
            <HStack>
               <Button onClick={start}>start</Button>
               {
                  running && <Button onClick={pause}>pause</Button> 
               }
               {
                  !running && <Button onClick={restart}>restart</Button> 
               }
               <Button onClick={reset}>reset</Button>
            </HStack>
         </Center>
         <Button onClick={() =>console.log(toBinary(checkPoint))}>to</Button>
         <PostForm indices={toBinary(checkPoint)} />
      </Box>
   );
}
