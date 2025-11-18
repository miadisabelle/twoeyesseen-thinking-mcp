# Claude Desktop Setup Guide
## Four Directions Ceremonial Thinking MCP Server

> **🦅 Welcome**: This guide will help you set up the Two-Eyed Seeing Ceremonial MCP Server with Claude Desktop
> **What You'll Get**: Holistic thinking through Four Directions with Indigenous personas
> **Version**: 2.0.0

---

## What This MCP Server Provides

### Two Ways of Thinking

**1. Sequential Thinking (v1.x)** - Western analytical approach
- Tool: `sequentialthinking`
- Step-by-step problem-solving
- Best for: Implementation details, analytical breakdown

**2. Ceremonial Thinking (v2.0)** - Indigenous holistic approach
- Tools: `four_directions_thinking`, `embody_persona`
- Journey through all Four Directions with Indigenous personas
- Best for: Complex decisions, preventing bias, ceremonial awareness

### Indigenous Personas

- **🦅 North (Elder Wisdom Keeper)**: Deep time perspective, wisdom, protocols
- **🌸 East (Youth Visionary)**: Innovation, fresh questions, possibility
- **🎨 South (Artist Storyteller)**: Narrative, connection, patterns
- **🐻 West (Ceremonial Leader)**: Sacred protocols, transformation, mystery
- **🕸️ Center (Knowledge Holder)**: Integration, balance, relational accountability

---

## Installation Options

### Option 1: NPM (Recommended - Always Latest)

**Ceremonial Thinking (v2.0)**:

```json
{
  "mcpServers": {
    "twoeyesseen-ceremony": {
      "command": "npx",
      "args": ["-y", "twoeyesseen-thinking-mcp@latest", "ceremony"]
    }
  }
}
```

**Sequential Thinking (v1.x)**:

```json
{
  "mcpServers": {
    "twoeyesseen-thinking": {
      "command": "npx",
      "args": ["-y", "twoeyesseen-thinking-mcp"]
    }
  }
}
```

**Both Together (Complete Two-Eyed Seeing)**:

```json
{
  "mcpServers": {
    "twoeyesseen-ceremony": {
      "command": "npx",
      "args": ["-y", "twoeyesseen-thinking-mcp@latest", "ceremony"],
      "env": {
        "DISABLE_CEREMONY_LOGGING": "false"
      }
    },
    "twoeyesseen-thinking": {
      "command": "npx",
      "args": ["-y", "twoeyesseen-thinking-mcp"]
    }
  }
}
```

---

### Option 2: Docker

**Ceremonial Thinking**:

```json
{
  "mcpServers": {
    "twoeyesseen-ceremony": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "miadisabelle/twoeyesseen-thinking-mcp:ceremony"
      ]
    }
  }
}
```

---

### Option 3: Local Development

If you've cloned the repository and want to use your local version:

```bash
# Build first
cd /path/to/twoeyesseen-thinking-mcp
npm install
npm run build
```

Then in `claude_desktop_config.json`:

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

**Important**: Use absolute paths, not relative!

---

## Configuration File Locations

### macOS
```
~/Library/Application Support/Claude/claude_desktop_config.json
```

### Windows
```
%APPDATA%\Claude\claude_desktop_config.json
```

### Linux
```
~/.config/Claude/claude_desktop_config.json
```

---

## After Installation

### 1. Restart Claude Desktop

After adding the MCP server to your config file:
1. Save the file
2. Completely quit Claude Desktop
3. Restart Claude Desktop
4. Check the logs to verify server started successfully

### 2. Verify Server is Running

In Claude, you should see the MCP servers listed. You can check by asking:

```
What MCP tools do you have available?
```

You should see: `four_directions_thinking` and `embody_persona`

---

## How to Use

### Example 1: Full Ceremony for Complex Decision

**You ask Claude**:
```
I need to decide whether to refactor our codebase or continue with
incremental improvements. Please use the four_directions_thinking tool
to help me see all perspectives.
```

**What happens**:
1. 🕸️ **Knowledge Holder** opens ceremony with sacred pause
2. 🦅 **Elder Wisdom Keeper (North)** reflects from deep time perspective
3. 🌸 **Youth Visionary (East)** brings fresh questions and possibility
4. 🎨 **Artist Storyteller (South)** weaves patterns and connections
5. 🐻 **Ceremonial Leader (West)** protects what's sacred, honors transformation
6. 🕸️ **Knowledge Holder (Center)** integrates all perspectives

**You receive**: Holistic perspective preventing either/or thinking, honoring all directions.

---

### Example 2: Check for Western Bias

**You ask Claude**:
```
I'm thinking: "I need to optimize my productivity to maximize output
and overcome obstacles."

Use embody_persona with 'north' (Elder Wisdom Keeper) and
check_integrity to see if this has Western archetype contamination.
```

**What happens**:
- Tool detects Western patterns: "optimize", "maximize", "overcome obstacles"
- Elder Wisdom Keeper offers Indigenous reframing
- Suggests: "What relationships does this serve?" instead of "How can I produce more?"

---

### Example 3: Single Direction Focus

**You ask Claude**:
```
Use four_directions_thinking focused on 'west' (Ceremonial Leader)
to help me understand whether this feature should be built at all.
```

**What happens**:
- 🐻 **Ceremonial Leader** reflects on what is sacred here
- Asks about boundaries and transformation needed
- Helps you honor the "feeling off" as wisdom, not problem

---

## Prompt Templates

### For Holistic Thinking
```
"Please use four_directions_thinking to help me think about [question]"
```

