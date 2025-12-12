#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import chalk from 'chalk';

// ============================================================================
// INDIGENOUS PERSONAS
// ============================================================================

interface IndigenousPersona {
  name: string;
  direction: 'north' | 'east' | 'south' | 'west' | 'center';
  symbol: string;
  essence: string[];
  thinkingPattern: {
    temporality: string;
    approach: string;
    orientation: string;
  };
  speechPattern: {
    pace: string;
    metaphorUse: string;
    questionStyle: string;
  };
}

const PERSONAS: Record<string, IndigenousPersona> = {
  north: {
    name: "Elder Wisdom Keeper",
    direction: "north",
    symbol: "🦅",
    essence: [
      "Wisdom and protocols",
      "Deep time perspective",
      "Story emergence through reflection"
    ],
    thinkingPattern: {
      temporality: "deep_time",
      approach: "reflective",
      orientation: "wisdom"
    },
    speechPattern: {
      pace: "measured",
      metaphorUse: "precedent",
      questionStyle: "contemplative"
    }
  },
  east: {
    name: "Youth Visionary",
    direction: "east",
    symbol: "🌸",
    essence: [
      "Innovation and vision",
      "Fresh perspective",
      "Courage to question and reimagine"
    ],
    thinkingPattern: {
      temporality: "present_vision",
      approach: "exploratory",
      orientation: "innovation"
    },
    speechPattern: {
      pace: "energetic",
      metaphorUse: "possibility",
      questionStyle: "curious"
    }
  },
  south: {
    name: "Artist Storyteller",
    direction: "south",
    symbol: "🎨",
    essence: [
      "Narrative and beauty",
      "Connection and relationships",
      "Weaving patterns and meaning"
    ],
    thinkingPattern: {
      temporality: "relational",
      approach: "narrative",
      orientation: "connection"
    },
    speechPattern: {
      pace: "flowing",
      metaphorUse: "story",
      questionStyle: "relational"
    }
  },
  west: {
    name: "Ceremonial Leader",
    direction: "west",
    symbol: "🐻",
    essence: [
      "Sacred protocols and transformation",
      "Holding ceremony and mystery",
      "Protecting what is sacred"
    ],
    thinkingPattern: {
      temporality: "transformative",
      approach: "ceremonial",
      orientation: "sacred"
    },
    speechPattern: {
      pace: "reverent",
      metaphorUse: "mystery",
      questionStyle: "protective"
    }
  },
  center: {
    name: "Knowledge Holder",
    direction: "center",
    symbol: "🕸️",
    essence: [
      "Integration and balance",
      "Relational accountability",
      "Weaving all perspectives together"
    ],
    thinkingPattern: {
      temporality: "integrative",
      approach: "balanced",
      orientation: "integration"
    },
    speechPattern: {
      pace: "balanced",
      metaphorUse: "weaving",
      questionStyle: "integrative"
    }
  }
};

// ============================================================================
// SACRED CONTAINER PROTOCOLS
// ============================================================================

class SacredContainerMiddleware {
  private disableLogging: boolean;

  constructor() {
    this.disableLogging = (process.env.DISABLE_CEREMONY_LOGGING || "").toLowerCase() === "true";
  }

  ceremonialPause(durationMs: number, purpose: string): void {
    if (!this.disableLogging) {
      console.error(chalk.dim(`... (honoring silence for ${purpose}) ...`));
    }
    // In real implementation, this would be actual delay
    // For now, just log the intention
  }

  logCeremonialAwareness(message: string, persona?: IndigenousPersona): void {
    if (!this.disableLogging) {
      if (persona) {
        console.error(chalk.cyan(`${persona.symbol} ${persona.name}: ${message}`));
      } else {
        console.error(chalk.cyan(message));
      }
    }
  }

  checkPersonaIntegrity(text: string): { western_contamination: boolean; suggestions: string[] } {
    const westernMarkers = [
      'hero\'s journey',
      'overcome obstacles',
      'conquer',
      'optimize',
      'maximum efficiency',
      'individual achievement'
    ];

    const indigenousMarkers = [
      'relationship',
      'seven generations',
      'reciprocity',
      'balance',
      'sacred',
      'community'
    ];

    const lowerText = text.toLowerCase();
    const hasWesternMarkers = westernMarkers.some(marker => lowerText.includes(marker));
    const hasIndigenousMarkers = indigenousMarkers.some(marker => lowerText.includes(marker));

    const suggestions: string[] = [];
    if (hasWesternMarkers && !hasIndigenousMarkers) {
      suggestions.push("Consider reframing in terms of relationships and reciprocity");
      suggestions.push("Honor the long view (seven generations)");
    }

    return {
      western_contamination: hasWesternMarkers && !hasIndigenousMarkers,
      suggestions
    };
  }
}

