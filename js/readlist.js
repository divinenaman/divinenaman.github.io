let source = (link, title) => ({ link, title })

let blogs = {
	"2024-01-01": [source("https://simonwillison.net/2023/Dec/31/ai-in-2023/", "Stuff we figured out about AI in 2023")],
	"2024-01-02": [source("https://bytes.swiggy.com/swiggy-cache-on-delivery-3dced3621dde", "Cache-On-Delivery: Custom caching in webview")]
}

const container = document.querySelector(".section--readlist")

for (const b of Object.keys(blogs)) {
    
    const item = document.createElement("div")
    item.classList.add("section--container") 

    const day = document.createElement("p")	
    day.innerHTML = b 
    day.classList.add("hyper-links-dark")

    item.appendChild(day)

    for (const s of blogs[b]) {
    	const anchor = document.createElement("a")
        anchor.target = "_blank"	
 	anchor.classList.add("text--caption")
   	item.classList.add("readlist--item")

    	anchor.href = s.link;
    	anchor.innerHTML = s.title;    

    	item.appendChild(anchor)
    }
    container.appendChild(item)
}
