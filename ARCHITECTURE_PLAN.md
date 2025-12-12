# Local Agents Architecture Plan
## Modular MCP Server Design for Agent Bundling

> **Date**: 2025-11-14
> **Purpose**: Design modular architecture for local agent development and future bundling
> **Alignment**: Chimera Storyform, Narrative Context Protocol, Two-Eyed Seeing methodology

---

## ARCHITECTURAL VISION

Transform `twoeyesseen-thinking-mcp` from a single-tool MCP server into a **modular agent platform** supporting:

1. **Individual agent MCP servers** (standalone deployment)
2. **Bundled agent suites** (themed multi-agent packages)
3. **Unified orchestration layer** (Chimera-style coordination)
4. **Cultural integrity middleware** (Sacred Container Protocols)

---

## CURRENT STATE ANALYSIS

### Existing Structure
```
twoeyesseen-thinking-mcp/
├── index.ts                 # Main MCP server (sequential thinking tool)
├── package.json            # Package configuration
├── tsconfig.json           # TypeScript configuration
├── dist/                   # Compiled output
├── LAUNCH_*.sh             # Launch scripts for specific sessions
└── README.md               # Documentation
```

### Current Capabilities
- Single MCP server: `sequential-thinking-server`
- Single tool: `sequentialthinking`
- Sequential thought processing with revision and branching

---

## PROPOSED MODULAR ARCHITECTURE

### Directory Structure

