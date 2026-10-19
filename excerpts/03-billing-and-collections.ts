// Exact source excerpt: src/lib/projectDailyBilling.ts:55-72
// Context-dependent fragment; not a standalone module. All rights reserved.
  const dailyUnitPrice = project.dailyUnitPrice ?? 0;
  const totalAccruedDays = project.totalAccruedDays ?? 0;
  const lastBilledDays = project.lastBilledDays ?? 0;
  const pendingBillableDays = Math.max(0, totalAccruedDays - lastBilledDays);
  const accruedReceivable = totalAccruedDays * dailyUnitPrice;
  const pendingBillableAmount = pendingBillableDays * dailyUnitPrice;

  return {
    dailyUnitPrice,
    totalAccruedDays,
    lastBilledDays,
    pendingBillableDays,
    accruedReceivable,
    pendingBillableAmount,
    currentContractValue: accruedReceivable,
    remainingAmount: accruedReceivable - totalReceived,
    currentBalanceDue: pendingBillableAmount,
  };
