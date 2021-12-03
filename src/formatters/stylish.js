const repeatSpaces = (depth) => ' '.repeat(4 * depth);

const stringify = (node, depth) => {
  const emptySpace = repeatSpaces(depth + 1);
  if (typeof node !== 'object') return `${node}`;
  if (node === null) return null;
  const lines = Object
    .entries(node)
    .map(([key, value]) => `${emptySpace}${key}: ${stringify(value, depth + 1)}`);
  return [
    '{',
    ...lines,
    `${repeatSpaces(depth)}}`,
  ].join('\n');
};

const stylish = (arr) => {
  const iter = (node, depth) => node.map((item) => {
    const emptySpace = repeatSpaces(depth);
    const getString = (sym, value) => `${(sym === '+ ' || sym === '- ') ? emptySpace.slice(2) : emptySpace}${sym}${item.key}: ${stringify(value, depth)}`;
    const typesMap = {
      same: () => getString('', item.val),
      added: () => getString('+ ', item.val),
      removed: () => getString('- ', item.val),
      updated: () => `${getString('- ', item.val1)}\n${getString('+ ', item.val2)}`,
      node: () => `${emptySpace}${item.key}: {\n${iter(item.children, depth + 1).join('\n')}\n${emptySpace}}`,
    };
    return typesMap[item.type]();
  });
  return `{\n${iter(arr, 1).join('\n')}\n}`;
};

export default stylish;
