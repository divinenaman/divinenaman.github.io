let source = (link, title) => ({ link, title })

let blogs = {
	"2024-01-01": [source("https://simonwillison.net/2023/Dec/31/ai-in-2023/", "Stuff we figured out about AI in 2023")],
	"2024-01-02": [source("https://bytes.swiggy.com/swiggy-cache-on-delivery-3dced3621dde", "Cache-On-Delivery: Custom caching in webview")],
	"2024-01-03": [source("https://xeiaso.net/talks/unix-philosophy-logical-extreme-wasm/", "Xe's Blog on Wazero: Go WebAssebly Runtime")],
        "2024-01-06": [source("https://antonz.org/in-browser-code-playgrounds/", "In browser code playgrounds : using WASI Runtime")],
	"2024-01-07": [source("https://birtles.blog/2024/01/06/weird-things-engineers-believe-about-development/", "Weird Things Engineers believe about WEB Dev")],
        "2024-01-08": [source("https://liamgoodacre.github.io/purescript/rows/records/2017/07/10/purescript-row-to-list.html", "Purescript RowToList Typeclass"), source("https://liamgoodacre.github.io/purescript/2017/05/27/row-lacks.html", "Purescript RowLacks Typeclass")]
	, "2024-01-11": [source("https://lihautan.com/manipulating-ast-with-javascript/", "AST with javascript")]
	, "2024-01-13": [source("https://lethain.com/systems-thinking/", "Intro to Systems Thinking")]
        , "2024-01-14":[source("https://medium.com/@nidhey29/how-did-paypal-handle-a-billion-daily-transactions-with-eight-virtual-machines-76b09ce5455c", "How PayPal uses Actor Model to handle billion transactions"), source("https://qiita.com/kimagure/items/4847685d02d4b15a556c", "Interop with Typescript using purescript"), source("https://blog.benjojo.co.uk/post/who-hosts-the-fediverse-instances", "Mapping Mastadom's server providers")]
	, "2024-01-15": [source("https://qiita.com/kimagure/items/00f97c7fc6cef178fa3c", "Encode/Decode JSON in Purescript"), source("https://qiita.com/kimagure/items/cc0ea2982abdf1625e87", "Generic Programming in Purescript")]
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