/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.post('/test', async ({ request }) => {
  const name = request.input('name')
  return { hello: name }
})
