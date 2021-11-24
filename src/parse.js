import yaml from 'js-yaml';

export default (extention, data) => {
  if (extention === '.json') return JSON.parse(data);
  if (extention === '.yml' || extention === '.yaml') return yaml.load(data);
  throw new Error(`${extention} format is not supported`);
};
