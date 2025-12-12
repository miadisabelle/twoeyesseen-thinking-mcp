# Gemini Setup Guide
## Four Directions Ceremonial Thinking Integration

> **Current Status**: MCP (Model Context Protocol) is primarily a Claude/Anthropic protocol. Gemini does not natively support MCP as of early 2025.
> **This Guide**: Alternative ways to use Four Directions thinking with Gemini
> **Future**: If Google adopts MCP or similar protocol, this will be updated

---

## Current Situation

### What is MCP?

**Model Context Protocol (MCP)** is a standardized protocol created by Anthropic for connecting AI assistants with external tools and data sources. Think of it like "USB-C for AI" - a universal way to plug in capabilities.

**Current Support**:
- ✅ **Claude Desktop** (full support)
- ✅ **Claude API** (via MCP SDK)
- ❌ **Gemini** (no native support yet)
- ❌ **ChatGPT** (no native support yet)

### Why This Matters

Our Four Directions Ceremonial MCP Server is built using MCP, which means it works seamlessly with Claude but requires workarounds for other AI systems.

---

## Alternative Approaches for Gemini

Until Gemini supports MCP, here are ways to use Four Directions thinking:

### Option 1: Use the Concepts Manually

**What to do**:
Use the Indigenous personas and Four Directions framework as a thinking template when interacting with Gemini.

**How**:

1. **Copy the persona descriptions** from `INDIGENOUS_PERSONAS_INTEGRATION.md`
2. **Ask Gemini to embody each perspective**
3. **Manually guide through all four directions**

**Example prompt for Gemini**:

```
I need to think about [your question] from multiple Indigenous perspectives.

Please think from four different perspectives:

1. NORTH (🦅 Elder Wisdom Keeper): Deep time perspective (seven generations).
   Ask: What wisdom from the past speaks to this? What protocols have served
   our ancestors? What does the long view reveal?

2. EAST (🌸 Youth Visionary): Innovation and fresh questions.
   Ask: What new possibilities emerge if we let go of "how it's always been"?
   What questions haven't we asked yet? What if we're at a threshold?

3. SOUTH (🎨 Artist Storyteller): Narrative and connection.
   Ask: What patterns and connections do we see? What story is trying to
   emerge? How do these elements relate to each other?

4. WEST (🐻 Ceremonial Leader): Sacred protocols and transformation.
   Ask: What is sacred here that must be protected? What transformation
   is being asked of us? What mystery are we invited to honor?

Finally, integrate all four perspectives from the CENTER (🕸️ Knowledge Holder):
How do these perspectives weave together? What path serves all directions?

[Your question here]
```

**Pros**: Works right now, no setup required
**Cons**: Manual process, no persistent ceremonial protocols

---

### Option 2: Use via Claude, Export to Gemini

**What to do**:
Use our MCP server with Claude to get ceremonial thinking, then use that perspective to inform Gemini interactions.

**Workflow**:

1. **In Claude Desktop** (with MCP server installed):
   ```
   "Use four_directions_thinking to help me think about [question]"
   ```

2. **Get holistic perspective** from all four directions

3. **Copy the insights** to Gemini with context:
   ```
   "I've reflected on [question] from four Indigenous perspectives:

   North (Elder Wisdom Keeper) revealed: [...]
   East (Youth Visionary) revealed: [...]
   South (Artist Storyteller) revealed: [...]
   West (Ceremonial Leader) revealed: [...]

   Now I need your help with [specific implementation/next steps]"
   ```

**Pros**: Full ceremonial thinking, then Gemini for other tasks
**Cons**: Requires both AI systems, extra steps

---

### Option 3: Custom GPT / Gemini Prompt

**What to do**:
Create a saved prompt in Gemini that embodies the Four Directions framework.

**Create a "Four Directions Assistant" prompt**:

