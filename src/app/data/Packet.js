export default class Packet {
    time = Date.now()
    type = "packet"
    data = {}
    important = false

    constructor(from) {
        this.time = from.time;
        this.type = from.type;
        this.data = from.data;
        this.important = JSON.parse(from.important);
    }
}