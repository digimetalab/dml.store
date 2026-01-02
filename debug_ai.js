
const { streamText } = require('ai');
const { createOpenRouter } = require('@openrouter/ai-sdk-provider');

// Mock request
async function run() {
  try {
    const model = createOpenRouter({ apiKey: 'mock' })('deepseek/deepseek-v3.2');
    
    // We can't easily mock the API call without a key, but we can check the streamText function signature or result prototype if we mock the model implementation?
    // Or we can just inspect the `streamText` export.
    
    console.log('streamText type:', typeof streamText);
    
    // Mock model that returns a stream immediately
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

    console.log('Result keys:', Object.keys(result));
    console.log('Result prototype methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(result)));
    console.log('Has toDataStreamResponse:', typeof result.toDataStreamResponse);
    console.log('Has toTextStreamResponse:', typeof result.toTextStreamResponse);
    
    // Simulate toUIMessageStreamResponse output
    if (result.toUIMessageStreamResponse) {
        console.log('--- Simulating toUIMessageStreamResponse output ---');
        const response = result.toUIMessageStreamResponse();
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            console.log(decoder.decode(value));
        }
        console.log('--- End of stream ---');
    }

  } catch (e) {
    console.error(e);
  }
}

run();
