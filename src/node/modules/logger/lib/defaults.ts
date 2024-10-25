import {DefaultLevels} from '../interface/levels';

const levels: DefaultLevels = {
  NONE:   { name: "NONE", value: 0, type: "none"    },
  META:   { name: "META", value: 10, type: "default"   },
  TRACE:  { name: "TRACE", value: 20, type: "default"  },
  DEBUG:  { name: "DEBUG", value: 30, type: "default"  },
  INFO:   { name: "INFO", value: 40, type: "default"   },
  NOTICE: { name: "NOTICE", value: 50, type: "default" },
  WARN:   { name: "WARN", value: 60, type: "default"   },
  ERROR:  { name: "ERROR", value: 70, type: "default"  },
  PANIC:  { name: "PANIC", value: 80, type: "default"  },
  FATAL:  { name: "FATAL", value: 90, type: "default"  }
}

export default levels;
