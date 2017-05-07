// SAMPLE
window.manifest = {
    "name": "IoT dashboard extension preferences",
    "icon": "icon.png",
    "settings": [
        {
            "tab": "Information",
            "group": "IoT Server",
            "name": "server",
            "type": "text",
            "label": "Server IP:",
            "text": "http://10.2.34.69:3000"
        },
        {
            "tab": "Information",
            "group": "IoT Server",
            "name": "description",
            "type": "description",
            "text": i18n.get("description")
        },

        // ------------------------------------------
        {
            "tab": "Information",
            "group": "Credentials",
            "name": "username",
            "type": "text",
            "label": "Username:",
            "text": "Your username"
        },
        {
            "tab": "Information",
            "group": "Credentials",
            "name": "password",
            "type": "text",
            "label": "Password:",
            "text": "Your password",
            "masked": true
        },
        {
            "tab": "Information",
            "group": "Credentials",
            "name": "description",
            "type": "description",
            "text": i18n.get("description-credentials")
        },
        
        // ------------------------------------------
        {
            "tab": "Alarms",
            "group": "Gas",
            "name": "triggerGasWarning",
            "type": "slider",
            "label": "Gas warning threshold:",
            "max": 1,
            "min": 0,
            "step": 0.01,
            "display": true,
            "displayModifier": function (value) {
                return (value * 100).floor() + "%";
            }
        },
        {
            "tab": "Alarms",
            "group": "Gas",
            "name": "triggerGasAlert",
            "type": "slider",
            "label": "Gas critical threshold:",
            "max": 1,
            "min": 0,
            "step": 0.01,
            "display": true,
            "displayModifier": function (value) {
                return (value * 100).floor() + "%";
            }
        },

        // ------------------------------------------
        /*{
            "tab": "Details",
            "group": "Sound",
            "name": "noti_volume",
            "type": "slider",
            "label": "Notification volume:",
            "max": 1,
            "min": 0,
            "step": 0.01,
            "display": true,
            "displayModifier": function (value) {
                return (value * 100).floor() + "%";
            }
        },
        {
            "tab": "Details",
            "group": "Sound",
            "name": "sound_volume",
            "type": "slider",
            "label": "Sound volume:",
            "max": 100,
            "min": 0,
            "step": 1,
            "display": true,
            "displayModifier": function (value) {
                return value + "%";
            }
        }*/
    ],
    "alignment": [
        [
            "server",
            "username",
            "password"
        ],
        [
            "triggerGasWarning",
            "triggerGasAlert"
        ]
    ]
};
