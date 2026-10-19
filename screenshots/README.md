# App view provenance

All six images are **source-based concept renders with synthetic data**. None is a screenshot of the running original application. Each contains a visible English classification and an Arabic synthetic-data notice. Layouts are editorially arranged, not pixel-identical copies of the production interface.

The navy sidebar, blue controls, pale background, white cards, and RTL navigation follow inspected interface source. The PNGs were rendered from independently authored static HTML/CSS using system fonts. No original application code was executed, and no application logo, bundled font, external image, or icon asset was copied. The original render HTML is local preparation material outside this showcase; no executable application is distributed here.

| Image | Classification | Private source informing the view |
| --- | --- | --- |
| [01 · Project setup](01-project-setup.png) | Concept / synthetic | `src/components/projects/AddProjectModal.tsx` |
| [02 · Daily attendance](02-daily-attendance.png) | Concept / synthetic | `src/pages/Attendance.tsx`, `src/lib/workerCalculations.ts` |
| [03 · Completed quantities](03-completed-quantities.png) | Concept / synthetic | `src/components/projects/ExecutedQuantitiesTab.tsx`, `src/lib/meterProjectAccounting.ts` |
| [04 · Worker settlement](04-worker-settlement.png) | Concept / synthetic | `src/pages/WorkerDetails.tsx`, `src/components/workers/WorkerSettlementModal.tsx` |
| [05 · Client allocation](05-client-allocation.png) | Concept / synthetic | `src/components/clients/BulkPaymentModal.tsx`, `src/lib/clientCalculations.ts` |
| [06 · Arabic report](06-arabic-report.png) | Concept / synthetic | `src/lib/projectAttendanceReport.ts`, `src/pages/reports/ProjectAttendanceReport.tsx` |

Shared styling references: `src/index.css`, `src/components/layout/Sidebar.tsx`. Source paths identify private evidence and intentionally do not link to unpublished source.

## Synthetic figures

- Project A: 1,200 m² × 80 TL/m² = 96,000 TL contract estimate.
- Completed entries: 200 m² + 150 m² = 350 m²; earned value = 28,000 TL; receipts = 18,000 TL; outstanding earned value = 10,000 TL; unexecuted quantity = 850 m².
- Attendance: (600 + 50) + (600 / 2) + 0 + (700 + 100) = 1,750 TL. Worker-days = 1 + 0.5 + 0 + 1 = 2.5. Monetary overtime = 150 TL.
- Worker cycle: earnings of 4,200 TL include any overtime; less 1,000 TL advances and 700 TL earlier payments leaves 2,500 TL. Proposed full settlement leaves zero.
- Receipt: 20,000 TL − 18,000 TL project A allocation − 1,000 TL project B allocation = 1,000 TL unallocated. Project due figures in this view are before allocation.
- Report: a separate synthetic three-day attendance example, not a continuation of image 02. Worker totals are 2.5 + 1.5 + 1.5 + 2 = 7.5 days. Two records carry overtime; this is a count, not an overtime amount or hours. Empty cells indicate no worked attendance record on this project/date. Project reports filter out absent entries; they are not displayed here as absence marks.

Worker, client, and project labels explicitly say “synthetic/example” in Arabic. Dates and financial figures are fabricated. No actual names, addresses, phone numbers, account identifiers, or financial records are included.
