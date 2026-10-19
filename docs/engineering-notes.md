# Engineering notes

The personal motivation is confirmed by the owner: he developed this application to help his father with his construction contracting business. Implementation claims are based on static source inspection. No customer feedback, prior paper/spreadsheet workflow, usage metric, or deployment result is inferred.

## Excerpt provenance

Each fragment was extracted from the original UTF-8 source and checked against it. The source paths below refer to the private application, which is intentionally not included. The excerpts require surrounding code and are not standalone modules.

| Excerpt | Private source | Original lines |
| --- | --- | --- |
| [Attendance payment rules](../excerpts/01-attendance-rules.ts) | `src/lib/workerCalculations.ts` | 64–69 |
| [Individual attendance corrections](../excerpts/02-individual-attendance-deltas.ts) | `src/services/workersFirestore.ts` | 372–378 |
| [Billing and collections](../excerpts/03-billing-and-collections.ts) | `src/lib/projectDailyBilling.ts` | 55–72 |
| [Worker settlement checks](../excerpts/04-worker-settlement-checks.ts) | `src/services/workersFirestore.ts` | 823–832 |
| [Client receipt allocation](../excerpts/05-client-receipt-allocation.ts) | `src/lib/clientCalculations.ts` | 36–43 |

## What the code addresses

Individual attendance uses a worker/date document identity and a Firestore transaction. The current record is read before old cost/day values are calculated. Repeating an unchanged write returns early; corrections apply differences to worker totals and adjust affected project costs and daily billing values. This does not establish that a worker's rate passed from screen state is always current.

Worker settlement reads the current worker balance inside a transaction. It rejects overpayment and requires an exact balance match for full closure. A full closure writes a settlement summary and resets current-cycle totals. It then performs cleanup outside the transaction.

Daily billing separates accumulated worker-days, a last-billed marker, and receipts. Quantity accounting stores a rate on each executed entry and derives earned value from entries. Client advances are derived from active receipts minus linked allocations, rather than treated as a second receipt when allocated.

Report helpers create worker/date indexes, half-day totals, worker summaries, and project summaries. PDF saving explicitly handles the browser and Android paths. These choices can be explained from source without claiming a runtime result.

## Remaining challenges

- **Bulk attendance:** the main attendance page uses reads followed by write batches. Deterministic document IDs do not prevent duplicate financial increments under concurrent bulk submissions. Daily totals calculated from earlier project snapshots can also be stale. Chunked batches are not one atomic operation for the entire attendance submission.
- **Quantity limits and daily payments:** the service reads existing records and validates before a later batch write. Simultaneous submissions can pass against the same old balance or quantity. The quantity validator checks positive quantity/rate and a supplied date; this is not exhaustive numeric/date validation.
- **Client allocations:** the UI checks aggregate over-allocation, but persistence needs authoritative amount, receipt capacity, project ownership/association, and linked receipt validation. Batch atomicity is not equivalent to financial correctness.
- **Money precision:** JavaScript number arithmetic and tolerances are used. A consistent decimal or integer-money policy and rate-change behavior need review. Different summaries also clamp or preserve negative balances differently.
- **Worker compensation scope:** monthly attendance divides the rate by 30. Fixed-price attendance has zero base pay, and the per-meter worker rate is used as an attendance rate. A worker quantity-times-rate payroll workflow has not been established.
- **Retention:** full worker settlement removes detailed advances/payments for the cycle and retains the latest five worker settlement summaries. Attendance purge functions are no-ops. This is not a permanent complete financial ledger.
- **Client closure:** snapshots and closed-period markers accompany a reset of non-daily project contract values. Its effect on subsequent reporting needs explicit review.
- **Authorization:** owner-scoped rules provide isolation but generally do not enforce financial schemas or cross-document invariants. Multi-role company permissions are not active.
- **Caches and identity:** report-cache keys omit owner identity, and sign-out does not visibly clear all shared caches. Account switching needs targeted verification. Persistent caching does not prove every operation works offline; transaction-dependent paths need separate validation.
- **Configuration:** the audit identified embedded Android signing credentials. No values or signing files were read or copied during showcase preparation. Remediation remains in the private application and was not performed here. Duplicate hosting keys were also noted in the prior audit.

## Validation boundaries

Unit tests and Firestore emulator tests exist in the private project. They were not executed during the audit or showcase preparation. Emulator descriptions containing “PASS” are test names, not test results; some tests use local helper implementations rather than production services directly.

The showcase verifies excerpt correspondence, image decoding and dimensions, local Markdown targets, synthetic example arithmetic, and output file scope. Original-tree file size/mtime inventories and SHA-256 hashes of source TypeScript/TSX/CSS files are compared before and after preparation. Metadata checks do not prove byte identity for every private binary/configuration; those contents are deliberately not opened.

The original application is not run, built, deployed, or changed. No Git repository is initialized and no remote repository is created. No commit, push, or publication is part of this preparation.
