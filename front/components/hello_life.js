export default class Cell {
   constructor(initial_state) {
      this.current_state = initial_state; // array[32][32]
   }

   get state() {
      return this.current_state;
   }

   judgeState() {
      let next_state;
      let count;
      for (let y = 0; y < 32; y++) {
         for (let x = 0; x < 32; x++) {
            count = 0;
            for (let i = 0; i < 9; i++) {
               // yi : -1,-1,-1,0,0,0,1,1,1
               // xi : -1,0,1,-1,0,1,-1,0,1
               // mask 0b11111 for edge handring
               if (this.current_state[(32 - 1) & (y - 1 + (int)(i / 3))]
                  [(32 - 1) & (x - 1 + i % 3)]) {
                  count++;
               }
            }
            // update
            if (count <= 2 || 5 <= count) {
               next_state[y][x] = false;
            } else {
               next_state[y][x] = true;
            }
         }
      }
      return next_state;
   }

   updateState() {
      this.current_state = this.judgeState();
   }
}
