import {LogLevel, CustomLevels} from './levels';
import {CustomActions} from './actions';
type Identifier = string | number;

interface Config {
  minLevel: number;
  maxLevel?: number;
  id?: number;
  name?: string;
  description?: string;
  module?: string;
  customLevels?: CustomLevels;
  customActions?: CustomActions;
  counter?: boolean;
}

export default Config; 