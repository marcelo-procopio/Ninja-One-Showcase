import { Selector } from 'testcafe';

class UiElements {
    constructor() {
        // Define selectors for UI elements
        this.deviceBox = Selector('.device-main-box');
        this.addDeviceButton = Selector('a.submitButton').withText('ADD DEVICE');
        this.systemNameInput = Selector('#system_name');
        this.typeSelect = Selector('#type');
        this.hddCapacityInput = Selector('#hdd_capacity');
        this.submitButton = Selector('button.submitButton');
    }
}

export default UiElements;