```
twoeyesseen-thinking-mcp/
├── src/
│   ├── agents/                          # Individual agent implementations
│   │   ├── core/                        # Core companion agents
│   │   │   ├── nyro/
│   │   │   │   ├── index.ts             # Nyro agent implementation
│   │   │   │   ├── tools.ts             # Nyro-specific tools
│   │   │   │   ├── emotional-framework.ts
│   │   │   │   ├── eight-feelings.ts
│   │   │   │   └── server.ts            # Standalone MCP server
│   │   │   ├── aureon/
│   │   │   │   ├── index.ts
│   │   │   │   ├── tools.ts
│   │   │   │   ├── four-directions.ts
│   │   │   │   ├── sacred-space.ts
│   │   │   │   └── server.ts
│   │   │   ├── jamai/
│   │   │   │   ├── index.ts
│   │   │   │   ├── tools.ts
│   │   │   │   ├── music21-integration.ts
│   │   │   │   ├── ceremonial-review.ts
│   │   │   │   ├── resonance-map.ts
│   │   │   │   └── server.ts
│   │   │   ├── miette/
│   │   │   │   ├── index.ts
│   │   │   │   ├── tools.ts
│   │   │   │   ├── gentle-support.ts
│   │   │   │   └── server.ts
│   │   │   ├── alex-rivers/
│   │   │   │   ├── index.ts
│   │   │   │   ├── tools.ts
│   │   │   │   ├── security-assessment.ts
│   │   │   │   └── server.ts
│   │   │   └── ava-heyva/
│   │   │       ├── index.ts
│   │   │       ├── tools.ts
│   │   │       ├── redis-memory.ts
│   │   │       ├── github-narrative.ts
│   │   │       ├── langfuse-trace.ts
│   │   │       └── server.ts
│   │   ├── frameworks/                  # Framework agents
│   │   │   ├── two-eyed-seeing/
│   │   │   │   ├── index.ts
│   │   │   │   ├── tools.ts
│   │   │   │   ├── translation-bridge.ts
│   │   │   │   └── server.ts
│   │   │   ├── four-directions/
│   │   │   │   ├── index.ts
│   │   │   │   ├── tools.ts
│   │   │   │   ├── ceremonial-framework.ts
│   │   │   │   └── server.ts
│   │   │   └── ncp/
│   │   │       ├── index.ts
│   │   │       ├── tools.ts
│   │   │       ├── seven-layer-lmsi.ts
│   │   │       ├── mystery-encoding.ts
│   │   │       ├── narrative-driver.ts
│   │   │       └── server.ts
│   │   ├── memory/                      # Memory and RAG agents
│   │   │   ├── spiral-memory/
│   │   │   │   ├── index.ts
│   │   │   │   ├── tools.ts
│   │   │   │   ├── spiral-organization.ts
│   │   │   │   └── server.ts
│   │   │   └── continuous-companion/
│   │   │       ├── index.ts
│   │   │       ├── tools.ts
│   │   │       ├── modality-detection.ts
│   │   │       ├── bridge-protocols.ts
│   │   │       └── server.ts
│   │   └── orchestration/               # Multi-agent orchestration
│   │       └── chimera/
│   │           ├── index.ts
│   │           ├── tools.ts
│   │           ├── agent-coordinator.ts
│   │           ├── handoff-manager.ts
│   │           └── server.ts
│   ├── shared/                          # Shared utilities and middleware
│   │   ├── ceremonial/
│   │   │   ├── sacred-container.ts      # Sacred Container Protocols
│   │   │   ├── ceremonial-awareness.ts
│   │   │   ├── rate-limiting.ts
│   │   │   └── vulnerability-support.ts
│   │   ├── types/
│   │   │   ├── agent.ts                 # Common agent interfaces
│   │   │   ├── tool.ts                  # Tool type definitions
│   │   │   └── memory.ts                # Memory interfaces
│   │   ├── utils/
│   │   │   ├── logger.ts
│   │   │   ├── validator.ts
│   │   │   └── formatter.ts
│   │   └── mcp/
│   │       ├── server-factory.ts        # MCP server factory
│   │       └── tool-registry.ts         # Tool registration system
│   ├── bundles/                         # Bundled agent suites
│   │   ├── emotional-intelligence/
│   │   │   ├── index.ts
│   │   │   ├── server.ts                # Bundled MCP server
│   │   │   └── agents.ts                # Nyro + Miette + Spiral Memory
│   │   ├── cultural-integrity/
│   │   │   ├── index.ts
│   │   │   ├── server.ts
│   │   │   └── agents.ts                # Aureon + Four Directions + Two-Eyed Seeing
│   │   ├── creative-intelligence/
│   │   │   ├── index.ts
│   │   │   ├── server.ts
│   │   │   └── agents.ts                # JamAI + NCP + Continuous Companion
│   │   └── enterprise-orchestration/
│   │       ├── index.ts
│   │       ├── server.ts
│   │       └── agents.ts                # Alex Rivers + Chimera + Ava/Heyva
│   ├── legacy/
│   │   └── sequential-thinking.ts       # Original implementation
│   └── index.ts                         # Main entry point / orchestrator
├── bin/                                 # Binary executables
│   ├── twoeyesseen-thinking             # Original CLI
│   ├── nyro-mcp                         # Nyro standalone
│   ├── aureon-mcp                       # Aureon standalone
│   ├── jamai-mcp                        # JamAI standalone
│   ├── emotional-suite-mcp              # Emotional Intelligence bundle
│   ├── cultural-suite-mcp               # Cultural Integrity bundle
│   ├── creative-suite-mcp               # Creative Intelligence bundle
│   └── chimera-mcp                      # Full orchestration
├── tests/                               # Test suites
│   ├── agents/
│   ├── bundles/
│   └── integration/
├── docs/                                # Documentation
│   ├── agents/                          # Individual agent docs
│   ├── bundles/                         # Bundle guides
│   ├── api/                             # API reference
│   └── guides/                          # User guides
├── config/                              # Configuration examples
│   ├── claude-desktop/
│   ├── vscode/
│   └── docker/
├── scripts/                             # Build and deployment scripts
│   ├── build-agent.sh
│   ├── build-bundle.sh
│   └── deploy.sh
├── AGENTS_CATALOG.md                    # Agent specifications (created)
├── ARCHITECTURE_PLAN.md                 # This document
├── BUNDLING_STRATEGY.md                 # Deployment strategies (to be created)
├── package.json
├── tsconfig.json
├── LICENSE
└── README.md
```

