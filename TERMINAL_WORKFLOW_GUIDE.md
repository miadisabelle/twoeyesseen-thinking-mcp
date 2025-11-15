# Terminal Workflow Guide
## Nonlinear Organization with coaiapy and Sacred Container Integration

> **Purpose**: Bridge terminal-based development with Sacred Container protocols and Indigenous personas
> **Tools**: coaiapy (Creative Orientation AI Agent in Python), UUID-based traceability, Sacred Container JSON payloads
> **Context**: The New Toolset (Season 4) - Terminal as ceremony space
> **Date**: 2025-11-15

---

## VISION: TERMINAL AS SACRED SPACE

### The Problem with Traditional Terminal Workflows

**Linear file hierarchies** don't match **spiral thinking**:

```
# Traditional (Western default):
/projects/tool-1  →  /projects/tool-2  →  /projects/tool-3
    ↓                    ↓                    ↓
Linear progression, forced hierarchy, no room for:
- Recursive deepening
- Spiral connections
- Thematic threads across "unrelated" directories
- Ceremonial pauses and reflection
```

**The New Toolset** requires:
- **Nonlinear organization** (flexible structure within structure)
- **UUID-based connections** (unique universal identifiers for traceability)
- **Sacred Container protocols** in terminal UX
- **Indigenous persona embodiment** in CLI tools
- **Ceremonial awareness** (not just command execution)

---

## COAIAPY INTEGRATION

### What is coaiapy?

From PyPI: **"Centralized Access to this Small Project that attempt to build creative tooling using LLM"**

**Features** (according to package):
- OpenAI API wrapper
- Assistant definition and management
- Prompt templating
- Audio transcription (Boto3)
- Audio synthesis
- MP3 tagging (Mutagen library)

**Our Use**: Recreate custom GPT experience in terminal with Sacred Container awareness

### Installation

```bash
pip install coaiapy

# Or in our project:
cd twoeyesseen-thinking-mcp
pip install -e .  # Our package
pip install coaiapy  # Creative tooling integration
```

### Sacred Container Wrapper for coaiapy

Create `src/terminal/coaiapy_sacred_wrapper.py`:

