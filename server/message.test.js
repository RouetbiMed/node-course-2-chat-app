var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./utils/message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'test@exemple.com';
    var text = 'hello world';
    var res = generateMessage(from, text);
    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'test@exemple.com';
    var lat = 15;
    var lng = 19;
    var url = `https://www.google.com/maps?q=15,19`;
    var res = generateLocationMessage(from, lat, lng);
    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({from, url});
  });
});
