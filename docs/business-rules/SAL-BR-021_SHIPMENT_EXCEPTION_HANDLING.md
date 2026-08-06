# SAL-BR-021 — Shipment Exception Handling

Purpose:
Govern sales-order handling when shipment execution deviates from the normal delivery path.

Rules:
- Shipment exceptions include failed pickup, invalid address, delayed shipment, lost package, damaged package, returned-to-sender, failed delivery, and tracking inconsistency.
- Every exception must reference the Order ID, shipment record, courier, tracking number, detection time, responsible operator, and current resolution status.
- Shipment exception status must not silently change the sales-order status.
- Inventory must not be returned to AVAILABLE merely because delivery failed.
- Replacement shipment requires a distinct shipment record and explicit linkage to the original shipment.
- Refund, reshipment, return, compensation, or write-off decisions require their respective governed workflows.
- Buyer communication and material courier evidence must be retained where available.
- Financial effects such as additional shipping cost, reimbursement, compensation, or refund must remain separately identifiable.
- A lost or damaged shipment must remain open until ownership, financial responsibility, and buyer resolution are determined.

Invariants:
- Shipment history is append-only.
- One physical shipment attempt has one traceable shipment identity.
- Exception resolution cannot fabricate successful delivery.

Related:
- SAL-BR-010
- SAL-BR-011
- SAL-BR-013
- SAL-BR-014
