export default class Cell {
   constructor(initial_state) {
      this.current_state = initial_state; // array[32][32]
   }

   initialize(initial_state) {
      this.current_state = initial_state;
   }


   invertState(xi, yi) {
      let next_state = new Array(32);
      for(let i = 0; i < 32; i++) {
         next_state[i] = new Array(32);
      }

      for (let y = 0; y < 32; y++) {
         for (let x = 0; x < 32; x++) {
            if (x == xi && y == yi) {
               next_state[y][x] = !this.current_state[y][x];
            } else {
               next_state[y][x] = this.current_state[y][x];
            }
         }
      }
      this.current_state = next_state;
   }


   judgeState() {
      let next_state = new Array(32);
      for(let i = 0; i < 32; i++) {
         next_state[i] = new Array(32);
      }

      let count;
      for (let y = 0; y < 32; y++) {
         for (let x = 0; x < 32; x++) {
            count = 0;
            for (let j = 0; j < 9; j++) {
               // yi : -1,-1,-1,0,0,0,1,1,1
               // xi : -1,0,1,-1,0,1,-1,0,1
               // mask 0b11111 for edge handring
               if (this.current_state[(32 - 1) & (y - 1 + Math.floor(j / 3))]
                  [(32 - 1) & (x - 1 + j % 3)]) {
                  count++;
               }
            }
            // update
            if (this.current_state[y][x]) {
               if (count <= 2 || 5 <= count) {
                  next_state[y][x] = false;
               } else {
                  next_state[y][x] = true;
               }
            } else {
               if (count == 3) {
                  next_state[y][x] = true;
               } else {
                  next_state[y][x] = false;
               }
            }
         }
      }
      return next_state;
   }

   updateState() {
      this.current_state = this.judgeState();
   }
}
