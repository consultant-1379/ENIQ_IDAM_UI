const fsMock = ({ uiServiceConfig, manualConfig }) => ({
  readFileSync: (filePath) => {
    switch (filePath) {
      case 'config/backend-service-config/backend-service-config.json':
        return JSON.stringify(uiServiceConfig);
      case 'config/backend-service-config/manualconfig.json':
        return JSON.stringify(manualConfig);
      default:
        return '';
    }
  },
  existsSync: () => false,
});

export default fsMock;
