class TxtType {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.isDeleting = false;
        this.tick();
    }

    tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        const delta = 200 - Math.random() * 100;
        const nextDelta = this.isDeleting ? delta / 2 : delta;

        if (!this.isDeleting && this.txt === fullTxt) {
            setTimeout(() => this.handleDelete(nextDelta), this.period);
        } else if (this.isDeleting && this.txt === '') {
            setTimeout(() => this.handleNewLoop(), 500);
        } else {
            setTimeout(() => this.tick(), nextDelta);
        }
    }

    handleDelete(delta) {
        this.isDeleting = true;
        setTimeout(() => this.tick(), delta);
    }

    handleNewLoop() {
        this.isDeleting = false;
        this.loopNum++;
        this.tick();
    }
}

window.onload = function () {
    const elements = document.getElementsByClassName('typewriter');
    Array.from(elements).forEach(element => {
        const toRotate = element.getAttribute('data-type');
        const period = element.getAttribute('data-period');
        if (toRotate) {
            new TxtType(element, JSON.parse(toRotate), period);
        }
    });
};