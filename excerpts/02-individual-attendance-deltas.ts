// Exact source excerpt: src/services/workersFirestore.ts:372-378
// Context-dependent fragment; not a standalone module. All rights reserved.
    const workerPatch: Record<string, unknown> = {
      totalEarnings: increment(calculatedCost - oldCost),
      totalDays: increment(daysDelta - oldDays),
      currentBalance: increment(calculatedCost - oldCost),
      totalOvertime: increment(overtimeAmount - oldOvertime),
      updatedAt: now(),
    };
