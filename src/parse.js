import yaml from 'js-yaml';

export default (extention, data) => {
  const extentionMap = new Map([
    ['.yml', (file) => yaml.load(file)],
    ['.json', (file) => JSON.parse(file)],
    ['.yaml', (file) => yaml.load(file)],
  ]);
  const parsedData = extentionMap.get(extention);
  return parsedData(data) || new Error(`${extention} format is not supported`);
};
