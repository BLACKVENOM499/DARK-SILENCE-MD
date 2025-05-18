const axios = require('axios');
const {
  cmd
} = require("../command");
const fetch = require("node-fetch");
cmd({
  'pattern': 'cpt',
  'alias': ['capcut', "capcut-dl"],
  'desc': "To download Capcut templates.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x5cffdf, _0x5f58ad, _0x3d0486, {
  from: _0x1879d3,
  q: _0x44270a,
  reply: _0xf7648
}) => {
  try {
    if (!_0x44270a || !_0x44270a.startsWith("http")) {
      return _0xf7648("*❌ Please provide a valid Capcut link..🚀*");
    }
    await _0x5cffdf.sendMessage(_0x1879d3, {
      'react': {
        'text': '⏳',
        'key': _0x5f58ad.key
      }
    });
    const _0x32ea2c = await axios.get("https://api.diioffc.web.id/api/download/capcut?url=" + encodeURIComponent(_0x44270a));
    const _0x2d0123 = _0x32ea2c.data;
    if (!_0x2d0123 || _0x2d0123.status !== true || !_0x2d0123.result || !_0x2d0123.result.url) {
      return _0xf7648("*_⚠️ Failed to fetch Capcut content. Please check the link and try again..🚀_*");
    }
    await _0x5cffdf.sendMessage(_0x1879d3, {
      'video': {
        'url': _0x2d0123.result.url
      },
      'mimetype': 'video/mp4',
      'caption': "📥 *_SILENT-SOBX-MD CAPCUT TEMPLATE DOWNLOADEDER*\n🎥 *TITLE:* " + _0x2d0123.result.title + "\n📏 *SIZE:* " + _0x2d0123.result.size + "\n\n> © BY SILENTLOVER432"
    }, {
      'quoted': _0x5f58ad
    });
  } catch (_0x30ee50) {
    console.error("Error:", _0x30ee50);
    _0xf7648("❌ An error occurred while processing your request. Please try again.");
  }
});
cmd({
  'pattern': 'ringtone',
  'alias': ["ringtones", "ring"],
  'desc': "Get a random ringtone from the API.",
  'react': '🎵',
  'category': "download",
  'filename': __filename
}, async (_0x26fcfa, _0x44e130, _0x537911, {
  from: _0x488032,
  reply: _0x35d18d,
  args: _0x4e674d
}) => {
  try {
    const _0x31f81f = _0x4e674d.join(" ");
    if (!_0x31f81f) {
      return _0x35d18d("Please provide a search query! Example: .ringtone Suna");
    }
    const {
      data: _0x40d337
    } = await axios.get("https://www.dark-yasiya-api.site/download/ringtone?text=" + encodeURIComponent(_0x31f81f));
    if (!_0x40d337.status || !_0x40d337.result || _0x40d337.result.length === 0x0) {
      return _0x35d18d("*_No ringtones found for your query. Please try a different keyword..🚀_*");
    }
    const _0x3064d3 = _0x40d337.result[Math.floor(Math.random() * _0x40d337.result.length)];
    await _0x26fcfa.sendMessage(_0x488032, {
      'audio': {
        'url': _0x3064d3.dl_link
      },
      'mimetype': "audio/mpeg",
      'fileName': _0x3064d3.title + ".mp3"
    }, {
      'quoted': _0x537911
    });
  } catch (_0x5e1f55) {
    console.error("Error in ringtone command:", _0x5e1f55);
    _0x35d18d("*_Sorry, something went wrong while fetching the ringtone. Please try again later.🚀_*");
  }
});
cmd({
  'pattern': 'pinterestvideo',
  'alias': ["pinv", "pinvd", "pinsvdl", 'pinvdownload'],
  'desc': "Download media from Pinterest",
  'category': 'download',
  'filename': __filename
}, async (_0x3d4199, _0x9fd2ad, _0x47daca, {
  args: _0x3ce850,
  quoted: _0x569a89,
  from: _0x3e6d7b,
  reply: _0xeeb0e7
}) => {
  try {
    if (_0x3ce850.length < 0x1) {
      return _0xeeb0e7("❎ Please provide the Pinterest URL to download from.");
    }
    const _0x2c269a = _0x3ce850[0x0];
    const _0x117be1 = await axios.get('https://bk9.fun/download/pinterest?url=' + encodeURIComponent(_0x2c269a));
    if (!_0x117be1.data.status) {
      return _0xeeb0e7("❎ Failed to fetch data from Pinterest.");
    }
    const _0x2f6847 = _0x117be1.data.BK9;
    const _0x56ce0e = "\n*❐ SILENT-SOBX-MD PINS DOWNLOADER🚀*\n╭━━❐\n┇๏ *ABOUT* - " + _0x117be1.data.owner + "\n╰━━❑\n\n> *© Pᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³² ♡*";
    if (_0x2f6847.length > 0x0) {
      const _0x1baadf = _0x2f6847.find(_0x15dd21 => _0x15dd21.url.includes(".mp4"))?.["url"];
      const _0xc14fa4 = _0x2f6847.find(_0x2eb89e => _0x2eb89e.url.includes('.jpg'))?.['url'];
      if (_0x1baadf) {
        await _0x3d4199.sendMessage(_0x3e6d7b, {
          'video': {
            'url': _0x1baadf
          },
          'caption': _0x56ce0e
        }, {
          'quoted': _0x9fd2ad
        });
      } else if (_0xc14fa4) {
        await _0x3d4199.sendMessage(_0x3e6d7b, {
          'image': {
            'url': _0xc14fa4
          },
          'caption': _0x56ce0e
        }, {
          'quoted': _0x9fd2ad
        });
      } else {
        _0xeeb0e7("❎ No media found.");
      }
    } else {
      _0xeeb0e7("❎ No media found.");
    }
  } catch (_0x152847) {
    console.error(_0x152847);
    await _0x3d4199.sendMessage(_0x3e6d7b, {
      'react': {
        'text': '❌',
        'key': _0x9fd2ad.key
      }
    });
    _0xeeb0e7("❎ An error occurred while processing your request.");
  }
});
cmd({
  'pattern': 'tiktokstalk',
  'alias': ['tstalk', "ttstalk"],
  'react': '📱',
  'desc': "Fetch TikTok user profile details.",
  'category': 'search',
  'filename': __filename
}, async (_0x210634, _0x16149a, _0x5be7c2, {
  from: _0x624dc0,
  args: _0x4b8566,
  q: _0x732dbd,
  reply: _0x66da79
}) => {
  try {
    if (!_0x732dbd) {
      return _0x66da79("❎ Please provide a TikTok username.\n\n*Example:* .tiktokstalk mrbeast");
    }
    const _0x22e348 = 'https://api.siputzx.my.id/api/stalk/tiktok?username=' + encodeURIComponent(_0x732dbd);
    const {
      data: _0x364c37
    } = await axios.get(_0x22e348);
    if (!_0x364c37.status) {
      return _0x66da79("❌ User not found. Please check the username and try again.");
    }
    const _0xbeba63 = _0x364c37.data.user;
    const _0x2a3531 = _0x364c37.data.stats;
    const _0x4f58b4 = "🎭 *SILENT-SOBX-MD TIKTOK PROFILE STALKER* 🎭\n\n👤 *Username:* @" + _0xbeba63.uniqueId + "\n📛 *Nickname:* " + _0xbeba63.nickname + "\n✅ *Verified:* " + (_0xbeba63.verified ? "Yes ✅" : "No ❌") + "\n📍 *Region:* " + _0xbeba63.region + "\n📝 *Bio:* " + (_0xbeba63.signature || "No bio available.") + "\n🔗 *Bio Link:* " + (_0xbeba63.bioLink?.["link"] || "No link available.") + "\n\n📊 *Statistics:*\n👥 *Followers:* " + _0x2a3531.followerCount.toLocaleString() + "\n👤 *Following:* " + _0x2a3531.followingCount.toLocaleString() + "\n❤️ *Likes:* " + _0x2a3531.heartCount.toLocaleString() + "\n🎥 *Videos:* " + _0x2a3531.videoCount.toLocaleString() + "\n\n📅 *Account Created:* " + new Date(_0xbeba63.createTime * 0x3e8).toLocaleDateString() + "\n🔒 *Private Account:* " + (_0xbeba63.privateAccount ? "Yes 🔒" : "No 🌍") + "\n\n🔗 *Profile URL:* https://www.tiktok.com/@" + _0xbeba63.uniqueId + "\n\n> BY SILENTLOVER432 ♥️\n";
    const _0xcc19db = {
      'image': {
        'url': _0xbeba63.avatarLarger
      },
      'caption': _0x4f58b4
    };
    await _0x210634.sendMessage(_0x624dc0, _0xcc19db, {
      'quoted': _0x16149a
    });
  } catch (_0x1610f5) {
    console.error("❌ Error in TikTok stalk command:", _0x1610f5);
    _0x66da79("⚠️ An error occurred while fetching TikTok profile data.");
  }
});
cmd({
  'pattern': "spotifysearch",
  'alias': ["spotifysrch", "spsearch"],
  'desc': "Search for Spotify tracks using a query.",
  'react': '✅',
  'category': "tools",
  'filename': __filename
}, async (_0x265592, _0x226ffe, _0x41425a, {
  from: _0x48c01c,
  args: _0x5bba5f,
  reply: _0x19081f
}) => {
  if (!_0x5bba5f[0x0]) {
    return _0x19081f("🌸 What do you want to search on Spotify?\n\n*Usage Example:*\n.spotifysearch <query>");
  }
  const _0x3c7f72 = _0x5bba5f.join(" ");
  await _0x41425a.react('⌛');
  try {
    _0x19081f("🔎 Searching Spotify for: *" + _0x3c7f72 + '*');
    const _0x44a31d = await fetch('https://api.diioffc.web.id/api/search/spotify?query=' + encodeURIComponent(_0x3c7f72));
    const _0x187834 = await _0x44a31d.json();
    if (!_0x187834 || !_0x187834.status || !_0x187834.result || _0x187834.result.length === 0x0) {
      await _0x41425a.react('❌');
      return _0x19081f("❌ No results found for your query. Please try with a different keyword.");
    }
    const _0x4043d5 = _0x187834.result.slice(0x0, 0x7).sort(() => Math.random() - 0.5);
    for (const _0x21f7cb of _0x4043d5) {
      const _0x389267 = "🎶 *SILENT-SOBX-MD SPOTIFY TRACK RESULT..🚀*:\n\n" + ("*• TRACK NAME*: " + _0x21f7cb.trackName + "\n") + ("*• ARTIST*: " + _0x21f7cb.artistName + "\n") + ("*• TRACK NUMBER*: " + _0x21f7cb.trackNumber + "\n") + ("*• URL*: " + _0x21f7cb.externalUrl + "\n\n") + "*POWERD BY SILENTLOVER432*\n\n";
      _0x19081f(_0x389267);
    }
    await _0x41425a.react('✅');
  } catch (_0x3fcfc0) {
    console.error("Error in SpotifySearch command:", _0x3fcfc0);
    await _0x41425a.react('❌');
    _0x19081f("❌ An error occurred while searching Spotify. Please try again later.");
  }
});
const {
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': 'fetch',
  'alias': ["get", 'api'],
  'desc': "Fetch data from a provided URL or API",
  'category': 'main',
  'react': '🌐',
  'filename': __filename
}, async (_0x46ba29, _0x3dc84c, _0xe84c35, {
  from: _0xd689a9,
  quoted: _0x39ccd9,
  body: _0x13ebd6,
  args: _0xccd29,
  reply: _0x563496
}) => {
  try {
    const _0x132e60 = _0xccd29.join(" ").trim();
    if (!_0x132e60) {
      return _0x563496("❌ Please provide a valid URL or query.");
    }
    if (!/^https?:\/\//.test(_0x132e60)) {
      return _0x563496("❌ URL must start with http:// or https://.");
    }
    const _0x3e5455 = await fetchJson(_0x132e60);
    const _0xeafe40 = JSON.stringify(_0x3e5455, null, 0x2);
    await _0x46ba29.sendMessage(_0xd689a9, {
      'text': "🔍 *Fetched Data*:\n```" + _0xeafe40.slice(0x0, 0x800) + "```",
      'contextInfo': {
        'mentionedJid': [_0xe84c35.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardingSourceMessage': "Your Data Request"
      }
    }, {
      'quoted': _0x3dc84c
    });
  } catch (_0x432a57) {
    console.error("Error in fetch command:", _0x432a57);
    _0x563496("❌ An error occurred:\n" + _0x432a57.message);
  }
});
cmd({
  'pattern': "tiktoksearch",
  'alias': ["tiktoks", "tiks"],
  'desc': "Search for TikTok videos using a query.",
  'react': '✅',
  'category': "tools",
  'filename': __filename
}, async (_0x4543f2, _0x474407, _0x2ace9f, {
  from: _0xe2b73b,
  args: _0x37b2cf,
  reply: _0x24085d
}) => {
  if (!_0x37b2cf[0x0]) {
    return _0x24085d("🌸 What do you want to search on TikTok?\n\n*Usage Example:*\n.tiktoksearch <query>");
  }
  const _0x4d45e1 = _0x37b2cf.join(" ");
  await _0x2ace9f.react('⌛');
  try {
    _0x24085d("🔎 Searching TikTok for: *" + _0x4d45e1 + '*');
    const _0x37f442 = await fetch("https://api.diioffc.web.id/api/search/tiktok?query=" + encodeURIComponent(_0x4d45e1));
    const _0x285f73 = await _0x37f442.json();
    if (!_0x285f73 || !_0x285f73.status || !_0x285f73.result || _0x285f73.result.length === 0x0) {
      await _0x2ace9f.react('❌');
      return _0x24085d("❌ No results found for your query. Please try with a different keyword.");
    }
    const _0x162b03 = _0x285f73.result.slice(0x0, 0x7).sort(() => Math.random() - 0.5);
    for (const _0x3bb0e6 of _0x162b03) {
      const _0x3c6161 = "🌸 *SILENT-SOBX-MD TIKTOK VIDEO RESULT*:\n\n" + ("*• Title*: " + _0x3bb0e6.title + "\n") + ("*• Author*: " + (_0x3bb0e6.author.name || 'Unknown') + " (@" + _0x3bb0e6.author.username + ")\n") + ("*• Duration*: " + _0x3bb0e6.duration + "s\n") + ("*• Plays*: " + _0x3bb0e6.stats.play + "\n") + ("*• Likes*: " + _0x3bb0e6.stats.like + "\n") + ("*• URL*: https://www.tiktok.com/@" + _0x3bb0e6.author.username + '/video/' + _0x3bb0e6.video_id + "\n\n") + "*POWERD BY SILENTLOVER432*\n\n";
      if (_0x3bb0e6.media.no_watermark) {
        await _0x4543f2.sendMessage(_0xe2b73b, {
          'video': {
            'url': _0x3bb0e6.media.no_watermark
          },
          'caption': _0x3c6161
        }, {
          'quoted': _0x474407
        });
      } else {
        _0x24085d("❌ Failed to retrieve video for *\"" + _0x3bb0e6.title + "\"*.");
      }
    }
    await _0x2ace9f.react('✅');
  } catch (_0x281fb6) {
    console.error("Error in TikTokSearch command:", _0x281fb6);
    await _0x2ace9f.react('❌');
    _0x24085d("❌ An error occurred while searching TikTok. Please try again later.");
  }
});
