import { test } from '@japa/runner'

test.group('Csrf', () => {
  test('example test', async ({ client, assert }) => {
    const response = await client.post('/test').withCsrfToken().json({ name: 'John' })

    response.assertStatus(200)
    assert.deepEqual({ hello: 'John' }, response.body())
  })
})