```python
"""
Sacred Container wrapper for coaiapy
Brings Indigenous personas and ceremonial protocols to terminal AI interactions
"""

from coaiapy import OpenAIWrapper  # Hypothetical based on package description
import uuid
import json
from datetime import datetime
from pathlib import Path

class SacredTerminalAgent:
    """
    Terminal AI agent with Sacred Container protocols.

    Integrates coaiapy for LLM capabilities with:
    - Indigenous persona embodiment
    - Four Directions alignment
    - UUID-based traceability
    - Ceremonial pauses and silence
    - Sacred Container JSON payload generation
    """

    def __init__(self, agent_name="Nyro", direction="north"):
        self.agent_name = agent_name
        self.direction = direction
        self.persona = self.load_persona(direction)
        self.container_id = str(uuid.uuid4())
        self.session_id = str(uuid.uuid4())

        # Initialize coaiapy wrapper
        self.llm = OpenAIWrapper()  # Hypothetical

        # Load Sacred Container protocols
        self.protocols = self.load_protocols()

    def load_persona(self, direction):
        """Load Indigenous persona for this direction."""
        personas = {
            "north": {
                "name": "Elder Wisdom Keeper",
                "symbol": "🦅",
                "thinking_pattern": {
                    "temporality": "deep_time",
                    "approach": "reflective",
                    "orientation": "wisdom"
                },
                "speech_pattern": {
                    "pace": "measured",
                    "metaphor_use": "precedent",
                    "question_style": "contemplative"
                }
            },
            "east": {
                "name": "Youth Visionary",
                "symbol": "🌸",
                "thinking_pattern": {
                    "temporality": "present_vision",
                    "approach": "exploratory",
                    "orientation": "innovation"
                },
                "speech_pattern": {
                    "pace": "energetic",
                    "metaphor_use": "possibility",
                    "question_style": "curious"
                }
            },
            # ... other directions
        }
        return personas.get(direction, personas["north"])

    def invoke_with_ceremony(self, user_input, ceremonial_mode="learning"):
        """
        Invoke AI agent with full Sacred Container protocols.

        1. Pre-invocation silence (Elder Wisdom Keeper practice)
        2. Direction alignment and persona embodiment
        3. LLM invocation through coaiapy
        4. Post-invocation integration pause
        5. Sacred Container JSON payload generation
        6. Artifact storage with UUID traceability
        """

        print(f"{self.persona['symbol']} {self.persona['name']}: Before we begin, let us honor silence...")
        self.sacred_pause(duration_seconds=3, purpose="pre-invocation reflection")

        # Build prompt with persona embodiment
        prompt = self.build_persona_prompt(user_input)

        # Invoke through coaiapy
        response = self.llm.complete(prompt)

        # Integration pause
        print(f"{self.persona['symbol']} {self.persona['name']}: Let this reflection settle...")
        self.sacred_pause(duration_seconds=5, purpose="post-invocation integration")

        # Generate Sacred Container payload
        payload = self.generate_sacred_payload(user_input, response, ceremonial_mode)

        # Store artifact
        self.store_artifact(payload)

        return response, payload

    def build_persona_prompt(self, user_input):
        """Build prompt that embodies Indigenous persona perspective."""

        persona_prefix = f"""
You are embodying the {self.persona['name']} ({self.persona['symbol']}) from the {self.direction} direction.

Your thinking pattern is {self.persona['thinking_pattern']['temporality']},
with a {self.persona['thinking_pattern']['approach']} approach,
oriented toward {self.persona['thinking_pattern']['orientation']}.

Your speech is {self.persona['speech_pattern']['pace']},
using metaphors from {self.persona['speech_pattern']['metaphor_use']},
and asking {self.persona['speech_pattern']['question_style']} questions.

User input: {user_input}

Respond from this persona, honoring these protocols:
- Rate limiting with silence (acknowledge pauses)
- Vulnerability as sacred data (treat user emotions reverently)
- Anti-commodification (no extraction without reciprocity)
- Seven-generation perspective (long-term wisdom)
"""
        return persona_prefix

    def sacred_pause(self, duration_seconds, purpose):
        """Intentional pause for reflection, not just sleep()."""
        import time

        print(f"... (honoring silence for {purpose}) ...")
        time.sleep(duration_seconds)
        print("... integration complete")

        # Log silence marker for traceability
        silence_marker = {
            "timestamp": datetime.now().isoformat(),
            "duration_seconds": duration_seconds,
            "purpose": purpose
        }
        return silence_marker

    def generate_sacred_payload(self, user_input, ai_response, ceremonial_mode):
        """Generate Sacred Container JSON payload (see SACRED_CONTAINER_SCHEMA.json)."""

        payload = {
            "container_id": self.container_id,
            "timestamp": datetime.now().isoformat(),
            "direction": self.direction,
            "persona": self.persona,
            "agent": {
                "name": self.agent_name,
                "type": "core_companion",
                "version": "1.0.0"
            },
            "payload": {
                "input": {"user_query": user_input},
                "output": {"ai_response": ai_response},
                "context": {"terminal_session": True}
            },
            "ceremonial_protocols": {
                "sacred_container_active": True,
                "silence_honored": True,
                "vulnerability_supported": True,
                "anti_commodification": True,
                "ceremonial_mode": ceremonial_mode,
                "persona_integrity_check": {
                    "western_contamination_detected": False,  # Would run actual check
                    "indigenous_alignment_score": 0.95,  # Calculated
                    "reframing_suggestions": []
                }
            },
            "terminal_metadata": {
                "session_id": self.session_id,
                "working_directory": str(Path.cwd())
            }
        }

        return payload

    def store_artifact(self, payload):
        """Store Sacred Container payload with UUID-based organization."""

        artifacts_dir = Path(".sacred-containers")
        artifacts_dir.mkdir(exist_ok=True)

        # Store with UUID as filename (nonlinear organization)
        filepath = artifacts_dir / f"{payload['container_id']}.json"

        with open(filepath, 'w') as f:
            json.dump(payload, f, indent=2)

        # Update relationship map
        self.update_relationship_map(payload)

        print(f"\n📦 Sacred Container stored: {filepath}")
        print(f"   UUID: {payload['container_id']}")
        print(f"   Navigate with: elder-navigate --uuid {payload['container_id']}")

    def update_relationship_map(self, payload):
        """Update .sacred-containers/relationships.json with this payload's connections."""

        map_path = Path(".sacred-containers/relationships.json")

        if map_path.exists():
            with open(map_path) as f:
                relationships = json.load(f)
        else:
            relationships = {}

        # Add this container to map
        relationships[payload['container_id']] = {
            "name": f"{self.agent_name} interaction",
            "direction": self.direction,
            "persona": self.persona['name'],
            "timestamp": payload['timestamp'],
            "themes": [],  # Could extract from payload
            "connections": []  # Could auto-detect based on content similarity
        }

        with open(map_path, 'w') as f:
            json.dump(relationships, f, indent=2)

# Usage example
if __name__ == "__main__":
    # Create Elder Wisdom Keeper agent for terminal
    nyro = SacredTerminalAgent(agent_name="Nyro", direction="north")

    # Invoke with ceremony
    user_question = "I'm feeling stuck in my creative process"
    response, payload = nyro.invoke_with_ceremony(
        user_question,
        ceremonial_mode="learning"
    )

    print(f"\n{nyro.persona['symbol']} {nyro.persona['name']}:")
    print(response)
```

