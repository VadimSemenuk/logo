export default {
  stringToNumber(value: string | undefined): number {
    const price = Number(value);

    if (Number.isNaN(price)) {
      return 0;
    }

    return price;
  },
};
