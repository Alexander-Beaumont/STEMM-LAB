export default class Timer {
    constructor() {
        this.startTime;
        this.time;
    }
    start() {
        this.startTime = Date.now();
    }
    stop() {
        this.time = Date.now() - this.startTime;
        return this.time;
    }
    getTime() {
        return this.time;
    }
}