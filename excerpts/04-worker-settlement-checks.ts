// Exact source excerpt: src/services/workersFirestore.ts:823-832
// Context-dependent fragment; not a standalone module. All rights reserved.
    const currentWorker = { id: workerSnap.id, ...workerSnap.data() } as Worker;
    const balanceBefore = currentWorker.currentBalance;
    if (data.amount > balanceBefore) throw new Error('مبلغ التسوية أكبر من الرصيد المستحق');

    const isFullCycleClose = Boolean(data.closeCycle) && data.amount === balanceBefore;
    if (data.closeCycle && !isFullCycleClose) {
      throw new Error('لا يمكن إغلاق الدورة لأن الرصيد تغيّر. حدّث الصفحة ثم أعد المحاولة.');
    }

    const balanceAfter = balanceBefore - data.amount;
