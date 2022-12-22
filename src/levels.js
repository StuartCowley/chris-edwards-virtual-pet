const MIN_XP_BY_LEVEL = {
  1: 0,
  2: 50,
  3: 110,
  4: 221,
  5: 353,
};

const MAX_XP_BY_LEVEL = {};

const MAX_LEVEL = 50;

// Calculate the minimum XP required for each level
for (let i = 2; i <= MAX_LEVEL; i++) {
  MIN_XP_BY_LEVEL[i] = MIN_XP_BY_LEVEL[i - 1] * 1.1;
}

// Calculate the maximum XP required for each level
for (let i = 1; i <= MAX_LEVEL; i++) {
  MAX_XP_BY_LEVEL[i] = MIN_XP_BY_LEVEL[i] * 1.5;
}

module.exports = {
  MIN_XP_BY_LEVEL,
  MAX_LEVEL,
  MAX_XP_BY_LEVEL,
};
