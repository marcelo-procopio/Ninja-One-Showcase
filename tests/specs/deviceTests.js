import ApiPage from '../page_objects/apiPage';
import UiActions from '../page_objects/uiActions';
import { NEW_DEVICE, RENAMED_DEVICE } from '../data/deviceData';

fixture `Device Management`
    .page `http://localhost:3001/`;

const apiPage = new ApiPage();
const uiActions = new UiActions();

test('Compare API data with UI and check options', async t => {
    // GET data from API
    const results = await apiPage.getDevices(t);
    const devices = results.body;

    // compare each api result with the UI
    for (const device of devices) {
        await uiActions.verifyDeviceUi(t, device.system_name, device.type, device.hdd_capacity + ' GB');
    }
});

test('Add a new device and verify its display', async t => {
    await uiActions.clickAddDeviceButton(t);
    await uiActions.fillDeviceForm(t, NEW_DEVICE.name, NEW_DEVICE.type, NEW_DEVICE.capacity.split(' ')[0]); // Pass '100' instead of '100 GB'
    await uiActions.verifyDeviceDisplayed(t, NEW_DEVICE.name, NEW_DEVICE.type, NEW_DEVICE.capacity); // '100 GB'
});

test('Rename the first device and verify the change', async t => {
    // GET data from API
    const results = await apiPage.getDevices(t);
    const devices = results.body;

    // Get the ID and current details of the first device
    const firstDevice = devices[0];
    const firstDeviceId = firstDevice.id;
    const currentType = firstDevice.type;
    const currentHddCapacity = firstDevice.hdd_capacity;

    // Rename the first device
    await apiPage.renameDevice(t, firstDeviceId, RENAMED_DEVICE.name, currentType, currentHddCapacity);

    // Reload the page
    await t.navigateTo('http://localhost:3001/');

    await uiActions.verifyDeviceDisplayed(t, RENAMED_DEVICE.name, currentType, currentHddCapacity + ' GB');
});

test('Delete the last device and verify its removal', async t => {
    // GET data from API
    const results = await apiPage.getDevices(t);
    const devices = results.body;

    // Get the ID and name of the last device
    const lastDevice = devices[devices.length - 1];
    const lastDeviceId = lastDevice.id;
    const lastDeviceName = lastDevice.system_name;

    // Delete the last device
    await apiPage.deleteDevice(t, lastDeviceId);

    await t.navigateTo('http://localhost:3001/');

    await uiActions.verifyDeviceNotDisplayed(t, lastDeviceName);
});
