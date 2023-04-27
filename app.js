
export function tableau() {
    let source = [[1, 2, 3], [12, 15, 40], [12, 16, 50], [12, 13, 20], [50, 42, 21]];



    // let tabtri = [12, 3, 2, 7, 21];

    for (let i = 0; i < source.length; i++) {
        let x = source[i];
        let j = i;

        while (j > 0 && source[j - 1] > x) {
            source[j] = source[j - 1];
            j = j - 1;
        }

        source[j] = x
    }

    return source
}

