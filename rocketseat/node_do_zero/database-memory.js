import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    // # -> chave privada -> informação só visivel dentro da classe (como private do java)
    #videos = new Map()

    list() {
        return Array.from(this.#videos.values())
    }

    create(video) {
        // UUID = Unique Universal ID
        const videoID = randomUUID()
        this.#videos.set(videoID, video)
    }
    update(id, video) {
        this.#videos.set(id, video)
    }
    delete(id) {
        this.#videos.delete(id)
    }
}