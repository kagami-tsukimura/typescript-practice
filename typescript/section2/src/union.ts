const SIZETO = {
  SMALL: 's',
  MEDIUM: 'm',
  LARGE: 'l',
} as const;

// key of
// type of
// NOTE: "SMALL" | "MEDIUM" | "LARGE"
type Size = keyof typeof SIZETO;

const allSize = (size: Size) => {
  console.log(size);
};

// SMALL
allSize('SMALL');

const s: string = 'SMALL';
// error
// allSize(s)
