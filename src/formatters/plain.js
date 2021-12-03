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
      const typesMap = {
        added: () => `Property '${parent}' was added with value: ${stringify(item.val)}`,
        removed: () => `Property '${parent}' was removed`,
        updated: () => `Property '${parent}' was updated. From ${stringify(item.val1)} to ${stringify(item.val2)}`,
        node: () => `${iter(item.children, parent).join('\n')}`,
      };
      return typesMap[item.type]();
    });
  return `${iter(arr, '').join('\n')}`;
};

export default plain;
