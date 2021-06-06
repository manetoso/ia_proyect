export let FuzzyLogic = (function () {
  "use strict";
  var a = function () {};
  return (
    (a.prototype = {
      getResult: function (a) {
        var b = this.construct(a.variables_input),
          c = this.fuzzification(a.crisp_input, b),
          d = this.output_combination(c, a.inferences, a.variable_output),
          e = this.takeMaxOfArraySet(d),
          f = this.defuzzification(
            e,
            this.construct_variable(a.variable_output.sets)
          );
        return f;
      },
      construct: function (a) {
        var c,
          b = [];
        for (c = a.length - 1; c >= 0; c -= 1)
          b[c] = this.construct_variable(a[c].sets);
        return b;
      },
      construct_variable: function (a) {
        var c,
          b = [];
        for (c = a.length - 1; c >= 0; c -= 1)
          b[c] = {
            a: a[c],
            firstPoint: a[c][0] === a[c][1] ? 1 : 0,
            lastPoint: a[c][2] === a[c][3] ? 1 : 0,
            mUp: 1 / (a[c][1] - a[c][0]),
            mDown: 1 / (a[c][3] - a[c][2]),
          };
        return b;
      },
      fuzzification: function (a, b) {
        var d,
          c = [];
        for (d = b.length - 1; d >= 0; d -= 1)
          c[d] = this.fuzzification_variable(a[d], b[d]);
        return c;
      },
      fuzzification_variable: function (a, b) {
        var d,
          c = [];
        for (d = b.length - 1; d >= 0; d -= 1)
          c[d] = this.fuzzification_function(a, b[d]);
        return c;
      },
      fuzzification_function: function (a, b) {
        var c = 0;
        return (
          b.a[0] >= a
            ? (c = b.firstPoint)
            : b.a[1] > a
            ? (c = b.mUp * (a - b.a[0]))
            : b.a[2] >= a
            ? (c = 1)
            : b.a[3] > a
            ? (c = 1 - b.mDown * (a - b.a[2]))
            : a >= b.a[3] && (c = b.lastPoint),
          c
        );
      },
      output_combination: function (a, b, c) {
        var e,
          f,
          d = [];
        for (e = c.sets.length - 1; e >= 0; e -= 1) d[e] = [];
        for (e = b.length - 1; e >= 0; e -= 1)
          for (f = b[e].length - 1; f >= 0; f -= 1)
            b[e][f] >= 0 && d[b[e][f]].push(a[e][f]);
        return d;
      },
      defuzzification: function (a, b) {
        var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          c = 0,
          d = 0;
        for (e = a.length - 1; e >= 0; e -= 1) {
          f = b[e];
          g = f.a;
          h = a[e];
          i = g[3] - g[0];
          k = g[0];
          g[0] !== g[1] && (k += h / f.mUp);
          l = g[3];
          g[2] !== g[3] && (l -= h / f.mDown);
          m = 0;
          g[0] !== k && (m += ((k - g[0]) * a[e]) / 2);
          k !== l && (m += (l - k) * a[e]);
          l !== g[3] && (m += ((g[3] - l) * a[e]) / 2);
          j = l - k;
          n = ((h / 3) * (i + 2 * j)) / (j + i);
          p = k + (l - k) / 2;
          q = g[0] + (g[3] - g[0]) / 2;
          r = 0;
          0 !== p - q && (r = h / (p - q));
          o = q;
          0 !== r && (o += n / r);
          c += m * o;
          d += m;
        }
        return 0 === d ? 0 : c / d;
      },
      takeMaxOfArraySet: function (a) {
        var c,
          b = [];
        for (c = a.length - 1; c >= 0; c -= 1) b[c] = this.takeMaxOfArray(a[c]);
        return b;
      },
      takeMaxOfArray: function (a) {
        var c,
          b = a[0];
        for (c = 1; a.length > c; c += 1) b = a[c] > b ? a[c] : b;
        return b;
      },
    }),
    a
  );
})();
