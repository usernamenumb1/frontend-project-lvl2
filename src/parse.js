import yaml from 'js-yaml';

export default (extention, data) => {
  const extentionMap = new Map([
    ['.json', (file) => JSON.parse(file)],
    ['.yml', (file) => yaml.load(file)],
    ['.yaml', (file) => yaml.load(file)],
  ]);
  const parsedData = extentionMap.has(extention) ? extentionMap.get(extention)(data) : null;
  if (!parsedData) throw new Error(`${extention} format is not supported`);
  return parsedData;
};
