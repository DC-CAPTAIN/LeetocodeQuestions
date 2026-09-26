var fullJustify = function(words, maxWidth) {

    let result = [];
    let i = 0;

    while (i < words.length) {

        let j = i;
        let lineLength = 0;

        while (
            j < words.length &&
            lineLength + words[j].length + (j - i) <= maxWidth
        ) {
            lineLength += words[j].length;
            j++;
        }

        let numberOfWords = j - i;
        let spaces = maxWidth - lineLength;

        let line = "";

        if (j === words.length || numberOfWords === 1) {

            for (let k = i; k < j; k++) {

                line += words[k];

                if (k < j - 1) {
                    line += " ";
                }
            }

            while (line.length < maxWidth) {
                line += " ";
            }

        } else {

            let gaps = numberOfWords - 1;

            let spacesPerGap = Math.floor(spaces / gaps);
            let extraSpaces = spaces % gaps;

            for (let k = i; k < j; k++) {

                line += words[k];

                if (k < j - 1) {

                    let currentSpaces = spacesPerGap;

                    if (k - i < extraSpaces) {
                        currentSpaces++;
                    }

                    line += " ".repeat(currentSpaces);
                }
            }
        }

        result.push(line);

        i = j;
    }

    return result;
};