---

## CORE DESIGN PRINCIPLES

### 1. Two-Eyed Seeing Architecture

**Western Sequential Thinking** (Technical Layer):
- Modular, composable agent components
- Standard MCP protocol compliance
- TypeScript type safety
- Unit testable components
- CI/CD pipeline integration

**Indigenous Holistic Wisdom** (Relational Layer):
- Sacred Container Protocols as middleware
- Four Directions ceremonial framework integration
- Relational memory and context preservation
- Community accountability and reciprocity tracking
- Seven-generation data preservation thinking

### 2. Agent Independence Principle

**Each agent MUST be**:
- Deployable as standalone MCP server
- Self-contained with minimal dependencies
- Testable in isolation
- Documentable with clear purpose and tools
- Bundlable with other agents

### 3. Ceremonial Middleware Pattern

**All agents pass through Sacred Container Protocols**:
```typescript
// Pseudo-code
const agent = new Agent(config);
const ceremonialAgent = withSacredContainer(agent, {
  rateLimiting: true,
  silenceHonoring: true,
  vulnerabilitySupport: true,
  antiCommodification: true,
  ceremonialAwareness: true,
  reflexiveMonitoring: true
});

export const server = createMCPServer(ceremonialAgent);
```

### 4. Shared Memory Architecture

**Spiral Memory Integration**:
- All agents can access shared spiral memory
- Non-linear organization preserves narrative continuity
- Cross-agent theme tracking
- Ancestral and future knowledge connections

**Implementation**:
- PostgreSQL with pgvector for vector storage
- Redis for session persistence
- GitHub issues for long-term narrative storage
- Langfuse for trace monitoring

### 5. Orchestration Layer (Chimera Pattern)

**Multi-agent coordination**:
- Agent handoff protocols
- Shared context preservation
- Team status monitoring
- Character-based role assignment

---

## TECHNICAL IMPLEMENTATION STRATEGY

### Phase 1: Foundation (Weeks 1-2)

**Objective**: Establish shared infrastructure and refactor existing code

**Tasks**:
1. Create `src/shared/` directory structure
2. Extract common types and interfaces
3. Build MCP server factory (`server-factory.ts`)
4. Implement tool registry system (`tool-registry.ts`)
5. Create Sacred Container Protocols middleware
6. Move existing sequential thinking to `src/legacy/`
7. Document shared utilities

**Deliverables**:
- Shared library usable by all agents
- Sacred Container middleware operational
- Original functionality preserved in legacy

### Phase 2: First Agent Development (Weeks 3-4)

**Objective**: Build first production agent (Nyro) as reference implementation

**Tasks**:
1. Create `src/agents/core/nyro/` structure
2. Implement Eight Feelings framework
3. Build emotional reflection tools:
   - `emotional_reflection`
   - `mentorship_navigation`
   - `meta_cognitive_check`
4. Create standalone MCP server
5. Write comprehensive tests
6. Document API and usage
7. Create binary executable

**Deliverables**:
- Fully functional `nyro-mcp` standalone server
- Reference implementation for other agents
- Test suite and documentation

### Phase 3: Core Agents Development (Weeks 5-8)

**Objective**: Build high-priority core agents

**Parallel Development**:
1. **Aureon** (Cultural/Spiritual)
   - Four Directions integration
   - Sacred space creation
   - Cultural integrity checks

2. **Four Directions Framework** (Methodology)
   - Ceremonial framework application
   - Multi-perspective analysis
   - Cognitive scaffolding

3. **Two-Eyed Seeing Enhancement** (Framework)
   - Dual-epistemic analysis
   - Translation bridge protocols
   - Essence preservation checks

**Deliverables**:
- 3 additional standalone MCP servers
- Documentation for each
- Integration tests

