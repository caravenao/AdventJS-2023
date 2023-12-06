function findFirstRepeated(gifts) {
    const seen = new Set();
    for (const gift of gifts) {
      if (seen.has(gift)) {
        return gift;
      }
      seen.add(gift);
    }
    return -1;
  }

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)