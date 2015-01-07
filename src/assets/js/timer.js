$(function() {

    // Solve time formatter
    function SolveTime(time) {
        this.solveTime = time;

        this.getFormatted = function() {
            str = 
                this._roundTo(this.solveTime.getMinutes(), 2) +
                ':' +
                this._roundTo(this.solveTime.getSeconds(), 2) +
                '.' +
                this._roundTo(this.solveTime.getMilliseconds(), 3);

            return str;
        }

        this._roundTo = function(t, r) {
            out = t;
            pow = 1;

            for (i = 1; i < r; i++) {
                pow *= 10;

                if (t < pow) {
                    out = '0' + out;
                }
            }

            return out;
        }
    }

    function TimeHistory(el) {
        this.el = el;
        this.entries = [];

        this.addEntry = function(time, scramble, pop) {
            this.entries.push({
                "time": time,
                "scramble": scramble,
                "pop": pop
            });
        }

        this.render = function() {
            arrLength = this.entries.length;
            str = ""
            for (var i = 0; i < arrLength; i++) {
                var num = i + 1;
                str = str + "<div> " + num + ". " + this.entries[i].time.getFormatted() + "</div>";
            };

            this.el.innerHTML = str;
        }
    }

    // Timer class definition
    function Timer(timerEl, historyEl) {
        this.history = new TimeHistory(historyEl)
        this.started = false;
        this.canRun = true;
        this.timeStart = false;
        this.timeCurrent = false;
        this.el = timerEl;

        this.start = function() {
            if (!this.started && this.canRun) {
                this.timeStart = new Date().getTime();
                this.started = true;
                this.canRun = false;

                this.runner();

                return true;
            }

            if (!this.started) {
                this.canRun = true;
            }

            return false;
        }

        this.stop = function() {
            if (this.started) {
                this.started = false;

                return true;
            }

            return false;
        }

        this.runner = function() {
            timeDiff = new Date().getTime();
            timeDiff -= this.timeStart;

            this.timeCurrent = new Date(timeDiff);

            var entry = new SolveTime(this.timeCurrent);
            this.el.innerHTML = entry.getFormatted();

            if (this.started) {
                var _this = this;
                setTimeout(function() {
                    _this.runner();
                }, 1)
            } else {
                this.history.addEntry(entry, "", false);
                this.history.render();
            }
        }
    }

    // Create Timer object and bind to events
    timer = new Timer(
        document.getElementById('time'),
        document.getElementById('time-history')
    )
    
    document.addEventListener('keydown', function(e) {
        if(e.keyCode == 32) {
            timer.stop();
            e.preventDefault();
        }
    }, false);

    document.addEventListener('keyup', function(e) {
        if(e.keyCode == 32) {
            timer.start();
            e.preventDefault();
        }
    }, false);

});