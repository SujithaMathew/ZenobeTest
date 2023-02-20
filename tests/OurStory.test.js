import selector from "./pages/OurStoryPage.js";
import url from "./URL/url.js";

fixture`Zenobe`

test.meta({ testid: 'TC01', type: 'Regression' })('To verify our story page and validate tones of CO2 and Founder popup', async t => {
    await t.navigateTo(url.url_path)
    await t.maximizeWindow()
    await t.expect(selector.homePage.exists).ok().click(selector.dropdownIcon)
    await t.expect(selector.aboutUs.exists).ok()
        .click(selector.aboutUs)
        .click(selector.ourStory)
    await t.expect(selector.ourStoryPage.withText('Our Story').exists).ok()
    await t.expect(selector.tonesOfCO2Update.exists).ok()
    await t.click(selector.zeroToFullPowerSection)
    const co2Updates = await selector.tonesOfCO2Update.innerText
    console.log(co2Updates + " --tonnes of CO 2 saved to date” updates in real time")
    await t.takeScreenshot({
        path: './takeScreenshot/tonesOfCO2.png',
        fullPage: true,
    })
    await t.expect(selector.founderImage.exists).ok()
        .click(selector.founderImage)
    await t.expect(selector.popUpImage.exists).ok()
    await t.expect(selector.popUpFounderName.withText('James Basden').exists).ok()
        .click(selector.popUpCloseButton)
})

test.meta({ testid: 'TC02', type: 'Regression' })('Failed case', async t => {
    await t.navigateTo(url.url_path)
    await t.maximizeWindow()
    await t.expect(selector.homePage.exists).ok().click(selector.dropdownIcon)
    await t.expect(selector.aboutUs.exists).notOk()
})