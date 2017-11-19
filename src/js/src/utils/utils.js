module.exports = {
    observe: function(datasource, callback) {
        if ('observe' in Object) {
            Object.observe(datasource, callback);
        } else {
            Object.keys(datasource).forEach(function(key) {
                var value = datasource[key];
                Object.defineProperty(datasource, key, {
                    enumerable: true,
                    configurable: true,
                    get: function() {
                        return value;
                    },
                    set: function(newvalue) {
                        value = newvalue;
                        callback(newvalue);
                    }
                });
            });
        };
    },
    provide: function(str) { //创建空间
        var space = window;
        var spas = str.split('.');
        for (var i = 0, l = spas.length; i < l; i++) {
            if (space[spas[i]]) {
                space = space[spas[i]];
            } else {
                space = space[spas[i]] = new Object();
            };
        };
    },
    gUid: function() { //产生ID
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).toUpperCase();
    },
    clearAnimate: function(key) {
        if (Stage && key in Stage.animate) {
            Stage.animate[key] = null;
            delete Stage.animate[key];
        }
    },
    animate: function(obj, json, times, fx, fn) {
        let iCur = {};
        let startTime = Date.now();
        if (typeof times == 'undefined') {
            times = 400;
            fx = 'linear';
        }
        if (typeof times == 'string') {
            if (typeof fx == 'function') {
                fn = fx;
            }
            fx = times;
            times = 400;
        } else if (typeof times == 'function') {
            fn = times;
            times = 400;
            fx = 'linear';
        } else if (typeof times == 'number') {
            if (typeof fx == 'function') {
                fn = fx;
                fx = 'linear';
            } else if (typeof fx == 'undefined') {
                fx = 'linear';
            }
        }
        for (let attr in json) {
            iCur[attr] = 0;
            if (attr == 'opacity') {
                if (Math.round(obj[attr] * 100) == 0) {
                    iCur[attr] = 0;
                } else {
                    iCur[attr] = Math.round(obj[attr] * 100) || 100;
                }
            } else {
                iCur[attr] = parseInt(obj[attr]) || 0;
            }
        }
        this.clearAnimate(obj.animateKey);
        obj.animateKey = this.gUid();
        Stage.addAnimate(obj.animateKey, function() {
            let changeTime = Date.now();
            let scale = 1 - Math.max(0, startTime - changeTime + times) / times;
            for (let attr in json) {
                let value = Tween[fx](scale * times, iCur[attr], json[attr] - iCur[attr], times);
                obj[attr] = value;
            }
            if (scale == 1) {
                Stage.stopAnimate(obj.animateKey);
                if (fn) {
                    fn.call(obj);
                }
            }
        });
        return obj.animateKey;
    }
};