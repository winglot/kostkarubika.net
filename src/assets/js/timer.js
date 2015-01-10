$(function() {

    function Cube() {
        // Define the six faces of the cube
        this.faces = "DLBURF";

        // This will contain a history of all the states to make sure we don't repeat a state
        this.states = [];

        // Which stickers are part of the same layer and should move along with the face
        this.edges = {
            D: [46, 45, 44, 38, 37, 36, 22, 21, 20, 14, 13, 12],
            L: [24, 31, 30, 40, 47, 46, 0, 7, 6, 20, 19, 18],
            B: [26, 25, 24, 8, 15, 14, 6, 5, 4, 36, 35, 34],
            U: [18, 17, 16, 34, 33, 32, 42, 41, 40, 10, 9, 8],
            R: [28, 27, 26, 16, 23, 22, 4, 3, 2, 44, 43, 42],
            F: [30, 29, 28, 32, 39, 38, 2, 1, 0, 12, 11, 10]
        };

        // Sets the cube to the solved state
        this.reset = function () {
            this.states = ["yyyyyyyyoooooooobbbbbbbbwwwwwwwwrrrrrrrrgggggggg"];
        };

        // Twist the cube according to a move in WCA notation
        this.twist = function (state, move) {
            var i, k, prevState, face = move.charAt(0), faceIndex = this.faces.indexOf(move.charAt(0)),
                turns = move.length > 1 ? (move.charAt(1) === "2" ? 2 : 3) : 1;
            state = state.split("");
            for (i = 0; i < turns; i++) {
                prevState = state.slice(0);
                // Rotate the stickers on the face itself
                for (k = 0; k < 8; k++) { state[(faceIndex * 8) + k] = prevState[(faceIndex * 8) + ((k + 6) % 8)]; }
                // Rotate the adjacent stickers that are part of the same layer
                for (k = 0; k < 12; k++) { state[this.edges[face][k]] = prevState[this.edges[face][(k + 9) % 12]]; }
            }
            return state.join("");
        };

        // Scramble the cube
        this.scramble = function () {
            var count = 0, total = 25, state, prevState = this.states[this.states.length - 1],
                move, moves = [], modifiers = ["", "'", "2"];
            while (count < total) {
                // Generate a random move
                move = this.faces[Math.floor(Math.random() * 6)] + modifiers[Math.floor(Math.random() * 3)];
                // Don't move the same face twice in a row
                if (count > 0 && move.charAt(0) === moves[count - 1].charAt(0)) { continue; }
                // Avoid move sequences like "R L R", which is the same as "R2 L"
                if (count > 1 && move.charAt(0) === moves[count - 2].charAt(0) &&
                        moves[count - 1].charAt(0) === this.faces.charAt((this.faces.indexOf(move.charAt(0)) + 3) % 6)) {
                    continue;
                }
                state = this.twist(prevState, move);
                if (this.states.indexOf(state) === -1) {
                    // If this state hasn't yet been encountered, save it and move on
                    moves[count] = move;
                    this.states[count] = state;
                    count++;
                    prevState = state;
                }
            }
            return moves;
        };
    };

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

    // Holds information about solve time history
    function TimeHistory(el) {
        this.el = el;
        this.entries = [];

        this.addEntry = function(time, scramble, pop) {
            this.entries.push({
                "time": time,
                "scramble": scramble,
                "pop": pop
            });

            this._renderEntry(this.entries[this.entries.length - 1], this.entries.length);
        }

        this.render = function() {
            arrLength = this.entries.length;
            this.el.html("");

            for (var i = 0; i < arrLength; i++) {
                this._renderEntry(this.entries[i], i+1)
            };
        }

        this._renderEntry = function(entry, number) {
            var row = this._getTimeRow(number, entry.time.getFormatted());
            var inforow = this._getTimeInfoRow(number, entry.scramble);

            inforow.prependTo(this.el)
            row.prependTo(this.el)
        }

        this._getTimeRow = function(num, time) {
            var row = $("<div/>", {
                "id":    "history-time-"+num,
                "class": "row history-time",
                "ref":   "info-time"+num,
            });

            $("<div/>", {
                "class": "col-xs-2",
                "text":  num+"."
            }).appendTo(row);

            $("<div/>", {
                "class": "col-xs-10",
                "text":  time
            }).appendTo(row);

            $(row).click(function() {
                $("#info-time-"+num).slideToggle();
            });

            return row;
        }

        this._getTimeInfoRow = function(num, scramble) {
            var row = $("<div/>", {
                "id":    "info-time-"+num,
                "class": "row info-time"
            }).append(
                $("<div/>", {
                    "class": "col-xs-12"
                }).append(
                    $("<div/>", {
                        "class": "btn-group btn-group-justified",
                        "role":  "group"
                    })
                      .append(this.__getInfoRowButton("+2 sek.", "info"))
                      .append(this.__getInfoRowButton("POP", "warning"))
                      .append(this.__getInfoRowButton("Usuń", "danger"))
                ).append(this.__getInfoRowScramblePanel(scramble))
            );

            return row;
        }

        this.__getInfoRowScramblePanel = function(scramble) {
            var panel = $("<div/>", {
                "class": "panel panel-info panel-cube"
            }).append(
                $("<div/>", {
                    "class": "panel-heading",
                    "text":  "Scramble"
                })
            ).append(
                $("<div/>", {
                    "class": "panel-body",
                    "text":  scramble
                })
            );

            return panel;
        }

        this.__getInfoRowButton = function(text, type) {
            var btn = $("<div/>", {
                "class": "btn-group",
                "role":  "group"
            }).append(
                $("<button/>", {
                    "type":  "button",
                    "class": "btn btn-"+type,
                    "text":  text
                })
            );

            return btn;
        }
    }

    // Timer class definition
    function Timer(timerEl, historyEl, scrambleEl) {
        this.history = new TimeHistory(historyEl);
        this.cube = new Cube(scrambleEl);

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
            this.el.html(entry.getFormatted());

            if (this.started) {
                var _this = this;
                setTimeout(function() {
                    _this.runner();
                }, 1)
            } else {
                this.history.addEntry(entry, "", false);
            }
        }
    }

    // Create Timer object and bind to events
    timer = new Timer(
        $('#time'),
        $('#time-history'),
        $("#scramble")
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

    $("table#history-table tbody").on("click", "tr.history-time", function() {
        alert("Alert!");
    });

});