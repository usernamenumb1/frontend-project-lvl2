const spasesEnter = (sym, spacesCount) => sym.repeat(spacesCount);

export default (coll) => {
  const iter = (node, depth) => {
    const sym = ' ';
    const spaces = 4;
    const symbolSpaces = spasesEnter(sym, spaces * (depth + 1));
    if (typeof node !== 'object') return `${node}`;
    if (node === null) return null;
    const lines = Object
      .entries(node)
      .map(([key, value]) => `${(key.startsWith('+') || key.startsWith('-')) ? symbolSpaces.slice(2) : symbolSpaces}${key}: ${iter(value, depth + 1)}`);
    return [
      '{',
      ...lines,
      `${spasesEnter(sym, spaces * depth)}}`,
    ].join('\n');
  };
  return iter(coll, 0);
};
