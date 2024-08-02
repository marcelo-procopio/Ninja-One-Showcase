import UiElements from './uiElements';

class UiActions {
    constructor() {
        this.elements = new UiElements();
    }

    async clickAddDeviceButton(t) {
        await t.click(this.elements.addDeviceButton);
    }

    async fillDeviceForm(t, systemName, type, hddCapacity) {
        await t
            .typeText(this.elements.systemNameInput, systemName)
            .click(this.elements.typeSelect)
            .click(this.elements.typeSelect.find('option').withText(type))
            .typeText(this.elements.hddCapacityInput, hddCapacity)
            .click(this.elements.submitButton);
    }

    async verifyDeviceDisplayed(t, systemName, type, hddCapacity) {
        const device = this.elements.deviceBox
            .withText(systemName)
            .withText(type)
            .withText(hddCapacity);
    
        await t
            .expect(device.exists).ok('Device is not displayed')
            .expect(device.find('.device-name').innerText).eql(systemName, 'Device name is incorrect')
            .expect(device.find('.device-type').innerText).eql(type, 'Device type is incorrect')
            .expect(device.find('.device-capacity').innerText).eql(hddCapacity, 'Device capacity is incorrect');
    }
    

    async verifyDeviceNotDisplayed(t, systemName) {
        const device = this.elements.deviceBox.withText(systemName);

        await t.expect(device.exists).notOk('Device is still displayed');
    }

    async verifyDeviceUi(t, systemName, type, hddCapacity) {
        const deviceBox = this.elements.deviceBox
            .withText(systemName)
            .withText(type)
            .withText(hddCapacity);

        const uiDetails = {
            name: await deviceBox.find('.device-name').innerText,
            type: await deviceBox.find('.device-type').innerText,
            capacity: await deviceBox.find('.device-capacity').innerText,
            editButtonExists: await deviceBox.find('.device-edit').exists,
            deleteButtonExists: await deviceBox.find('.device-remove').exists
        };

        await t
            .expect(uiDetails.name).eql(systemName, `Expected ${systemName}, but got ${uiDetails.name}`)
            .expect(uiDetails.type).eql(type, `Expected ${type}, but got ${uiDetails.type}`)
            .expect(uiDetails.capacity).eql(hddCapacity, `Expected ${hddCapacity}, but got ${uiDetails.capacity}`)
            .expect(uiDetails.editButtonExists).ok('Edit button is missing')
            .expect(uiDetails.deleteButtonExists).ok('Delete button is missing');
    }
}

export default UiActions;
