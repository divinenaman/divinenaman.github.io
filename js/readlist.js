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
	, "2024-01-22": [source("https://medium.com/@personal.david.kohen/the-quest-for-signals-in-react-usestate-on-steroids-71eb9fc87c14", "Signals In React from scratch!")]
	, "2024-01-27": [source("https://www.florianbellmann.com/blog/never-taught-qa", "Maintaining a testing culture and standard!")]
	, "2024-01-28": [source("https://www.promptingguide.ai/techniques/cot", "Prompting Technique: Chain of Thought"), source("https://tidyfirst.substack.com/p/exploring-ai", "Exploring AI: What does exploration really mean ?")]
	, "2024-01-29": [source("https://www.theregister.com/2024/01/24/willison_ai_software_development", "Usefulness of AI: Simon Williams"), source("https://invertedpassion.com/the-anti-productivity-manifesto/", "The Anti-Productivity Manifesto")]
	, "2024-02-03": [source("https://www.whytryai.com/p/ai-images-chatbots", "Better AI Images using Chatbots")]
	, "2024-02-04": [source("https://brilliantsugar.github.io/posts/how-i-learned-to-stop-worrying-and-love-juggling-c++-atomics/", "Triple Buffer in C++")]
	, "2024-02-05": [source("https://harry.garrood.me/blog/write-your-own-generics/", "PureScript's Generic type class")]
	, "2024-02-08": [source("https://blog.meain.io/2024/just-enough-cors/", "Just Enough CORS"), source("https://www.levels.fyi/blog/scaling-to-millions-with-google-sheets.html", "Google Sheets as DB")]
	, "2024-02-09": [source("https://notes.eatonphil.com/2024-02-08-an-intuition-for-distributed-consensus-in-oltp-systems.html?utm_source=tldrnewsletter", "An intuition for distributed consensus in OLTP systems")]
	, "2024-02-10": [source("https://erichartford.com/uncensored-models", "Censored vs Uncensored LLM Models"), source("https://agi-sphere.com/context-length/", "Context Length in LLMs"), source("https://agi-sphere.com/retrieval-augmented-generation-llama2/", "Simple RAG pipeline")]
	, "2024-02-11": [source("https://giansegato.com/essays/edutainment-is-not-learning", "How to Learn Better in the Digital Age")]
	, "2024-02-12": [source("https://invertedpassion.com/people-dont-like-using-technology/", "People don't like usefulness over tech"), source("https://invertedpassion.com/all-sophisticated-solutions-start-extremely-simple/", "All sophisticated solutions start extremely simple")]
        , "2024-02-13": [source("https://world.hey.com/dhh/the-compounding-seeds-of-creativity-e7e212c0", "The compounding seeds of creativity")]
	, "2024-02-16": [source("https://www.theverge.com/24067997/robots-txt-ai-text-file-web-crawlers-spiders", "robots.txt: The text file that runs the internet")]
	, "2024-02-18": [source("https://rednafi.com/go/strategy_pattern/#fn:2", "Strategy Pattern in Go"), source("https://replicate.com/blog/how-to-prompt-llama#system-prompts", "Llama 2 prompting guide"), source("https://www.promptingguide.ai/models/phi-2", "Phi-2 prompting guide")]
	, "2024-02-22": [source("https://newsletter.pragmaticengineer.com/p/scaling-chatgpt", "Scaling ChatGPT: Five Real-World Engineering Challenges")]
	, "2024-03-02": [source("https://depth-first.com/articles/2019/01/22/scanner-driven-parser-development/", "Scanner driven JSON parsing")]
	, "2024-03-10": [source("https://osanseviero.github.io/hackerllama/blog/posts/sentence_embeddings/", "Sentence Embeddings")]

	, "2024-04-01": [source("https://lucasoshiro.github.io/posts-en/2023-02-13-git-debug/", "Git as debugging tool")]
	, "2024-04-13": [source("https://www.sicpers.info/2018/03/why-inheritance-never-made-any-sense/", "Inheritance never made any sense")]
	, "2024-04-13": [source("https://netflixtechblog.com/predictive-cpu-isolation-of-containers-at-netflix-91f014d856c7", "Predictive CPU isolation of containers at Netflix")]
	, "2024-04-15": [source("https://ntietz.com/blog/researching-why-we-use-semicolons-as-statement-terminators/", "Semicolons in programming")]
        
        , "2024-05-01": [source("https://sqlite.org/draft/whybytecode.html","Why SQLite Uses Bytecode"), source("https://medium.com/pinterest-engineering/how-we-built-text-to-sql-at-pinterest-30bad30dabff", "How we built Text-to-SQL at Pinterest")]
        , "2024-05-02": [source("https://michal.sapka.me/bsd/why-bsd/", "Why use BSD ?")]
	, "2024-05-03": [source("https://xp123.com/refactor-inline-adjust-extract/", "Refactor: inline-adjust-extract")]
        , "2024-05-06": [source("https://yoric.github.io/post/rust-typestate/", "Rust Typestate"), source("https://transactional.blog/blog/2023-why-full-text-search-is-hard", "Full text search is hard")]
        , "2024-05-28": [source("https://kyleshevlin.com/two-types-of-composition/", "Two types of composition in frontend!"), source("https://kyleshevlin.com/design-system-retrospective/", "Creating a design system!")]

	, "2024-06-03": [source("https://mazzo.li/posts/mac-distributed-tx.html", "Easy hash authentication in distributed filesystems!")]
        , "2024-06-07": [source("https://vhyrro.github.io/posts/effect-systems/", "Conceptualize an Effect System!")]
	, "2024-06-08": [source("https://overreacted.io/algebraic-effects-for-the-rest-of-us/", "Algebraic Effect as a continuation concept!"), source("https://overreacted.io/the-two-reacts/", "Two Reacts: Client vs Server side!")]
	, "2024-06-10": [source("https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/", "What color is your function ?: A strawman for async/sync model")]
        , "2024-06-11": [source("https://journal.stuffwithstuff.com/2013/01/13/iteration-inside-and-out/", "Internal and External iterators!")]
        , "2024-06-13": [source("https://journal.stuffwithstuff.com/2013/02/24/iteration-inside-and-out-part-2/", "Generators & Fibers as Iterators!")]

	, "2024-07-06": [source("https://ntietz.com/blog/throw-away-your-first-draft/", "Prototyping: throw you first draft of code!"), source("https://jonahdevs.com/the-subtract-day-why-less-code-can-lead-to-more-success/", "The Subtract day!")]
	, "2024-08-16": [source("https://kristoff.it/blog/what-is-zig-comptime/", "What is Zig's comptime ?")]
	, "2024-08-18": [source("https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting", "Fonts with built in Syntax Highlighting!")
			, source("https://two-wrongs.com/practices-of-reliable-software-design", "Practices to build reliable software while starting out!")
			]
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