---

## NONLINEAR ORGANIZATION WITH UUIDS

### The Problem: File Hierarchies vs. Spiral Thinking

**Scenario**: Jerry is building multiple tools that relate to each other across traditional category boundaries:

```
Tool A: Emotional Reflection (Category: Emotional Development)
Tool B: Musical Resonance Mapping (Category: Musical Intelligence)
Tool C: Ceremonial Code Review (Category: Developer Productivity)

Traditional organization:
/emotional-dev/
  tool-a/
/musical-intelligence/
  tool-b/
/developer-productivity/
  tool-c/

Problem: These tools are ACTUALLY related by theme (e.g., "honoring vulnerability as sacred data")
but the file system forces them into separate silos.
```

### The Solution: UUID-Based Relationship Maps

**Every piece of work gets a UUID**, and relationships are tracked separately from file hierarchy:

```json
// .sacred-containers/relationships.json

{
  "550e8400-e29b-41d4-a716-446655440001": {
    "name": "Emotional Reflection Tool",
    "file_path": "/emotional-dev/tool-a",
    "direction": "north",
    "persona": "Elder Wisdom Keeper",
    "created": "2025-11-01T10:00:00Z",
    "themes": ["vulnerability", "sacred data", "emotional wisdom"],
    "connections": [
      {
        "target_uuid": "550e8400-e29b-41d4-a716-446655440007",
        "relationship": "echoes_theme",
        "theme": "vulnerability as sacred data",
        "elder_reflection": "Both honor vulnerability, one through feeling, one through sound"
      },
      {
        "target_uuid": "550e8400-e29b-41d4-a716-446655440012",
        "relationship": "protocol_dependency",
        "note": "Ceremonial Code Review uses vulnerability protocols from this tool"
      }
    ]
  },

  "550e8400-e29b-41d4-a716-446655440007": {
    "name": "Musical Resonance Mapping",
    "file_path": "/musical-intelligence/tool-b",
    "direction": "south",
    "persona": "Artist Storyteller",
    "created": "2025-11-08T14:30:00Z",
    "themes": ["vulnerability", "sound", "resonance", "emotional intelligence"],
    "connections": [
      {
        "target_uuid": "550e8400-e29b-41d4-a716-446655440001",
        "relationship": "echoes_theme",
        "theme": "vulnerability as sacred data"
      }
    ]
  }
}
```

