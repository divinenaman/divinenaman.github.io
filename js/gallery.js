images = [
    {
        link: "https://unsplash.com/photos/dnAWPVyaUGc/download?ixid=MnwxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE2NTU2MTM5Mzg&force=true&w=1920",
        caption: "A sotry but the lack of words"
    },
    {
        link: "https://unsplash.com/photos/QGvyw8py8xk/download?ixid=MnwxMjA3fDB8MXxhbGx8MXx8fHx8fDJ8fDE2NTU2MTM5Mzg&force=true&w=1920",
        caption: "Moments before cats and dogs"
    },
    {
        link: "https://unsplash.com/photos/_rkd9QXS-Aw/download?ixid=MnwxMjA3fDB8MXxhbGx8NHx8fHx8fDJ8fDE2NTU2MTM5Mzg&force=true&w=1920",
        caption: "Naturally Noumenon"
    },
    {
        link: "https://unsplash.com/photos/ArXOO23c0mQ/download?ixid=MnwxMjA3fDB8MXxhbGx8M3x8fHx8fDJ8fDE2NTU2MTM5Mzg&force=true&w=1920",
        caption: "Shades of summer popping like soda"
    }
]


const container = document.querySelector(".section--gallery")

for (const img of images) {
    const item = document.createElement("div")
    const imgNode = document.createElement("img")
    const caption = document.createElement("p")

    caption.classList.add("text--caption")
    item.classList.add("gallery--item")

    imgNode.src = img.link
    caption.textContent = img.caption

    item.appendChild(imgNode)
    item.appendChild(caption)
    container.appendChild(item)
}