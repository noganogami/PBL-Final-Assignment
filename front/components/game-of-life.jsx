import React, { useCallback, useState, useEffect } from 'react';
import {Radio, RadioGroup, Center, HStack, VStack, Grid, GridItem, SimpleGrid, Box, Text, Button, ButtonGroup} from '@chakra-ui/react'
import Cell from './hello_life';
import { interval } from './interval';
import PostForm from './postItem';
import InitCell from './initCell';



// init
let init = new Array(32);
for(let i = 0; i < 32; i++) {
   init[i] = new Array(32).fill(false);
}
let cell = new Cell(init);


export default function LifeGame(props) {
   const [cellState, setState] = useState(cell.current_state);

   function initialize(arr) {
      cell.initialize(arr);
      setState(cell.current_state);
   }

   useEffect( () => {
      if (props.initState) {
         initialize(InitCell(props.initState)) 
      }
   }, [] )

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


   const use1Second = interval(2e2);

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
      initialize(checkPoint);
   };
   const set = (pattern) => {
      pause();
      initialize(InitCell(pattern));
   }

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
         <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            <GridItem w='80%' h='100%' >
               <Box p={6}borderWidth='1px' borderRadius='lg'>
                  <PostForm indices={toBinary(checkPoint)} />
               </Box>
            </GridItem>
            <GridItem w='100%' h='100%' >
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
            </GridItem>
            <GridItem w='100%' h='100%' >
               <RadioGroup>
                  <Radio>
                     <Box as='button' onClick={ () => set('R-pentomino') }>R-ペントミノ</Box>
                  </Radio>
                  <Radio>
                     <Box as='button' onClick={ () => set('pentadecathlon') }>ペンタデカスロン</Box>
                  </Radio>
               </RadioGroup>
            </GridItem>
         </Grid>
      </Box>
   );
}
