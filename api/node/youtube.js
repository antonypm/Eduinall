//Youtube teacher podcast api

const stream = require('youtube-audio-stream')
const url = 'https://www.youtube.com/watch?v=nOb_iQjTy-Q&list=PLUl4u3cNGP61R5sPDPKVfcFlu95wSs2Kx'//http://youtube.com/watch?v=34aQNMvGEZQ'
//mit example
const decoder = require('lame').Decoder
const speaker = require('speaker')
 
stream(url)
.pipe(decoder())
.pipe(new speaker())
console.log('end')