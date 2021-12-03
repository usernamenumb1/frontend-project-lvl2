import _ from 'lodash';
import stylish from './stylish.js';
import plain from './plain.js';

export default (coll, format) => {
  const formatsMap = {
    stylish: () => stylish(coll),
    plain: () => plain(coll),
    json: () => JSON.stringify(coll),
  };
  if (!_.has(formatsMap, format)) throw new Error(`Output format ${format} not exist`);
  return formatsMap[format]();
};
