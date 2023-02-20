import { Selector } from 'testcafe';

export default {
    homePage: Selector('.home'),
    dropdownIcon: Selector('.elementor-icon #Layer_1'),
    aboutUs: Selector('#main-menu #about-us'),
    ourStory: Selector('#main-menu #about-us~ul li a').withText('Our story'),
    ourStoryPage: Selector('.elementor-heading-title.elementor-size-default'),
    tonesOfCO2Update: Selector(' div[id="tco2-count"]'),
    zeroToFullPowerSection: Selector('section[id="jobs"]'),
    founderImage: Selector('.team_member_grid_content .team_member_grid_title').withText('James Basden').parent('div.ue_grid_item'),
    popUpImage: Selector('.dialog-message .elementor-widget-container img'),
    popUpFounderName: Selector('.dialog-message .elementor-widget-container .elementor-heading-title'),
    popUpCloseButton: Selector('.dialog-close-button  .eicon-close')
}