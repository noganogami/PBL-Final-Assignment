export default function InitCell(initialState) {
   // init
   let init = new Array(32);
   for(let i = 0; i < 32; i++) {
      init[i] = new Array(32).fill(false);
   }
   if (initialState == 'R-pentomino') {
      for (let y = 0; y < 32; y++) {
         for (let x = 0; x < 32; x++) {
            if (y == 0 + 15 && x == 1 + 15) {
               init[y][x] = true;
            } else if (y == 0 + 15 && x == 2 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == 0 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == 1 + 15) {
               init[y][x] = true;
            } else if (y == 2 + 15 && x == 1 + 15) {
               init[y][x] = true;
            }
         }
      }
   } else if (initialState == 'pentadecathlon') {
      for (let y = 0; y < 32; y++) {
         for (let x = 0; x < 32; x++) {
            if (y == -1 + 15 && x == -2 + 15) {
               init[y][x] = true;
            } else if (y == -1 + 15 && x == 3 + 15) {
               init[y][x] = true;
            } else if (y == 0 + 15 && x == -4 + 15) {
               init[y][x] = true;
            } else if (y == 0 + 15 && x == -3 + 15) {
               init[y][x] = true;
            } else if (y == 0 + 15 && x == -1 + 15) {
               init[y][x] = true;
            } else if (y == 0 + 15 && x == 0 + 15) {
               init[y][x] = true;
            } else if (y == 0 + 15 && x == 1 + 15) {
               init[y][x] = true;
            } else if (y == 0 + 15 && x == 2 + 15) {
               init[y][x] = true;
            } else if (y == 0 + 15 && x == 4 + 15) {
               init[y][x] = true;
            } else if (y == 0 + 15 && x == 5 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == -2 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == 3 + 15) {
               init[y][x] = true;
            }
         }
      }
   } else if (initialState == 'cross') {
      for (let y = 0; y < 32; y++) {
         for (let x = 0; x < 32; x++) {
            if (y == -4 + 15 && x == -1 + 15) {
               init[y][x] = true;
            } else if (y == -4 + 15 && x == 2 + 15) {
               init[y][x] = true;
            } else if (y == -3 + 15 && x == -1 + 15) {
               init[y][x] = true;
            } else if (y == -3 + 15 && x == 2 + 15) {
               init[y][x] = true;
            } else if (y == -2 + 15 && x == -2 + 15) {
               init[y][x] = true;
            } else if (y == -2 + 15 && x == -1 + 15) {
               init[y][x] = true;
            } else if (y == -2 + 15 && x == 2 + 15) {
               init[y][x] = true;
            } else if (y == -2 + 15 && x == 3 + 15) {
               init[y][x] = true;
            } else if (y == -1 + 15 && x == -4 + 15) {
               init[y][x] = true;
            } else if (y == -1 + 15 && x == -3 + 15) {
               init[y][x] = true;
            } else if (y == -1 + 15 && x == -2 + 15) {
               init[y][x] = true;
            } else if (y == -1 + 15 && x == 3 + 15) {
               init[y][x] = true;
            } else if (y == -1 + 15 && x == 4 + 15) {
               init[y][x] = true;
            } else if (y == -1 + 15 && x == 5 + 15) {
               init[y][x] = true;
            } else if (y == 2 + 15 && x == -4 + 15) {
               init[y][x] = true;
            } else if (y == 2 + 15 && x == -3 + 15) {
               init[y][x] = true;
            } else if (y == 2 + 15 && x == -2 + 15) {
               init[y][x] = true;
            } else if (y == 2 + 15 && x == 3 + 15) {
               init[y][x] = true;
            } else if (y == 2 + 15 && x == 4 + 15) {
               init[y][x] = true;
            } else if (y == 2 + 15 && x == 5 + 15) {
               init[y][x] = true;
            } else if (y == 3 + 15 && x == -2 + 15) {
               init[y][x] = true;
            } else if (y == 3 + 15 && x == -1 + 15) {
               init[y][x] = true;
            } else if (y == 3 + 15 && x == 2 + 15) {
               init[y][x] = true;
            } else if (y == 3 + 15 && x == 3 + 15) {
               init[y][x] = true;
            } else if (y == 4 + 15 && x == -1 + 15) {
               init[y][x] = true;
            } else if (y == 4 + 15 && x == 2 + 15) {
               init[y][x] = true;
            } else if (y == 5 + 15 && x == -1 + 15) {
               init[y][x] = true;
            } else if (y == 5 + 15 && x == 2 + 15) {
               init[y][x] = true;
            }
         }
      }
   } else if (initialState == 'die hard') {
      for (let y = 0; y < 32; y++) {
         for (let x = 0; x < 32; x++) {
            if (y == -1 + 15 && x == 3 + 15) {
               init[y][x] = true;
            } else if (y == 0 + 15 && x == -3 + 15) {
               init[y][x] = true;
            } else if (y == 0 + 15 && x == -2 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == -2 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == 2 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == 3 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == 4 + 15) {
               init[y][x] = true;
            }
         }
      }
   } else if (initialState == 'acorn') {
      for (let y = 0; y < 32; y++) {
         for (let x = 0; x < 32; x++) {
            if (y == -1 + 15 && x == -2 + 15) {
               init[y][x] = true;
            } else if (y == 0 + 15 && x == 0 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == -3 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == -2 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == 1 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == 2 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == 3 + 15) {
               init[y][x] = true;
            }
         }
      }
   } else if (initialState == 'lightwight_spaceship') {
      for (let y = 0; y < 32; y++) {
         for (let x = 0; x < 32; x++) {
            if (y == -1 + 15 && x == -2 + 15) {
               init[y][x] = true;
            } else if (y == -1 + 15 && x == 1 + 15) {
               init[y][x] = true;
            } else if (y == 0 + 15 && x == 2 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == -2 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == 2 + 15) {
               init[y][x] = true;
            } else if (y == 2 + 15 && x == -1 + 15) {
               init[y][x] = true;
            } else if (y == 2 + 15 && x == 0 + 15) {
               init[y][x] = true;
            } else if (y == 2 + 15 && x == 1 + 15) {
               init[y][x] = true;
            } else if (y == 2 + 15 && x == 2 + 15) {
               init[y][x] = true;
            }
         }
      }
   } else if (initialState == 'eater') {
      for (let y = 0; y < 32; y++) {
         for (let x = 0; x < 32; x++) {
            if (y == -1 + 15 && x == 1 + 15) {
               init[y][x] = true;
            } else if (y == -1 + 15 && x == 2 + 15) {
               init[y][x] = true;
            } else if (y == 0 + 15 && x == 0 + 15) {
               init[y][x] = true;
            } else if (y == 0 + 15 && x == 2 + 15) {
               init[y][x] = true;
            } else if (y == 1 + 15 && x == 0 + 15) {
               init[y][x] = true;
            } else if (y == 2 + 15 && x == 0 + 15) {
               init[y][x] = true;
            } else if (y == 2 + 15 && x == -1 + 15) {
               init[y][x] = true;
            }
         }
      }
   } else {
      const strState = initialState.split('');
      let idx = 0;
      for (let y = 0; y < 32; y++) {
         for (let x = 0; x < 32; x++) {
            Number( strState[idx] ) ? init[y][x] = true : init[y][x] = false;
            idx++;
         }
      }
   }

   return( init );
}
