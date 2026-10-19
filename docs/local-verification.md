# Local preparation verification

Checked on 19 October 2026. This report describes local artifact checks, not application test results.

- Five excerpt files and their five README code blocks match the selected private-source fragments, including recorded source line ranges.
- Six PNGs fully decode at 2400 × 1620 pixels and contain no image metadata. All were visually inspected for text, layout, synthetic labels, and arithmetic.
- All local Markdown links resolve within the showcase. The only external link is the owner's supplied GitHub profile; its availability was not checked over the network.
- The six source-based concepts visibly identify themselves as concepts with synthetic data. They were rendered from independent static HTML/CSS, with external requests blocked.
- Synthetic example calculations were checked independently. Report data is intentionally separate from the daily attendance example; empty project-report cells represent no worked record on that project/date.
- Output is limited to Markdown, five short TypeScript fragments, and six PNGs. Automated content checks found no credential/token patterns, email addresses, phone-number patterns, local user paths, private configuration, databases, signing material, or application/deployment binaries. Text and images were also manually reviewed. Pattern scans do not establish the absence of every possible secret.
- The original application's full file inventory matched before/after sizes and modification timestamps across 64,260 files. SHA-256 content checks matched for 169 original source TypeScript/TSX/CSS files. Private configuration and binary contents were not opened; their verification is metadata-only.
- The original application was not executed, built, tested, modified, or deployed. No Git initialization, commit, push, remote repository creation, or publication was performed.
- No general code reuse license is granted. Original source stays private; third-party application assets are not included.

The final owner review remains pending. Private-application signing remediation and the engineering limitations described in the notes remain outside this showcase preparation.
