function createStringPatternY(size) {

    const buffer = 1;
    const areaSize = 2 * size;
    const emptySpace = " ";
    const newLine = "\n";
    let toPrintAccumulator = "";

    for (let row = 0; row <= areaSize; row++) {

        let rowContentAccumulator = "";

        for (let col = 0; col <= areaSize; col++) {

            const isLeftDiagonal = row === col;
            const isRightDiagonal = row + col === areaSize;
            const isTopHalf = (row < areaSize / 2);
            const isCenterNode = col === Math.ceil(areaSize / 2);
            const nodeValue = row + ((isRightDiagonal || !isTopHalf) ? size + buffer : buffer);

            rowContentAccumulator += (isTopHalf && (isLeftDiagonal || isRightDiagonal)) ? nodeValue : (!isTopHalf && isCenterNode) ? nodeValue : emptySpace;

        }

        toPrintAccumulator += rowContentAccumulator + newLine;

    }

    return toPrintAccumulator;

}

// try:
// console.log(createStringPatternY(4));

export default createStringPatternY;



/* 
    *** Read Me (or not) ***
   
    * This function returns a string in a Y pattern based on the size paremeter.
    * Example output:

     (size = 4)   | (size = 3)
    ---------------------------
     1       5    | 1     4
      2     6     |  2   5 
       3   7      |   3 6
        4 8       |    7
         9        |    8
         10       |    9
         11       |    10
         12       |   
         13       |

    * This is a solution I came up with for a problem given in a technical exam for a job application.    
    *
    * The task was to create a function that prints out a Y pattern like the example above, while being limited to using only 2 loops maximum.   
    *  
    * I found that if I thought about the problem as a Cartesian plane, all I needed was 2 loops to track my position in that space.    
    * 
    * Unfortunately, I wasn't able to solve this within the 1-hour time limit that was placed during the exam. However, I decided to work on it further on my own time.
    * 
    * Regardless, I'm glad I had the opportunity to solve this problem. It was a very creative exam, and it gave me a new perspective on problem-solving.
    * 
    * 
    * Although I was constrained into using only 2 loops, I feel that there might be ways to improve my solution further. If you see anything that you think would make this code cleaner or more efficient, please let me know. I'm always open to feedback and suggestions. 
    *    
    * Thank you for taking the time to read through this. I hope my code provides insight into my problem-solving approach and gives you a fresh perspective.
    * 
    * - ian-tabs
 
*/