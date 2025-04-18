try {
   const meme = 'kasongo'
   console.log(meme)
   throw new Error('byarakwamy')
} catch (e) {
  console.error(e);
  console.error(meme)
}
