
const { streamText } = require('ai');
const { createOpenRouter } = require('@openrouter/ai-sdk-provider');

async function run() {
  try {
    const mockModel = {
      specificationVersion: 'v2',
      provider: 'mock',
      modelId: 'mock-model',
      doStream: async () => ({
        stream: new ReadableStream({
          start(controller) {
            controller.enqueue({ type: 'text-delta', textDelta: 'hello' });
            controller.close();
          }
        }),
        rawCall: { rawPrompt: null, rawSettings: {} }
      })
    };

    const result = streamText({
      model: mockModel,
      messages: [{ role: 'user', content: 'hello' }],
    });

    console.log('Has toDataStreamResponse:', typeof result.toDataStreamResponse);
    console.log('Has toDataStream:', typeof result.toDataStream);
    console.log('Has pipeDataStreamToResponse:', typeof result.pipeDataStreamToResponse);

  } catch (e) {
    console.error(e);
  }
}

run();
