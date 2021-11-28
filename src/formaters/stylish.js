const spacesEnter = (depth) => ' '.repeat(4 * depth);

const stringify = (node, depth) => {
  const symbolSpaces = spacesEnter(depth + 1);
  if (typeof node !== 'object') return `${node}`;
  if (node === null) return null;
  const lines = Object
    .entries(node)
    .map(([key, value]) => `${symbolSpaces}${key}: ${stringify(value, depth + 1)}`);
  return [
    '{',
    ...lines,
    `${spacesEnter(depth)}}`,
  ].join('\n');
};

const stylish = (arr) => {
  const iter = (node, depth) => node.map((item) => {
    const symbolSpaces = spacesEnter(depth);
    const getString = (sym, value) => `${(sym === '+ ' || sym === '- ') ? symbolSpaces.slice(2) : symbolSpaces}${sym}${item.key}: ${stringify(value, depth)}`;
    switch (item.type) {
      case 'same':
        return getString('', item.val);
      case 'added':
        return getString('+ ', item.val);
      case 'removed':
        return getString('- ', item.val);
      case 'updated':
        return `${getString('- ', item.val1)}\n${getString('+ ', item.val2)}`;
      case 'recursion':
        return `${symbolSpaces}${item.key}: {\n${iter(item.children, depth + 1).join('\n')}\n${symbolSpaces}}`;
      default:
        throw new Error(`Not existed type: ${node.type}`);
    }
  });
  return `{\n${iter(arr, 1).join('\n')}\n}`;
};

export default stylish;
