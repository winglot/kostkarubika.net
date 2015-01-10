$(function() {
    function CubeScrambler(opts) {
        // Defined default options
        this.opts = $.extend({
            faces: "DLBURF",
            modifiers: ["", "'", "2"],
            total: 25 
        }, opts || {});

        // Scramble the cube
        this.scramble = function () {
            var count = 0, move, moves = [];
            while (count < this.opts.total) {
                // Generate a random move
                move = this.opts.faces[Math.floor(Math.random() * 6)] + this.opts.modifiers[Math.floor(Math.random() * 3)];

                // Don't move the same face twice in a row
                if (count > 0 && move.charAt(0) === moves[count - 1].charAt(0)) { continue; }

                // Avoid move sequences like "R L R", which is the same as "R2 L"
                if (count > 1 && move.charAt(0) === moves[count - 2].charAt(0) &&
                        moves[count - 1].charAt(0) === this.opts.faces.charAt((this.opts.faces.indexOf(move.charAt(0)) + 3) % 6)) {
                    continue;
                }

                moves[count] = move;
                count++;
            }

            return moves;
        };
    };

    // Solve time model
    function SolveTime(opts) {
        this.opts = $.extend({
            time: "undefined",
            pop: false, 
            plustwo: false
        }, opts || {});

        this.getTime = function() {
            if (this.opts.plustwo) {
                return this.opts.time.getTime() + 2000;
            }

            return this.opts.time.getTime();
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

        this.toString = function() {
            if (this.opts.pop) {
                return "POP";
            }

            str = 
                this._roundTo(this.opts.time.getMinutes(), 2) +
                ':' +
                this._roundTo(this.opts.time.getSeconds(), 2) +
                '.' +
                this._roundTo(this.opts.time.getMilliseconds(), 3);

            if (this.opts.plustwo) {
                str = str + " (+2)";
            }

            return str;
        }
    }

    // Holds information about solve session
    function SolveSession(opts) {
        this.opts = $.extend({
            entries: []
        }, opts || {});

        this.addEntry = function(time, scramble) {
            this.opts.entries.push({
                "time": time,
                "scramble": scramble
            });

            // this._renderEntry(this.opts.entries[this.opts.entries.length - 1], this.opts.entries.length);
        }

        this.getEntries = function() {
            return this.opts.entries;
        }
    }

    function CurrentSessionRenderer(session, selector) {
        this.session = session;
        this.selector = selector;

        this.render = function() {
            var entries = this.session.getEntries();
            var arrLength = entries.length;
            $(this.selector).html("");

            for (var i = 0; i < arrLength; i++) {
                this._renderEntry(entries[i], i+1)
            };
        }

        this.renderLastEntry = function() {
            var entries = this.session.getEntries();
            this._renderEntry(entries[entries.length - 1], entries.length);
        }

        this._renderEntry = function(entry, number) {
            var row = this._getTimeRow(number, entry.time);
            var inforow = this._getTimeInfoRow(number, entry.scramble);
            var element = $(this.selector);

            inforow.prependTo(element);
            row.prependTo(element);
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
    function Timer(opts) {
        this.started = false;
        this.canRun = true;
        this.timeStart = false;
        this.timeCurrent = false;

        this.opts = $.extend({
            selector: "#time"
        }, opts || {});

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

            var entry = new SolveTime({ time: this.timeCurrent });
            $(this.opts.selector).trigger("onTimerTick", [entry]);

            if (this.started) {
                var _this = this;
                setTimeout(function() {
                    _this.runner();
                }, 1)
            } else {
                $(this.opts.selector).trigger("onTimerStop", [entry, ""])
            }
        }
    }

    // Create Timer object and bind to events
    timer = new Timer({
        selector: "#time"
    });

    // Create current solve session object
    session = new SolveSession();
    sessionRenderer = new CurrentSessionRenderer(session, "#time-history");
    scrambler = new CubeScrambler();

    $("#scramble").html(
        scrambler.scramble().join(" ")
    );

    // Display time
    $("#time").on("onTimerTick", function(event, entry) {
        $(this).html(entry.toString());
    });

    // Add session entry when stopping timer
    $("#time").on("onTimerStop", function(event, entry, scramble) {
        session.addEntry(entry, $("#scramble").html());
        sessionRenderer.renderLastEntry();

        $("#scramble").html(
            scrambler.scramble().join(" ")
        )
    });
    
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