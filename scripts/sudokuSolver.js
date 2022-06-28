    function getGridIndex(row, col){
        let gridRow = Math.floor(row/3);
        let gridCol = Math.floor(col/3);
        let index = gridRow * 3 + gridCol;
        return index;
    }

    function sudoku(board, alreadyUsedRow, alreadyUsedCol, alreadyUsedGrid, row, col, solution){
        let n = board.length;

        if((row === n) && (col === 0)){
            for(let i = 0; i < n; i += 1){
                let myArr = [];
                for(let j = 0; j < n; j += 1){
                    myArr.push(board[i][j]);
                }
            solution.push(myArr);
            }
        }
        else{
            if(board[row][col] !== -1){
                if(col < n){
                    sudoku(board, alreadyUsedRow, alreadyUsedCol, alreadyUsedGrid, row, col+1, solution);
                }
                else{
                    sudoku(board, alreadyUsedRow, alreadyUsedCol, alreadyUsedGrid, row+1, 0, solution)
                }
            }
            else{
                for(let i = 1; i <= n; i += 1){
                    let b1 = alreadyUsedRow[row].has(i);
                    let b2 = alreadyUsedCol[col].has(i);
                    let b3 = alreadyUsedGrid[getGridIndex(row, col)].has(i);

                    if((b1 === false) && (b2 === false) && (b3 === false)){
                        board[row][col] = i;
                        alreadyUsedRow[row].add(i);
                        alreadyUsedCol[col].add(i);
                        alreadyUsedGrid[getGridIndex(row, col)].add(i);

                        if(col < n){
                            sudoku(board, alreadyUsedRow, alreadyUsedCol, alreadyUsedGrid, row, col+1, solution);
                        }
                        else{
                            sudoku(board, alreadyUsedRow, alreadyUsedCol, alreadyUsedGrid, row+1, 0, solution);
                        }

                        alreadyUsedRow[row].delete(i);
                        alreadyUsedCol[col].delete(i);
                        alreadyUsedGrid[getGridIndex(row, col)].delete(i);
                    }
                    board[row][col] = -1;

                    // Once a solution has been found, we just exit stop further executing the function
                    if(solution.length === 9){
                        return ;
                    }
                }
            }
        }
    }
