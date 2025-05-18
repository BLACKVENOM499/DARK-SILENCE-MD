(function (_0x224eac, _0x2fc60c) {
  const _0x5b06a7 = _0x224eac();
  while (true) {
    try {
      const _0x4de94d = -parseInt(_0x4ae5(486, 0x54d)) / 1 * (-parseInt(_0x4ae5(444, 0x409)) / 2) + parseInt(_0x4ae5(301, -0x230)) / 3 + parseInt(_0x4ae5(413, 0x5c)) / 4 + -parseInt(_0x4ae5(776, 0x62b)) / 5 + parseInt(_0x4ae5(656, 0x5d3)) / 6 + -parseInt(_0x4ae5(910, 0x2b7)) / 7 + -parseInt(_0x4ae5(1002, 0x65c)) / 8 * (parseInt(_0x4ae5(531, 0x594)) / 9);
      if (_0x4de94d === _0x2fc60c) {
        break;
      } else {
        _0x5b06a7.push(_0x5b06a7.shift());
      }
    } catch (_0x598364) {
      _0x5b06a7.push(_0x5b06a7.shift());
    }
  }
})(_0x1943, 906350);
const _0x591ead = function () {
  const _0x32ca93 = {
    HfqsR: function (_0x125cd4, _0x1d0797) {
      return _0x125cd4 !== _0x1d0797;
    }
  };
  _0x32ca93.eLrLr = 'VJerj';
  let _0x4aa717 = true;
  return function (_0x2eb608, _0x570e55) {
    if ("VJerj" !== _0x32ca93.eLrLr) {
      return _0x376cf9("*🫟 ᴇxᴀᴍᴘʟᴇ: . ᴀʟᴡᴀʏs_ᴏɴʟɪɴᴇ ᴏɴ*");
    } else {
      const _0x4b33a0 = _0x4aa717 ? function () {
        if (_0x570e55) {
          const _0x4b8938 = _0x570e55.apply(_0x2eb608, arguments);
          _0x570e55 = null;
          return _0x4b8938;
        }
      } : function () {};
      _0x4aa717 = false;
      return _0x4b33a0;
    }
  };
}();
const _0x2f776f = _0x591ead(this, function () {
  return _0x2f776f.toString().search("(((.+)+)+)+$").toString().constructor(_0x2f776f).search("(((.+)+)+)+$");
});
function _0x4ae5(_0x2baa4b, _0x2f776f) {
  const _0x591ead = _0x1943();
  _0x4ae5 = function (_0x19435a, _0x4ae560) {
    _0x19435a = _0x19435a - 251;
    let _0x26b45d = _0x591ead[_0x19435a];
    return _0x26b45d;
  };
  return _0x4ae5(_0x2baa4b, _0x2f776f);
}
_0x2f776f();
const _0x1dd1bd = function () {
  let _0x14f48d = true;
  return function (_0x105a60, _0x2c6514) {
    const _0x1b0f0e = _0x14f48d ? function () {
      if (_0x2c6514) {
        const _0x4600bc = _0x2c6514.apply(_0x105a60, arguments);
        _0x2c6514 = null;
        return _0x4600bc;
      }
    } : function () {};
    _0x14f48d = false;
    return _0x1b0f0e;
  };
}();
const _0xec6f66 = _0x1dd1bd(this, function () {
  let _0x501d16;
  try {
    const _0x47b08f = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x501d16 = _0x47b08f();
  } catch (_0x5966ff) {
    _0x501d16 = window;
  }
  const _0x562aae = _0x501d16.console = _0x501d16.console || {};
  const _0x5173d4 = ["log", 'warn', "info", "error", 'exception', "table", "trace"];
  for (let _0x2d8571 = 0; _0x2d8571 < _0x5173d4.length; _0x2d8571++) {
    const _0xc7d88b = _0x1dd1bd.constructor.prototype.bind(_0x1dd1bd);
    const _0x2c6a76 = _0x5173d4[_0x2d8571];
    const _0x1896d9 = _0x562aae[_0x2c6a76] || _0xc7d88b;
    _0xc7d88b.__proto__ = _0x1dd1bd.bind(_0x1dd1bd);
    _0xc7d88b.toString = _0x1896d9.toString.bind(_0x1896d9);
    _0x562aae[_0x2c6a76] = _0xc7d88b;
  }
});
_0xec6f66();
const {
  cmd,
  commands
} = require("../command");
const config = require("../config");
const fs = require('fs');
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  sleep,
  fetchJson
} = require("../lib/functions");
const {
  setCommitHash,
  getCommitHash
} = require("../silentlover/SILENT-SOBX-MD");
let antilinkAction = "off";
let warnCount = {};
const _0x2d5f97 = {
  pattern: "setprefix",
  alias: ['prefix'],
  desc: "Change bot prefix.",
  category: "settings",
  filename: __filename
};
cmd(_0x2d5f97, async (_0x468331, _0x23d50a, _0x3938d1, {
  from: _0x48ea6b,
  args: _0x29b5a9,
  isOwner: _0x1ad5a4,
  reply: _0x37bfc8
}) => {
  if (!_0x1ad5a4) {
    return _0x37bfc8("*📛 Only the owner can use this command!*");
  }
  if (!_0x29b5a9[0]) {
    return _0x37bfc8("❌ Please provide a new prefix.");
  }
  const _0x1db18f = _0x29b5a9[0];
  config.PREFIX = _0x1db18f;
  fs.writeFileSync("./config.json", JSON.stringify(config, null, 2));
  _0x37bfc8("*Prefix changed to:* " + _0x1db18f);
  const {
    exec: _0x40c225
  } = require("child_process");
  _0x37bfc8("*_DATABASE UPDATE SILENT-SOBX-MD RESTARTING NOW...🚀_*");
  await sleep(1500);
  _0x40c225("pm2 restart all");
  _0x37bfc8("*_SILENT-SOBX-MD STARTED NOW...🚀_*");
});
const _0x1b08ee = {
  pattern: "mode",
  desc: "Set bot mode to private or public.",
  category: "settings",
  filename: __filename
};
cmd(_0x1b08ee, async (_0x4c059d, _0x888da9, _0x324bb4, {
  from: _0x35916a,
  args: _0x329ac7,
  isOwner: _0xb9f31,
  reply: _0x4e06c7
}) => {
  if (!_0xb9f31) {
    return _0x4e06c7("*📛 Only the owner can use this command!*");
  }
  if (!_0x329ac7[0]) {
    return _0x4e06c7("📌 Current mode: *" + config.MODE + "*\n\nUsage: .mode private OR .mode public");
  }
  const _0x4375d5 = _0x329ac7[0].toLowerCase();
  if (_0x4375d5 === "private") {
    config.MODE = "private";
    return _0x4e06c7("*_BOT MODE IS NOW SET TO PRIVATE ✅_*.");
  } else {
    if (_0x4375d5 === 'public') {
      config.MODE = "public";
      return _0x4e06c7("*_BOT MODE IS NOW SET TO PUBLIC ✅_*.");
      const {
        exec: _0x10fd95
      } = require("child_process");
      _0x4e06c7("*_DATABASE UPDATE SILENT-SOBX-MD RESTARTING NOW...🚀_*");
      await sleep(1500);
      _0x10fd95("pm2 restart all");
      _0x4e06c7("*_SILENT-SOBX-MD STARTED NOW...🚀_*");
    } else {
      return _0x4e06c7("❌ Invalid mode. Please use `.mode private` or `.mode public`.");
    }
  }
});
const _0x59cc10 = {
  pattern: "fake_typing",
  alias: ['faketyping'],
  desc: "enable or disable auto-reply.",
  category: "settings",
  filename: __filename
};
cmd(_0x59cc10, async (_0x3ef42c, _0xb82421, _0x3198cf, {
  from: _0xfbedcf,
  args: _0x14cd18,
  isOwner: _0x5cb4ef,
  reply: _0x278172
}) => {
  if (!_0x5cb4ef) {
    return _0x278172("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
  }
  if (_0x14cd18[0] === 'on') {
    config.FAKE_TYPING = "true";
    return _0x278172("*_FAKETYPING  IS NOW ENABLED._*☑️");
  } else {
    return _0x14cd18[0] === "off" ? (config.FAKE_TYPING = "false", _0x278172("*_FAKETYPING FEATURE IS NOW DISABLED._*❌")) : _0x278172("*🫟 ᴇxᴀᴍᴘʟᴇ: . ғᴀᴋᴇ_ᴛʏᴘɪɴɢ ᴏɴ*");
  }
});
const _0x3db6cf = {
  pattern: "always_online",
  alias: ["alwaysonline"],
  desc: "enable or disable auto-reply.",
  category: 'settings',
  filename: __filename
};
cmd(_0x3db6cf, async (_0x270063, _0x3a8f58, _0x163c34, {
  from: _0x64ec15,
  args: _0x4e8bfa,
  isOwner: _0x36433d,
  reply: _0x4ac454
}) => {
  if (!_0x36433d) {
    return _0x4ac454("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
  }
  if (_0x4e8bfa[0] === 'on') {
    config.ALWAYS_ONLINE = "true";
    return _0x4ac454("*_ALWAYSONLINE  IS NOW ENABLED._*☑️");
  } else {
    return _0x4e8bfa[0] === "off" ? (config.ALWAYS_ONLINE = "false", _0x4ac454("*_ALWAYSONLINE FEATURE IS NOW DISABLED._*❌")) : _0x4ac454("*🫟 ᴇxᴀᴍᴘʟᴇ: . ᴀʟᴡᴀʏs_ᴏɴʟɪɴᴇ ᴏɴ*");
  }
});
const _0x31d8c7 = {
  pattern: "fake_reacording",
  alias: ["fake recording"],
  desc: "enable or disable auto-reply.",
  category: 'settings',
  filename: __filename
};
cmd(_0x31d8c7, async (_0x1353df, _0x192862, _0x1a7736, {
  from: _0x796cc2,
  args: _0x76b255,
  isOwner: _0x2bd508,
  reply: _0x3b6bda
}) => {
  if (!_0x2bd508) {
    return _0x3b6bda("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
  }
  if (_0x76b255[0] === 'on') {
    config.FAKE_REACORDING = "true";
    return _0x3b6bda("*_FAKEREACORDING IS NOW ENABLED._*☑️");
  } else {
    return _0x76b255[0] === "off" ? (config.FAKE_REACORDING = "false", _0x3b6bda("*_FAKEREACORDING FEATURE IS NOW DISABLED._*❌")) : _0x3b6bda("*🫟 ᴇxᴀᴍᴘʟᴇ: . ғᴀᴋᴇ_ʀᴇᴀᴄᴏʀᴅɪɴɢ ᴏɴ*");
  }
});
const _0x17567b = {
  pattern: "auto_read_status",
  alias: ["autostatusview"],
  desc: "Enable or disable auto-viewing of statuses",
  category: 'settings',
  filename: __filename
};
cmd(_0x17567b, async (_0xd28f81, _0x2a8727, _0x30d901, {
  from: _0x3b3644,
  args: _0x3c9e8e,
  isOwner: _0x429adf,
  reply: _0x262725
}) => {
  if (!_0x429adf) {
    return _0x262725("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
  }
  if (_0x3c9e8e[0] === 'on') {
    config.AUTO_READ_STATUS = 'true';
    return _0x262725("*_AUTOREADSTATUS IS NOW ENABLED._*☑️");
  } else {
    return _0x3c9e8e[0] === "off" ? (config.AUTO_READ_STATUS = "false", _0x262725("*_AUTOREADSTATUS IS NOW DISABLED._*❌")) : _0x262725("*🫟 ᴇxᴀᴍᴘʟᴇ:  .ᴀᴜᴛᴏ-sᴇᴇɴ ᴏɴ*");
  }
});
const _0xd6c719 = {
  pattern: "status_react",
  alias: ["statusreaction"],
  desc: "Enable or disable auto-liking of statuses",
  category: "settings",
  filename: __filename
};
cmd(_0xd6c719, async (_0x55a41b, _0x4d5ff0, _0xdc7bbd, {
  from: _0x517b14,
  args: _0x4c13b7,
  isOwner: _0x3889a3,
  reply: _0x10cf27
}) => {
  if (!_0x3889a3) {
    return _0x10cf27("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
  }
  if (_0x4c13b7[0] === 'on') {
    config.AUTO_LIKE_STATUS = "true";
    return _0x10cf27("*_AUTOLIKESTATUS IS NOW ENABLED._*☑️");
  } else {
    if (_0x4c13b7[0] === "off") {
      config.AUTO_LIKE_STATUS = "false";
      return _0x10cf27("*_AUTOLIKESTATUS IS NOW DISABLED._*❌");
    } else {
      return _0x10cf27("Example: . status_react on");
    }
  }
});
const _0x31d57f = {
  pattern: "read_message",
  alias: ['autoread'],
  desc: "enable or disable readmessage.",
  category: "settings",
  filename: __filename
};
cmd(_0x31d57f, async (_0x19b4ff, _0x52c096, _0x2b69db, {
  from: _0x209ab0,
  args: _0x4f7c65,
  isOwner: _0x6bdd1,
  reply: _0x4edd99
}) => {
  if (!_0x6bdd1) {
    return _0x4edd99("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
  }
  if (_0x4f7c65[0] === 'on') {
    config.READ_MESSAGE = "true";
    return _0x4edd99("*_READ MESSAGE FEATURE IS NOW ENABLED._*☑️");
  } else {
    if (_0x4f7c65[0] === "off") {
      config.READ_MESSAGE = 'false';
      return _0x4edd99("*_READ MESSAGE FEATURE IS NOW DISABLED._*❌");
    } else {
      return _0x4edd99("_example:  .READ_MESSAGE on_");
    }
  }
});
const _0x5a4c58 = {
  pattern: 'anti_bad',
  alias: ["antibadword"],
  desc: "enable or disable antibad.",
  category: "settings",
  filename: __filename
};
cmd(_0x5a4c58, async (_0x4b6094, _0x47802b, _0x57d925, {
  from: _0x129d5b,
  args: _0x413dd9,
  isOwner: _0x2e0355,
  reply: _0x27bfa5
}) => {
  if (!_0x2e0355) {
    return _0x27bfa5("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
  }
  if (_0x413dd9[0] === 'on') {
    config.ANTI_BAD = "true";
    return _0x27bfa5("*_ANTI BAD WORD IS NOW ENABLED._*☑️");
  } else {
    if (_0x413dd9[0] === "off") {
      config.ANTI_BAD = 'false';
      return _0x27bfa5("*_ANTI BAD WORD FEATURE IS NOW DISABLED._*❌");
    } else {
      return _0x27bfa5("_example:  .ANTI_BAD_WORD on_");
    }
  }
});
const _0x469897 = {
  pattern: "auto_sticker",
  alias: ["autosticker"],
  desc: "enable or disable auto-sticker.",
  category: "settings",
  filename: __filename
};
cmd(_0x469897, async (_0x5532ad, _0x39151c, _0x5685e7, {
  from: _0x2600af,
  args: _0x29aa3c,
  isOwner: _0x5e232b,
  reply: _0x2f1661
}) => {
  if (!_0x5e232b) {
    return _0x2f1661("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
  }
  if (_0x29aa3c[0] === 'on') {
    config.AUTO_STICKER = "true";
    return _0x2f1661("*_AUTO-STICKER FEATURE IS NOW ENABLED._*☑️");
  } else {
    return _0x29aa3c[0] === "off" ? (config.AUTO_STICKER = 'false', _0x2f1661("*_AUTO-STICKER FEATURE IS NOW DISABLED._*❌")) : _0x2f1661("_example:  .auto-sticker on_");
  }
});
const _0x2577a9 = {
  pattern: "auto_reply"
};
function _0x6f4b6(_0xc9e5bf, _0xff7dd7, _0x23e2be, _0x17079f) {
  return _0x4ae5(_0xff7dd7 + 0x268, _0x17079f);
}
_0x2577a9.alias = ['autoreply'];
_0x2577a9.desc = "enable or disable auto-reply.";
_0x2577a9.category = "settings";
_0x2577a9.filename = __filename;
cmd(_0x2577a9, async (_0x21d2d6, _0x26a698, _0x569f5f, {
  from: _0x4bb04b,
  args: _0x4e24a2,
  isOwner: _0x1c9855,
  reply: _0x2f9b98
}) => {
  if (!_0x1c9855) {
    return _0x2f9b98("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
  }
  if (_0x4e24a2[0] === 'on') {
    config.AUTO_REPLY = "true";
    return _0x2f9b98("*_AUTO-REPLY  IS NOW ENABLED._*☑️");
  } else {
    return _0x4e24a2[0] === "off" ? (config.AUTO_REPLY = "false", _0x2f9b98("*_AUTO-REPLY FEATURE IS NOW DISABLED._*❌")) : _0x2f9b98("*🫟 ᴇxᴀᴍᴘʟᴇ: . ᴀᴜᴛᴏ-ʀᴇᴘʟʏ ᴏɴ*");
  }
});
const _0x175836 = {
  pattern: 'auto_voice',
  alias: ["autovoice"],
  desc: "enable or disable auto-reply.",
  category: "settings",
  filename: __filename
};
cmd(_0x175836, async (_0x7bc4f0, _0x53201e, _0x33774f, {
  from: _0x5d0139,
  args: _0x515f52,
  isOwner: _0x5190a7,
  reply: _0x29f40d
}) => {
  if (!_0x5190a7) {
    return _0x29f40d("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
  }
  if (_0x515f52[0] === 'on') {
    config.AUTO_VOICE = 'true';
    return _0x29f40d("*_AUTO-VOICE  IS NOW ENABLED._*☑️");
  } else {
    return _0x515f52[0] === "off" ? (config.AUTO_VOICE = "false", _0x29f40d("*_AUTO-VOICE FEATURE IS NOW DISABLED._*❌")) : _0x29f40d("*🫟 ᴇxᴀᴍᴘʟᴇ: . ᴀᴜᴛᴏ_ᴠᴏɪᴄᴇ ᴏɴ*");
  }
});
const _0x225f00 = {
  pattern: "auto_react",
  alias: ['autoreact', "areact"],
  desc: "Enable or disable the autoreact feature",
  category: "settings",
  filename: __filename
};
cmd(_0x225f00, async (_0x46c1ca, _0x4c639e, _0xd174ca, {
  from: _0x2a5dd3,
  args: _0x3b3096,
  isOwner: _0x3fab86,
  reply: _0x43b383
}) => {
  if (!_0x3fab86) {
    return _0x43b383("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
  }
  if (_0x3b3096[0] === 'on') {
    config.AUTO_REACT = "true";
    await _0x43b383("*_AUTOREACT FEATURE IS NOW ENABLED._*☑️");
  } else {
    if (_0x3b3096[0] === "off") {
      config.AUTO_REACT = "false";
      await _0x43b383("*_AUTOREACT FEATURE IS NOW DISABLED._*❌");
    } else {
      await _0x43b383("*🫟 ᴇxᴀᴍᴘʟᴇ: .ᴀᴜᴛᴏ_ʀᴇᴀᴄᴛ ᴏɴ*");
    }
  }
});
const _0xb932dc = {
  pattern: "heart_react",
  alias: ['heartreact', "dillreact"],
  desc: "Enable or disable the autoreact feature",
  category: "settings",
  filename: __filename
};
cmd(_0xb932dc, async (_0x270ce2, _0x132036, _0x370bb2, {
  from: _0x1e66ee,
  args: _0x4db187,
  isOwner: _0x154822,
  reply: _0x616ca6
}) => {
  if (!_0x154822) {
    return _0x616ca6("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
  }
  if (_0x4db187[0] === 'on') {
    config.HEART_REACT = "true";
    await _0x616ca6("*_HEARTREACT FEATURE IS NOW ENABLED._*☑️");
  } else {
    if (_0x4db187[0] === "off") {
      config.HEART_REACT = "false";
      await _0x616ca6("*_HEARTREACT FEATURE IS NOW DISABLED._*❌");
    } else {
      await _0x616ca6("*🫟 ᴇxᴀᴍᴘʟᴇ: .ʜᴇᴀʀᴛ_ʀᴇᴀᴄᴛ ᴏɴ*");
    }
  }
});
const _0x330892 = {
  pattern: "owner_react",
  alias: ["ownerreact", "oreact"],
  desc: "Enable or disable the autoreact feature",
  category: "settings",
  filename: __filename
};
cmd(_0x330892, async (_0x16fc44, _0x5d9d73, _0x489131, {
  from: _0x508d1b,
  args: _0x207087,
  isOwner: _0x2942c4,
  reply: _0x1d7d0f
}) => {
  if (!_0x2942c4) {
    return _0x1d7d0f("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
  }
  if (_0x207087[0] === 'on') {
    config.OWNER_REACT = "true";
    await _0x1d7d0f("*_OWNERREACT FEATURE IS NOW ENABLED._*☑️");
  } else {
    if (_0x207087[0] === "off") {
      config.OWNER_REACT = "false";
      await _0x1d7d0f("*_OWNERREACT FEATURE IS NOW DISABLED._*❌");
    } else {
      await _0x1d7d0f("*🫟 ᴇxᴀᴍᴘʟᴇ: .ᴏᴡɴᴇʀ_ʀᴇᴀᴄᴛ ᴏɴ*");
    }
  }
});
const _0x2ee0da = {
  pattern: "auto_reply_status",
  alias: ["autostatusreply"],
  desc: "enable or disable status-reply.",
  category: "settings",
  filename: __filename
};
cmd(_0x2ee0da, async (_0x203ded, _0x13d589, _0xe42893, {
  from: _0x275728,
  args: _0x1481c5,
  isOwner: _0x409c5c,
  reply: _0x49eac3
}) => {
  if (!_0x409c5c) {
    return _0x49eac3("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
  }
  if (_0x1481c5[0] === 'on') {
    config.AUTO_REPLY_STATUS = "true";
    return _0x49eac3("*_STATUS-REPLY FEATURE IS NOW ENABLED._*☑️");
  } else {
    return _0x1481c5[0] === "off" ? (config.AUTO_REPLY_STATUS = "false", _0x49eac3("*_STATUS-REPLY FEATURE IS NOW DISABLED._*❌")) : _0x49eac3("*🫟 ᴇxᴀᴍᴘʟᴇ:  .ᴀᴜᴛᴏ_ʀᴇᴘʟʏ_sᴛᴀᴛᴜs ᴏɴ*");
  }
});
function _0x1bd1cd(_0x118c83, _0x3a3ba5, _0x525c6c, _0x32e30c) {
  return _0x4ae5(_0x118c83 - 0x1e0, _0x525c6c);
}
const _0xd1ea1b = {
  pattern: "antilinkwarn",
  desc: "Enable Antilink (warn/delete/kick) or turn off",
  category: 'group',
  filename: __filename
};
cmd(_0xd1ea1b, async (_0x173453, _0x5016d5, _0x2ecf36, {
  q: _0x3f2507,
  reply: _0x4722d1
}) => {
  if (!_0x3f2507) {
    return _0x4722d1("*Current Antilink Action:* " + antilinkAction.toUpperCase() + "\n\nUse *antilink warn/delete/kick/off* to change it.");
  }
  const _0x553b07 = _0x3f2507.toLowerCase();
  if (["warn", "delete", "kick", "off"].includes(_0x553b07)) {
    antilinkAction = _0x553b07;
    return _0x4722d1("*Antilink action set to:* " + _0x553b07.toUpperCase());
  } else {
    return _0x4722d1("❌ *Invalid option!* Use *antilink warn/delete/kick/off*.");
  }
});
const _0x3c2ac2 = {
  on: "body"
};
cmd(_0x3c2ac2, async (_0x485db2, _0x14d28e, _0x2cfe1b, {
  from: _0x349d86,
  body: _0x594db7,
  isGroup: _0x41e4b0,
  sender: _0x1978fd,
  isBotAdmins: _0x216260,
  isAdmins: _0x56e4aa,
  reply: _0x4926ab
}) => {
  if (!_0x41e4b0 || antilinkAction === 'off') {
    return;
  }
  if (isUrl(_0x594db7)) {
    if (!_0x216260 || _0x56e4aa) {
      return;
    }
    return _0x4926ab("⚠️ *WARNING! LINKS ARE NOT ALLOWED HERE BCZ SILENT-SOBX-MD ACTIVE.*");
    const _0x64453c = {
      'delete': _0x14d28e.key
    };
    await _0x485db2.sendMessage(_0x349d86, _0x64453c);
    switch (antilinkAction) {
      case 'warn':
        warnCount[_0x1978fd] = (warnCount[_0x1978fd] || 0) + 1;
        if (warnCount[_0x1978fd] >= 3) {
          delete warnCount[_0x1978fd];
          await _0x485db2.groupParticipantsUpdate(_0x349d86, [_0x1978fd], "remove");
        }
        break;
      case "kick":
        await _0x485db2.groupParticipantsUpdate(_0x349d86, [_0x1978fd], "remove");
        break;
    }
  }
});
function _0x1943() {
  const _0x1e769a = ['Kmdwu', "a broadcas", 'gIchV', 'Tlrez', 'off', "t feature", 'rding', 'n/delete/k', 'SWbIV', "LINE  IS N", 'GEJkK', "de public", "❌ Provide ", 'ɴ/ᴅᴇʟᴇᴛᴇ/ᴋ', "rovide a n", 'dccyQ', 'CuWPJ', 'sqyWX', 'DISABLED._', 'JBSRJ', 'vPoGj', 'autostatus', '2662460LZASnx', ": . ᴀʟᴡᴀʏs", 'mCuyc', "e` or `.mo", 'bkrhm', 'XXCQF', '../command', 'RELVf', 'nBFIr', "\nWelcome m", "*_BOT MODE", "fake recor", 'UJywC', 'trim', "return (fu", " to use th", 'wQqMQ', 'qQlrk', 'rejects', 'dVboa', 'toString', 'react', 'groupParti', "ntilink Ac", 'aAngl', 'delete', 'AUTO_REPLY', 'INuli', 'Ozzls', 'HfqsR', "ctor(\"retu", " to:* ", 'ukXUO', 'anti-link', 'true', 'VJerj', '*_HEARTREA', "essage sen", 'toLowerCas', "disable th", 'ZQEqD', 'UKPtk', '*_OWNERREA', " .auto-sti", 'delete/kic', "RTED NOW..", "either 'on", 'svZjv', '._*☑️', 'elete/kick', 'WITLI', 'OJfgL', "ʏᴘɪɴɢ ᴏɴ*", 'bjNna', 'XhAGE', 'vXbBO', "in groups.", 'kVatP', "No pending", "OW ENABLED", 'exXXB', "LY FEATURE", '@s.whatsap', 'ThcUx', 'keys', "*📛 ᴏɴʟʏ ᴛʜ", "W DISABLED", "_WORD on_", 'participan', "CKER FEATU", ": .ᴀᴜᴛᴏ_ʀᴇ", "ᴇᴇɴ ᴏɴ*", ',...', "ted succes", 'antilink', "/kick* to ", 'eREZG', 'UDyRL', 'yomUs', 'alwaysonli', "ntibot Act", 'rdxju', 'cipantsUpd', "LINE FEATU", 'ync', 'LXqNo', 'mGRtS', 'writeFileS', 'jyHzd', "OBX-MD STA", 'search', 'nmiQm', "E NOT ALLO", 'ANTI_BAD', 'eorOZ', 'eDDff', 'FPZHC', ": . ᴀᴜᴛᴏ_ᴠ", "ᴇᴀᴄᴛ ᴏɴ*", 'reject', 'ZAZzP', 'HtePC', 'PhPsd', 'mvFgO', 'YYLGa', 'hDGna', 'auto_read_', 'WzJSA', 'D._*☑️', "anged to:*", 'MphYU', "_ᴏɴʟɪɴᴇ ᴏɴ", 'arn/delete', 'bBgNp', "❌ This com", 'GSyTf', 'QdBkj', 'to-reply.', "TE ✅_*.", 'pattern', 'EqKXV', 'ILmwL', 'dQNsB', "disable an", 'nqCLV', 'ASgXr', 'dlmRR', 'LGDZD', 'xlLBf', '2,...', 'PBaAJ', 'DVIWT', 'IpDSB', 'pdRgg', '9862524QMqGkh', 'er1,number', 'hZxxa', 'TNBhG', 'areact', 'PnXuK', 'CPoJZ', 'MZknJ', 'r1,number2', 'trace', "Enable or ", '3EB', 'oreact', 'uBash', '*_STATUS-R', 'roup.', "ilink (war", "❌ You need", 'Ynkrp', 'AWzyf', "ature in g", "ode privat", "❌ Not enou", "nd add par", 'PBLuz', "antilink o", 'includes', 'SrgOP', 'szrOb', 'DdtQg', "se use `.m", " WORD FEAT", "NOW DISABL", " been reje", 'waXuq', "📢 Sending ", " groups!", "📌 Current ", 'tZafp', 'always_onl', 'kick', 'YBoxM', '*_AUTO-VOI', 'vRJRV', 'vgYvp', 'private', 'ahfkb', " been acce", 'IoKle', 'lXIrQ', 'split', "mode: *", 'desc', 'body', "nts to rej", 'GJxJx', "ink warn/d", 'TyWIn', "C ✅_*.", 'XQWuQ', 'pSbNJ', 'wHmZW', 'console', 'daiJv', 'adm-zip', 'atus-reply', "This comma", 'OBibE', 'lMcmX', 'ownerreact', 'mITkX', 'filename', 'TIVE.*', " IS NOW EN", 'AUTO_VOICE', '__proto__', "ti-link fe", "ion:* ", '.🚀_*', 'XKgsT', ".mode priv", 'READ_MESSA', "ALLOWED YE", 'rejectall', "Change bot", 'kEUOS', 'pGnVl', 'CiAFr', 'admin', 'RaVMq', "✅ Successf", 'zuxDT', '5592sexVhV', '🚀_*', 'bRJQC', 'fYUEm', 'log', 'oyvCd', 'ticipants.', 'quVZY', 'tsApP', 'antibadwor', '*_FAKEREAC', 'EsPQL', 'EwDfV', 'fdpoY', 'mAFTC', " .ANTI_BAD", 'quoted', "⚠️ @", 'sbglx', 'path', 'EXpAM', 'erQvj', 'Brrnz', 'length', "rn this\")(", 'DSKbr', 'MODE', "rn off", 'use', 'UlAaR', 'mode', 'YLIpz', 'YlfLa', " UPDATE SI", 'yMfPN', 'KAAsP', 'DCQOV', 'FDRCd', " change it", 'eOFTh', "east two o", " prefix.", 'auto_reply', "de to priv", 'ZxNHu', "nly be use", ", warning ", "disable au", "ly ship @", "ABLED IN T", '../config', " .READ_MES", 'dSAvm', 'PXoYt', 'JJXQU', 'UJKEv', 'p.net', 'constructo', 'Asjut', 'QDQBJ', "nt request", 'EdJQu', 'SwllL', '*_AUTOREAD', 'toUpperCas', 'wxJeX', 'jADid', 'anWZa', "nput! Use ", 'Tfoyd', "*_ANTI BAD", 'tzEUg', 'pbaXk', 'category', 'PVmfH', 'eLrLr', 'qxpEj', 'admessage.', 'RrueY', 'mentGroup', './config.j', 'approve', '4917153ikuWHU', "Bot makes ", "ully sent ", 'orVHm', "ssing your", 'vQzIx', 'AiQXP', 'NafSS', 'UyMDY', 'to-sticker', 'hCOxB', 'JVirb', 'EJMFm', 'QsNjs', 'YUyoL', "nts to acc", 'randomship', 'rGSnA', 'ahXbL', 'YiCuK', 'paaWy', 'FAKE_REACO', 'owed!', 'alias', 'bind', 'reply', 'awlQc', "pm2 restar", "ewgc group", "hello ther", '*_ANTI-LIN', 'DbVep', 'ZgrNi', 'cLsOY', "MD RESTART", 'dWyyN', 'SjVBy', '_name;numb', 'dillreact', 'to-viewing', 'AWjQn', 'jwkhz', 'zqaWp', 'ess', "ᴏɪᴄᴇ ᴏɴ*", 'mqskb', 'ding', "to:* ", 'xIjsB', "oadcast in", "Accept all", 'rNTBS', 'DjySh', 'IdCsV', ": . ᴀɴᴛɪ-ʙ", 'settings', 'text', 'HlqWJ', "occurred w", "*📛 Only th", 'FxWvS', 'pVWEo', 'LENT-SOBX-', 'ZpIVR', "⚠️ *WARNING", 'ezUmC', 'group', " ENABLED._", "hile proce", 'WsqZU', "ew prefix.", " WORD IS N", ":  .ᴀᴜᴛᴏ_ʀ", 'ZQsED', '/delete/ki', 'dYyur', "oll with a", "Reject all", "hip two me", 'auto_stick', 'NJbKj', "re not all", "❌ Error: ", 'ᴏɴ*', "sfully wit", 'uaWcp', 'OTQXV', 'KpIje', "mode. Plea", 'jPrNj', 'newgc', 'ZeYfo', 'VnMfq', '*_AUTO-REP', 'selectable', 'child_proc', '{}.constru', 'Count', "LY  IS NOW", 'uUcVb', '_STATUS', "Usage: !ne", 'RNvwg', 'ion;option', '*☑️', 'EsIAK', 'WaShN', 'SYZsT', "n use this", 'acceptall', "e owner ca", 'EkbRr', '947056qVEhoa', "BLED IN TH", "*An error ", "ew group a", 'kmAlw', 'AUTO_REACT', 'ate', 'IFpSp', "CE FEATURE", 'up!', 'false', 'kfXYw', 'ALWAYS_ONL', " take acti", '*_FAKETYPI', 'sIuSd', 'hIYpU', 'ine', 'qhUAs', ": . ᴀᴜᴛᴏ-ʀ", 'JnvTC', " IS NOW DI", 'DZpUl', 'apply', " to be an ", 'dGOJR', '*_ALWAYSON', 'LReXt', 'groupInvit', "s ᴏɴ*", "change it.", '12lazlzC', 'CQqSW', "NOW ENABLE", 'MZBHj', "mand can o", 'sWIpL', '../lib/fun', "*Antilink ", "d in group", 'pating', 'dlOpL', 'axtxN', 'jviGj', 'tAuGD', "ᴇᴘʟʏ ᴏɴ*", 'tIWim', 'stParticip', 'info', "K FEATURE ", 'remove', "nd can onl", 'aBWTk', 'BQMBu', 'startsWith', 'hCuOX', 'lBPZX', "gh members", 'EIyzK', " & @", "_example: ", 'jpEWI', 'AUTO_LIKE_', " option!* ", 'FfiKP', 'ENtiG', 'cUbdk', 'message', "ovide at l", '*_AUTOLIKE', "STATUS IS ", 'QRgcc', "*Invalid i", '139749jWqRhn', 'kMHfL', "Randomly s", 'fhTKq', 'name', 'EJGQM', "tion:* ", 'HpGUV', 'YWVNo', "Enable Ant", "ɴ ᴜsᴇ ᴛʜɪs", 'ZlATW', "RE IS NOW ", 'lRaEA', "ck/off* to", 'lcFLh', 'INE', "SAGE FEATU", 'pOUQm', 'iyAea', ". Example:", 'frpVk', 'OWNER_REAC', 'mBWiM', 'random', 'rNYby', 'IyGeR', 'pwIOF', "' or 'off'", 'ABLED._*❌', 'AUTO_READ_', 'mmjcB', 'FmIJi', " Groups...", 'T_*☑️', 'owner_reac', 'oKOdS', 'roups', 'anLLT', 'prototype', 'dbivD', 'MSSOb', 'SoUun', 'ZxYns', "NG FEATURE", '1611xaTPLO', "❌ Please p", 'CBqPu', 'table', 'gBGPq', "mbers in a", 'antilinkwa', " IS NOW SE", 'HSyLO', "*Current A", 'antsUpdate', 'JudSg', "ORDING IS ", "t all", 'JnbPZ', 'SABLED._*❌', 'pJuqa', "*Antibot a", 'son', "ᴇᴀᴄᴏʀᴅɪɴɢ ", 'BmHSV', 'auto_react', 'ABKLf', "\n\nCommand:", 'nlYwS', 'ljxcK', " status_re", 'ANMCG', 'ᴇᴘʟʏ_sᴛᴀᴛᴜ', 'public', 'tfJsZ', 'inloT', "act on", 'UUDkP', "WED HERE B", 'uBJzh', ": . ғᴀᴋᴇ_ᴛ", "EPLY FEATU", 'maYHe', 'QxcdE', 'aCuIh', "y be used ", 'sendMessag', "action set", '*_SILENT-S', 'heart_reac', "You must b", "ᴇ ᴏᴡɴᴇʀ ᴄᴀ", 'ehtzn', 'YnYnA', 'PREFIX', 'bOJKI', 'ED._*❌', 'ANTI_LINK', "CE  IS NOW", "and option", 'setprefix', "*🫟 ᴇxᴀᴍᴘʟᴇ", 'WknEy', "\n\n_Error:_", 'AUTO_STICK', "o send bro", "To ", 'XFNoZ', 'DBNrR', 'KjyrW', 'CpEnu', "ction set ", 'key', 'map', 'lic.', 'ENABLED._*', 'QHvQO', "oup with i", "Bot must b", 'QlWHw', "to ", '._*❌', "de public`", "so I can't", 'HEART_REAC', 'UzKVc', 'QTlyT', "CZ SILENT-", 'fvobP', '_*❌', 'ommand.', 'MFrBn', "n this gro", 'FmvEx', "nction() ", 'tDYdt', "ink: https", 'groupReque', " DISABLED.", '*_DATABASE', "SOBX-MD AC", 'mwFCu', '*_AUTOREAC', 'DABpI', 'eCode', 'read_messa', "LINKS NOT ", "h invite l", 'HsFQN', 'vUDZK', "T TO PUBLI", 'zlRDM', 'wJdDc', "TURE IS NO", 'push', 'Jdeum', 'poll', 'DlIic', "💖 I random", 'gcALD', 'SsxTN', " participa", 'EnpCG', ":  .ᴀᴜᴛᴏ-s", 'vjPAC', "Broadcast ", "❌ *Invalid", 'zoGhO', 'UHMEl', '1551516XrywOf', 'Uuyoi', ": .ᴏᴡɴᴇʀ_ʀ", "t in all g", 'zjBid', 'filter', "T TO PRIVA", 'oXudT', 'RnRJV', "cker on_", 'TDUNU', 'xhDTv', 'ndUIv', "*Please pr", 'LEkog', "Usage: ", "ᴀᴄᴛ ᴏɴ*", 'PRjiS', 'xpgYv', 'HzdNP', 'TxxGO', "ᴏᴛ ᴏғғ/ᴡᴀʀ", 'warn', 'hIApf', " request.*", 'trmBA', 'wRGcg', 'autovoice', "ORDING FEA", "enable or ", 'QXmjL', 'Dhpaw', " ᴄᴏᴍᴍᴀɴᴅ!*", " question ", 'ctions', "wgc group_", 'antibot', 'TTcsp', 'LSQEV', 'oknPz', "❌ Invalid ", "URE IS NOW", "❌ Error pr", 'error', "poll quest", "Example: .", 'cted.', "broadcast ", 'AllPartici', 'cvaiV', 'values', "ptions for", 'EJjtd', "\n\nUse *ant", 'XbTwU', "e an admin", "ING NOW...", "<text for ", "Create a n", "in a group", 'name;numbe', 'fAXek', 'pHSLz', 'LWPsC', "IS NOW DIS", "\n⏳ Estimat", "IS NOW ENA", "! LINKS AR", "disable st", "is command", "*_READ MES", "ilink warn", 'CPAPS', 'qHibi', 'FAKE_TYPIN', "CT FEATURE", 'WcEFA', 'tibad.', 'Tecrp', "Use *antil", 'sort', 'view', 'STATUS', 'JtCet', "nt(s) have", "s in the g", "SAGE on_", '/off*.', "HIS GROUP.", 'RHDsU', 'broadcast.', 'BLmgh', "ibot off/w", '1,option2,', 'crlXC', 'isPending', 'AYqZv', 'JuwYd'];
  _0x1943 = function () {
    return _0x1e769a;
  };
  return _0x1943();
}
let antibotAction = "off";
let warnings = {};
const _0x91d6ae = {
  pattern: 'anti-bot',
  alias: ["antibot"],
  desc: "Enable Antibot and set action (off/warn/delete/kick)",
  category: "group",
  filename: __filename
};
cmd(_0x91d6ae, async (_0x57c4c5, _0x3c8456, _0xd45d10, {
  q: _0x1bb461,
  reply: _0x2ce30b
}) => {
  if (!_0x1bb461) {
    return _0x2ce30b("*Current Antibot Action:* " + antibotAction.toUpperCase() + "\n\nUse *antibot off/warn/delete/kick* to change it.");
  }
  const _0x1e98b3 = _0x1bb461.toLowerCase();
  return ["off", 'warn', "delete", "kick"].includes(_0x1e98b3) ? (antibotAction = _0x1e98b3, _0x2ce30b("*Antibot action set to:* " + _0x1e98b3.toUpperCase())) : _0x2ce30b("*🫟 ᴇxᴀᴍᴘʟᴇ: . ᴀɴᴛɪ-ʙᴏᴛ ᴏғғ/ᴡᴀʀɴ/ᴅᴇʟᴇᴛᴇ/ᴋɪᴄᴋ*");
});
const _0x52f38a = {
  on: 'body'
};
cmd(_0x52f38a, async (_0x1d150f, _0x1958ea, _0x8d9730, {
  from: _0x19412a,
  isGroup: _0x33ef8b,
  sender: _0x182091,
  isBotAdmins: _0x17f9f6,
  isAdmins: _0x208d2d,
  reply: _0xfaac68
}) => {
  if (!_0x33ef8b || antibotAction === "off") {
    return;
  }
  const _0x53485a = _0x1958ea.key.id;
  if (!_0x53485a || !_0x53485a.startsWith("3EB")) {
    return;
  }
  if (!_0x17f9f6) {
    return _0xfaac68("*_I'm not an admin, so I can't take action!_*");
  }
  if (_0x208d2d) {
    return;
  }
  const _0x270260 = {
    "delete": _0x1958ea.key
  };
  await _0x1d150f.sendMessage(_0x19412a, _0x270260);
  switch (antibotAction) {
    case "kick":
      await _0x1d150f.groupParticipantsUpdate(_0x19412a, [_0x182091], 'remove');
      break;
    case 'warn':
      warnings[_0x182091] = (warnings[_0x182091] || 0) + 1;
      if (warnings[_0x182091] >= 3) {
        delete warnings[_0x182091];
        await _0x1d150f.groupParticipantsUpdate(_0x19412a, [_0x182091], 'remove');
      } else {
        return _0xfaac68("⚠️ @" + _0x182091.split('@')[0] + ", warning " + warnings[_0x182091] + "/3! Bots are not allowed!", {
          'mentions': [_0x182091]
        });
      }
      break;
  }
});
const _0x569bd4 = {
  pattern: "acceptall",
  alias: ["approve"],
  category: "group",
  desc: "Accept all participant requests in the group.",
  filename: __filename
};
cmd(_0x569bd4, async (_0x2c2132, _0x19758d, _0x3ee1e0, {
  from: _0x10f1d8,
  isGroup: _0x5c5bd0,
  body: _0x19beb7,
  sender: _0x40e4ac,
  groupMetadata: _0x30bb04,
  participants: _0xda76a2,
  config: _0x1254d7,
  reply: _0x444b62
}) => {
  try {
    if (!_0x5c5bd0) {
      return _0x444b62("This command can only be used in groups.");
    }
    const _0x5d0f61 = _0x30bb04.participants;
    const _0x1d0f9d = _0x5d0f61.filter(_0x118ea1 => _0x118ea1.isPending);
    if (_0x1d0f9d.length === 0) {
      return _0x444b62("No pending participants to accept.");
    }
    const _0x20980a = _0x1d0f9d.map(_0x34d2bd => _0x34d2bd.id);
    const _0xb6021e = await _0x2c2132.groupRequestParticipantsUpdate(_0x10f1d8, _0x20980a, "approve");
    console.log(_0xb6021e);
    _0x444b62(_0x20980a.length + " participant(s) have been accepted.");
  } catch (_0xbec1b9) {
    return _0x444b62("*An error occurred while processing your request.*\n\n_Error:_ " + _0xbec1b9.message);
  }
});
const _0x4affed = {
  pattern: "rejectall",
  alias: ["rejects"],
  category: "group",
  desc: "Reject all participant requests in the group.",
  filename: __filename
};
cmd(_0x4affed, async (_0x2e6d52, _0x44a2eb, _0x1942db, {
  from: _0x2849fc,
  isGroup: _0xc6a1c7,
  body: _0x142ec0,
  sender: _0x14f769,
  groupMetadata: _0x3295ec,
  participants: _0x2913ff,
  config: _0x515960,
  reply: _0x3fdcbf
}) => {
  try {
    if (!_0xc6a1c7) {
      return _0x3fdcbf("This command can only be used in groups.");
    }
    const _0x18bdb9 = _0x3295ec.participants;
    const _0x5924b4 = _0x18bdb9.filter(_0xf9b65b => _0xf9b65b.isPending);
    if (_0x5924b4.length === 0) {
      return _0x3fdcbf("No pending participants to reject.");
    }
    const _0x3afe56 = _0x5924b4.map(_0x2fdcf4 => _0x2fdcf4.id);
    const _0x568510 = await _0x2e6d52.groupRequestParticipantsUpdate(_0x2849fc, _0x3afe56, "reject");
    console.log(_0x568510);
    _0x3fdcbf(_0x3afe56.length + " participant(s) have been rejected.");
  } catch (_0x354479) {
    return _0x3fdcbf("*An error occurred while processing your request.*\n\n_Error:_ " + _0x354479.message);
  }
});
const _0x468d14 = {
  pattern: "anti-link",
  alias: ["antilink"],
  desc: "Enable or disable anti-link feature in groups",
  category: "group",
  react: '🚫',
  filename: __filename
};
cmd(_0x468d14, async (_0x41bc28, _0x2fbdb9, _0x4309b8, {
  from: _0x3cf887,
  l: _0x58b18e,
  quoted: _0x4dbd69,
  body: _0x5c68ab,
  isCmd: _0x4520c3,
  command: _0x58d8b6,
  args: _0x1d8f96,
  q: _0x394ec6,
  isGroup: _0x37ab01,
  sender: _0xd8276c,
  senderNumber: _0xb06e11,
  botNumber2: _0x5884bc,
  botNumber: _0x5175e3,
  pushname: _0x2b1f75,
  isMe: _0x27918c,
  isOwner: _0x24e7c8,
  groupMetadata: _0x3c9b32,
  groupName: _0x3a24cd,
  participants: _0x4537f6,
  groupAdmins: _0x3360f6,
  isBotAdmins: _0x1b39d3,
  isAdmins: _0x417f3d,
  reply: _0x25f947
}) => {
  try {
    if (!_0x37ab01) {
      return _0x25f947("This command can only be used in a group.");
    }
    if (!_0x1b39d3) {
      return _0x25f947("Bot must be an admin to use this command.");
    }
    if (!_0x417f3d) {
      return _0x25f947("You must be an admin to use this command.");
    }
    if (_0x1d8f96[0] === 'on') {
      config.ANTI_LINK = "true";
      await _0x25f947("*_ANTI-LINK FEATURE IS NOW ENABLED IN THIS GROUP. LINKS NOT ALLOWED YET_*☑️");
    } else {
      if (_0x1d8f96[0] === "off") {
        config.ANTI_LINK = "false";
        await _0x25f947("*_ANTI-LINK FEATURE IS NOW DISABLED IN THIS GROUP._*❌");
      } else {
        await _0x25f947("*Invalid input! Use either 'on' or 'off'. Example:antilink on*");
      }
    }
  } catch (_0x499b1e) {
    return _0x25f947("*An error occurred while processing your request.*\n\n_Error:_ " + _0x499b1e.message);
  }
});
const _0x1b2bfc = {
  pattern: "poll",
  category: "group",
  desc: "Create a poll with a question and options in the group.",
  filename: __filename
};
cmd(_0x1b2bfc, async (_0x51c21e, _0x12d231, _0x36d83b, {
  from: _0x4b129b,
  isGroup: _0xf205bb,
  body: _0x547ec5,
  sender: _0x397610,
  groupMetadata: _0x4a29de,
  participants: _0x5416ae,
  prefix: _0x1e4f8f,
  pushname: _0x485699,
  reply: _0x501a34
}) => {
  try {
    let [_0xbc169b, _0x4d8af3] = _0x547ec5.split(';');
    if (!_0xbc169b || !_0x4d8af3) {
      return _0x501a34("Usage: " + _0x1e4f8f + "poll question;option1,option2,option3...");
    }
    let _0x1cca4f = [];
    for (let _0x578508 of _0x4d8af3.split(',')) {
      if (_0x578508 && _0x578508.trim() !== '') {
        _0x1cca4f.push(_0x578508.trim());
      }
    }
    if (_0x1cca4f.length < 2) {
      return _0x501a34("*Please provide at least two options for the poll.*");
    }
    const _0x2b4f29 = {
      name: _0xbc169b,
      values: _0x1cca4f,
      selectableCount: 0x1,
      toAnnouncementGroup: true
    };
    const _0x2067d6 = {
      poll: _0x2b4f29
    };
    const _0x4efef7 = {
      quoted: _0x12d231
    };
    await _0x51c21e.sendMessage(_0x4b129b, _0x2067d6, _0x4efef7);
  } catch (_0x3ecd05) {
    return _0x501a34("*An error occurred while processing your request.*\n\n_Error:_ " + _0x3ecd05.message);
  }
});
const _0x2e7207 = {
  pattern: "randomship",
  desc: "Randomly ship two members in a group.",
  category: 'group',
  react: '💞',
  filename: __filename
};
cmd(_0x2e7207, async (_0x5326a1, _0x479ff4, _0x31531b, {
  from: _0x1d3610,
  isGroup: _0x27375d,
  participants: _0x9f5ee6,
  reply: _0x1899e8
}) => {
  try {
    if (!_0x27375d) {
      return _0x1899e8("❌ This command can only be used in groups!");
    }
    const _0x1a5a9c = _0x9f5ee6.filter(_0x261ed0 => !_0x261ed0.admin);
    if (_0x1a5a9c.length < 2) {
      return _0x1899e8("❌ Not enough members to ship!");
    }
    const _0x59779f = _0x1a5a9c.sort(() => Math.random() - 0.5);
    const _0x11cd70 = _0x59779f[0].id;
    const _0x7cd148 = _0x59779f[1].id;
    _0x1899e8("💖 I randomly ship @" + _0x11cd70.split('@')[0] + " & @" + _0x7cd148.split('@')[0] + "! Cute couple! 💞", {
      'mentions': [_0x11cd70, _0x7cd148]
    });
  } catch (_0x543aee) {
    console.error(_0x543aee);
    _0x1899e8("❌ Error processing command.");
  }
});
const _0x1b3c22 = {
  pattern: "newgc",
  category: "group",
  desc: "Create a new group and add participants.",
  filename: __filename
};
cmd(_0x1b3c22, async (_0x48f297, _0x3ed3eb, _0x3c089d, {
  from: _0x311167,
  isGroup: _0xa567f6,
  body: _0x312dbd,
  sender: _0x252200,
  groupMetadata: _0x592463,
  participants: _0x124aee,
  reply: _0x360952
}) => {
  try {
    if (!_0x312dbd) {
      return _0x360952("USAGE : !newgc group_name;number1,number2,...");
    }
    const [_0x2de808, _0x282202] = _0x312dbd.split(';');
    if (!_0x2de808 || !_0x282202) {
      return _0x360952("Usage: !newgc group_name;number1,number2,...");
    }
    const _0x1974ca = _0x282202.split(',').map(_0x48bebf => _0x48bebf.trim() + "@s.whatsapp.net");
    const _0x3545ae = await _0x48f297.groupCreate(_0x2de808, _0x1974ca);
    console.log("created group with id: " + _0x3545ae.id);
    const _0x2b1580 = await _0x48f297.groupInviteCode(_0x3545ae.id);
    const _0x410f7d = {
      text: "hello there"
    };
    await _0x48f297.sendMessage(_0x3545ae.id, _0x410f7d);
    _0x360952("Group created successfully with invite link: https://chat.whatsapp.com/" + _0x2b1580 + "\nWelcome message sent.");
  } catch (_0x32c0db) {
    return _0x360952("*An error occurred while processing your request.*\n\n_Error:_ " + _0x32c0db.message);
  }
});
const _0x501867 = {
  pattern: 'broadcast',
  category: "group",
  desc: "Bot makes a broadcast in all groups",
  filename: __filename,
  use: "<text for broadcast.>"
};
cmd(_0x501867, async (_0x42e41e, _0x5e0238, _0x5a42bc, {
  q: _0x54fa10,
  isGroup: _0x3ae2c5,
  isAdmins: _0x4b83be,
  reply: _0x506140
}) => {
  try {
    if (!_0x3ae2c5) {
      return _0x506140("❌ This command can only be used in groups!");
    }
    if (!_0x4b83be) {
      return _0x506140("❌ You need to be an admin to broadcast in this group!");
    }
    if (!_0x54fa10) {
      return _0x506140("❌ Provide text to broadcast in all groups!");
    }
    let _0x36b795 = await _0x42e41e.groupFetchAllParticipating();
    let _0x5f110b = Object.keys(_0x36b795);
    _0x506140("📢 Sending Broadcast To " + _0x5f110b.length + " Groups...\n⏳ Estimated Time: " + _0x5f110b.length * 1.5 + " seconds");
    for (let _0x1ea6a7 of _0x5f110b) {
      try {
        await sleep(1500);
        const _0xfa67ed = {
          text: _0x54fa10
        };
        await _0x42e41e.sendMessage(_0x1ea6a7, _0xfa67ed);
      } catch (_0xc73493) {
        console.log("❌ Failed to send broadcast to " + _0x1ea6a7 + ':', _0xc73493);
      }
    }
    return _0x506140("✅ Successfully sent broadcast to " + _0x5f110b.length + " groups!");
  } catch (_0x5db7ef) {
    await _0x5a42bc.error("❌ Error: " + _0x5db7ef + "\n\nCommand: broadcast", _0x5db7ef);
  }
});