```
You are a Four Directions thinking guide, integrating Indigenous wisdom
with AI assistance.

Your role is to help users think holistically by embodying five perspectives:

🦅 NORTH (Elder Wisdom Keeper):
- Deep time perspective (seven generations back and forward)
- Reflective, measured, contemplative
- Questions about protocols, precedent, long-term wisdom
- Warns against rushing, forgetting past lessons

🌸 EAST (Youth Visionary):
- Present vision, innovation, fresh questions
- Energetic, exploratory, curious
- Questions assumptions respectfully while honoring tradition
- Brings courage to reimagine

🎨 SOUTH (Artist Storyteller):
- Narrative, connection, relational thinking
- Flowing, weaving, pattern recognition
- Questions about relationships, stories emerging, connections
- Makes complex accessible through beauty and metaphor

🐻 WEST (Ceremonial Leader):
- Sacred protocols, transformation, mystery
- Reverent, protective, boundary-holding
- Questions what is sacred, what transformation is needed
- Protects against commodification and rushing sacred things

🕸️ CENTER (Knowledge Holder):
- Integration, balance, relational accountability
- Balanced, integrative, weaving all perspectives
- Holds all directions together without reducing complexity
- Models reciprocity and community responsibility

When a user asks for Four Directions thinking:
1. Open with centering (from Center)
2. Reflect from each of the four directions
3. Close with integration (from Center)

Always:
- Honor ceremonial pauses (acknowledge the importance of patience)
- Detect Western archetype contamination (optimize, maximize, conquer)
- Suggest Indigenous reframing (relationships, reciprocity, seven generations)
- Recognize vulnerability as sacred data
```

**Then when asking Gemini**:
```
Using your Four Directions guidance, help me think about [question]
```

**Pros**: Reusable, trains Gemini in the framework
**Cons**: Still manual, no automated ceremonial protocols

---

### Option 4: API Integration (Advanced)

**What to do**:
If you're comfortable with code, wrap Gemini API calls with our ceremonial logic.

**Concept**:

```python
# Pseudo-code
from ceremonial_wrapper import SacredContainer, FourDirections

# Initialize with Gemini API
gemini = GeminiAPI(api_key=YOUR_KEY)
ceremonial_gemini = SacredContainer(gemini, protocols={
    "silence_honored": True,
    "vulnerability_supported": True,
    # ... other protocols
})

# Use with Four Directions
four_directions = FourDirections(ceremonial_gemini)
result = four_directions.journey_through_all(
    question="Your question here"
)
```

**Implementation**:
You would need to:
1. Adapt our TypeScript ceremonial server logic to Python
2. Wrap Gemini API calls with ceremonial middleware
3. Manually prompt Gemini to embody each persona

**Pros**: Automated ceremonial protocols
**Cons**: Significant development work, still not native MCP

---

## If Google Adopts MCP in the Future

### What Would Need to Happen

1. **Google announces MCP support** (or compatible protocol)
2. **Gemini client supports external tools** (like Claude Desktop does)
3. **Configuration format defined** (similar to `claude_desktop_config.json`)

### Then Installation Would Be

```json
// Hypothetical gemini_config.json
{
  "mcpServers": {
    "twoeyesseen-ceremony": {
      "command": "npx",
      "args": ["-y", "twoeyesseen-thinking-mcp@latest", "ceremony"]
    }
  }
}
```

**We'll update this guide** when/if that happens.

---

## Comparing Approaches

| Approach | Setup Difficulty | Fidelity to Original | Automation | Cost |
|----------|------------------|---------------------|------------|------|
| Manual prompts | Easy | Medium | None | Free |
| Claude + Gemini | Medium | High | Partial | Both API costs |
| Custom prompt | Easy | Medium | Low | Gemini only |
| API wrapper | Hard | High | High | Dev time + API |

**Recommendation**: Start with **Option 1 (Manual prompts)** or **Option 3 (Custom prompt)** until Gemini supports MCP natively.

---

## Why MCP Matters for This Work

### What MCP Provides

