import { RequestLogger } from 'testcafe';

class ApiPage {
    constructor() {
        this.apiBaseUrl = 'http://localhost:3000';
    }

    async getDevices(t) {
        return await t.request(`${this.apiBaseUrl}/devices`);
    }

    async renameDevice(t, deviceId, systemName, type, hddCapacity) {
        return await t.request({
            method: 'PUT',
            url: `${this.apiBaseUrl}/devices/${deviceId}`,
            body: {
                system_name: systemName,
                type: type,
                hdd_capacity: hddCapacity
            }
        });
    }

    async deleteDevice(t, deviceId) {
        return await t.request({
            method: 'DELETE',
            url: `${this.apiBaseUrl}/devices/${deviceId}`
        });
    }
}

export default ApiPage;
