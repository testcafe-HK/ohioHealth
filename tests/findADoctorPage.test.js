import { Selector, ClientFunction } from 'testcafe';
import findADoctorPage from '../page-models/findADoctorPage';
import config from '../test-config';

const navigateToFindDoctor = ClientFunction((url) => {
    window.location.href = url;
});

fixture`OhioHealth - Find a Doctor Page`
    .page`about:blank`;

test('Breadcrumb is visible', async t => {
    await t.setNativeDialogHandler(() => false);
    await navigateToFindDoctor(config.findDoctorUrl);

    await t.expect(findADoctorPage.breadcrumb.visible).ok('Breadcrumb should be visible');
});

test('Main heading is hidden (class has hide)', async t => {
    await t.setNativeDialogHandler(() => false);
    await navigateToFindDoctor(config.findDoctorUrl);

    await t.expect(findADoctorPage.mainHeading.exists).ok('Main heading tag exists')
           .expect(findADoctorPage.mainHeading.visible).notOk('Main heading is hidden by CSS');
});

test('MyChart login banner is visible', async t => {
    await t.setNativeDialogHandler(() => false);
    await navigateToFindDoctor(config.findDoctorUrl);

    await t.expect(findADoctorPage.mychartBanner.visible).ok('MyChart banner should be visible');
});

test('MyChart login button exists', async t => {
    await t.setNativeDialogHandler(() => false);
    await navigateToFindDoctor(config.findDoctorUrl);

    await t.expect(findADoctorPage.loginButton.exists).ok('Login button should exist');
});

test('Commonly Searched section is visible', async t => {
    await t.setNativeDialogHandler(() => false);
    await navigateToFindDoctor(config.findDoctorUrl);

    await t.expect(findADoctorPage.commonlySearched.exists).ok('Commonly Searched section should exist');
});

test('Search for Mark Alfonso and verify specialty', async t => {
    await t.setNativeDialogHandler(() => false);
    await navigateToFindDoctor(config.findDoctorUrl);

    const searchInput = Selector('#LOOKING_FOR_AUTOSUGGEST');
    const searchButton = Selector('button').withText(/search/i);
    const resultCard = Selector('main h1').withText('Mark Alfonso, MD');
    const specialtyLabel =Selector('div.specialty');

    await t
        .typeText(searchInput, ' Mark Alfonso')
        .click(searchButton)
        .debug()
        .expect(resultCard.exists).ok('Mark Alfonso should be listed in results')
        .expect(specialtyLabel.innerText).contains('Radiology', 'Specialty should be Radiology');
});
