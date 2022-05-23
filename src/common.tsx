const cx = (...args: string[]) => args.join(" ");

const normalize = (str: string) =>
  str.normalize("NFD").replace(/\p{Diacritic}/gu, "");

export { cx, normalize };
