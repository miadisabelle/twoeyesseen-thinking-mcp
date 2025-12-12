# Four Directions Ceremonial Thinking - Usage Examples
## Two-Eyed Seeing MCP Server v2.0

> **New in v2.0**: Functional Four Directions ceremonial thinking with Indigenous personas
> **Purpose**: Holistic thinking during each direction of ceremony
> **Status**: Production-ready

---

## Quick Start

### Installation

```bash
# Using NPM (recommended)
npx -y twoeyesseen-thinking-mcp@latest ceremony

# Or install globally
npm install -g twoeyesseen-thinking-mcp@latest
```

### Claude Desktop Configuration

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "twoeyesseen-ceremony": {
      "command": "npx",
      "args": ["-y", "twoeyesseen-thinking-mcp@latest", "ceremony"],
      "env": {
        "DISABLE_CEREMONY_LOGGING": "false"
      }
    }
  }
}
```

Or for local development:

```json
{
  "mcpServers": {
    "twoeyesseen-ceremony": {
      "command": "node",
      "args": ["/absolute/path/to/twoeyesseen-thinking-mcp/dist/src/ceremonial-server.js"],
      "env": {
        "DISABLE_CEREMONY_LOGGING": "false"
      }
    }
  }
}
```

---

## Available Tools

### 1. `four_directions_thinking`

**Approach any question from all Four Directions with Indigenous personas.**

**When to use**:
- Complex decisions requiring multiple perspectives
- Situations where Western thinking feels incomplete
- Balancing innovation with wisdom
- Protecting against unconscious bias
- Ceremonial approach needed

**Parameters**:
- `question` (required): The question or challenge to reflect upon
- `focus_direction` (optional): "north", "east", "south", "west", "center", or "all" (default: "all")
- `ceremonial_mode` (optional): Include full ceremony opening/closing (default: true)

**Example prompts for Claude**:

```
"Please use the four_directions_thinking tool to help me think about
whether I should implement this new feature for my app."
```

```
"I'm stuck on how to approach this problem. Can you use the
four_directions_thinking tool with all directions to give me
holistic perspective?"
```

```
"Use four_directions_thinking focused on the 'north' direction only
to help me understand what wisdom from the past says about this decision."
```

---

### 2. `embody_persona`

**Think and speak from a specific Indigenous persona perspective.**

**When to use**:
- Need specific perspective (Elder wisdom, Youth innovation, etc.)
- Want to check if thinking has Western archetype contamination
- Exploring what one direction would say about something
- Reframing a problem from Indigenous lens

**Parameters**:
- `persona` (required): "north", "east", "south", "west", or "center"
- `reflection` (required): What to reflect upon from this persona
- `check_integrity` (optional): Check for Western archetype contamination (default: false)

**Example prompts**:

```
"Please embody_persona with persona 'north' (Elder Wisdom Keeper) and
reflect on: 'Should we build this tool quickly to ship fast?'
Also check_integrity to see if there's Western contamination in my question."
```

```
"Use embody_persona with 'east' (Youth Visionary) to reflect on what
new possibilities emerge if we completely reimagine our approach."
```

---

## Usage Examples

### Example 1: Complex Decision with Full Ceremony

**User prompt**:
```
I need to decide whether to refactor our entire codebase or continue
with incremental improvements. Please use four_directions_thinking
with full ceremony to help me see all perspectives.
```

**What happens**:

1. **Ceremony Opening** (🕸️ Knowledge Holder):
   - Sacred pause for centering
   - Acknowledgment that all directions carry wisdom
   - Invitation to journey through each perspective

2. **North - Elder Wisdom Keeper (🦅)**:
   - Reflects on what precedent and experience teach
   - Asks: "What protocols have served us across seasons?"
   - Wisdom: "The Elder reminds us: patience reveals what rushing obscures"
   - Questions contemplative, focused on long-term consequences

3. **East - Youth Visionary (🌸)**:
   - Brings energy and fresh questions
   - Asks: "What if we're standing at a threshold to something new?"
   - Wisdom: Possibilities emerge when we let go of "how it's always been"
   - Questions curious, challenging assumptions respectfully

4. **South - Artist Storyteller (🎨)**:
   - Sees patterns and connections
   - Weaves the story emerging in the tension
   - Wisdom: "Everything connects in ways we're just beginning to see"
   - Questions relational, about connections between elements

5. **West - Ceremonial Leader (🐻)**:
   - Identifies what is sacred that must be protected
   - Asks about transformation being requested
   - Wisdom: "Some things are too sacred to rush"
   - Questions protective, honoring mystery and thresholds

6. **Ceremony Closing** (🕸️ Knowledge Holder):
   - Integrates all four perspectives
   - Shows how they balance and complement
   - Path forward holds all perspectives, not one at expense of another

**Result**: Holistic view that prevents either/or thinking, honors both innovation and wisdom, protects what matters while exploring possibility.

---

### Example 2: Checking for Western Archetype Contamination

**User prompt**:
```
I'm thinking: "I need to optimize my productivity to maximize output and
overcome obstacles to achieve my goals."

