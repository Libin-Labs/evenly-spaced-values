export function evenlySpaced(
  start: number,
  end: number,
  count: number,
  includeEnd = true,
): number[] {
  if (
    !Number.isFinite(start) ||
    !Number.isFinite(end) ||
    !Number.isSafeInteger(count) ||
    count < 0 ||
    count > 1000000 ||
    typeof includeEnd !== 'boolean'
  )
    throw new RangeError('Invalid endpoints, count, or endpoint option');
  if (count === 0) return [];
  if (count === 1) return [start];
  const denominator = includeEnd ? count - 1 : count;
  return Array.from({ length: count }, (_, i) => start + ((end - start) * i) / denominator);
}
