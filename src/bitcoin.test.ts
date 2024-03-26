import assert from "assert"
import Bitcoin from "./bitcoin";

describe('Bitcoin', () => {

  let bitcoin: Bitcoin

  before(async () => {
    bitcoin = new Bitcoin()
  })

  it('say', async () => {
    try {
      const result = await bitcoin.getNetwork()
      assert.strictEqual(result, ``)
    } catch (err) {
      console.error(err)
      assert.throws(() => {}, err)
    }
  })
})

