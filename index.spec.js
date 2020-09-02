describe('nock done call', function() {
  // I know it's a weird test, but at least it demonstrates the behaviour. :)
  it('should not succeed', async function() {
	const fetch = require('node-fetch')
	const nock = require('nock')
	const testing = require('@testing-library/dom')
	
    const scope = nock('https://google.com').get('/').delay(3000).reply(200, 'Hello from Google!')
    fetch('https://google.com')
    await testing.waitFor(() => scope.done(), { timeout: 1000 })
  });
});
