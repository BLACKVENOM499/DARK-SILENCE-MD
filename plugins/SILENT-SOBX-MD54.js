const axios = require("axios");
const {
  cmd
} = require("../command");
function getFlagEmoji(_0x4bbbbc) {
  if (!_0x4bbbbc) {
    return '';
  }
  return _0x4bbbbc.toUpperCase().split('').map(_0x5de7f4 => String.fromCodePoint(_0x5de7f4.charCodeAt(0) + 127397)).join('');
}
cmd({
  'pattern': "check",
  'react': '🔍',
  'desc': "Checks the country calling code and returns the corresponding country name(s) with flag",
  'category': "utility",
  'filename': __filename
}, async (_0x4c3ca8, _0x5a24af, _0x4ae5e9, {
  from: _0x529a38,
  args: _0x5219c9,
  reply: _0x5879af
}) => {
  try {
    let _0x338935 = _0x5219c9[0];
    if (!_0x338935) {
      return _0x5879af("*🎐 ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ. ᴇxᴀᴍᴘʟᴇ: `.ᴄʜᴇᴄᴋ 𝟿𝟸`*");
    }
    _0x338935 = _0x338935.replace(/\+/g, '');
    const {
      data: _0x415b8a
    } = await axios.get("https://restcountries.com/v2/all");
    const _0x3b90a5 = _0x415b8a.filter(_0x37742d => _0x37742d.callingCodes && _0x37742d.callingCodes.includes(_0x338935));
    if (_0x3b90a5.length > 0) {
      const _0x4de1f4 = _0x3b90a5.map(_0x166984 => getFlagEmoji(_0x166984.alpha2Code) + " " + _0x166984.name).join("\n");
      _0x5879af("📮 *COUNTRY CODE*: " + _0x338935 + "\n🌍 *COUNTRIES*:\n" + _0x4de1f4 + "\n\n> ©POWERD BY SILENTLOVER432 ♥️");
    } else {
      _0x5879af("❌ No country found for the code " + _0x338935 + '.');
    }
  } catch (_0xa07067) {
    console.error(_0xa07067);
    _0x5879af("❌ An error occurred while checking the country code.");
  }
});
cmd({
  'pattern': "convertmoney",
  'react': '💸',
  'alias': ["currency", "cvmoney"],
  'desc': "Convert money from one currency to another currency",
  'category': "utility",
  'use': ".currency amount fromCurrency toCurrency (e.g: .convert 100 USD EUR)",
  'filename': __filename
}, async (_0x587955, _0x150678, _0x3c7d7c, {
  from: _0x1f6290,
  reply: _0x1ca9d9,
  args: _0x6a48c0
}) => {
  try {
    if (_0x6a48c0.length !== 3) {
      return _0x1ca9d9("*⭕ ɪɴᴠᴀʟɪᴅ ғᴏʀᴍᴀᴛ! ᴜsᴇ: .ᴄᴜʀʀᴇɴᴄʏ ᴀᴍᴏᴜɴᴛ ғʀᴏᴍᴄᴜʀʀᴇɴᴄʏ ᴛᴏᴄᴜʀʀᴇɴᴄʏ*\n*ᴇxᴀᴍᴘʟᴇ: .ᴄᴜʀʀᴇɴᴄʏ 𝟷𝟶𝟶 ᴜsᴅ ᴘᴋʀ*");
    }
    const _0x4014aa = parseFloat(_0x6a48c0[0]);
    const _0x375918 = _0x6a48c0[1].toUpperCase();
    const _0x198194 = _0x6a48c0[2].toUpperCase();
    if (isNaN(_0x4014aa)) {
      return _0x1ca9d9("*❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴀᴍᴏᴜɴᴛ!*");
    }
    const _0x3f9438 = await axios.get("https://v6.exchangerate-api.com/v6/9c8b8532d40e5da04fac9772/latest/" + _0x375918);
    if (_0x3f9438.data.result === "error") {
      throw new Error(_0x3f9438.data["error-type"]);
    }
    const _0x32264c = _0x3f9438.data.conversion_rates;
    if (!_0x32264c[_0x198194]) {
      return _0x1ca9d9("*❌ ɪɴᴠᴀʟɪᴅ ᴛᴀʀɢᴇᴛ ᴄᴜʀʀᴇɴᴄʏ ᴄᴏᴅᴇ! ᴘʟᴇᴀsᴇ ᴜsᴇ ᴠᴀʟɪᴅ ᴄᴜʀʀᴇɴᴄʏ ᴄᴏᴅᴇs ʟɪᴋᴇ ᴜsᴅ, ᴇᴜʀ, ɢʙᴘ, ᴇᴛᴄ.*");
    }
    const _0x42ae3a = (_0x4014aa * _0x32264c[_0x198194]).toFixed(2);
    const _0x5b14ab = new Intl.NumberFormat().format(_0x4014aa);
    const _0x6afc66 = new Intl.NumberFormat().format(_0x42ae3a);
    const _0x279468 = "*🌍 sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ ᴄᴜʀʀᴇɴᴄʏ ᴄᴏɴᴠᴇʀsɪᴏɴ 💵*\n\n" + ("*💲 ғʀᴏᴍ:* " + _0x5b14ab + " " + _0x375918 + "\n") + ("*🏷️ ᴛᴏ:* " + _0x6afc66 + " " + _0x198194 + "\n") + ("*💰 ʀᴀᴛᴇ:* 1 " + _0x375918 + " = " + _0x32264c[_0x198194] + " " + _0x198194 + "\n\n") + ("*⏰ ʟᴀsᴛ ᴜᴘᴅᴀᴛᴇᴅ:* " + _0x3f9438.data.time_last_update_utc + "\n\n") + "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²*";
    _0x1ca9d9(_0x279468);
  } catch (_0x5ec8d3) {
    console.error("Currency conversion error:", _0x5ec8d3);
    if (_0x5ec8d3.message === "unsupported-code") {
      _0x1ca9d9("❌ Invalid currency code! Please use valid currency codes like USD, EUR, GBP, etc.");
    } else {
      if (_0x5ec8d3.message === "malformed-request") {
        _0x1ca9d9("❌ Invalid API request format. Please try again.");
      } else {
        if (_0x5ec8d3.message === "invalid-key") {
          _0x1ca9d9("❌ API key validation failed. Please contact the administrator.");
        } else {
          if (_0x5ec8d3.message === "inactive-account") {
            _0x1ca9d9("❌ API account is not active. Please contact the administrator.");
          } else if (_0x5ec8d3.message === "quota-reached") {
            _0x1ca9d9("❌ API quota has been reached. Please try again later.");
          } else {
            _0x1ca9d9("❌ Failed to convert currency. Please try again later.");
          }
        }
      }
    }
  }
});
