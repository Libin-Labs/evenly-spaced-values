import * as api from '@lp-labs/evenly-spaced-values';
import { evenlySpaced } from '@lp-labs/evenly-spaced-values';
console.log(evenlySpaced(0, 1, 5));
// @ts-expect-error invalid argument must be rejected by declarations
api.evenlySpaced('0', 1, 5);
