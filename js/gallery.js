images = [
    "https://instagram.fdel7-1.fna.fbcdn.net/v/t51.2885-15/288742109_178432734579326_1814995138200995095_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fdel7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=tzJargIqPN0AX-Ry5Rx&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2MzQwMzkzMzQzMjYxMTU3MQ%3D%3D.2-ccb7-5&oh=00_AT_Kp8Zmvvtxe_k-UQGE4zVdyvfaq6Rm1Ur1-mP9fezL2w&oe=62B4598E&_nc_sid=30a2ef",
]


const container = document.querySelector(".section--gallery")

for (const img of images) {
    const item = document.createElement("div")
    const imgNode = document.createElement("img")
    item.classList.add("gallery--item")

    imgNode.src = img
    item.appendChild(imgNode)

    container.appendChild(item)
}