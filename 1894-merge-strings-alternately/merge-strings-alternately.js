/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergedString = "";
    let i = 0, j = 0;

    while (i < word1.length && j < word2.length) {
        mergedString += word1[i] + word2[j];
        i++;
        j++;
    }

    if (i < word1.length) {
        mergedString += word1.substring(i);
    }
    if (j < word2.length) {
        mergedString += word2.substring(j);
    }

    return mergedString;

};