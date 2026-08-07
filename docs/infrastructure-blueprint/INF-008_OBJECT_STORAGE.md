# INF-008 — Object Storage

## Stored Artifacts
- Inventory images
- Invoice PDFs
- payment evidence
- withdrawal proof
- reimbursement proof
- approved attachments
- generated exports where retained

## Rules
1. Business database stores file metadata/reference, not arbitrary server filesystem paths.
2. Private files require authorized application access or short-lived signed URLs.
3. Object keys are not public business identifiers.
4. Upload size/type validation is server-side.
5. Malware/content scanning may be added if risk/usage justifies it.
6. File checksum is stored where useful for integrity.
7. Historical document versions are retained when required by BR.
