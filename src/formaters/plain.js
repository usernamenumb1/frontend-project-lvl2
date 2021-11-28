const stringify = (node) => {
  if (typeof node === 'string') return `'${node}'`;
  if (typeof node === 'object' && node !== null) return '[complex value]';
  if (node === null) return null;
  return node;
};

const plain = (arr) => {
  const iter = (node, acc) => node
    .filter((item) => item.type !== 'same')
    .map((item) => {
      const parent = acc ? `${acc}.${item.key}` : item.key;
      switch (item.type) {
        case 'added':
          return `Property '${parent}' was added with value: ${stringify(item.val)}`;
        case 'removed':
          return `Property '${parent}' was removed`;
        case 'updated':
          return `Property '${parent}' was updated. From ${stringify(item.val1)} to ${stringify(item.val2)}`;
        case 'recursion':
          return `${iter(item.children, parent).join('\n')}`;
        default:
          throw new Error(`Not existed type: ${node.type}`);
      }
    });
  return `${iter(arr, '').join('\n')}`;
};

export default plain;