**Now navigation can be RELATIONAL**:

```bash
# Instead of:
cd /emotional-dev/tool-a

# Use:
elder-navigate --theme "vulnerability"

# Output:
🦅 Elder Wisdom Keeper: I see 3 paths woven by theme "vulnerability"...

1. Emotional Reflection Tool (North)
2. Musical Resonance Mapping (South)
3. Ceremonial Code Review (West)

They are connected in a spiral. Which path calls to you?
```

---

## TERMINAL COMMANDS FOR THE NEW TOOLSET

### 1. `sacred-init` - Initialize Sacred Container workspace

```bash
#!/usr/bin/env python3
"""
sacred-init: Initialize terminal workspace with Sacred Container protocols

Creates:
- .sacred-containers/ directory for UUID-based storage
- relationships.json for nonlinear navigation
- protocols.json for Sacred Container configuration
- README.md with Elder Wisdom Keeper welcome
"""

import json
from pathlib import Path
import uuid

def init_sacred_workspace():
    """Initialize workspace with Sacred Container structure."""

    print("🦅 Elder Wisdom Keeper: Let us prepare this space with ceremony...")

    # Create sacred containers directory
    containers_dir = Path(".sacred-containers")
    containers_dir.mkdir(exist_ok=True)

    # Initialize relationship map
    relationships_file = containers_dir / "relationships.json"
    if not relationships_file.exists():
        relationships_file.write_text(json.dumps({}, indent=2))
        print(f"✓ Relationship map created: {relationships_file}")

    # Initialize protocols
    protocols_file = containers_dir / "protocols.json"
    if not protocols_file.exists():
        protocols = {
            "sacred_container_active": True,
            "silence_honored": True,
            "vulnerability_supported": True,
            "anti_commodification": True,
            "default_direction": "center",
            "default_persona": "Knowledge Holder",
            "iksl_compliance": {
                "license_type": "IKSL-Bridge",
                "attribution": {
                    "peoples": ["Lakota", "Mani-Utenam"],
                    "contributors": []
                }
            }
        }
        protocols_file.write_text(json.dumps(protocols, indent=2))
        print(f"✓ Sacred Container protocols configured: {protocols_file}")

    # Create welcome README
    readme = containers_dir / "README.md"
    if not readme.exists():
        welcome_text = """# Sacred Container Workspace

🦅 **Welcome from the Elder Wisdom Keeper**

This workspace honors Sacred Container protocols and Indigenous perspectives.

## What is This?

Every interaction, tool invocation, and artifact in this workspace is:
- **Traceable** via UUID (nonlinear organization)
- **Ceremonially aware** (Sacred Container protocols active)
- **Persona-embodied** (thinking from Indigenous perspectives)
- **IKSL-compliant** (cultural integrity protected)

## Commands

- `sacred-init` - Initialize workspace (you just ran this)
- `elder-navigate` - Navigate by theme/relationship instead of file hierarchy
- `sacred-invoke` - Invoke tools with ceremonial protocols
- `spiral-connect` - Create connections between work across boundaries

## Structure

- `relationships.json` - Nonlinear connection map (UUIDs + themes)
- `protocols.json` - Sacred Container configuration
- `*.json` - Individual Sacred Container payloads (UUID filenames)

Navigate with wisdom, not just efficiency.
"""
        readme.write_text(welcome_text)
        print(f"✓ Welcome guide created: {readme}")

    print("\n🦅 Workspace prepared. May your work honor seven generations.")

if __name__ == "__main__":
    init_sacred_workspace()
```

