// 1. Import readline library

const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

// rl.question("What's your name?", input => {
//     rl.setPrompt(`Hello, ${input}`)
//     rl.prompt()
//     rl.close()
// })

async function ask(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, resolve)
    })
}

async function start() {
    let favoriteDriver = await ask("What is your favorite F1 driver?")
    let favoriteTeamPrincipal = await ask("What is your favorite team principal?")
    console.log(`This person's favorite driver is ${favoriteDriver} and team principal is ${favoriteTeamPrincipal}`)
    rl.close()
}

start()

// Another way of doing this

// let f1driver = ask("What's your f1 driver?")

// f1driver.then(f1name => console.log(`This guy's favorite driver is ${f1name}`))
