import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  content.classList.add("placeholder")
  const videoURL = input.value

  if (!videoURL.includes("watch?v=")) {
    return (content.textContent = "Não é um vídeo válido")
  }

  const [_, params] = videoURL.split("/watch?v=")
  const [videoID] = params.split("&")

  content.textContent = "Obtendo o texto do áudio..."

  const transcription = await server.get("/summary/" + videoID)

  content.textContent = "Realizando o resumo..."

  const summary = await server.post("/summary", {
    text: transcription.data.result,
  })

  content.textContent = summary.data.result
  content.classList.remove("placeholder")
})
