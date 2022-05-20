
import { Builder, Capabilities, By } from "selenium-webdriver"
import { skipPartiallyEmittedExpressions } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

    const wins = await driver.findElement(By.id('wins'))
    const winsSeen = wins.isDisplayed()
    expect(winsSeen).toBeTruthy()

    await driver.findElement(By.id(`draw`)).click()
    const choices = await driver.findElement(By.id('choices'))
    const Divdisplayed = await choices.isDisplayed()
    expect(Divdisplayed).toBeTruthy()

    
    // await driver.findElement(By.id('draw')).click()
    // const header = await driver.findElement(By.id('choose-header'))
    // const headerDisplayed = await header.isDisplayed()
    // expect(headerDisplayed).toBeTruthy()
    
})