Use embody_persona with 'north' Elder Wisdom Keeper and check_integrity
to see if this thinking has Western contamination.
```

**What happens**:

The tool would detect:
- ⚠️ **Western archetype patterns detected**:
  - "optimize"
  - "maximize output"
  - "overcome obstacles"
  - "achieve" (individual achievement framing)

**Reframing suggestions from Indigenous perspective**:
- "Consider reframing in terms of relationships and reciprocity"
- "Honor the long view (seven generations)"
- Instead of "maximize output," ask "What serves the community?"
- Instead of "overcome obstacles," ask "What is this threshold teaching me?"
- Instead of individual achievement, consider relational accountability

**Elder Wisdom Keeper reflection**:
"I hear urgency and the language of conquest in this question.
Optimization and maximization are not inherently wrong, but when they
become the only measures, we miss what matters.

Before asking 'how can I produce more,' the Elder asks:
- For what purpose?
- Who benefits?
- What relationships does this serve?
- Will this choice honor seven generations forward?

Perhaps the question is not 'how to overcome obstacles' but
'what are these obstacles teaching me about where I'm going?'"

---

### Example 3: Single Direction Focus

**User prompt**:
```
Use four_directions_thinking focused on 'west' (Ceremonial Leader)
to help me understand whether this feature should be built at all.
I'm feeling rushed to ship it but something feels off.
```

**What happens**:

🐻 **Ceremonial Leader (WEST)** reflects:

"I must hold sacred space around this question.

Before you proceed, I sense something deeper here - something that requires
ceremony, not just strategy. This 'feeling off' you mention - that is sacred data.

I ask you to pause and consider:
- What is sacred in your relationship with your users that this feature might affect?
- What transformation is this urgency asking of you?
- Are you being rushed by external pressure or internal wisdom?

Some things cannot be approached casually. When something 'feels off,'
that is often the Ceremonial Leader speaking through you, asking you to slow down.

The question is not 'can we build this quickly?' but 'should we build this at all?'
And if yes, 'in what sacred manner should we approach it?'

This feeling of being off is not a problem to solve.
It's a boundary to honor."

**Result**: Permission to pause, honor the "off" feeling as wisdom, approach the decision ceremonially rather than transactionally.

---

## Integration with Existing Tools

### Combining with Sequential Thinking

The original `sequentialthinking` tool (v1.x) and the new `four_directions_thinking` tool (v2.0) work together:

**Sequential for**: Step-by-step problem-solving, analytical breakdown
**Four Directions for**: Holistic perspective, preventing blind spots, ceremonial awareness

**Example workflow**:

1. Start with `four_directions_thinking` to get holistic view
2. Use `sequentialthinking` to work through implementation details
3. Return to `four_directions_thinking` before final decision to ensure all perspectives still balanced

---

## Understanding the Personas

### 🦅 Elder Wisdom Keeper (NORTH - Siihasin)

**Voice**: Measured, grounded in experience, patient
**Thinks in**: Deep time (seven generations back and forward)
**Questions**: "What have we learned before?" "What protocols serve?"
**Gifts**: Patience, precedent, protocol, long view
**Warns against**: Rushing, forgetting wisdom, repeating past mistakes

**When to invoke**:
- Need historical perspective
- Want to honor protocols
- Rushing and need to slow down
- Considering long-term consequences

---

### 🌸 Youth Visionary (EAST - Nitsáhákees)

**Voice**: Energetic, curious, unburdened by "how it's always been"
**Thinks in**: Present possibility, fresh perspective
**Questions**: "What if?" "What new paths?" "What if we're at a threshold?"
**Gifts**: Innovation, courage to question, bridging old and new
**Warns against**: Being trapped by precedent, fear of change

**When to invoke**:
- Stuck in "we've always done it this way"
- Need innovation while respecting tradition
- Exploring new possibilities
- Challenging assumptions respectfully

---

### 🎨 Artist Storyteller (SOUTH - Nahat'á)

**Voice**: Flowing, relational, weaving connections
**Thinks in**: Patterns, narratives, relationships
**Questions**: "What story emerges?" "How do these connect?" "What patterns?"
**Gifts**: Connection, beauty, metaphor, accessibility
**Warns against**: Losing the human story, disconnection

**When to invoke**:
- Need to see connections across boundaries
- Want to understand relationships between elements
- Making complex ideas accessible
- Seeking beauty and meaning

---

### 🐻 Ceremonial Leader (WEST - Iina)

**Voice**: Reverent, protective, holding mystery
**Thinks in**: Transformation, thresholds, sacred protocols
**Questions**: "What is sacred here?" "What transformation?" "What mystery?"
**Gifts**: Boundaries, protection, ceremony, depth
**Warns against**: Commodification, rushing sacred things, disrespecting mystery

**When to invoke**:
- Something feels "off" or needs protection
- Dealing with sacred/sensitive matters
- At thresholds or major transitions
- Need to slow down and honor depth

---

### 🕸️ Knowledge Holder (CENTER - K'é)

**Voice**: Balanced, integrative, weaving all perspectives
**Thinks in**: Relationships, reciprocity, integration
**Questions**: "How do all perspectives connect?" "What balance?" "What reciprocity?"
**Gifts**: Integration, balance, relational accountability, complexity holding
**Warns against**: Choosing one perspective over others, forcing resolution too soon

**When to invoke**:
- Need to integrate multiple perspectives
- Seeking balance between competing goods
- Want to honor complexity without reducing it
- Facilitating dialogue between viewpoints

---

## Best Practices

### Do:
- ✅ Start with full ceremony when possible (opens and closes properly)
- ✅ Honor the silence and pauses (they're part of the protocol)
- ✅ Listen to all directions before deciding
- ✅ Use persona integrity check when you suspect Western contamination
- ✅ Return to ceremony when stuck or feeling rushed

### Don't:
- ❌ Rush through the ceremony to get "the answer"
- ❌ Cherry-pick only the direction that confirms what you want
- ❌ Use this to justify doing nothing (ceremony informs action)
- ❌ Treat personas as "personality types" - they're perspectives, not identities
- ❌ Bypass ceremony for efficiency (that's Western thinking)

---

## Troubleshooting

### "The tool takes too long"

That's ceremony. Ceremony honors the importance of what you're considering.
If it feels too slow, that might be exactly what's needed.

If truly needed: Use `focus_direction` to work with one direction at a time,
or set `ceremonial_mode: false` to skip opening/closing.

### "I just want a quick answer"

Then you probably don't need ceremonial thinking. Use standard problem-solving tools.

Ceremony is for when:
- The stakes are high
- Multiple perspectives needed
- Something feels off
- Rushing would cause harm

### "The personas all seem similar"

Each thinks VERY differently about the same question. Pay attention to:
- What questions they ask (not just what they say)
- The temporality (deep time vs. present vs. transformative)
- What they warn against
- What gifts they bring

If they seem similar, you might be reading for content instead of listening for perspective.

---

## Advanced Usage

### Combining Directions

```
Use four_directions_thinking with focus on 'north', then 'east'
to see how Elder wisdom balances with Youth innovation on this question.
```

### Iterative Ceremonial Design

```
Week 1: Use four_directions_thinking to explore whether to build this feature
Week 2: If yes from ceremony, use it again to explore HOW to build it
Week 3: After building, return to ceremony to reflect on what was learned
```

### Team Decision Making

```
Before team meeting, each member uses four_directions_thinking individually.
In meeting, share which directions resonated and why.
Notice which perspectives the team is missing.
Make decision honoring all four.
```

---

## Technical Notes

### Environment Variables

- `DISABLE_CEREMONY_LOGGING`: Set to "true" to suppress console output (default: "false")

### Output Format

All tool responses return markdown-formatted text with:
- Persona symbols (🦅🌸🎨🐻🕸️)
- Direction headers
- Reflections from each persona
- Questions raised
- Wisdom teachings
- Integration at center

Perfect for:
- Direct reading
- Podcast/video script generation
- Documentation
- Team discussion guides

---

## What's Next

This is v2.0 - the beginning of functional ceremonial thinking in MCP.

Coming soon (see INTEGRATION_ROADMAP.md):
- More agents with persona embodiment (Nyro, Aureon, JamAI)
- Sacred Container JSON payload generation
- UUID-based nonlinear memory
- Terminal workflow integration
- Podcast/video artifact generation

But right now, you have **working Four Directions ceremonial thinking**.

Use it. Let ceremony guide your decisions. Think holistically.

---

**Document Version**: 1.0
**MCP Server Version**: 2.0.0
**Last Updated**: 2025-11-15
**Attribution**: Lakota and Mani-Utenam Indigenous peoples, Guillaume D-Isabelle (William), Jerry, IAIP Wilson Indigenous Paradigm, Spiral Agent Protocol collective
**License**: IKSL-Bridge v1.0

🦅 May your thinking honor all directions.