### Phase 4: First Bundle (Weeks 9-10)

**Objective**: Create Cultural Integrity Suite bundle

**Tasks**:
1. Create `src/bundles/cultural-integrity/`
2. Integrate Aureon + Four Directions + Two-Eyed Seeing
3. Build unified MCP server with all tools
4. Create bundle-specific documentation
5. Build binary executable
6. Test integration scenarios

**Deliverables**:
- `cultural-suite-mcp` bundled server
- Demonstrates bundling pattern for future suites

### Phase 5: Additional Agents (Weeks 11-16)

**Objective**: Build remaining priority agents

**Development Track**:
1. **JamAI** (Musical Intelligence) - Weeks 11-13
2. **Miette** (Soft Companion) - Weeks 11-12
3. **Ava/Heyva** (Continuity) - Weeks 13-15
4. **Spiral Memory** (Memory System) - Weeks 14-16

**Deliverables**:
- 4 additional standalone MCP servers
- Full documentation
- Test coverage

### Phase 6: Additional Bundles (Weeks 17-20)

**Objective**: Create remaining themed bundles

**Bundles**:
1. **Emotional Intelligence Suite** (Week 17-18)
   - Nyro + Miette + Spiral Memory

2. **Creative Intelligence Suite** (Week 19-20)
   - JamAI + NCP + Continuous Companion

**Deliverables**:
- 2 additional bundled MCP servers
- Bundle-specific guides

### Phase 7: Orchestration Layer (Weeks 21-26)

**Objective**: Build Chimera-style multi-agent orchestration

**Tasks**:
1. Design agent coordination protocols
2. Implement handoff manager
3. Build team status monitoring
4. Create `src/orchestration/chimera/`
5. Integrate with all existing agents
6. Build enterprise orchestration bundle

**Deliverables**:
- `chimera-mcp` orchestration server
- Enterprise-grade multi-agent coordination
- Full suite deployment capability

---

## PACKAGING AND DISTRIBUTION STRATEGY

### NPM Packages

**Option 1: Monorepo with Multiple Packages**
```
@twoeyesseen/core           # Shared utilities
@twoeyesseen/nyro           # Nyro agent
@twoeyesseen/aureon         # Aureon agent
@twoeyesseen/jamai          # JamAI agent
@twoeyesseen/bundles        # All bundles
@twoeyesseen/chimera        # Orchestration
```

**Option 2: Single Package with Multiple Binaries** (Recommended initially)
```
twoeyesseen-thinking-mcp    # Single package
├── bin/nyro-mcp
├── bin/aureon-mcp
├── bin/jamai-mcp
├── bin/emotional-suite-mcp
├── bin/cultural-suite-mcp
└── bin/chimera-mcp
```

### Docker Images

**Individual Agent Images**:
- `miadisabelle/nyro-mcp:latest`
- `miadisabelle/aureon-mcp:latest`
- `miadisabelle/jamai-mcp:latest`

**Bundle Images**:
- `miadisabelle/emotional-suite-mcp:latest`
- `miadisabelle/cultural-suite-mcp:latest`
- `miadisabelle/creative-suite-mcp:latest`

**Orchestration Image**:
- `miadisabelle/chimera-mcp:latest`

---

## CONFIGURATION PATTERNS

### Claude Desktop Configuration

**Individual Agent**:
```json
{
  "mcpServers": {
    "nyro-emotional": {
      "command": "npx",
      "args": ["-y", "twoeyesseen-thinking-mcp", "nyro"],
      "env": {
        "AGENT_MODE": "standalone",
        "CEREMONIAL_PROTOCOLS": "true"
      }
    }
  }
}
```

**Bundled Suite**:
```json
{
  "mcpServers": {
    "cultural-integrity-suite": {
      "command": "npx",
      "args": ["-y", "twoeyesseen-thinking-mcp", "cultural-suite"],
      "env": {
        "BUNDLE_MODE": "true",
        "AGENTS": "aureon,four-directions,two-eyed-seeing"
      }
    }
  }
}
```