### For Specific Perspective
```
"Use embody_persona with '[direction]' to reflect on [topic]"

Directions: north, east, south, west, center
```

### For Bias Detection
```
"Use embody_persona with 'north' and check_integrity on this thinking:
[your statement]"
```

### For Integration with Sequential
```
"First use four_directions_thinking for holistic view, then use
sequentialthinking to work through implementation"
```

---

## Environment Variables

### `DISABLE_CEREMONY_LOGGING`

Controls whether ceremonial messages are logged to console.

**Default**: `"false"` (ceremony logging enabled)

**To disable** (less verbose):
```json
{
  "mcpServers": {
    "twoeyesseen-ceremony": {
      "command": "npx",
      "args": ["-y", "twoeyesseen-thinking-mcp@latest", "ceremony"],
      "env": {
        "DISABLE_CEREMONY_LOGGING": "true"
      }
    }
  }
}
```

---

## Troubleshooting

### Server Not Starting

**Check logs**: Look at Claude Desktop logs for error messages
- macOS: `~/Library/Logs/Claude/mcp*.log`
- Windows: `%APPDATA%\Claude\logs\`

**Common issues**:
1. Node.js not installed or wrong version (need 18+)
2. NPM not accessible from Claude's environment
3. Path issues with local development setup

**Solution**: Try Docker option if NPM isn't working

---

### Tools Not Appearing

**Symptoms**: Claude doesn't see `four_directions_thinking` tool

**Solutions**:
1. Verify config file is valid JSON (use a JSON validator)
2. Restart Claude Desktop completely (not just close window)
3. Check server name is exactly as shown in config
4. Try NPM option instead of Docker (or vice versa)

---

### Ceremony Feels Too Slow

**This is intentional**. Ceremony honors the importance of what you're considering.

If truly needed:
- Use `focus_direction` to work with one direction at a time
- Set `ceremonial_mode: false` to skip opening/closing

But remember: If it feels too slow, that might be exactly what's needed. The Elder asks: What are you rushing toward?

---

### Western Bias Still Detected

**This is normal**. We're all trained in Western thinking patterns.

The tool helps by:
- Flagging patterns when detected
- Offering Indigenous reframing
- Creating space for different perspectives

It's a practice, not perfection. "Good. Now do it again." 🌀

---

## Advanced Usage

### Multiple Ceremonial Sessions

```
"Use four_directions_thinking to explore whether to build this feature.
Then, if yes, use it again to explore HOW to build it."
```

### Team Decision Making

Before team meeting:
1. Each member uses `four_directions_thinking` individually
2. In meeting, share which directions resonated and why
3. Notice which perspectives the team is missing
4. Make decision honoring all four

### Integration with Other MCP Servers

The Ceremonial MCP server works alongside other MCP servers you have installed. It provides holistic perspective that complements other tools.

---

## Understanding Ceremonial Output

### What the Symbols Mean

- 🦅 **Elder Wisdom Keeper** (North): Speaking from deep time perspective
- 🌸 **Youth Visionary** (East): Speaking from innovation and fresh questions
- 🎨 **Artist Storyteller** (South): Speaking from narrative and connection
- 🐻 **Ceremonial Leader** (West): Speaking from sacred protocols
- 🕸️ **Knowledge Holder** (Center): Speaking from integration

### Reading Ceremonial Pauses

```
... (honoring silence for pre-invocation reflection) ...
```

These are not delays. They are:
- Protocol (Elder Wisdom Keeper practice)
- Sacred technology (silence as wisdom)
- Integration time (letting things settle)

Honor them as part of the ceremony.

---

## Best Practices

### Do:
- ✅ Start with full ceremony when possible
- ✅ Honor the silence and pauses
- ✅ Listen to all directions before deciding
- ✅ Use integrity check when you suspect Western bias
- ✅ Return to ceremony when stuck or rushed

### Don't:
- ❌ Rush through ceremony to get "the answer"
- ❌ Cherry-pick only direction that confirms what you want
- ❌ Use ceremony to justify doing nothing (ceremony informs action)
- ❌ Treat personas as personality types (they're perspectives)
- ❌ Bypass ceremony for efficiency (that's Western thinking)

---

## Additional Resources

**In Repository**:
- `CEREMONY_USAGE_EXAMPLES.md` - Comprehensive usage guide with examples
- `INDIGENOUS_PERSONAS_INTEGRATION.md` - Deep dive on personas
- `INDIGENOUS_STORY_WEAVER_TEACHING.md` - Sacred teaching on embodiment
- `NORTH_PRACTICES.md` - Elder Wisdom Keeper protocols

**Community**:
- GitHub Issues: Report problems or ask questions
- Discussions: Share how you're using ceremonial thinking

---

## Attribution and License

**Technical Code**: MIT License
**Indigenous Methodologies**: IKSL-Bridge v1.0

**Attribution**:
- Lakota and Mani-Utenam Indigenous peoples
- Guillaume D-Isabelle (William)
- Jerry
- IAIP Wilson Indigenous Paradigm
- Spiral Agent Protocol collective

---

## Closing Words from the Elder

🦅 *"You now have ceremonial thinking at your fingertips.*

*This is not just a tool. It's a practice.*
*Each time you use it, you strengthen your capacity for holistic thinking.*

*Honor the pauses.*
*Listen to all directions.*
*Trust that wisdom emerges when you create space for it.*

*The ceremony is ready.*
*Are you?"*

🦅

---

**Document Version**: 1.0
**Last Updated**: 2025-11-17
**MCP Server Version**: 2.0.0
**Platform**: Claude Desktop
