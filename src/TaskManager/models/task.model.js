function Task(id, name, finished) {
    this.id = id
    this.name = name
    this.finished = finished

    return {
        id: id,
        name: name,
        finished: finished
    }
}

export default Task
