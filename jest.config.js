module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    transform: {
        '^.+\\.vue$': 'vue-jest'
    }
};
