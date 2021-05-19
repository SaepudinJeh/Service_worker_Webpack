const NotificationHelper = {
    sendNotification({ title, options }) {
        if (!this._checkAvailable()) {
            console.log("Notification not supported in this browser!");
            return;
        }

        if (!this._checkPermission()) {
            console.log("User did not yet granted permission");
            this._requestPermission();
            return;
        }

        this._showNotifcation({ title, options });
    },

    _checkAvailable() {
        return !!("Notification" in window);
    },

    _checkPermission() {
        return Notification.permission === "granted";
    },

    async _requestPermission() {
        const status = await Notification.requestPermission();

        if (status === "denied") {
            console.log("Notification Denied!");
        }

        if (status === "default") {
            console.log("Permission closed!");
        }
    },

    async _showNotifcation({ title, options }) {
        const serviceWorkerRegistration = await navigator.serviceWorker.ready;
        serviceWorkerRegistration.showNotification(title, options);
    }
};

export default NotificationHelper;