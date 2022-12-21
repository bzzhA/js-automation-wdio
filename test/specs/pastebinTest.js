describe('Pastebin test textarea', async () => {
    it('Paste in textarea some text', async () => {
        await browser.url('https://pastebin.com/')
        await $('#postform-text').setValue('Hello from WebDriver')
        await browser.scroll(0, 500)
        await $('#select2-postform-expiration-container').click()
        await $('#select2-postform-expiration-results').$('li=10 Minutes').click()
        await browser.scroll(0, 500)
        await $('#postform-name').setValue('helloweb')
        await $('.btn').click()
    })
})

describe('Pastebin test textarea part two', async () => {
    it('Paste in textarea some text part two', async () => {
        await browser.newWindow('https://pastebin.com/')
        await $('#postform-text').setValue('git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force')
        await browser.scroll(0, 500)
        await $('#select2-postform-format-container').click()
        await $('/html/body/span[2]/span/span[2]/ul/li[2]/ul/li[1]').click()
        await $('#select2-postform-expiration-container').click()
        await $('#select2-postform-expiration-results').$('li=10 Minutes').click()
        await browser.scroll(0, 500)
        await $('#postform-name').setValue('how to gain dominance among developers')
        await $('.btn').click()
    })
  })