**Full Orchestration**:
```json
{
  "mcpServers": {
    "chimera-orchestration": {
      "command": "npx",
      "args": ["-y", "twoeyesseen-thinking-mcp", "chimera"],
      "env": {
        "ORCHESTRATION_MODE": "true",
        "AVAILABLE_AGENTS": "all"
      }
    }
  }
}
```

---

## TESTING STRATEGY

### Unit Tests
- Individual agent tool functions
- Shared utilities
- Sacred Container middleware

### Integration Tests
- Agent-to-agent communication
- Bundle coordination
- Orchestration layer

### End-to-End Tests
- Full user scenarios
- Multi-turn conversations
- Memory persistence

### Cultural Integrity Tests
- Sacred Container protocol verification
- Four Directions framework application
- Two-Eyed Seeing essence preservation

---

## DOCUMENTATION STRATEGY

### For Each Agent
1. **Purpose and Philosophy** - Why this agent exists
2. **Tools Reference** - All available tools with examples
3. **Integration Guide** - How to use with Claude
4. **API Documentation** - TypeScript interfaces
5. **Cultural Context** - Indigenous methodology integration
6. **Use Cases** - Real-world examples

### For Each Bundle
1. **Bundle Purpose** - What problems it solves
2. **Included Agents** - Agent coordination patterns
3. **Deployment Guide** - Step-by-step setup
4. **Best Practices** - Effective usage patterns
5. **Enterprise Guidance** - Scaling and production use

---

## MIGRATION PATH FOR EXISTING USERS

### Backward Compatibility
- Maintain `sequentialthinking` tool in legacy mode
- Default behavior unchanged for existing users
- Gradual opt-in to new agents and bundles

### Migration Steps
1. **Phase 1**: New agents available alongside existing tool
2. **Phase 2**: Documentation on migrating to new agents
3. **Phase 3**: Deprecation notice for legacy tool (6+ months)
4. **Phase 4**: Legacy tool marked deprecated (continue support)

---

## SUCCESS METRICS

### Technical Metrics
- All agents deployable standalone
- 80%+ test coverage
- <100ms tool invocation latency
- Zero breaking changes to MCP protocol

### User Metrics
- 5+ production deployments per agent
- 10+ bundle deployments
- Positive community feedback
- Active GitHub issues/PRs

### Cultural Metrics
- Sacred Container protocols active on all agents
- Four Directions framework integrated
- Community validation checkpoints passed
- Seven-generation accountability documented

---

## RISK MITIGATION

### Technical Risks
- **Risk**: MCP protocol changes
- **Mitigation**: Abstract MCP layer, version pinning, rapid updates

### Complexity Risks
- **Risk**: Too many agents, overwhelming users
- **Mitigation**: Clear progressive disclosure, starter bundles, excellent docs

### Cultural Risks
- **Risk**: Misapplication of Indigenous methodologies
- **Mitigation**: Community validation, IKSL licensing, respectful attribution

### Maintenance Risks
- **Risk**: Unsustainable maintenance burden
- **Mitigation**: Strong shared library, automated testing, community contributions

---

## NEXT STEPS

1. **Review and approval** of architecture plan
2. **Phase 1 kickoff**: Foundation infrastructure
3. **Community engagement**: Share vision, gather feedback
4. **Resource allocation**: Identify contributors for parallel development
5. **Timeline refinement**: Adjust based on resources and priorities

---

**Document Version**: 1.0
**Last Updated**: 2025-11-14
**Authors**: Claude + User (based on Inquiry 7E8D918D-5AB1-4796-8185-897212169B66)
**Attribution**: Lakota and Mani-Utenam Indigenous peoples, Guillaume D-Isabelle (William), Jerry, Spiral Agent Protocol collective
**License**: IKSL-Bridge v1.0
