---
name: architecture-diagram
description: Produce enterprise-grade architecture diagrams for a high-scale vacation-rental marketplace like Airbnb.
---

# Skill: Production Marketplace Architecture Diagram

## Objective
Design and deliver a high-level system architecture diagram and specification representing a production-grade vacation-rental platform (Airbnb scale), covering frontend, backend, storage, search, async pipelines, and multi-region deployment.

## Key Architectural Domains
1. **Frontend Layer**:
   - Next.js SSR / ISR for dynamic SEO listing pages.
   - Global CDN (Cloudflare / Fastly) with edge caching and stale-while-revalidate.
   - Dynamic asset optimization pipeline (WebP/AVIF, responsive srcsets, image proxy).
2. **Backend & Microservices**:
   - API Gateway / Reverse Proxy (Envoy / Kong) with JWT verification, rate limiting, and circuit breaking.
   - Domain-driven services: Listings, Availability/Calendar, Search, Bookings, Payments, Messaging, Reviews, User Identity.
   - Event-driven async messaging (Apache Kafka / AWS SQS) for notifications, search index sync, payment webhooks.
   - Distributed locking (Redis Redlock) for idempotent booking reservation locks.
3. **Storage & Data Management**:
   - Primary relational database: PostgreSQL with regional clustering, primary-replica read scaling, and partitioning.
   - Cache layer: Redis Cluster for session state, availability calendars, and hot listings.
   - Object storage: S3 / GCS with signed upload URLs for high-resolution property imagery.
   - Data Warehouse: Snowflake / BigQuery for analytics, pricing models, and business intelligence.
4. **Search & Discovery Engine**:
   - Elasticsearch / OpenSearch cluster with geo-spatial queries, pricing/amenity filters, and real-time availability filtering.
   - CDC (Change Data Capture via Debezium) streaming listing updates into Kafka to update search indices.
5. **Deployment & Reliability**:
   - Multi-region Kubernetes (EKS / GKE) clusters with Canary & Blue-Green deployments.
   - Observability: Prometheus, Grafana, OpenTelemetry distributed tracing, Datadog/ELK centralized logging.

## Deliverable Formats
- Editable Source: Mermaid diagram / Excalidraw JSON in `docs/architecture/`.
- Visual Render: PNG and vector PDF outputs ready for production review.
