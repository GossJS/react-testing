module.exports = {
    bail: true,
    verbose: true,
    setupFiles: ['./jest.setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer']
};
