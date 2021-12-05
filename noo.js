Object.keys(Array.from({ length: n + 1 }));
Array.from((new Array(n + 1).keys()));
[...Array(n + 1).keys()];
[...Array.from({ length: n + 1 }).keys()];

