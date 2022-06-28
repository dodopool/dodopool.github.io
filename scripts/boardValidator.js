function checkInRow(toCheck, rowNumber, board){
    let n = board.length;
    let count = 0;
    for(let i = 0; i < n; i += 1){
        if(board[rowNumber][i] === toCheck){
            count += 1;
        }
    }
    if(count > 1){
        return false;
    }
    else{
        return true;
    }
}

function checkInCol(toCheck, colNumber, board){
    let n = board.length;
    let count = 0;
    for(let i = 0; i < n; i += 1){
        if(board[i][colNumber] === toCheck){
            count += 1;
        }
    }
    if(count > 1){
        return false;
    }
    else{
        return true;
    }
}

function checkInGrid(toCheck, rowNumber, colNumber, board){
    let gridRow = Math.floor(rowNumber/3);
    let gridColumn = Math.floor(colNumber/3);
    let gridIndex = gridRow*3 + gridColumn;

    let n = board.length;
    let count = 0;


    for(let i = 0; i < n; i += 1){
            for(let j = 0; j < n; j += 1){
                let currGridRow = Math.floor(i/3);
                let currGridCol = Math.floor(j/3);
                let currGridIndex = currGridRow*3 + currGridCol;

                if(currGridIndex === gridIndex){
                    if(board[i][j] === toCheck){
                        count += 1;
                    }
                }
            }
    }

    if(count > 1){
        return false;
    }
    else{
        return true;
    }
}

function validateInput(board){
        let n = board.length;

        for(let i = 0; i < n; i += 1){
            for(let j = 0; j < n; j += 1){
                if(Object.is(NaN, board[i][j])){
                    return false;
                }
                if(board[i][j] < 1 || board[i][j] > 9){
                    board[i][j] = -1;
                }
            }
        }

        for(let i = 0; i < n; i += 1){
            for(let j = 0; j < n; j += 1){
                for(let k = 1; k <= 9; k += 1){
                    let b1 = checkInRow(k, i, board);
                    let b2 = checkInCol(k, j, board);
                    let b3 = checkInGrid(k, i, j, board);

                    if(!(b1 && b2 && b3)){
                        return false;
                    }
                }
            }
        }

        return true;
    }
