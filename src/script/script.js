{
  const installButton = document.querySelector('#install')
  installButton.addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.createElement('a')
    link.href = "https://github.com/hoshikata/NGTP/releases/download/product/NOVEL_GAME_TEXT_PREVIEWER_1.0.0_Install.zip"
    link.download = "NOVEL_GAME_TEXT_PREVIEWER_1.0.0_Install"
    link.click()
    link.remove()
  })
  
  const portableButton = document.querySelector('#portable')
  portableButton.addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.createElement('a')
    link.href = "https://github.com/hoshikata/NGTP/releases/download/product/NOVEL_GAME_TEXT_PREVIEWER_1.0.0_Portable.zip"
    link.download = "NOVEL_GAME_TEXT_PREVIEWER_1.0.0_Portable"
    link.click()
    link.remove()
  })
  
  const webButton = document.querySelector('#web')
  webButton.addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.createElement('a')
    link.href = "https://ngt-previewer.netlify.app/"
    link.target = "_blank"
    link.click()
    link.remove()
  })
}