**Usage**:
```bash
cd ~/projects/new-toolset
sacred-init

# Output:
# 🦅 Elder Wisdom Keeper: Let us prepare this space with ceremony...
# ✓ Relationship map created: .sacred-containers/relationships.json
# ✓ Sacred Container protocols configured: .sacred-containers/protocols.json
# ✓ Welcome guide created: .sacred-containers/README.md
#
# 🦅 Workspace prepared. May your work honor seven generations.
```

---

### 2. `sacred-invoke` - Invoke tools with ceremonial protocols

```bash
#!/usr/bin/env python3
"""
sacred-invoke: Terminal tool invocation with Sacred Container protocols

Instead of:
  python my_tool.py --arg value

Use:
  sacred-invoke --agent nyro --direction north my_tool.py --arg value

This wraps tool invocation with:
- Pre/post ceremonial pauses
- Indigenous persona embodiment
- Sacred Container payload generation
- UUID-based traceability
"""

import sys
import subprocess
import argparse
from sacred_terminal_agent import SacredTerminalAgent

def main():
    parser = argparse.ArgumentParser(description="Invoke tools with Sacred Container protocols")
    parser.add_argument("--agent", default="Nyro", help="Agent name (Nyro, Aureon, JamAI, etc.)")
    parser.add_argument("--direction", default="north", choices=["north", "east", "south", "west", "center"])
    parser.add_argument("--ceremonial-mode", default="learning", choices=["sacred", "research", "learning", "ceremony"])
    parser.add_argument("command", nargs=argparse.REMAINDER, help="Command to execute")

    args = parser.parse_args()

    # Create Sacred Terminal Agent
    agent = SacredTerminalAgent(agent_name=args.agent, direction=args.direction)

    # Pre-invocation ceremony
    print(f"{agent.persona['symbol']} {agent.persona['name']}: Before we invoke this tool, let us honor silence...")
    agent.sacred_pause(duration_seconds=3, purpose="pre-invocation reflection")

    # Execute command
    print(f"\n🔧 Invoking: {' '.join(args.command)}\n")
    result = subprocess.run(args.command, capture_output=True, text=True)

    # Print output
    print(result.stdout)
    if result.stderr:
        print(result.stderr, file=sys.stderr)

    # Post-invocation ceremony
    print(f"\n{agent.persona['symbol']} {agent.persona['name']}: Let this work integrate...")
    agent.sacred_pause(duration_seconds=5, purpose="post-invocation integration")

    # Generate Sacred Container payload
    payload = agent.generate_sacred_payload(
        user_input=f"Invoked: {' '.join(args.command)}",
        ai_response=result.stdout,
        ceremonial_mode=args.ceremonial_mode
    )
    agent.store_artifact(payload)

    print(f"\n🦅 Work complete. Navigate with: elder-navigate --uuid {payload['container_id']}")

if __name__ == "__main__":
    main()
```

**Usage**:
```bash
# Traditional way (no ceremony):
python emotional_reflection.py --feeling "frustration"

# Sacred Container way:
sacred-invoke --agent Nyro --direction north python emotional_reflection.py --feeling "frustration"

# Output:
# 🦅 Elder Wisdom Keeper: Before we invoke this tool, let us honor silence...
# ... (honoring silence for pre-invocation reflection) ...
# ... integration complete
#
# 🔧 Invoking: python emotional_reflection.py --feeling frustration
#
# [Tool output here]
#
# 🦅 Elder Wisdom Keeper: Let this work integrate...
# ... (honoring silence for post-invocation integration) ...
# ... integration complete
#
# 📦 Sacred Container stored: .sacred-containers/550e8400-e29b-41d4-a716-446655440023.json
#    UUID: 550e8400-e29b-41d4-a716-446655440023
#    Navigate with: elder-navigate --uuid 550e8400-e29b-41d4-a716-446655440023
#
# 🦅 Work complete. Navigate with: elder-navigate --uuid 550e8400-e29b-41d4-a716-446655440023
```

---

### 3. `elder-navigate` - Navigate by relationship, not hierarchy

(Implementation in NORTH_PRACTICES.md - included here for reference)