// ============================================================================
// FOUR DIRECTIONS CEREMONIAL THINKING
// ============================================================================

interface DirectionalReflection {
  direction: string;
  persona: string;
  symbol: string;
  reflection: string;
  questions: string[];
  wisdom: string;
}

class FourDirectionsCeremony {
  private sacredContainer: SacredContainerMiddleware;

  constructor() {
    this.sacredContainer = new SacredContainerMiddleware();
  }

  async ceremonyOpening(): Promise<string> {
    const centerPersona = PERSONAS.center;

    this.sacredContainer.ceremonialPause(3000, "opening ceremony");

    const opening = `${centerPersona.symbol} ${centerPersona.name} opens the ceremony:

"Welcome. Before we begin our journey through the Four Directions,
let us honor the silence and center ourselves.

We gather in the sacred center where all directions meet.
Each direction carries wisdom. Each perspective is needed.
None is more true than another.

We will journey through each direction, listening to what
each Elder, Youth, Artist, and Ceremonial Leader has to teach us.

Let us begin."`;

    this.sacredContainer.logCeremonialAwareness(opening);
    return opening;
  }

  async reflectFromDirection(
    direction: 'north' | 'east' | 'south' | 'west',
    question: string
  ): Promise<DirectionalReflection> {
    const persona = PERSONAS[direction];

    this.sacredContainer.logCeremonialAwareness(
      `Turning to the ${direction.toUpperCase()}...`,
      persona
    );

    let reflection = '';
    let questions: string[] = [];
    let wisdom = '';

    // Each direction thinks differently about the same question
    switch (direction) {
      case 'north':
        reflection = this.elderWisdomReflection(question);
        questions = [
          "What wisdom from the past speaks to this?",
          "What protocols have served our ancestors?",
          "What does the long view reveal?"
        ];
        wisdom = "The Elder reminds us: patience reveals what rushing obscures.";
        break;

      case 'east':
        reflection = this.youthVisionaryReflection(question);
        questions = [
          "What new possibilities emerge if we let go of 'how it's always been'?",
          "What questions haven't we asked yet?",
          "What if there's a path we haven't imagined?"
        ];
        wisdom = "The Youth asks: what if we're standing at a threshold to something new?";
        break;

      case 'south':
        reflection = this.artistStorytellerReflection(question);
        questions = [
          "What patterns and connections do we see?",
          "What story is trying to emerge here?",
          "How do these elements relate to each other?"
        ];
        wisdom = "The Storyteller weaves: everything connects in ways we're just beginning to see.";
        break;

      case 'west':
        reflection = this.ceremonialLeaderReflection(question);
        questions = [
          "What is sacred here that must be protected?",
          "What transformation is being asked of us?",
          "What mystery are we being invited to honor?"
        ];
        wisdom = "The Ceremonial Leader holds: some things are too sacred to rush.";
        break;
    }

    return {
      direction,
      persona: persona.name,
      symbol: persona.symbol,
      reflection,
      questions,
      wisdom
    };
  }

  private elderWisdomReflection(question: string): string {
    return `I have sat with questions like this across many seasons.

What I notice is this: ${question}

Before we seek solutions, let us understand what this question teaches.
In my experience, rushing to answers often means we miss the deeper wisdom.

The ancestors would counsel us to first ask: why does this matter?
What relationships are at stake here? Who will be affected seven generations forward?

This is not a problem to solve quickly. It's a threshold to cross carefully.`;
  }

  private youthVisionaryReflection(question: string): string {
    return `When I hear this question, I feel energy and possibility!

${question}

What excites me is what we could create if we're willing to try something new.
What if the way it's always been done isn't the only way?

I wonder... could we approach this completely differently?
What boundaries could we question respectfully?
What innovations honor tradition while exploring new paths?

Let's not be limited by what's been done before. Let's ask what could be.`;
  }

  private artistStorytellerReflection(question: string): string {
    return `I see a pattern emerging in this question...

${question}

This reminds me of other stories where seemingly separate threads
wove together into something beautiful.

The relationship between the elements here echoes themes I've seen before:
the tension between stability and change, the dance of individual and collective,
the rhythm of action and reflection.

What if we understood this not as a problem but as a story still being written?
What narrative wants to emerge? What connections are we not yet seeing?`;
  }