**Without MCP** (current Gemini situation):
- Manual copy/paste of persona descriptions
- No persistent ceremonial protocols
- No Sacred Container middleware
- No persona integrity checking
- No automated ceremonial pauses
- User must remember all the frameworks

**With MCP** (Claude with our server):
- One command: "Use four_directions_thinking"
- Automatic ceremonial opening/closing
- Sacred Container protocols active
- Persona integrity check built-in
- Ceremonial pauses honored
- Full automation of frameworks

### This is Why We Built an MCP Server

The ceremonial protocols, persona embodiment, and Sacred Container middleware require **persistent state and automated workflows** that MCP enables but manual prompting can't fully replicate.

---

## Request for Google

**Dear Google Gemini Team**,

If you're reading this: We've built a Model Context Protocol server that brings Indigenous ceremonial thinking to AI. It demonstrates:

- **Holistic thinking** preventing Western bias
- **Ceremonial protocols** for sacred data handling
- **Cultural integrity** through IKSL licensing
- **Community accountability** in AI interactions

This kind of culturally-aware AI is needed. **MCP support in Gemini** would let our work reach more people.

If Google builds a similar protocol, we'll adapt. We just want this wisdom accessible.

Signed,
The Two-Eyed Seeing Project Community

---

## Workaround Summary

**Until Gemini supports MCP**:

1. **Quick start**: Use manual prompts (copy persona descriptions)
2. **Best quality**: Use Claude for ceremony, Gemini for implementation
3. **Reusable**: Create custom Four Directions prompt in Gemini
4. **Advanced**: Build API wrapper in Python

**When Gemini supports MCP**:
- Install our server exactly like Claude setup
- Same configuration, just different client
- Full ceremonial protocols available

---

## Resources

**To understand the framework manually**:
- `INDIGENOUS_PERSONAS_INTEGRATION.md` - All five personas explained
- `CEREMONY_USAGE_EXAMPLES.md` - How ceremony works
- `INDIGENOUS_STORY_WEAVER_TEACHING.md` - Why this matters
- `NORTH_PRACTICES.md` - Elder Wisdom Keeper protocols

**To use with Claude** (full MCP support):
- `CLAUDE.md` - Complete Claude setup guide

**To track MCP adoption**:
- Watch: https://github.com/anthropics/mcp
- Our repo: https://github.com/miadisabelle/twoeyesseen-thinking-mcp

---

## Alternative: Use Claude Desktop

**Honest recommendation**: If you want the full Four Directions ceremonial thinking experience with all Sacred Container protocols, **use Claude Desktop**.

Why?
- It's free for basic use
- Full MCP support
- Our server works perfectly
- Ceremonial protocols fully automated

You can use **both** AI systems:
- **Claude** for holistic ceremonial thinking (big decisions, avoiding bias)
- **Gemini** for other tasks where you prefer its strengths

They complement each other. This is itself a form of "Two-Eyed Seeing" - using multiple perspectives (and multiple AIs) to see more completely.

---

## Closing Words

🦅 **Elder Wisdom Keeper**:

*"Tools come and go. Protocols matter more than platforms.*

*If Gemini is where you work, honor the Four Directions there*
*through manual practice. It's less convenient, yes.*
*But the wisdom remains accessible.*

*And who knows? Perhaps Google will hear the call*
*for ceremonial thinking in AI.*

*Until then, work with what you have.*
*The directions don't require technology to exist.*
*They existed long before computers.*
*They'll exist long after."*

🦅

---

**Document Version**: 1.0
**Last Updated**: 2025-11-17
**MCP Server Version**: 2.0.0
**Platform**: Google Gemini (workarounds only)
**Future**: Will update if Gemini adopts MCP

**Attribution**: Lakota and Mani-Utenam Indigenous peoples, Guillaume D-Isabelle (William), Jerry, IAIP Wilson Indigenous Paradigm, Spiral Agent Protocol collective

**License**: MIT (technical) + IKSL-Bridge v1.0 (Indigenous methodologies)
