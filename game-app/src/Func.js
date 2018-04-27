

const GetBestPosition = (type, array) => {
    let best = [];
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            if (array[x][y] === 'e') {
                array[x][y] = type;
                if (IsSuccess(x, y, array)) {
                    best.push([x, y]);
                }
            }
        }
    }
    return best;
}

const IsSuccess  = (x, y, array)=> {
    if (array[x][0] === array[x][1] && array[x][1] === array[x][2] && array[x][0] === array[x][2]) {
        return true;
    }
    if (array[0][y] === array[1][y] && array[1][y] === array[2][y] && array[0][y] === array[2][y]) {
        return true;
    }
    if (array[0][0] === array[1][1] && array[0][0] === array[2][2] && array[0][0] === array[2][2]) {
        return true;
    }
    if (array[2][0] === array[1][1] && array[1][1] === array[0][2] && array[2][0] === array[0][2]) {
        return true;
    }
    return false;
}

export default GetBestPosition;

