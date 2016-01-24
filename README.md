# Update JSON

NodeJS module for updating JSON files.

Ideal for simple JSON modifications, e.g. bumping version of `package.json`, etc.

# Install

```shell
npm install update-json
```

## How to use it

```javascript
var updateJson = require('update-json');

// let's assume the file contains this:
// {aaa: 'bbb', ccc: 'ddd'}
var file_path = './test.json';

var data = {ccc: 'xxx', yyy: 'zzz'};

updateJson(file_path, data, function (error) {
  if (error) {
    throw error;
  }
  else {
    // now the file contains this:
    // {aaa: 'bbb', ccc: 'xxx', yyy: 'zzz'}
  }
});
```

## Bug reports, feature requests and contact

If you found any bugs, if you have feature requests or any questions, please, either [file an issue at GitHub](https://github.com/fczbkk/update-json/issues) or send me an e-mail at [riki@fczbkk.com](mailto:riki@fczbkk.com).

## License

This library is published under the [MIT license](https://github.com/fczbkk/update-json/blob/master/LICENSE).
