// Exact source excerpt: src/lib/workerCalculations.ts:64-69
// Context-dependent fragment; not a standalone module. All rights reserved.
  const rate = getEffectiveRate(worker, customRate);
  const extra = Math.max(0, overtimeAmount);
  if (status === 'absent') return 0;
  if (status === 'present') return rate + extra;
  if (status === 'half_day') return rate / 2 + extra;
  return 0;
