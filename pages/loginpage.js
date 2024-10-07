const {expect} = require("@playwright/test")

class LoginPage{
    
    constructor(page){
        this.page=page
        this.header="//a[normalize-space()='New user? Signup']"
        this.username ='#email1'
        this.password = "//input[@placeholder='Enter Password']"
        this.loginbutton = "//button[text()='Sign in']"
    }

    //function to login to the app
    //"admin@email.com" - "admin@123"
    async loginToApplication(username, password){
        await this.page.fill(this.username, username)
        await this.page.fill(this.password, password)
        await this.page.click(this.loginbutton)
    }

    async verifySignIn(){
        await expect(this.page.locator(this.header)).toBeVisible()

    }


}

export default LoginPage;