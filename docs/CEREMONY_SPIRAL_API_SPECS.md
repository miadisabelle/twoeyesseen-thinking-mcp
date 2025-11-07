# Ceremony Spiral API Specifications

**Project Name**: Ceremony Spiral  
**Code Name**: ceremony-spiral  
**Version**: 1.0.0  
**Date**: 2025-11-06  
**Framework**: Indigenous Knowledge-Centered Platform with GitHub Integration

## Table of Contents

1. [Project Overview](#project-overview)
2. [Core Architecture](#core-architecture)
3. [API Endpoints](#api-endpoints)
4. [Data Models](#data-models)
5. [GitHub Integration & Koea Spiral Extension](#github-integration--koea-spiral-extension)
6. [MCP Integration](#mcp-integration)
7. [Setup Requirements](#setup-requirements)
8. [Implementation Guide](#implementation-guide)
9. [Cultural Protocols](#cultural-protocols)
10. [Success Metrics](#success-metrics)

---

## Project Overview

### Purpose
Create a digital space that honors Indigenous ways of knowing while integrating with modern development workflows. Ceremony Spiral extends the Koea Spiral project with Indigenous knowledge-centered features, emphasizing:

- **Circular Relationships**: Non-linear, reciprocal connections between entities
- **Reciprocity**: Bidirectional exchange rather than extractive development
- **Multi-Perspective Collaboration**: Multiple viewpoints contributing to structural understanding
- **Ceremonial Practice**: Research and development as ceremony

### Vision
A platform where GitHub's bidirectional synchronization patterns mirror Indigenous principles of reciprocity, creating advancing spirals where technical implementation becomes ceremonial practice.

### Core Principles (The Four R's)
1. **Respect**: Honor Indigenous knowledge systems and cultural protocols
2. **Reciprocity**: Ensure bidirectional exchange and mutual benefit
3. **Relevance**: Align with community-defined needs and values
4. **Responsibility**: Maintain relational accountability to all stakeholders

---

## Core Architecture

### Technology Stack

#### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js 4.18+
- **API Layer**: GraphQL (Apollo Server 4.0+)
- **REST Fallback**: Express REST endpoints for webhook integration

#### Database
- **Document Store**: MongoDB 6.0+ (ceremony records, user profiles, knowledge artifacts)
- **Graph Database**: Neo4j 5.0+ (relationship mapping, circular connections, reciprocity flows)
- **Cache Layer**: Redis 7.0+ (session management, real-time collaboration state)

#### Frontend Integration
- **Framework**: React.js 18+ with ceremony-specific component library
- **State Management**: Redux Toolkit with ceremony state slices
- **Real-time**: Socket.io for collaborative ceremony sessions
- **Visualization**: D3.js for circular relationship charts

#### External Integrations
- **GitHub API**: Repository management, webhooks, issue tracking
- **Koea Spiral**: Forked repository with ceremony extensions
- **MCP (Model Context Protocol)**: Collaborative note-taking and AI agent integration

### Architectural Patterns

#### Advancing Spiral Pattern
Instead of linear progression, the system uses spiral patterns that:
- Build upon previous successes
- Honor circular time concepts
- Enable iterative relationship deepening
- Support branching and convergence

#### Relational Accountability
Every API interaction tracks:
- Who initiated the action
- Which relationships are affected
- Cultural protocol compliance
- Community consent status

---

## API Endpoints

### Base URL
```
Production: https://api.ceremony-spiral.org/v1
Development: http://localhost:3000/v1
GraphQL: /graphql
REST: /api/v1
```

### Authentication & Authorization

#### `POST /auth/login`
Authenticate user with cultural role verification.

**Request:**
```json
{
  "username": "string",
  "password": "string",
  "culturalAffiliation": "string (optional)"
}
```

**Response:**
```json
{
  "token": "jwt_token",
  "user": {
    "id": "string",
    "username": "string",
    "roles": ["knowledge_holder", "developer", "community_elder"],
    "culturalAffiliations": ["string"],
    "permissions": ["string"]
  }
}
```

#### `POST /auth/refresh`
Refresh authentication token.

#### `POST /auth/logout`
Invalidate current session.

#### `GET /auth/validate`
Validate token and cultural permissions.

### User Management

#### `GET /users/profile/:id`
Retrieve user profile with Indigenous knowledge holder roles.

**Response:**
```json
{
  "id": "string",
  "username": "string",
  "displayName": "string",
  "culturalAffiliations": ["string"],
  "roles": ["knowledge_holder", "cultural_mentor", "developer"],
  "knowledgeDomains": ["string"],
  "relationshipConnections": ["user_id"],
  "ceremonies": ["ceremony_id"],
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

#### `PUT /users/profile`
Update user profile including cultural affiliations.

#### `GET /users/relationships/:id`
Find user relationships (subordinates, managers, cultural mentors).

**Response:**
```json
{
  "userId": "string",
  "relationships": [
    {
      "targetUserId": "string",
      "relationshipType": "mentor|peer|elder|learner",
      "strength": "number (0-1)",
      "reciprocityLevel": "number (0-1)",
      "culturalContext": "string",
      "establishedAt": "datetime"
    }
  ]
}
```

#### `POST /users/invite-pilot`
Invite users to pilot testing group.

**Request:**
```json
{
  "email": "string",
  "role": "string",
  "culturalAffiliation": "string",
  "invitationMessage": "string"
}
```

### Ceremony & Knowledge Management

#### `GET /ceremonies`
List ceremonies with pagination and filters.

**Query Parameters:**
- `page`: number (default: 1)
- `limit`: number (default: 20, max: 100)
- `status`: "active|completed|planning|archived"
- `culturalContext`: string
- `knowledgeHolder`: user_id

**Response:**
```json
{
  "ceremonies": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "status": "active|completed|planning|archived",
      "knowledgeHolders": ["user_id"],
      "culturalContext": "string",
      "circularRelationships": ["relationship_id"],
      "reciprocityModel": "object",
      "tensionCharts": ["chart_id"],
      "createdAt": "datetime",
      "updatedAt": "datetime"
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "totalPages": "number"
  }
}
```

#### `POST /ceremonies`
Create new ceremony with reciprocity models.

**Request:**
```json
{
  "title": "string",
  "description": "string",
  "culturalContext": "string",
  "knowledgeHolders": ["user_id"],
  "reciprocityModel": {
    "exchangeType": "knowledge|resource|relationship",
    "participants": ["user_id"],
    "expectedOutcomes": ["string"],
    "culturalProtocols": ["string"]
  },
  "initialTensions": [
    {
      "description": "string",
      "currentReality": "string",
      "desiredOutcome": "string",
      "perspectives": ["string"]
    }
  ]
}
```

#### `GET /ceremonies/:id`
Retrieve detailed ceremony information.

#### `PUT /ceremonies/:id`
Update ceremony details.

#### `DELETE /ceremonies/:id`
Archive ceremony (soft delete with cultural protocol compliance).

#### `GET /ceremonies/:id/relationships`
Fetch circular connections for a ceremony.

**Response:**
```json
{
  "ceremonyId": "string",
  "relationships": [
    {
      "id": "string",
      "fromEntity": "string",
      "toEntity": "string",
      "relationshipType": "circular|reciprocal|hierarchical|ancestral",
      "reciprocityLevel": "number (0-1)",
      "culturalContext": "string",
      "strength": "number (0-1)",
      "bidirectional": "boolean",
      "establishedAt": "datetime"
    }
  ]
}
```

#### `PUT /ceremonies/:id/tensions`
Update structural tension charts.

**Request:**
```json
{
  "tensions": [
    {
      "id": "string (optional for update)",
      "description": "string",
      "currentReality": "string",
      "desiredOutcome": "string",
      "creativeForce": "string",
      "resolutionPath": "string",
      "perspectives": [
        {
          "contributorId": "string",
          "viewpoint": "string",
          "culturalLens": "string",
          "timestamp": "datetime"
        }
      ],
      "ethicalConsiderations": {
        "moralCompassPoints": ["string"],
        "samiraInsights": "string"
      }
    }
  ]
}
```

#### `GET /ceremonies/:id/knowledge-holders`
Get associated knowledge keepers.

#### `POST /ceremonies/:id/co-design`
Facilitate co-design sessions.

**Request:**
```json
{
  "sessionType": "planning|reflection|decision-making|knowledge-sharing",
  "participants": ["user_id"],
  "agenda": "string",
  "culturalProtocols": ["string"],
  "expectedDuration": "number (minutes)",
  "recordingConsent": "boolean"
}
```

### GitHub Integration & Webhooks

#### `POST /webhooks/github`
Receive GitHub webhooks from repositories.

**Headers:**
- `X-GitHub-Event`: event type
- `X-Hub-Signature-256`: webhook signature
- `X-GitHub-Delivery`: unique delivery ID

**Request Body:** (varies by event type)

**Supported Events:**
- `push`: Code commits synchronized with ceremony logs
- `pull_request`: PR reviews as consensus-building ceremonies
- `issues`: Issue tracking with circular relationship context
- `release`: Release cycles aligned with community readiness
- `discussion`: Community discussions as ceremonial dialogues

#### `GET /projects/:id/github-sync`
Synchronize with Koea Spiral repository.

**Response:**
```json
{
  "projectId": "string",
  "syncStatus": "success|in_progress|failed",
  "lastSyncAt": "datetime",
  "koeSpiralFork": {
    "repoUrl": "string",
    "branch": "string",
    "lastCommit": "string",
    "ceremonyExtensions": ["extension_id"]
  },
  "issues": [
    {
      "issueNumber": "number",
      "title": "string",
      "relationshipNodes": ["node_id"],
      "ceremonyContext": "string"
    }
  ]
}
```

#### `POST /projects/fork-koea`
Fork and extend Koea Spiral with ceremony features.

**Request:**
```json
{
  "originalRepo": "string (owner/repo)",
  "ceremonyName": "string",
  "extensions": ["string"],
  "culturalProtocols": ["string"],
  "webhookConfig": {
    "events": ["push", "pull_request", "issues"],
    "secret": "string"
  }
}
```

#### `PUT /projects/:id/api-hooks`
Configure GitHub API integration hooks.

**Request:**
```json
{
  "hooks": [
    {
      "event": "push|pull_request|issues|release",
      "action": "sync_ceremony|create_relationship|update_tension",
      "config": "object",
      "active": "boolean"
    }
  ]
}
```

#### `GET /koea-spiral/extensions`
List ceremony-specific extensions.

**Response:**
```json
{
  "extensions": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "version": "string",
      "features": ["string"],
      "culturalAlignment": "string",
      "installationStatus": "available|installed|outdated"
    }
  ]
}
```

### Visualization & Charts

#### `GET /visualizations/circular/:ceremonyId`
Generate circular relationship charts.

**Query Parameters:**
- `depth`: number (relationship depth to visualize, default: 3)
- `includeAncestral`: boolean
- `format`: "json|svg|png"

**Response:**
```json
{
  "ceremonyId": "string",
  "chartData": {
    "nodes": [
      {
        "id": "string",
        "label": "string",
        "type": "ceremony|user|knowledge|relationship",
        "x": "number",
        "y": "number",
        "culturalContext": "string"
      }
    ],
    "edges": [
      {
        "source": "string",
        "target": "string",
        "type": "circular|reciprocal|hierarchical",
        "strength": "number",
        "bidirectional": "boolean"
      }
    ]
  }
}
```

#### `GET /visualizations/reciprocity/:projectId`
Generate reciprocity flow mappings.

#### `POST /visualizations/tension-chart`
Generate tension visualizations.

**Request:**
```json
{
  "tensionId": "string",
  "chartType": "spiral|timeline|network",
  "includePerspectives": "boolean",
  "highlightResolutions": "boolean"
}
```

#### `GET /visualizations/multi-perspective/:id`
Multi-viewpoint displays.

**Response:**
```json
{
  "entityId": "string",
  "perspectives": [
    {
      "viewpoint": "elder|developer|community|ethical",
      "contributorId": "string",
      "visualization": "object",
      "culturalLens": "string",
      "timestamp": "datetime"
    }
  ]
}
```

#### `POST /visualizations/moral-compass`
Ethical specialist perspectives (Samira integration).

**Request:**
```json
{
  "context": "string",
  "decision": "string",
  "stakeholders": ["string"],
  "culturalConsiderations": ["string"]
}
```

### MCP Integration

#### `POST /mcp/auto-update`
MCP tool integration for collaborative notes.

**Request:**
```json
{
  "ceremonyId": "string",
  "sessionId": "string",
  "noteType": "observation|insight|decision|question",
  "content": "string",
  "author": "user_id",
  "timestamp": "datetime"
}
```

#### `GET /collaborations/pilot-group`
Pilot testing group management.

#### `POST /feedback/reflection`
Capture feedback and reflections.

**Request:**
```json
{
  "ceremonyId": "string",
  "sessionId": "string",
  "reflectionType": "personal|collective|cultural",
  "content": "string",
  "author": "user_id",
  "visibility": "private|group|public"
}
```

#### `PUT /mcp/ceremony-notes/:id`
Auto-update ceremony documentation.

#### `GET /mcp/collaborative-state`
Real-time collaboration status.

**Response:**
```json
{
  "activeSession": {
    "ceremonyId": "string",
    "sessionId": "string",
    "participants": [
      {
        "userId": "string",
        "role": "facilitator|participant|observer",
        "joinedAt": "datetime",
        "lastActivity": "datetime"
      }
    ],
    "sharedNotes": "string",
    "consensusState": "forming|storming|norming|performing",
    "culturalProtocolStatus": "compliant|pending_review"
  }
}
```

### GraphQL Schema

```graphql
type Query {
  ceremony(id: ID!): Ceremony
  ceremonies(filter: CeremonyFilter, page: Int, limit: Int): CeremonyConnection
  user(id: ID!): User
  relationships(userId: ID!): [Relationship!]!
  tensionChart(id: ID!): TensionChart
  githubSync(projectId: ID!): GitHubSyncStatus
}

type Mutation {
  createCeremony(input: CreateCeremonyInput!): Ceremony
  updateCeremony(id: ID!, input: UpdateCeremonyInput!): Ceremony
  addRelationship(input: RelationshipInput!): Relationship
  updateTensions(ceremonyId: ID!, tensions: [TensionInput!]!): TensionChart
  startCoDesignSession(input: CoDesignSessionInput!): CoDesignSession
  syncGitHub(projectId: ID!): GitHubSyncStatus
}

type Subscription {
  ceremonyUpdated(ceremonyId: ID!): Ceremony
  collaborativeStateChanged(sessionId: ID!): CollaborativeState
  relationshipEstablished(userId: ID!): Relationship
}

type Ceremony {
  id: ID!
  title: String!
  description: String
  status: CeremonyStatus!
  knowledgeHolders: [User!]!
  circularRelationships: [Relationship!]!
  reciprocityModel: ReciprocityModel
  tensionCharts: [TensionChart!]!
  culturalContext: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type User {
  id: ID!
  username: String!
  displayName: String
  roles: [String!]!
  culturalAffiliations: [String!]
  knowledgeDomains: [String!]
  ceremonies: [Ceremony!]!
}

type Relationship {
  id: ID!
  fromEntity: String!
  toEntity: String!
  relationshipType: RelationshipType!
  reciprocityLevel: Float!
  culturalContext: String
  strength: Float!
  bidirectional: Boolean!
  establishedAt: DateTime!
}

type TensionChart {
  id: ID!
  ceremonyId: ID!
  tensions: [Tension!]!
  resolutions: [Resolution!]!
  multiPerspectives: [Perspective!]!
  ethicalConsiderations: EthicalConsiderations
}

enum CeremonyStatus {
  ACTIVE
  COMPLETED
  PLANNING
  ARCHIVED
}

enum RelationshipType {
  CIRCULAR
  RECIPROCAL
  HIERARCHICAL
  ANCESTRAL
}
```

---

## Data Models

### Core Entities

#### Ceremony
```typescript
interface Ceremony {
  id: string;
  title: string;
  description?: string;
  status: 'active' | 'completed' | 'planning' | 'archived';
  knowledgeHolders: string[]; // user_ids
  circularRelationships: string[]; // relationship_ids
  reciprocityModel: ReciprocityModel;
  tensionCharts: string[]; // chart_ids
  culturalContext: string;
  koeaSpiralIntegration?: KoeaSpiralIntegration;
  createdAt: Date;
  updatedAt: Date;
  
  // MongoDB indexes
  // - title (text)
  // - status
  // - knowledgeHolders
  // - culturalContext
  // - createdAt
}

interface ReciprocityModel {
  exchangeType: 'knowledge' | 'resource' | 'relationship';
  participants: string[]; // user_ids
  expectedOutcomes: string[];
  culturalProtocols: string[];
  reciprocityMetrics: {
    givenValue: number;
    receivedValue: number;
    balanceState: 'balanced' | 'giving' | 'receiving';
  };
}

interface KoeaSpiralIntegration {
  repositoryUrl: string;
  branchName: string;
  issueNumbers: number[];
  ceremonyExtensions: string[];
  syncedAt: Date;
}
```

#### Relationship
```typescript
interface Relationship {
  id: string;
  fromEntity: string;
  toEntity: string;
  relationshipType: 'circular' | 'reciprocal' | 'hierarchical' | 'ancestral';
  reciprocityLevel: number; // 0-1
  culturalContext: string;
  strength: number; // 0-1
  bidirectional: boolean;
  metadata: {
    establishedBy: string; // user_id
    ceremonyContext?: string; // ceremony_id
    communityApproval: boolean;
    culturalProtocolsApplied: string[];
  };
  establishedAt: Date;
  lastInteraction: Date;
  
  // Neo4j properties for graph traversal
  // - relationshipType (indexed)
  // - strength (indexed)
  // - reciprocityLevel (indexed)
}
```

#### TensionChart
```typescript
interface TensionChart {
  id: string;
  ceremonyId: string;
  tensions: Tension[];
  resolutions: Resolution[];
  multiPerspectives: Perspective[];
  ethicalConsiderations: EthicalConsiderations;
  createdAt: Date;
  updatedAt: Date;
}

interface Tension {
  id: string;
  description: string;
  currentReality: string;
  desiredOutcome: string;
  creativeForce: string; // What drives movement toward desired outcome
  resolutionPath?: string;
  perspectives: Perspective[];
  status: 'active' | 'resolving' | 'resolved' | 'transformed';
}

interface Perspective {
  contributorId: string;
  viewpoint: string;
  culturalLens: string;
  timestamp: Date;
  upvotes: number;
  validated: boolean;
}

interface Resolution {
  tensionId: string;
  approachTaken: string;
  outcomes: string[];
  lessonsLearned: string[];
  communityValidation: boolean;
  resolvedAt: Date;
}

interface EthicalConsiderations {
  moralCompassPoints: string[];
  samiraInsights?: string; // Ethical specialist input
  communityConsensus: boolean;
  culturalAlignment: number; // 0-1
}
```

#### Project
```typescript
interface Project {
  id: string;
  name: string;
  description: string;
  githubRepoUrl: string;
  koeaSpiralFork: boolean;
  ceremonyExtensions: string[]; // extension_ids
  webhookConfig: WebhookConfig;
  apiHooks: ApiHook[];
  ceremonies: string[]; // ceremony_ids
  createdBy: string; // user_id
  createdAt: Date;
  updatedAt: Date;
}

interface WebhookConfig {
  secret: string;
  events: string[]; // GitHub event types
  active: boolean;
  lastDeliveryAt?: Date;
  deliveryCount: number;
}

interface ApiHook {
  event: string;
  action: string;
  config: Record<string, any>;
  active: boolean;
  createdAt: Date;
}
```

#### User
```typescript
interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  displayName: string;
  roles: string[]; // 'knowledge_holder', 'developer', 'community_elder', etc.
  culturalAffiliations: string[];
  knowledgeDomains: string[];
  relationshipConnections: string[]; // user_ids
  ceremonies: string[]; // ceremony_ids
  permissions: string[];
  profile: {
    bio?: string;
    location?: string;
    languages: string[];
    culturalProtocolPreferences: string[];
  };
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
  
  // MongoDB indexes
  // - username (unique)
  // - email (unique)
  // - roles
  // - culturalAffiliations
}
```

#### CoDesignSession
```typescript
interface CoDesignSession {
  id: string;
  ceremonyId: string;
  sessionType: 'planning' | 'reflection' | 'decision-making' | 'knowledge-sharing';
  facilitator: string; // user_id
  participants: SessionParticipant[];
  agenda: string;
  culturalProtocols: string[];
  notes: CollaborativeNote[];
  decisions: Decision[];
  consensusState: 'forming' | 'storming' | 'norming' | 'performing';
  recordingConsent: boolean;
  startedAt: Date;
  endedAt?: Date;
}

interface SessionParticipant {
  userId: string;
  role: 'facilitator' | 'participant' | 'observer' | 'elder';
  joinedAt: Date;
  lastActivity: Date;
  contributionCount: number;
}

interface CollaborativeNote {
  id: string;
  author: string; // user_id
  content: string;
  noteType: 'observation' | 'insight' | 'decision' | 'question';
  timestamp: Date;
  mcpSynced: boolean;
}

interface Decision {
  id: string;
  description: string;
  proposedBy: string; // user_id
  votesFor: string[]; // user_ids
  votesAgainst: string[]; // user_ids
  abstentions: string[]; // user_ids
  consensusReached: boolean;
  rationale: string;
  decidedAt: Date;
}
```

### Database Schemas

#### MongoDB Collections
- `ceremonies`
- `users`
- `projects`
- `codesign_sessions`
- `tension_charts`
- `collaborative_notes`
- `webhooks_log`

#### Neo4j Relationships
- `(:User)-[:PARTICIPATES_IN]->(:Ceremony)`
- `(:User)-[:MENTORS]->(:User)`
- `(:User)-[:COLLABORATES_WITH]->(:User)`
- `(:Ceremony)-[:HAS_RELATIONSHIP]->(:Entity)`
- `(:Tension)-[:CONTRIBUTES_TO]->(:Resolution)`
- `(:Project)-[:EXTENDS]->(:KoeaSpiral)`

---

## GitHub Integration & Koea Spiral Extension

### Koea Spiral Repository Extension

Koea Spiral is forked and extended with ceremony-specific features:

#### Extension Features
1. **Circular Issue Tracking**: Issues become relationship nodes
2. **Ceremonial Pull Requests**: PR reviews as consensus-building ceremonies
3. **Reciprocal Commits**: Commit messages document ceremonial context
4. **Community-Aligned Releases**: Release cycles honor community readiness

#### Fork Process
```bash
# Fork koea-spiral repository
POST /projects/fork-koea
{
  "originalRepo": "organization/koea-spiral",
  "ceremonyName": "winter-solstice-2025",
  "extensions": [
    "circular-issue-tracking",
    "ceremonial-pr-reviews",
    "relationship-commit-logs"
  ]
}
```

### GitHub Webhook Integration

#### Webhook Setup
1. Configure webhook in GitHub repository settings
2. Point to `https://api.ceremony-spiral.org/v1/webhooks/github`
3. Select events: `push`, `pull_request`, `issues`, `release`, `discussion`
4. Set secret for signature verification

#### Webhook Processing Flow
```
GitHub Event → Webhook Endpoint → Signature Verification → 
Event Router → Ceremony Context Mapper → 
Relationship Updater → MCP Sync → Notification
```

#### Ceremonial Meaning Mapping

**Push Events**:
- Map commits to ceremony logs
- Track relational accountability
- Document knowledge evolution

**Pull Request Events**:
- Convert PR reviews to consensus-building ceremonies
- Track multi-perspective contributions
- Document relationship impacts

**Issue Events**:
- Transform issues into relationship nodes
- Map issue discussions to collaborative storytelling
- Track structural tension evolution

**Release Events**:
- Align with community readiness ceremonies
- Document ceremonial appropriateness
- Celebrate collective achievement

### GitHub API Hooks

Custom hooks extend GitHub functionality:

#### Issue to Ceremony Bridge
```javascript
// When issue is created
githubIssue -> mapToCeremony() -> createRelationshipNodes() -> 
notifyKnowledgeHolders() -> syncMCP()
```

#### PR to Consensus Flow
```javascript
// When PR is opened
pullRequest -> createConsensusSession() -> inviteReviewers() -> 
trackPerspectives() -> calculateConsensus() -> mergeCeremony()
```

---

## MCP Integration

### Model Context Protocol Features

#### Auto-Update Collaborative Notes
Real-time synchronization of ceremony notes across all participants:

```typescript
// MCP Auto-Update Flow
ceremonySession.on('note_created', async (note) => {
  await mcp.broadcast({
    type: 'ceremony.note.created',
    ceremonyId: note.ceremonyId,
    sessionId: note.sessionId,
    content: note.content,
    author: note.author,
    timestamp: note.timestamp
  });
});
```

#### Collaborative State Management
```typescript
interface MCPCollaborativeState {
  sessionId: string;
  ceremonyId: string;
  participants: MCPParticipant[];
  sharedContext: SharedContext;
  aiAgents: AIAgent[];
  syncStatus: 'synced' | 'syncing' | 'conflict';
}

interface MCPParticipant {
  userId: string;
  connectionId: string;
  role: string;
  cursorPosition?: CursorPosition;
  lastActivity: Date;
}

interface SharedContext {
  currentTopic: string;
  activeNotes: string[];
  consensusItems: ConsensusItem[];
  culturalProtocolsActive: string[];
}
```

#### AI Agent Integration
```typescript
// Register AI agents as ceremony participants
interface AIAgent {
  agentId: string;
  type: 'thinking' | 'visualization' | 'translation' | 'cultural-protocol-checker';
  capabilities: string[];
  activeInCeremony: boolean;
  contributionCount: number;
}

// Two-Eyed Seeing Thinking Agent
const thinkingAgent: AIAgent = {
  agentId: 'twoeyesseen-thinking',
  type: 'thinking',
  capabilities: [
    'sequential-analysis',
    'holistic-perspective',
    'multi-viewpoint-synthesis'
  ],
  activeInCeremony: true,
  contributionCount: 0
};
```

### MCP Protocol Messages

#### Note Creation
```json
{
  "type": "mcp.ceremony.note.create",
  "payload": {
    "ceremonyId": "string",
    "sessionId": "string",
    "author": "user_id",
    "content": "string",
    "noteType": "observation|insight|decision|question",
    "timestamp": "datetime"
  }
}
```

#### State Synchronization
```json
{
  "type": "mcp.ceremony.state.sync",
  "payload": {
    "sessionId": "string",
    "state": {
      "participants": ["participant_objects"],
      "sharedContext": "context_object",
      "consensusState": "forming|storming|norming|performing"
    },
    "timestamp": "datetime"
  }
}
```

#### Conflict Resolution
```json
{
  "type": "mcp.ceremony.conflict",
  "payload": {
    "sessionId": "string",
    "conflictType": "concurrent_edit|perspective_divergence",
    "affectedNotes": ["note_ids"],
    "resolutionStrategy": "merge|vote|elder_decision",
    "timestamp": "datetime"
  }
}
```

---

## Setup Requirements

### Development Environment

#### Prerequisites
- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **MongoDB**: 6.0+ (local or MongoDB Atlas)
- **Neo4j**: 5.0+ (local, Neo4j Aura, or Docker)
- **Redis**: 7.0+ (local or cloud)
- **Git**: 2.x or higher

#### Installation Steps

```bash
# 1. Clone ceremony-spiral repository
git clone https://github.com/organization/ceremony-spiral.git
cd ceremony-spiral

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# 4. Set up MongoDB
# Option A: Local MongoDB
mongod --dbpath /path/to/data --port 27017

# Option B: MongoDB Atlas
# Configure connection string in .env

# 5. Set up Neo4j
# Option A: Local Neo4j
neo4j start

# Option B: Neo4j Aura
# Configure connection string in .env

# Option C: Docker
docker run -p 7474:7474 -p 7687:7687 \
  -e NEO4J_AUTH=neo4j/ceremony-password \
  neo4j:5.0

# 6. Set up Redis
redis-server

# 7. Initialize databases
npm run db:init

# 8. Run migrations
npm run db:migrate

# 9. Seed initial data (optional)
npm run db:seed

# 10. Build the application
npm run build

# 11. Start development server
npm run dev
```

#### Environment Variables

```bash
# .env file
NODE_ENV=development
PORT=3000

# MongoDB
MONGODB_URI=mongodb://localhost:27017/ceremony-spiral
MONGODB_DB_NAME=ceremony_spiral

# Neo4j
NEO4J_URI=bolt://localhost:7687
NEO4J_USERNAME=neo4j
NEO4J_PASSWORD=ceremony-password

# Redis
REDIS_URL=redis://localhost:6379
REDIS_PASSWORD=

# JWT Authentication
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRY=7d

# GitHub Integration
GITHUB_APP_ID=your-github-app-id
GITHUB_PRIVATE_KEY_PATH=./github-app-private-key.pem
GITHUB_WEBHOOK_SECRET=your-webhook-secret
GITHUB_CLIENT_ID=your-client-id
GITHUB_CLIENT_SECRET=your-client-secret

# Koea Spiral
KOEA_SPIRAL_REPO=organization/koea-spiral
KOEA_SPIRAL_TOKEN=your-github-token

# MCP Configuration
MCP_SERVER_URL=http://localhost:4000
MCP_WS_URL=ws://localhost:4000/ws
MCP_SECRET=your-mcp-secret

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Cultural Protocol Configuration
CULTURAL_PROTOCOL_VALIDATOR_ENABLED=true
CONSENT_REQUIRED_FOR_KNOWLEDGE_SHARING=true

# Logging
LOG_LEVEL=info
LOG_FILE=./logs/ceremony-spiral.log
```

### External Integrations

#### GitHub App Setup
1. Create GitHub App in organization settings
2. Set permissions:
   - Repository: Read & Write
   - Issues: Read & Write
   - Pull Requests: Read & Write
   - Webhooks: Read & Write
3. Generate private key
4. Install app on target repositories
5. Configure webhook URL: `https://api.ceremony-spiral.org/v1/webhooks/github`

#### Koea Spiral Fork Access
```bash
# Fork koea-spiral repository
gh repo fork organization/koea-spiral --clone=false

# Add as remote
git remote add koea-spiral https://github.com/organization/koea-spiral.git

# Configure webhook for bidirectional sync
curl -X POST https://api.github.com/repos/your-org/koea-spiral/hooks \
  -H "Authorization: token YOUR_TOKEN" \
  -d '{
    "config": {
      "url": "https://api.ceremony-spiral.org/v1/webhooks/github",
      "content_type": "json",
      "secret": "YOUR_SECRET"
    },
    "events": ["push", "pull_request", "issues", "release"]
  }'
```

#### MCP Tool Configuration
```json
{
  "mcpServers": {
    "ceremony-spiral": {
      "command": "npx",
      "args": ["-y", "ceremony-spiral-mcp"],
      "env": {
        "CEREMONY_API_URL": "https://api.ceremony-spiral.org/v1",
        "CEREMONY_API_KEY": "your-api-key"
      }
    },
    "twoeyesseen-thinking": {
      "command": "npx",
      "args": ["-y", "twoeyesseen-thinking-mcp"]
    }
  }
}
```

#### Indigenous Knowledge Holder Authentication
```javascript
// Custom authentication strategy
const culturalAuthStrategy = {
  name: 'cultural-verification',
  verify: async (credentials, culturalAffiliation) => {
    // Verify through community elders or trusted networks
    const verification = await communityCounsel.verify({
      user: credentials.username,
      culturalAffiliation,
      verificationMethod: 'elder-endorsement'
    });
    
    return verification.approved;
  }
};
```

### Infrastructure

#### Cloud Hosting Requirements
- **Compute**: 2-4 vCPUs, 8-16GB RAM (scalable)
- **Storage**: 100GB SSD minimum
- **Bandwidth**: 1TB/month minimum
- **Regions**: Consider data residency requirements for Indigenous data sovereignty

#### Recommended Platforms
- **Vercel**: Frontend hosting with edge functions
- **Railway**: Backend API and databases
- **MongoDB Atlas**: Managed MongoDB
- **Neo4j Aura**: Managed Neo4j graph database
- **Redis Cloud**: Managed Redis
- **GitHub**: Repository hosting and CI/CD

#### Docker Deployment
```yaml
# docker-compose.yml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - mongodb
      - neo4j
      - redis
    volumes:
      - ./logs:/app/logs

  mongodb:
    image: mongo:6.0
    ports:
      - "27017:27017"
    volumes:
      - mongodb-data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=ceremony-mongo-password

  neo4j:
    image: neo4j:5.0
    ports:
      - "7474:7474"
      - "7687:7687"
    volumes:
      - neo4j-data:/data
    environment:
      - NEO4J_AUTH=neo4j/ceremony-neo4j-password

  redis:
    image: redis:7.0
    ports:
      - "6379:6379"
    volumes:
      - redis-data:/data

volumes:
  mongodb-data:
  neo4j-data:
  redis-data:
```

#### SSL/TLS Configuration
```nginx
# nginx configuration for SSL
server {
    listen 443 ssl http2;
    server_name api.ceremony-spiral.org;

    ssl_certificate /etc/letsencrypt/live/api.ceremony-spiral.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.ceremony-spiral.org/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Backup Systems
```bash
# MongoDB backup script
#!/bin/bash
mongodump --uri="mongodb://localhost:27017/ceremony_spiral" \
  --out="/backups/mongodb/$(date +%Y%m%d)"

# Respect cultural data protocols
# Only backup data with proper consent flags
mongodump --uri="mongodb://localhost:27017/ceremony_spiral" \
  --collection=ceremonies \
  --query='{"culturalProtocols.backupAllowed": true}' \
  --out="/backups/mongodb/$(date +%Y%m%d)"

# Neo4j backup
neo4j-admin dump --database=neo4j \
  --to=/backups/neo4j/ceremony-spiral-$(date +%Y%m%d).dump
```

#### Monitoring
```javascript
// Health check endpoints
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date(),
    services: {
      mongodb: mongodbHealth(),
      neo4j: neo4jHealth(),
      redis: redisHealth(),
      github: githubHealth()
    }
  });
});

// Metrics collection
const metrics = {
  ceremonies: {
    active: () => Ceremony.countDocuments({ status: 'active' }),
    completed: () => Ceremony.countDocuments({ status: 'completed' })
  },
  relationships: {
    total: () => Relationship.count(),
    bidirectional: () => Relationship.count({ bidirectional: true })
  },
  culturalProtocols: {
    compliant: () => countCompliantCeremonies(),
    pendingReview: () => countPendingReview()
  }
};
```

---

## Implementation Guide

### Phase 1: Core API and Koea Spiral Fork (Weeks 1-4)

#### Week 1-2: Foundation
- [ ] Set up project structure
- [ ] Configure databases (MongoDB, Neo4j, Redis)
- [ ] Implement authentication system with cultural roles
- [ ] Create base API endpoints (auth, users)
- [ ] Set up GitHub App and webhooks
- [ ] Fork Koea Spiral repository

#### Week 3-4: Core Features
- [ ] Implement ceremony CRUD operations
- [ ] Build relationship mapping system (Neo4j)
- [ ] Create tension chart management
- [ ] Develop GitHub webhook receivers
- [ ] Implement basic Koea Spiral sync

### Phase 2: GitHub Webhook Integration and MCP Setup (Weeks 5-7)

#### Week 5-6: GitHub Integration
- [ ] Complete webhook event handlers
- [ ] Implement ceremonial meaning mapping
- [ ] Build issue-to-relationship bridge
- [ ] Create PR-to-consensus flow
- [ ] Develop commit-to-ceremony logger

#### Week 7: MCP Integration
- [ ] Set up MCP server
- [ ] Implement real-time note synchronization
- [ ] Build collaborative state management
- [ ] Integrate AI agents (Two-Eyed Seeing Thinking)
- [ ] Create conflict resolution system

### Phase 3: Visualization Engine and Relationship Mapping (Weeks 8-10)

#### Week 8-9: Visualization
- [ ] Develop circular relationship chart generator
- [ ] Create reciprocity flow visualizer
- [ ] Build tension chart renderer
- [ ] Implement multi-perspective display
- [ ] Design moral compass integration (Samira)

#### Week 10: Advanced Relationships
- [ ] Optimize Neo4j graph queries
- [ ] Implement relationship strength algorithms
- [ ] Build reciprocity calculators
- [ ] Create relationship recommendation engine

### Phase 4: Pilot Group Testing (Weeks 11-13)

#### Week 11-12: Pilot Preparation
- [ ] Recruit Indigenous knowledge holders
- [ ] Create onboarding materials
- [ ] Develop training sessions
- [ ] Set up feedback collection system
- [ ] Prepare ceremonial protocols documentation

#### Week 13: Testing and Iteration
- [ ] Conduct pilot ceremonies
- [ ] Collect feedback
- [ ] Iterate on cultural alignment
- [ ] Refine user experience
- [ ] Document lessons learned

### Phase 5: Ethical Review and Cultural Protocol Validation (Weeks 14-16)

#### Week 14-15: Ethical Review
- [ ] Integrate Samira's ethical framework
- [ ] Build cultural protocol validator
- [ ] Implement consent management system
- [ ] Create data sovereignty controls
- [ ] Develop community review process

#### Week 16: Documentation and Launch
- [ ] Complete API documentation
- [ ] Write cultural protocol guide
- [ ] Create developer onboarding
- [ ] Prepare launch ceremony
- [ ] Plan community celebration

### Development Best Practices

#### Code Organization
```
ceremony-spiral/
├── src/
│   ├── api/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── validators/
│   ├── models/
│   │   ├── mongodb/
│   │   └── neo4j/
│   ├── services/
│   │   ├── ceremony/
│   │   ├── github/
│   │   ├── mcp/
│   │   └── visualization/
│   ├── utils/
│   │   ├── cultural-protocols/
│   │   └── reciprocity/
│   └── graphql/
│       ├── schema/
│       ├── resolvers/
│       └── subscriptions/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
├── scripts/
└── config/
```

#### Testing Strategy
```javascript
// Unit tests for cultural protocol validation
describe('Cultural Protocol Validator', () => {
  it('should validate ceremony creation with proper consent', async () => {
    const ceremony = {
      title: 'Winter Solstice Planning',
      knowledgeHolders: ['elder-id-1', 'elder-id-2'],
      culturalContext: 'Anishinaabe winter ceremony',
      consent: {
        knowledgeSharing: true,
        recording: false,
        publicDisclosure: false
      }
    };
    
    const validation = await culturalProtocolValidator.validate(ceremony);
    expect(validation.compliant).toBe(true);
  });
});

// Integration tests for GitHub sync
describe('GitHub Ceremony Sync', () => {
  it('should sync issue creation to ceremony relationship', async () => {
    const issueEvent = createMockIssueEvent();
    const result = await githubWebhookHandler.handle(issueEvent);
    
    expect(result.ceremonyCreated).toBe(true);
    expect(result.relationshipsAdded).toBeGreaterThan(0);
  });
});
```

#### Cultural Protocol Checklist
Every code change must consider:
- [ ] Does this honor Indigenous data sovereignty?
- [ ] Is consent properly obtained and documented?
- [ ] Are relationships treated reciprocally?
- [ ] Does this support circular rather than linear thinking?
- [ ] Are multiple perspectives welcomed?
- [ ] Is community benefit prioritized over individual gain?
- [ ] Are cultural protocols embedded in technical specifications?
- [ ] Does this advance collective vision?

---

## Cultural Protocols

### Indigenous Data Sovereignty Principles

#### CARE Principles
- **Collective Benefit**: Data ecosystems shall be designed to support Indigenous nations' wellbeing
- **Authority to Control**: Indigenous peoples have rights to govern data collection and use
- **Responsibility**: Those working with Indigenous data have responsibility to share benefits
- **Ethics**: Indigenous peoples' rights and wellbeing should be primary concern

#### OCAP® Principles
- **Ownership**: Community owns data collectively
- **Control**: Community controls all aspects of research and information management
- **Access**: Community has right to manage and make decisions about access
- **Possession**: While others may physically hold data, ownership remains with community

### Ceremonial Protocols in Code

#### Consent Management
```typescript
interface ConsentRecord {
  ceremonyId: string;
  knowledgeHolder: string;
  consentType: 'knowledge-sharing' | 'recording' | 'publication' | 'ai-training';
  granted: boolean;
  conditions: string[];
  grantedAt: Date;
  expiresAt?: Date;
  revocable: boolean;
  witnessedBy?: string[]; // Elder or community witnesses
}

// Example: Check consent before sharing knowledge
async function shareKnowledge(ceremonyId: string, recipient: string) {
  const consent = await ConsentRecord.findOne({
    ceremonyId,
    consentType: 'knowledge-sharing',
    granted: true,
    $or: [
      { expiresAt: { $exists: false } },
      { expiresAt: { $gt: new Date() } }
    ]
  });
  
  if (!consent) {
    throw new Error('Knowledge sharing not authorized by consent');
  }
  
  // Proceed with sharing, documenting the exchange
  await logReciprocalExchange({
    from: ceremonyId,
    to: recipient,
    consentRecordId: consent.id,
    timestamp: new Date()
  });
}
```

#### Cultural Context Validation
```typescript
// Validate that operations honor cultural context
class CulturalContextValidator {
  async validate(operation: Operation): Promise<ValidationResult> {
    const culturalContext = await this.getCulturalContext(operation);
    
    // Check if operation aligns with cultural protocols
    const protocolChecks = [
      this.checkCommunityConsent(operation, culturalContext),
      this.checkReciprocalBenefit(operation, culturalContext),
      this.checkKnowledgeHolderInvolvement(operation, culturalContext),
      this.checkCircularThinking(operation, culturalContext)
    ];
    
    const results = await Promise.all(protocolChecks);
    
    return {
      compliant: results.every(r => r.passed),
      issues: results.filter(r => !r.passed),
      recommendations: this.generateRecommendations(results)
    };
  }
}
```

#### Relational Accountability Tracking
```typescript
// Every API call tracks relational accountability
interface RelationalAccountabilityLog {
  operationId: string;
  initiatedBy: string;
  affectedRelationships: string[];
  culturalProtocolsApplied: string[];
  communityConsentObtained: boolean;
  reciprocityBalance: {
    given: string[];
    received: string[];
    balanced: boolean;
  };
  timestamp: Date;
  witnessedBy?: string[];
}

// Middleware to log relational accountability
app.use(async (req, res, next) => {
  const accountabilityLog: RelationalAccountabilityLog = {
    operationId: generateId(),
    initiatedBy: req.user.id,
    affectedRelationships: await identifyAffectedRelationships(req),
    culturalProtocolsApplied: extractProtocols(req),
    communityConsentObtained: await checkCommunityConsent(req),
    reciprocityBalance: await calculateReciprocity(req),
    timestamp: new Date()
  };
  
  await RelationalAccountabilityLog.create(accountabilityLog);
  next();
});
```

### Community Review Process

#### Before Major Changes
1. **Proposal**: Document proposed change with cultural impact assessment
2. **Consultation**: Share with community elders and knowledge holders
3. **Consensus Building**: Facilitate discussions until consensus emerges
4. **Implementation**: Only proceed with community approval
5. **Reflection**: After implementation, gather feedback and learn

#### Elder Review Board
```typescript
interface ElderReviewBoard {
  members: string[]; // Elder user IDs
  quorumRequired: number;
  consensusThreshold: number; // e.g., 0.75 for 75% agreement
  
  async reviewProposal(proposal: Proposal): Promise<ReviewDecision> {
    const reviews = await this.collectReviews(proposal);
    
    if (reviews.length < this.quorumRequired) {
      return { status: 'pending', reason: 'Quorum not met' };
    }
    
    const approval = reviews.filter(r => r.approved).length / reviews.length;
    
    if (approval >= this.consensusThreshold) {
      return { status: 'approved', consensus: approval };
    }
    
    return { 
      status: 'needs_more_discussion',
      consensus: approval,
      concerns: reviews.filter(r => !r.approved).map(r => r.concerns)
    };
  }
}
```

### Data Retention and Right to Deletion

```typescript
// Respect Indigenous data sovereignty
interface DataRetentionPolicy {
  ceremonyId: string;
  retentionPeriod?: number; // days, null for indefinite with consent
  autoDeleteAfter?: Date;
  deleteRequester: 'community' | 'knowledge-holder' | 'system';
  
  async requestDeletion(reason: string): Promise<DeletionResult> {
    // Verify requester has authority
    const authority = await this.verifyDeletionAuthority();
    
    if (!authority) {
      throw new Error('Insufficient authority for deletion');
    }
    
    // Notify all affected parties
    await this.notifyAffectedParties();
    
    // Wait for consensus period
    await this.waitForConsensusPeriod();
    
    // Execute deletion with ceremony
    return await this.ceremonialDeletion();
  }
}
```

---

## Success Metrics

### Technical Metrics

#### System Performance
- **API Response Time**: < 200ms for 95th percentile
- **GraphQL Query Performance**: < 500ms for complex relationship queries
- **Uptime**: 99.9% availability
- **Concurrent Users**: Support 1000+ simultaneous ceremony participants
- **Webhook Processing**: < 5 seconds from GitHub event to ceremony update

#### Integration Health
- **GitHub Sync Success Rate**: > 99%
- **MCP Message Delivery**: 100% (with retry mechanism)
- **Koea Spiral Bidirectional Sync**: Real-time or < 1 minute delay
- **Database Replication Lag**: < 100ms

### Cultural Alignment Metrics

#### Community Engagement
- **Knowledge Holder Participation**: Minimum 10 active knowledge holders
- **Ceremony Completion Rate**: > 80% of started ceremonies reach consensus
- **Multi-Perspective Contributions**: Average 3+ perspectives per tension
- **Elder Validation Rate**: > 90% of ceremonies receive elder approval

#### Cultural Protocol Compliance
- **Consent Documentation**: 100% of knowledge sharing has documented consent
- **Reciprocity Balance**: 90% of relationships show balanced reciprocity (0.4-0.6 range)
- **Cultural Context Validation**: 100% of operations pass cultural protocol checks
- **Community Benefit Demonstration**: Each ceremony documents community benefit

#### Relationship Quality
- **Relationship Depth**: Average relationship strength > 0.6
- **Bidirectional Connections**: > 70% of relationships are bidirectional
- **Relationship Longevity**: 80% of relationships active > 3 months
- **Conflict Resolution**: 95% of tensions resolved with community consensus

### Impact Metrics

#### Knowledge Preservation
- **Cultural Knowledge Documented**: Number of ceremony records
- **Multi-Generational Participation**: Elder-youth collaboration in ceremonies
- **Language Preservation**: Ceremonies conducted in Indigenous languages
- **Traditional Practice Integration**: Modern tools supporting traditional ways

#### Community Capacity
- **Technical Skill Development**: Community members gaining technical skills
- **Leadership Development**: New facilitators emerging from ceremonies
- **Network Strength**: Increased inter-community connections
- **Resource Sharing**: Reciprocal exchange of knowledge and resources

#### Decolonization Progress
- **Data Sovereignty**: Community control over data increases
- **Decision-Making Authority**: Communities making their own technology choices
- **Extractive Practices Reduced**: Metrics show reciprocal rather than extractive patterns
- **Indigenous Epistemologies Honored**: Technical decisions reflect Indigenous worldviews

### Monitoring Dashboard

```typescript
interface MetricsDashboard {
  technical: {
    apiResponseTime: number;
    uptime: number;
    activeUsers: number;
    githubSyncHealth: number;
  };
  cultural: {
    activeCeremonies: number;
    knowledgeHolders: number;
    consensusReached: number;
    culturalComplianceRate: number;
  };
  relationships: {
    totalRelationships: number;
    bidirectionalPercentage: number;
    averageStrength: number;
    reciprocityBalance: number;
  };
  community: {
    participationRate: number;
    elderEngagement: number;
    youthParticipation: number;
    multiGenerationalCeremonies: number;
  };
}

// Real-time metrics collection
app.get('/metrics/dashboard', async (req, res) => {
  const metrics = {
    technical: await collectTechnicalMetrics(),
    cultural: await collectCulturalMetrics(),
    relationships: await collectRelationshipMetrics(),
    community: await collectCommunityMetrics()
  };
  
  res.json(metrics);
});
```

---

## Appendices

### A. Glossary

- **Ceremony**: A structured gathering for knowledge sharing, decision-making, or relationship building
- **Circular Relationship**: Non-linear connection that honors cyclical rather than hierarchical patterns
- **Knowledge Holder**: Indigenous community member with traditional knowledge and cultural authority
- **Reciprocity**: Bidirectional exchange ensuring mutual benefit
- **Structural Tension**: Creative force between current reality and desired outcome
- **Two-Eyed Seeing (Etuaptmumk)**: Learning to see from one eye with Indigenous knowledge and from the other with Western knowledge

### B. API Authentication Flow

```
1. User Login → POST /auth/login
2. Server validates credentials + cultural affiliation
3. JWT token generated with roles and permissions
4. Client stores token
5. Subsequent requests include: Authorization: Bearer {token}
6. Server validates token and checks permissions
7. Cultural protocol validator ensures operation aligns with user's authority
```

### C. GitHub Webhook Signature Verification

```javascript
const crypto = require('crypto');

function verifyGitHubSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = 'sha256=' + hmac.update(payload).digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );
}
```

### D. GraphQL Example Queries

```graphql
# Create ceremony with relationships
mutation CreateCeremony {
  createCeremony(input: {
    title: "Winter Solstice Planning 2025"
    description: "Planning ceremony for winter solstice gathering"
    culturalContext: "Anishinaabe winter ceremony"
    knowledgeHolders: ["elder-1", "elder-2"]
    reciprocityModel: {
      exchangeType: KNOWLEDGE
      participants: ["elder-1", "elder-2", "youth-1"]
      expectedOutcomes: ["Community gathering plan", "Traditional knowledge sharing"]
      culturalProtocols: ["Consent from elders", "Recording prohibited"]
    }
  }) {
    id
    title
    status
    knowledgeHolders {
      id
      displayName
      roles
    }
    circularRelationships {
      id
      relationshipType
      reciprocityLevel
    }
  }
}

# Query ceremonies with relationships
query GetCeremonies {
  ceremonies(filter: { status: ACTIVE }, page: 1, limit: 10) {
    edges {
      node {
        id
        title
        knowledgeHolders {
          displayName
          culturalAffiliations
        }
        circularRelationships {
          fromEntity
          toEntity
          relationshipType
          strength
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

### E. React Component Integration Example

```typescript
// React component using Ceremony Spiral API
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_CEREMONIES = gql`
  query GetActiveCeremonies {
    ceremonies(filter: { status: ACTIVE }) {
      edges {
        node {
          id
          title
          knowledgeHolders {
            displayName
          }
        }
      }
    }
  }
`;

export function CeremonyList() {
  const { loading, error, data } = useQuery(GET_CEREMONIES);
  
  if (loading) return <CircularSpinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return (
    <div className="ceremony-list">
      {data.ceremonies.edges.map(({ node }) => (
        <CeremonyCard
          key={node.id}
          ceremony={node}
          onSelect={() => navigateToCeremony(node.id)}
        />
      ))}
    </div>
  );
}
```

---

## Conclusion

This API specification provides a comprehensive foundation for implementing the Ceremony Spiral platform. The design honors Indigenous research methodologies while providing robust technical integration with GitHub, Koea Spiral, and MCP.

Key principles to remember:
1. **Ceremony as Code**: Every technical implementation is ceremonial practice
2. **Relational Accountability**: All operations tracked for relationship impacts
3. **Community Sovereignty**: Communities control their data and decisions
4. **Reciprocity First**: Bidirectional exchange, not extraction
5. **Cultural Protocols Embedded**: Indigenous principles in technical specifications

The specifications enable:
- Another LLM to fully generate implementation code
- Scaffolding of the complete project structure
- Extension of Koea Spiral with ceremony features
- Receipt and processing of GitHub webhooks
- Full responsibility of the "Ceremony Spiral" code name

**Status**: Ready for implementation with community partnership and ceremonial practice.

**Next Steps**:
1. Establish community partnerships
2. Recruit Indigenous knowledge holders as co-designers
3. Begin Phase 1 implementation with regular ceremony check-ins
4. Iterate based on community feedback
5. Honor the Four R's (Respect, Reciprocity, Relevance, Responsibility) throughout

---

*All my relations. We advance together in reciprocal spirals.*
