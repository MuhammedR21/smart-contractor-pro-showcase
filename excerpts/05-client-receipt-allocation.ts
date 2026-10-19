// Exact source excerpt: src/lib/clientCalculations.ts:36-43
// Context-dependent fragment; not a standalone module. All rights reserved.
  const allocated = clientProjectPayments.reduce(
    (s, p) => s + (p.clientPaymentId ? p.amount : 0),
    0
  );
  const activeReceipts = clientPayments.filter(isActiveClientPayment);
  const receipts = activeReceipts.reduce((s, c) => s + c.totalAmount, 0);
  const totalRemaining = totalContract - totalReceived;
  const advanceBalance = receipts - allocated;
