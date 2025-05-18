const {
  cmd
} = require("../command");
const axios = require("axios");
cmd({
  'pattern': "openai",
  'alias': ["chatgpt", "gpt3", "open-gpt"],
  'desc': "Chat with OpenAI",
  'category': 'ai',
  'react': '🧠',
  'filename': __filename
}, async (_0x2436da, _0x1742bb, _0x441a02, {
  from: _0x1aea7d,
  args: _0x41c36b,
  q: _0x738007,
  reply: _0x28f3a0,
  react: _0x402225
}) => {
  try {
    if (!_0x738007) {
      return _0x28f3a0("Please provide a message for OpenAI.\nExample: `.openai Hello`");
    }
    const _0x1f6317 = "https://vapis.my.id/api/openai?q=" + encodeURIComponent(_0x738007);
    const {
      data: _0xcde3e0
    } = await axios.get(_0x1f6317);
    if (!_0xcde3e0 || !_0xcde3e0.result) {
      await _0x402225('❌');
      return _0x28f3a0("OpenAI failed to respond. Please try again later.");
    }
    await _0x28f3a0("🧠 *SILENT-SOBX-MD OPENAI RESPONSE:*\n\n" + _0xcde3e0.result);
    await _0x402225('✅');
  } catch (_0x2b03c7) {
    console.error("Error in OpenAI command:", _0x2b03c7);
    await _0x402225('❌');
    _0x28f3a0("An error occurred while communicating with OpenAI.");
  }
});
cmd({
  'pattern': 'ai',
  'alias': ["bot", "silent", "gpt", "gpt4", "bing"],
  'desc': "Chat with an AI model",
  'category': 'ai',
  'react': '🤖',
  'filename': __filename
}, async (_0x4167d3, _0x36ed71, _0x100d0f, {
  from: _0x621e31,
  args: _0x18935e,
  q: _0x4cffbe,
  reply: _0xbf3493,
  react: _0x5b9125
}) => {
  try {
    if (!_0x4cffbe) {
      return _0xbf3493("Please provide a message for the AI.\nExample: `.ai Hello`");
    }
    const _0x5c4ca1 = "https://lance-frank-asta.onrender.com/api/gpt?q=" + encodeURIComponent(_0x4cffbe);
    const {
      data: _0x195448
    } = await axios.get(_0x5c4ca1);
    if (!_0x195448 || !_0x195448.message) {
      await _0x5b9125('❌');
      return _0xbf3493("AI failed to respond. Please try again later.");
    }
    await _0xbf3493("🤖 *SILENT-SOBX-MD AI RESPONSE :*\n\n" + _0x195448.message);
    await _0x5b9125('✅');
  } catch (_0x132688) {
    console.error("Error in AI command:", _0x132688);
    await _0x5b9125('❌');
    _0xbf3493("An error occurred while communicating with the AI.");
  }
});
cmd({
  'pattern': "deepseek",
  'alias': ["deep", "seekai"],
  'desc': "Chat with DeepSeek AI",
  'category': 'ai',
  'react': '👾',
  'filename': __filename
}, async (_0x55f64c, _0x30cd66, _0x43c520, {
  from: _0x16997f,
  args: _0x49d70b,
  q: _0x2135e3,
  reply: _0xb8519,
  react: _0xa01584
}) => {
  try {
    if (!_0x2135e3) {
      return _0xb8519("Please provide a message for DeepSeek AI.\nExample: `.deepseek Hello`");
    }
    const _0x34c8c1 = "https://api.ryzendesu.vip/api/ai/deepseek?text=" + encodeURIComponent(_0x2135e3);
    const {
      data: _0x4a3d96
    } = await axios.get(_0x34c8c1);
    if (!_0x4a3d96 || !_0x4a3d96.answer) {
      await _0xa01584('❌');
      return _0xb8519("DeepSeek AI failed to respond. Please try again later.");
    }
    await _0xb8519("👾 *SILENT-SOBX-MD DEEPSEEK AI RESPONSE :*\n\n" + _0x4a3d96.answer);
    await _0xa01584('✅');
  } catch (_0x29364b) {
    console.error("Error in DeepSeek AI command:", _0x29364b);
    await _0xa01584('❌');
    _0xb8519("An error occurred while communicating with DeepSeek AI.");
  }
});
