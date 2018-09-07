module.exports = {
    extends: [
        "@commitlint/config-angular"
    ],
    rules: {
        "scope-enum": [
            2,
            "always",
            [
                // Application enums
                "app",
                "customer",
                "contact",
                "task",
                "core",
                "shared",
                "i18n",
                // Chore enums
                "package",
                "boilerplate",
                "angular",
                "ionic",
                "cordova",
                "lint"
            ]
        ]
    }
};