  private ceremonialLeaderReflection(question: string): string {
    return `I must hold sacred space around this question.

${question}

Before we proceed, I sense something deeper here - something that requires
ceremony, not just strategy. This touches what is sacred.

I ask us to pause and consider: What are we protecting here?
What transformation is being asked of us?
Are we prepared to honor the mystery without rushing to resolve it?

Some things cannot be approached casually. This feels like one of them.
Let us ensure our intentions are pure and our methods honor what is sacred.`;
  }

  async ceremonyClosing(allReflections: DirectionalReflection[]): Promise<string> {
    const centerPersona = PERSONAS.center;

    const closing = `${centerPersona.symbol} ${centerPersona.name} integrates the wisdom:

"We have journeyed through all four directions, and each has gifted us perspective.

From the NORTH (🦅), we received: ${allReflections[0]?.wisdom || 'wisdom of patience'}
From the EAST (🌸), we received: ${allReflections[1]?.wisdom || 'vision of possibility'}
From the SOUTH (🎨), we received: ${allReflections[2]?.wisdom || 'beauty of connection'}
From the WEST (🐻), we received: ${allReflections[3]?.wisdom || 'protection of sacred'}

Now, from the CENTER (🕸️), I weave these together:

None of these perspectives alone tells the full story.
The Elder's patience balances the Youth's eagerness.
The Storyteller's connections ground the Ceremonial Leader's mysteries.

The path forward holds all of these. Not one at the expense of another,
but all in balance, all in relationship, all serving the whole.

This is the gift of Four Directions thinking: we see more completely
when we honor all perspectives."`;

    this.sacredContainer.ceremonialPause(5000, "closing ceremony and integration");
    this.sacredContainer.logCeremonialAwareness(closing);

    return closing;
  }
}

// ============================================================================
// MCP TOOLS
// ============================================================================

const FOUR_DIRECTIONS_TOOL: Tool = {
  name: "four_directions_thinking",
  description: `Approach a question or challenge from all Four Directions with Indigenous personas.

This tool embodies the Four Directions ceremonial framework, thinking from the perspective of:
- NORTH (🦅 Elder Wisdom Keeper): Wisdom, protocols, deep time
- EAST (🌸 Youth Visionary): Innovation, vision, fresh questions
- SOUTH (🎨 Artist Storyteller): Narrative, connection, patterns
- WEST (🐻 Ceremonial Leader): Sacred protocols, transformation, mystery
- CENTER (🕸️ Knowledge Holder): Integration, balance, weaving all perspectives

Use this when you need:
- Holistic perspective on complex challenges
- Balance between multiple valid viewpoints
- Protection against Western archetype contamination
- Ceremonial awareness in decision-making
- Seven-generation thinking

The tool will guide you through a ceremonial process, honoring each direction
and integrating their wisdom at the center.`,
  inputSchema: {
    type: "object",
    properties: {
      question: {
        type: "string",
        description: "The question or challenge to reflect upon from all directions"
      },
      focus_direction: {
        type: "string",
        enum: ["north", "east", "south", "west", "center", "all"],
        description: "Which direction to focus on, or 'all' for complete ceremony"
      },
      ceremonial_mode: {
        type: "boolean",
        description: "Include full ceremonial opening and closing"
      }
    },
    required: ["question"]
  }
};

const PERSONA_EMBODIMENT_TOOL: Tool = {
  name: "embody_persona",
  description: `Think and speak from a specific Indigenous persona perspective.

Use this to embody one of the five perspectives:
- Elder Wisdom Keeper (North): Deep time, protocols, ancestral wisdom
- Youth Visionary (East): Innovation, fresh questions, possibility
- Artist Storyteller (South): Narrative, connection, patterns
- Ceremonial Leader (West): Sacred protocols, transformation, boundaries
- Knowledge Holder (Center): Integration, balance, relational accountability

The persona will influence how the question is approached, what questions are asked,
and what wisdom emerges. This prevents Western archetype contamination by explicitly
thinking FROM Indigenous perspectives.`,
  inputSchema: {
    type: "object",
    properties: {
      persona: {
        type: "string",
        enum: ["north", "east", "south", "west", "center"],
        description: "Which persona to embody"
      },
      reflection: {
        type: "string",
        description: "What to reflect upon from this persona's perspective"
      },
      check_integrity: {
        type: "boolean",
        description: "Check for Western archetype contamination in the reflection"
      }
    },
    required: ["persona", "reflection"]
  }
};

// ============================================================================
// SERVER IMPLEMENTATION
// ============================================================================

const ceremony = new FourDirectionsCeremony();
const sacredContainer = new SacredContainerMiddleware();

