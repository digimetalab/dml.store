
const ReactSDK = require('@ai-sdk/react');
console.log('Exports:', Object.keys(ReactSDK));

// access the actual file content if possible or just log types if TS
// Since we can't easily run react code in node without setup, we strictly check exports.
