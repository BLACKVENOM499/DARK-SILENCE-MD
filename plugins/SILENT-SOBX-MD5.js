const {
  cmd
} = require('../command');
const {
  ytsearch
} = require("@dark-yasiya/yt-dl.js");
cmd({
  'pattern': "video",
  'alias': ["mp4"],
  'react': '🎥',
  'desc': "Download YouTube video",
  'category': "main",
  'use': ".mp4 < Yt url or Name >",
  'filename': __filename
}, async (_0x4e7553, _0x4e376b, _0x422bc4, {
  from: _0x32cc13,
  prefix: _0x318a0a,
  quoted: _0x57f294,
  q: _0x5338b1,
  reply: _0x201da9
}) => {
  try {
    if (!_0x5338b1) {
      return await _0x201da9("Please provide a YouTube URL or video name.");
    }
    const _0x138d95 = await ytsearch(_0x5338b1);
    if (_0x138d95.results.length < 0x1) {
      return _0x201da9("No results found!");
    }
    let _0x5d9083 = _0x138d95.results[0x0];
    let _0x24cfd8 = 'https://apis.davidcyriltech.my.id/download/ytmp4?url=' + encodeURIComponent(_0x5d9083.url);
    let _0x9e224f = await fetch(_0x24cfd8);
    let _0x1ff8cd = await _0x9e224f.json();
    if (_0x1ff8cd.status !== 0xc8 || !_0x1ff8cd.success || !_0x1ff8cd.result.download_url) {
      return _0x201da9("Failed to fetch the video. Please try again later.");
    }
    let _0x66b6c0 = "📹 *DARK-SILENCE-MD MP4 DOWNLOADEDER🚀*\n🎬 *TITLE:* " + _0x5d9083.title + "\n🔗 *LINK:* " + _0x5d9083.url + "\n> POWERED BY SILENTLOVER432❤️";
    await _0x4e7553.sendMessage(_0x32cc13, {
      'video': {
        'url': _0x1ff8cd.result.download_url
      },
      'caption': _0x66b6c0,
      'mimetype': "video/mp4"
    }, {
      'quoted': _0x4e376b
    });
  } catch (_0x59ef1c) {
    console.log(_0x59ef1c);
    _0x201da9("An error occurred. Please try again later.");
  }
});
cmd({
  'pattern': "song",
  'alias': ["play", "mp3"],
  'react': '🎶',
  'desc': "Download YouTube song",
  'category': "main",
  'use': ".song <query>",
  'filename': __filename
}, async (_0x1689cd, _0x112328, _0x15a705, {
  from: _0x227f93,
  sender: _0x525eb7,
  reply: _0x239b0d,
  q: _0x5e8f3a
}) => {
  try {
    if (!_0x5e8f3a) {
      return _0x239b0d("Please provide a song name or YouTube link.");
    }
    const _0x12c298 = await ytsearch(_0x5e8f3a);
    if (!_0x12c298.results.length) {
      return _0x239b0d("No results found!");
    }
    const _0x29524e = _0x12c298.results[0x0];
    const _0x135353 = "https://apis.davidcyriltech.my.id/youtube/mp3?url=" + encodeURIComponent(_0x29524e.url);
    const _0x170cdc = await fetch(_0x135353);
    const _0x5e0743 = await _0x170cdc.json();
    if (!_0x5e0743?.['result']?.["downloadUrl"]) {
      return _0x239b0d("Download failed. Try again later.");
    }
    await _0x1689cd.sendMessage(_0x227f93, {
      'audio': {
        'url': _0x5e0743.result.downloadUrl
      },
      'mimetype': 'audio/mpeg',
      'fileName': _0x29524e.title + '.mp3',
      'contextInfo': {
        'externalAdReply': {
          'title': _0x29524e.title.length > 0x19 ? _0x29524e.title.substring(0x0, 0x16) + '...' : _0x29524e.title,
          'body': "DARK-SILENCE-MD MP3 DOWNLOADEDER",
          'mediaType': 0x1,
          'thumbnailUrl': _0x29524e.thumbnail.replace('default.jpg', "hqdefault.jpg"),
          'sourceUrl': "https://whatsapp.com/channel/0029VaHO5B0G3R3cWkZN970s",
          'mediaUrl': "https://whatsapp.com/channel/0029VaHO5B0G3R3cWkZN970s",
          'showAdAttribution': true,
          'renderLargerThumbnail': true
        }
      }
    }, {
      'quoted': _0x112328
    });
  } catch (_0x5c47f4) {
    console.error(_0x5c47f4);
    _0x239b0d("An error occurred. Please try again.");
  }
});