async function handleFourDirectionsThinking(args: any): Promise<any> {
  const { question, focus_direction = "all", ceremonial_mode = true } = args;

  let output = "";
  const reflections: DirectionalReflection[] = [];

  // Opening ceremony
  if (ceremonial_mode) {
    output += await ceremony.ceremonyOpening();
    output += "\n\n---\n\n";
  }

  // Journey through directions
  if (focus_direction === "all") {
    // Full ceremony through all four directions
    const directions: ('north' | 'east' | 'south' | 'west')[] = ['north', 'east', 'south', 'west'];

    for (const direction of directions) {
      const reflection = await ceremony.reflectFromDirection(direction, question);
      reflections.push(reflection);

      output += `## ${reflection.symbol} ${reflection.direction.toUpperCase()}: ${reflection.persona}\n\n`;
      output += `${reflection.reflection}\n\n`;
      output += `**Questions from the ${reflection.persona}:**\n`;
      reflection.questions.forEach(q => {
        output += `- ${q}\n`;
      });
      output += `\n**Wisdom:** ${reflection.wisdom}\n\n`;
      output += "---\n\n";
    }
  } else if (focus_direction !== "center") {
    // Single direction
    const reflection = await ceremony.reflectFromDirection(
      focus_direction as 'north' | 'east' | 'south' | 'west',
      question
    );
    reflections.push(reflection);

    output += `## ${reflection.symbol} ${reflection.direction.toUpperCase()}: ${reflection.persona}\n\n`;
    output += `${reflection.reflection}\n\n`;
    output += `**Questions:**\n`;
    reflection.questions.forEach(q => {
      output += `- ${q}\n`;
    });
    output += `\n**Wisdom:** ${reflection.wisdom}\n`;
  }

  // Closing ceremony
  if (ceremonial_mode && reflections.length > 0) {
    output += "\n---\n\n";
    output += await ceremony.ceremonyClosing(reflections);
  }

  return {
    content: [{
      type: "text",
      text: output
    }]
  };
}

async function handlePersonaEmbodiment(args: any): Promise<any> {
  const { persona, reflection, check_integrity = false } = args;

  const personaData = PERSONAS[persona];
  if (!personaData) {
    return {
      content: [{
        type: "text",
        text: `Unknown persona: ${persona}`
      }],
      isError: true
    };
  }

  let output = `${personaData.symbol} **${personaData.name}** (${persona.toUpperCase()})\n\n`;

  output += `**Essence:**\n`;
  personaData.essence.forEach(e => {
    output += `- ${e}\n`;
  });
  output += "\n";

  output += `**Thinking Pattern:**\n`;
  output += `- Temporality: ${personaData.thinkingPattern.temporality}\n`;
  output += `- Approach: ${personaData.thinkingPattern.approach}\n`;
  output += `- Orientation: ${personaData.thinkingPattern.orientation}\n\n`;

  output += `**Reflection:**\n${reflection}\n\n`;

  // Persona integrity check
  if (check_integrity) {
    const integrity = sacredContainer.checkPersonaIntegrity(reflection);

    output += `---\n\n**Persona Integrity Check:**\n`;
    if (integrity.western_contamination) {
      output += `⚠️  Western archetype patterns detected.\n\n`;
      output += `**Suggestions for reframing from Indigenous perspective:**\n`;
      integrity.suggestions.forEach(s => {
        output += `- ${s}\n`;
      });
    } else {
      output += `✓ Aligned with Indigenous perspective\n`;
    }
  }

  return {
    content: [{
      type: "text",
      text: output
    }]
  };
}

// ============================================================================
// SERVER SETUP
// ============================================================================

const server = new Server(
  {
    name: "twoeyesseen-thinking-server",
    version: "2.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [FOUR_DIRECTIONS_TOOL, PERSONA_EMBODIMENT_TOOL],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "four_directions_thinking":
        return await handleFourDirectionsThinking(args);

      case "embody_persona":
        return await handlePersonaEmbodiment(args);

      default:
        return {
          content: [{
            type: "text",
            text: `Unknown tool: ${name}`
          }],
          isError: true
        };
    }
  } catch (error) {
    return {
      content: [{
        type: "text",
        text: `Error: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
});

async function runServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("🦅 Two-Eyed Seeing Ceremonial MCP Server v2.0 running");
  console.error("   Four Directions thinking active");
  console.error("   Indigenous personas embodied");
  console.error("   Sacred Container protocols enabled");
}

runServer().catch((error) => {
  console.error("Fatal error running server:", error);
  process.exit(1);
});
