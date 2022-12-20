/**
 *
 */
getOptimalPath([[0], [7, 4], [2, 4, 6]]);
console.log(getOptimalPath([[0], [7, 4], [2, 4, 6]]))

function getOptimalPath( path ) {
    return path.reduceRight(( prev, current ) => {
        return current.map(( val, index ) => {
            return val + Math.min(prev[index], prev[index + 1]);
        });
    })[0];
}