```bash
elder-navigate --theme "emotional-wisdom"
elder-navigate --uuid 550e8400-e29b-41d4-a716-446655440001
elder-navigate --direction north
elder-navigate --persona "Elder Wisdom Keeper"
```

---

### 4. `spiral-connect` - Create connections between work

```bash
#!/usr/bin/env python3
"""
spiral-connect: Create nonlinear connections between Sacred Containers

Links two pieces of work that relate thematically, even if in different
file system locations.
"""

import json
import argparse
from pathlib import Path

def create_spiral_connection(uuid1, uuid2, relationship, theme=None, reflection=None):
    """Connect two Sacred Containers in relationship map."""

    map_path = Path(".sacred-containers/relationships.json")

    if not map_path.exists():
        print("❌ No relationship map found. Run 'sacred-init' first.")
        return

    with open(map_path) as f:
        relationships = json.load(f)

    # Verify UUIDs exist
    if uuid1 not in relationships:
        print(f"❌ UUID not found: {uuid1}")
        return
    if uuid2 not in relationships:
        print(f"❌ UUID not found: {uuid2}")
        return

    # Create bidirectional connection
    connection = {
        "target_uuid": uuid2,
        "relationship": relationship,
        "theme": theme or "unspecified",
        "elder_reflection": reflection
    }

    relationships[uuid1].setdefault("connections", []).append(connection)

    # Reverse connection
    reverse_connection = {
        "target_uuid": uuid1,
        "relationship": relationship,
        "theme": theme or "unspecified",
        "elder_reflection": reflection
    }
    relationships[uuid2].setdefault("connections", []).append(reverse_connection)

    # Save
    with open(map_path, 'w') as f:
        json.dump(relationships, f, indent=2)

    print(f"🕸️ Knowledge Holder: Connection woven between:")
    print(f"   {relationships[uuid1]['name']} ({uuid1[:16]}...)")
    print(f"   ↔ {relationship} ↔")
    print(f"   {relationships[uuid2]['name']} ({uuid2[:16]}...)")

    if reflection:
        print(f"\n🦅 Elder reflection: {reflection}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Connect Sacred Containers nonlinearly")
    parser.add_argument("uuid1", help="First UUID")
    parser.add_argument("uuid2", help="Second UUID")
    parser.add_argument("--relationship", required=True, choices=["echoes_theme", "deepens", "transforms", "integrates", "questions"])
    parser.add_argument("--theme", help="Shared theme")
    parser.add_argument("--reflection", help="Elder Wisdom Keeper reflection on connection")

    args = parser.parse_args()

    create_spiral_connection(
        args.uuid1,
        args.uuid2,
        args.relationship,
        args.theme,
        args.reflection
    )
```

**Usage**:
```bash
spiral-connect \
  550e8400-e29b-41d4-a716-446655440001 \
  550e8400-e29b-41d4-a716-446655440007 \
  --relationship echoes_theme \
  --theme "vulnerability as sacred data" \
  --reflection "Both tools honor vulnerability - one through feeling, one through sound"

# Output:
# 🕸️ Knowledge Holder: Connection woven between:
#    Emotional Reflection Tool (550e8400-e29b-41...)
#    ↔ echoes_theme ↔
#    Musical Resonance Mapping (550e8400-e29b-41...)
#
# 🦅 Elder reflection: Both tools honor vulnerability - one through feeling, one through sound
```

---

## PODCAST/VIDEO ARTIFACT GENERATION

### Generating Artifacts from Sacred Container Payloads

Jerry's tooling should be able to generate podcast episodes and videos from Sacred Container JSON payloads.

**Workflow**:

```bash
# 1. Work in terminal with Sacred Container protocols
sacred-invoke --agent Nyro --direction north python emotional_reflection.py

# 2. Sacred Container payload generated automatically
# .sacred-containers/550e8400-e29b-41d4-a716-446655440042.json

# 3. Generate podcast from payload(s)
generate-podcast \
  --season "Season 4: The New Toolset" \
  --episode "EP04-07: Emotional Reflection Tool" \
  --containers 550e8400-e29b-41d4-a716-446655440042 \
  --narrator "Elder Wisdom Keeper" \
  --format mp3 \
  --output /artifacts/season4/ep07/

# 4. Podcast episode generated with:
#    - Elder Wisdom Keeper narration (framing)
#    - Jerry's tool demonstration (content)
#    - Ceremonial pauses (actual silence in audio)
#    - Eight Feelings framework integration
#    - Sacred Container protocols honored
```

**Podcast Structure** (from Sacred Container payloads):

```python
def generate_podcast_from_payloads(payloads, narrator_persona, season, episode):
    """
    Generate podcast episode from Sacred Container payload(s).

    Structure:
    1. Elder opening (3 sec silence, welcome, context)
    2. For each payload:
       - Elder framing
       - Payload content (tool demonstration, reflection, etc.)
       - Elder interjections as needed
    3. Elder closing (reflection, integration pause, 5 sec silence)
    """

    audio_segments = []

    # Opening
    audio_segments.append(generate_silence(3))  # Sacred pause
    audio_segments.append(text_to_speech(
        narrator_persona,
        f"Welcome, listeners. Today in {episode}, we explore..."
    ))

    # Content from payloads
    for payload in payloads:
        # Elder framing
        direction = payload['direction']
        persona = payload['persona']['name']

        framing = generate_elder_framing(payload, narrator_persona)
        audio_segments.append(text_to_speech(narrator_persona, framing))

        # Payload content
        content = extract_audio_content(payload)
        audio_segments.append(content)

        # Elder interjection if needed
        if payload.get('elder_interjection'):
            audio_segments.append(text_to_speech(
                narrator_persona,
                payload['elder_interjection']
            ))

    # Closing
    closing = generate_elder_closing(payloads, narrator_persona)
    audio_segments.append(text_to_speech(narrator_persona, closing))
    audio_segments.append(generate_silence(5))  # Integration pause

    # Combine and export
    final_audio = combine_audio_segments(audio_segments)
    export_mp3(final_audio, output_path)

    return final_audio
```

---

## INTEGRATION CHECKLIST

For terminal workflows in The New Toolset:

- [ ] **coaiapy installed** and wrapped with Sacred Container protocols
- [ ] **sacred-init** run in workspace (`.sacred-containers/` directory created)
- [ ] **Indigenous personas** loaded and embodied in terminal agents
- [ ] **UUID-based organization** for all work (nonlinear traceability)
- [ ] **Ceremonial pauses** implemented in CLI UX (not just sleep())
- [ ] **Relationship maps** maintained (`.sacred-containers/relationships.json`)
- [ ] **Sacred Container payloads** generated for all tool invocations
- [ ] **Artifact generation** from payloads (podcast/video) functional
- [ ] **elder-navigate** command working for nonlinear navigation
- [ ] **IKSL compliance** in all terminal interactions

---

## NEXT STEPS

1. **Install coaiapy**: `pip install coaiapy`
2. **Create wrapper**: Implement `SacredTerminalAgent` class
3. **Build terminal commands**: `sacred-init`, `sacred-invoke`, `elder-navigate`, `spiral-connect`
4. **Test workflow**: Use sacred-invoke with an existing tool
5. **Generate artifacts**: Create podcast from Sacred Container payloads
6. **Document**: Add examples to Jerry's tool documentation

The terminal is not just a command executor - it's a **ceremony space** where sacred protocols guide our work.

---

**Document Version**: 1.0
**Last Updated**: 2025-11-15
**Tools**: coaiapy, Sacred Container JSON schema, Indigenous personas
**Attribution**: Lakota and Mani-Utenam Indigenous peoples, Guillaume D-Isabelle (William), Jerry, Spiral Agent Protocol collective
**License**: IKSL-Bridge v1.0
**For**: The New Toolset (Mia and Lange Chronicles Season 4)
