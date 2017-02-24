var expect = require('expect');

var {generateMessage} = require('./utils/message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'test@exemple.com';
    var text = 'hello world';
    var res = generateMessage(from, text);
    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({from, text});
  });
});
