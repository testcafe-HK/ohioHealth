import { Selector } from 'testcafe';

class FindADoctorPage {
    constructor() {
        this.breadcrumb = Selector('.breadcrumbs');
        this.mainHeading = Selector('h1.header-block--intro-heading');
        this.mychartBanner = Selector('#mychart-login-banner');
        this.loginButton = this.mychartBanner.find('a.login-button');
        this.commonlySearched = Selector('#commonly-searched');
    }
}

export default new FindADoctorPage();
