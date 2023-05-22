import destr from 'destr'
import { expect, it } from 'vitest'

it('parse grouped result', () => {
  expect(destr(`{
    "Google Search": [
       {"id":1517163162},
    ],
    "Browser Extensions": [
       {"id":1517162830},
    ],
    "NBA Videos": [
       {"id":1517163012},
       {"id":1517163151},
       {"id":1517163154},
       {"id":1517163167}
    ],
    "Movies/TV Shows": [
       {"id":1517163018},
       {"id":1517163173},
       {"id":1517163148}
    ],
    "JSON Tools": [
       {"id":1517163170}
    ]
 }`)).toMatchSnapshot('parse grouped result')
})
