

var minimumHammingDistance = function(source, target, allowedSwaps) {

    const n = source.length;
    const parent = new Int32Array(n);
    for (let i = 0; i < n; i++) 
        parent[i] = i;

    //  DSU with Path Compression
    const find = (i) => {
        while (parent[i] !== i) {
            parent[i] = parent[parent[i]];
            i = parent[i];
        }
        return i;
    };

    // Union
    for (let i = 0; i < allowedSwaps.length; i++) {
        const rootA = find(allowedSwaps[i][0]);
        const rootB = find(allowedSwaps[i][1]);
        if (rootA !== rootB) 
            parent[rootA] = rootB;
    }

    // we group indices by root efficiently
    const rootToIndices = new Map();
    for (let i = 0; i < n; i++) {
        const root = find(i);
        let list = rootToIndices.get(root);
        if (list === undefined) {
            list = [];
            rootToIndices.set(root, list);
        }
        list.push(i);
    }

    let minHammingDist = 0;

    // single freq object 
    for (const indices of rootToIndices.values()) {
        const freq = new Map();
        const len = indices.length;

        // we count source values in this component
        for (let i = 0; i < len; i++) {
            const val = source[indices[i]];
            freq.set(val, (freq.get(val) || 0) + 1);
        }

        // we match target values
        for (let i = 0; i < len; i++) {
            const val = target[indices[i]];
            const count = freq.get(val);
            if (count > 0) {
                freq.set(val, count - 1);
            } else {
                minHammingDist++;
            }
        }
    }

    return minHammingDist;
};

const inputs = [
  [
    [1, 2, 3, 4],
    [2, 1, 4, 5],
    [
      [0, 1],
      [2, 3],
    ],
  ],
  [
    [5, 1, 2, 4, 3],
    [1, 5, 4, 2, 3],
    [
      [0, 4],
      [4, 2],
      [1, 3],
      [1, 4],
    ],
  ],
  [
    [1, 4, 6, 2, 8],
    [4, 8, 6, 1, 2],
    [
      [0, 1],
      [1, 2],
      [3, 4],
    ],
  ],
];
minimumHammingDistance(...inputs[1])

// const minimumHammingDistance = (source, target, allowableSwaps) => {
//   const n = source.length;
//   const root = new Int32Array(n);

//   for (let i = 0; i < n; i++) {
//     root[i] = i;
//   }

//   function find(i) {
//     let deepestIdx = i;
//     while (root[deepestIdx] !== deepestIdx) deepestIdx = root[deepestIdx];
//     while (i !== deepestIdx) {
//       const nxt = root[deepestIdx];
//       root[deepestIdx] = deepestIdx;
//       i = nxt;
//     }
//     return deepestIdx;
//   }

//   for (let i = 0; i < allowableSwaps.length; i++) {
//     //Make the indexs and values of the root array reflect the indexes of the allowable swaps
//     //If two groups unionize connect them via the root array
//     //root[0] = 4
//     const pos1 = find(allowableSwaps[i][0]);
//     const pos2 = find(allowableSwaps[i][1]);
//     root[pos1] = pos2;
//   }

//   const freqs = new Map();

//   for (let i = 0; i < n; i++) {
//     //associate each source value with a group

//     const group = find(i);
//     if (!freqs.has(group)) freqs.set(group, new Map());
//     freqs.get(group).set(source[i], (freqs.get(group).get(source[i]) ?? 0) + 1);
//   }

//   let result = 0;

//   for (let i = 0; i < n; i++) {
//     const group = find(i);
//     const candidates = freqs.get(group);
//     const count = candidates.get(target[i]) ?? 0;
//     if (count > 0) candidates.set(target[i], candidates.get(target[i]) - 1);
//     else result++;
//   }

//   return result;
// };

// const inputs = [
//   [
//     [1, 2, 3, 4],
//     [2, 1, 4, 5],
//     [
//       [0, 1],
//       [2, 3],
//     ],
//   ],
//   [
//     [5, 1, 2, 4, 3],
//     [1, 5, 4, 2, 3],
//     [
//       [0, 4],
//       [4, 2],
//       [1, 3],
//       [1, 4],
//     ],
//   ],
//   [
//     [1, 4, 6, 2, 8],
//     [4, 8, 6, 1, 2],
//     [
//       [0, 1],
//       [1, 2],
//       [3, 4],
//     ],
//   ],
// ];

// minimumHammingDistance(...inputs[0]);

// const minimumHammingDistance = (source, target, swap) => {

//     const n = source.length;
//     const root = new Int32Array(n);

//     for (let i = 0; i < n; i++) root[i] = i;

//     const find = (i) => {
//         let p = i;
//         while (p !== root[p]) p = root[p];
//         while (i !== p) {
//             const nxt = root[i];
//             root[i] = p;
//             i = nxt;
//         }
//         return p;
//     };

//     //Turns the root array into index pointers
//     //Ex [0,4],[4,2] turns the 0 index value to 4 and the 4 index to 2
//     //When we have [1,4] it turns the 3rd index to 2 because the 1 index was 3 and the 4 index was 2
//     //Later we use this form connected groups of indicies

//     for (let i = 0; i < swap.length; i++) {
//         const r1 = find(swap[i][0]);
//         const r2 = find(swap[i][1]);
//         if (r1 !== r2) root[r1] = r2;
//     }

//     //This creates a map where each key represents a group, the key is deepest index of a group
//     //After getting the key populates each key with a map that associates the value at the source index with the group
//     //Used later on count how many source values cant fit

//     const freqs = new Map();
//     for (let i = 0; i < n; i++) {
//         const r = find(i);
//         if (!freqs.has(r)) freqs.set(r, new Map());
//         freqs.get(r).set(source[i], (freqs.get(r).get(source[i]) ?? 0) + 1);
//     }

//     let res = 0;
//     for (let i = 0; i < n; i++) {
//         const r = find(i);
//         const B = freqs.get(r);
//         const count = B.get(target[i]) ?? 0;
//         if (count > 0) B.set(target[i], count - 1);
//         else res++;
//     }

//     return res;
// };

// const inputs = [
//   [[1,2,3,4],[2,1,4,5],[[0,1],[2,3]]],
//   [[5,1,2,4,3],[1,5,4,2,3],[[0,4],[4,2],[1,3],[1,4]]],
//   [[1,4,6,2,8],[4,8,6,1,2],[[0,1],[1,2],[3,4]]]
// ]

// minimumHammingDistance(...inputs[1])
