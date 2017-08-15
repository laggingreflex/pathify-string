const path = require('path');

for (const key in path) {
  if (typeof path[key] === 'function') {
    Object.defineProperty(String.prototype, key, {
      get() {
        const str = this + '';
        let value;
        try {
          value = path[key](str);
        } catch (error) {}
        const fn = function(...args) {
          return path[key](str, ...args.map(a => a + ''));
        };
        if (value) {
          fn.valueOf = () => value;
        }
        return fn;
      }
    });
  }
}
