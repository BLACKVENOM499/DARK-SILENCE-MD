const {
  cmd
} = require("../command");
const yts = require("yt-search");
const axios = require("axios");
cmd({
  'pattern': "ytmax",
  'alias': ["ytamax", "ytvmax"],
  'desc': "Download YouTube videos",
  'category': "download",
  'filename': __filename
}, async (_0x3a1b62, _0x258948, _0x3821ca, {
  from: _0x2cdc26,
  quoted: _0x1064bc,
  args: _0x35dbc7,
  q: _0x3e8e72,
  reply: _0x1021bc
}) => {
  try {
    if (!_0x3e8e72) {
      return _0x1021bc("*`Please provide a YouTube link or title!`*");
    }
    await _0x3a1b62.sendMessage(_0x2cdc26, {
      'react': {
        'text': '⏳',
        'key': _0x258948.key
      }
    });
    let _0x6b796c = _0x3e8e72;
    let _0x5cd433 = null;
    let _0x96611a = null;
    if (!_0x3e8e72.startsWith("https://")) {
      const _0x2042a6 = await yts(_0x3e8e72);
      if (!_0x2042a6.videos.length) {
        return _0x1021bc("*No results found!*");
      }
      _0x5cd433 = _0x2042a6.videos[0];
      _0x6b796c = _0x5cd433.url;
      _0x96611a = _0x5cd433.videoId;
    } else {
      const _0xc659bc = _0x3e8e72.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*vi?=))([^&?/\s]+)/);
      _0x96611a = _0xc659bc ? _0xc659bc[1] : null;
    }
    const {
      data: _0x26d66d
    } = await axios.get("https://velyn.vercel.app/api/downloader/ytmp4?url=" + _0x6b796c);
    if (!_0x26d66d.status) {
      return _0x1021bc("*Failed to fetch video!*");
    }
    const _0x147077 = _0x5cd433 || {
      'title': _0x26d66d.data.title,
      'thumbnail': _0x96611a ? "https://i.ytimg.com/vi/" + _0x96611a + "/maxresdefault.jpg" : null,
      'timestamp': "Unknown",
      'author': "Unknown",
      'views': "Unknown",
      'ago': "Unknown"
    };
    const _0x3a049c = "*PLAYING:🚀* " + _0x147077.title + "\n\n\n" + "🚀 *SELECT OPTION WHAT YOU WANT:*\n\n\n" + "*_1_*  *VIDEO*\n\n" + "*_2_*  *DOCUMENT*\n\n" + "*_3_*  *AUDIO*\n\n\n" + "🚀 *REPLY WITH NUMBER TO DOWNLOAD*";
    -NaN;
    const _0x557f6d = await _0x3a1b62.sendMessage(_0x2cdc26, {
      'image': {
        'url': _0x147077.thumbnail || "https://i.ibb.co/4pzL3v2/no-thumbnail.jpg"
      },
      'caption': _0x3a049c,
      'contextInfo': {
        'mentionedJid': [_0x258948.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363189714152560@newsletter",
          'newsletterName': "SILENT-SOBX-MD",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x258948
    });
    const _0xca4e85 = _0x557f6d.key.id;
    _0x3a1b62.ev.on("messages.upsert", async _0x13ecb2 => {
      const _0x4a7577 = _0x13ecb2.messages[0];
      if (!_0x4a7577.message) {
        return;
      }
      const _0x87f2bd = _0x4a7577.message.conversation || _0x4a7577.message.extendedTextMessage?.["text"];
      const _0x47cb85 = _0x4a7577.key.remoteJid;
      const _0xd4555 = _0x4a7577.message.extendedTextMessage?.["contextInfo"]?.["stanzaId"] === _0xca4e85;
      if (_0xd4555) {
        await _0x3a1b62.sendMessage(_0x47cb85, {
          'react': {
            'text': '⬇️',
            'key': _0x4a7577.key
          }
        });
        let _0x3c472c = _0x26d66d.data.url;
        switch (_0x87f2bd) {
          case '1':
            await _0x3a1b62.sendMessage(_0x47cb85, {
              'video': {
                'url': _0x3c472c
              },
              'caption': "> © POWERD BY SILENTLOVER432 ♥️"
            }, {
              'quoted': _0x4a7577
            });
            break;
          case '2':
            await _0x3a1b62.sendMessage(_0x47cb85, {
              'document': {
                'url': _0x3c472c
              },
              'mimetype': "video/mp4",
              'fileName': _0x147077.title + ".mp4",
              'caption': "> © POWERD BY SILENTLOVER432 ♥️"
            }, {
              'quoted': _0x4a7577
            });
            break;
          case '3':
            await _0x3a1b62.sendMessage(_0x47cb85, {
              'audio': {
                'url': _0x3c472c
              },
              'mimetype': "audio/mpeg"
            }, {
              'quoted': _0x4a7577
            });
            break;
          default:
            _0x1021bc("❌ Invalid option! Please reply with 1, 2, or 3.");
        }
        await _0x3a1b62.sendMessage(_0x47cb85, {
          'react': {
            'text': '✅',
            'key': _0x4a7577.key
          }
        });
      }
    });
  } catch (_0x190391) {
    console.log(_0x190391);
    _0x1021bc("⚠️ *Error fetching video!*");
  }
});
