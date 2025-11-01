# Two-Eyed Seen Thinking MCP Server - miadisabelle

> ## 🛑 CEREMONIAL PAUSE - Phase 0 Active
>
> **This project is NOT in active development.** We are in **Phase 0: Community Relationship Establishment** (Nov 1 - Dec 21, 2025).
>
> **Why:** The holistic thinking artifacts were designed *about* Indigenous knowledge systems before establishing relationship *with* Indigenous communities. We entered a ceremonial pause to establish proper co-creative partnerships before any implementation proceeds.
>
> **Current work:** Seeking 2-3 Indigenous knowledge holders willing to serve as ceremonial advisors and co-creators.
>
> **Next milestone:** Winter Solstice Ceremony (Dec 21, 2025) - Receive guidance on whether to proceed.
>
> **Learn more:** [Ceremonial Protocols](./docs/CEREMONIAL_PROTOCOLS.md) | [Phase 0 Status](./docs/PHASE_0_STATUS.md) | [Ceremonial Review Dialogue](./docs/holistic/251031_Mia_Anikwag_Ceremonial_Review.md)
>
> *All my relations. We wait with intention.*

[![NPM Version](https://img.shields.io/npm/v/twoeyesseen-thinking-mcp.svg)](https://www.npmjs.com/package/twoeyesseen-thinking-mcp)
[![Docker Hub](https://img.shields.io/docker/pulls/miadisabelle/twoeyesseen-thinking-mcp.svg)](https://hub.docker.com/r/miadisabelle/twoeyesseen-thinking-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Phase](https://img.shields.io/badge/Phase-0%20Ceremonial%20Pause-orange)
![Status](https://img.shields.io/badge/Status-Community%20Relationship%20Building-blue)

> **About**: This MCP server provides Sequential Thinking (Western Eye - implemented) and is preparing to integrate Holistic Thinking (Indigenous Eye - Phase 0 design) through **Two-Eyed Seeing (Etuaptmumk)** methodology. It blends Western sequential thinking with Indigenous holistic wisdom and ceremonial protocols. Inspired by the Chimera Storyform and Narrative Context Protocol.

An MCP server implementation that provides a tool for dynamic and reflective problem-solving through a structured thinking process. This server enables AI agents to break down complex problems into manageable, trackable steps with support for revision and branching, now enriched with holistic perspectives.

## Features

- Break down complex problems into manageable steps
- Revise and refine thoughts as understanding deepens
- Branch into alternative paths of reasoning
- Adjust the total number of thoughts dynamically
- Generate and verify solution hypotheses

## Tool

### twoeyesseen_thinking

Facilitates a detailed, step-by-step thinking process for problem-solving and analysis.

**Inputs:**
- `thought` (string): The current thinking step
- `nextThoughtNeeded` (boolean): Whether another thought step is needed
- `thoughtNumber` (integer): Current thought number
- `totalThoughts` (integer): Estimated total thoughts needed
- `isRevision` (boolean, optional): Whether this revises previous thinking
- `revisesThought` (integer, optional): Which thought is being reconsidered
- `branchFromThought` (integer, optional): Branching point thought number
- `branchId` (string, optional): Branch identifier
- `needsMoreThoughts` (boolean, optional): If more thoughts are needed

## Usage

The Sequential Thinking tool is designed for:
- Breaking down complex problems into steps
- Planning and design with room for revision
- Analysis that might need course correction
- Problems where the full scope might not be clear initially
- Tasks that need to maintain context over multiple steps
- Situations where irrelevant information needs to be filtered out

## Quick Start

### Installation via NPM (Recommended)

Add this to your `claude_desktop_config.json`:

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

### Installation via Docker

```json
{
  "mcpServers": {
    "twoeyesseen-thinking": {
      "command": "docker",
      "args": [
        "run",
        "--rm", 
        "-i",
        "miadisabelle/twoeyesseen-thinking-mcp"
      ]
    }
  }
}
```

After adding the configuration, restart Claude Desktop and try asking:
```
Please use the twoeyesseen thinking tool to analyze this complex problem step by step.
```

### Usage with VS Code

For quick installation, click one of the installation buttons below...

[![Install with NPX in VS Code](https://img.shields.io/badge/VS_Code-NPM-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=twoeyesseenthinking&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22twoeyesseen-thinking-mcp%22%5D%7D) [![Install with NPX in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-NPM-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=twoeyesseenthinking&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22twoeyesseen-thinking-mcp%22%5D%7D&quality=insiders)

[![Install with Docker in VS Code](https://img.shields.io/badge/VS_Code-Docker-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=twoeyesseenthinking&config=%7B%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%22--rm%22%2C%22-i%22%2C%22miadisabelle%2Ftwoeyesseen-thinking-mcp%22%5D%7D) [![Install with Docker in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Docker-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=twoeyesseenthinking&config=%7B%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%22--rm%22%2C%22-i%22%2C%22miadisabelle%2Ftwoeyesseen-thinking-mcp%22%5D%7D&quality=insiders)

For manual installation, add the following JSON block to your User Settings (JSON) file in VS Code. You can do this by pressing `Ctrl + Shift + P` and typing `Preferences: Open Settings (JSON)`.

Optionally, you can add it to a file called `.vscode/mcp.json` in your workspace. This will allow you to share the configuration with others.

> Note that the `mcp` key is not needed in the `.vscode/mcp.json` file.

For NPX installation:

```json
{
  "mcp": {
    "servers": {
      "twoeyesseen-thinking": {
        "command": "npx",
        "args": [
          "-y",
          "twoeyesseen-thinking-mcp"
        ]
      }
    }
  }
}
```

For Docker installation:

```json
{
  "mcp": {
    "servers": {
      "twoeyesseen-thinking": {
        "command": "docker",
        "args": [
          "run",
          "--rm",
          "-i",
          "miadisabelle/twoeyesseen-thinking-mcp"
        ]
      }
    }
  }
}
```

## Building

Docker:

```bash
docker build -t miadisabelle/twoeyesseen-thinking-mcp -f src/sequentialthinking/Dockerfile .
```

## Local Development and Configuration

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** (usually installed with Node.js)

### Local Build Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build project**
   ```bash
   npm run build
   ```

   This compiles TypeScript code to the `dist/` directory.

3. **Development mode**
   ```bash
   npm run watch
   ```

   This starts watch mode for automatic recompilation.

### Local Source Configuration for Claude Desktop

If you want to use this MCP server from local source code, follow these steps:

1. **Ensure project is built**
   ```bash
   npm run build
   ```

2. **Locate Claude Desktop config file**
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

3. **Add local configuration**
   ```json
   {
     "mcpServers": {
       "twoeyesseen-thinking": {
         "command": "node",
         "args": ["/your/absolute/path/to/project/dist/index.js"],
         "env": {
           "DISABLE_THOUGHT_LOGGING": "false"
         }
       }
     }
   }
   ```

   **Important**: Replace `/your/absolute/path/to/project/dist/index.js` with your actual project path!

4. **Restart Claude Desktop**
   
   After saving the config file, restart the Claude Desktop application.

5. **Test the tool**
   
   Test in Claude with something like:
   ```
   Please use the twoeyesseen thinking tool to analyze a complex problem
   ```

### Tool Features

This sequential thinking tool enables Claude to:

- Break down complex problems into manageable steps
- Revise and refine thoughts as understanding deepens
- Branch into alternative paths of reasoning
- Adjust the total number of thoughts dynamically
- Generate and verify solution hypotheses

### Environment Variables

- `DISABLE_THOUGHT_LOGGING=true` - Disable console output of thinking process

## Publishing

This section provides guidance for developers who want to publish their own version of this MCP server.

### Prerequisites

- Node.js (version 18 or higher)
- npm account for NPM publishing
- Docker Hub account for Docker publishing (optional)
- GitHub account for source code hosting

### Prepare for Publishing

1. **Update package.json**
   
   Modify the package configuration for your own project:
   ```json
   {
     "name": "twoeyesseen-thinking-mcp",
     "version": "1.0.0",
     "description": "MCP server integrating Two-Eyed Seeing for dynamic and reflective problem-solving, blending Western sequential thinking with Indigenous holistic wisdom and ceremonial protocols. Inspired by the Chimera Storyform and Narrative Context Protocol.",
     "author": "miadisabelle",
     "homepage": "https://github.com/miadisabelle/twoeyesseen-thinking-mcp",
     "bugs": "https://github.com/miadisabelle/twoeyesseen-thinking-mcp/issues",
     "repository": {
       "type": "git",
       "url": "git+https://github.com/miadisabelle/twoeyesseen-thinking-mcp.git"
     },
     "keywords": [
       "mcp",
       "model-context-protocol",
       "claude",
       "thinking",
       "ai-tools",
       "twoeyesseen",
       "chimera",
       "storyform",
       "holistic",
       "narrative",
       "indigenous-knowledge",
       "ceremonial-protocols"
     ]
   }
   ```

2. **Ensure all files are ready**
   ```bash
   npm install
   npm run build
   ```

### Publishing to NPM

1. **Login to NPM**
   ```bash
   npm login
   ```

2. **Publish the package**
   ```bash
   npm publish --access public
   ```

3. **Version management**
   ```bash
   # Update version and republish
   npm version patch  # 1.0.0 -> 1.0.1
   npm publish
   ```

### Publishing to Docker Hub

1. **Build Docker image**
   ```bash
   docker build -t miadisabelle/twoeyesseen-thinking-mcp .
   ```

2. **Test the image**
   ```bash
   docker run --rm -i miadisabelle/twoeyesseen-thinking-mcp
   ```

3. **Push to Docker Hub**
   ```bash
   docker login
   docker push miadisabelle/twoeyesseen-thinking-mcp
   
   # Also push with version tag
   docker tag miadisabelle/twoeyesseen-thinking-mcp miadisabelle/twoeyesseen-thinking-mcp:1.0.0
   docker push miadisabelle/twoeyesseen-thinking-mcp:1.0.0
   ```

### Publishing to GitHub

1. **Initialize repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sequential thinking MCP server"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/miadisabelle/twoeyesseen-thinking-mcp.git
   git push -u origin main
   ```

3. **Create GitHub Release**
   - Go to your repository on GitHub
   - Click "Releases" → "Create a new release"
   - Add tag (e.g., v1.0.0) and release notes

### Usage After Publishing

Once published, users can install and use your MCP server in the following ways:

#### NPM Installation
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

#### Docker Installation
```json
{
  "mcpServers": {
    "twoeyesseen-thinking": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "miadisabelle/twoeyesseen-thinking-mcp"
      ]
    }
  }
}
```

#### GitHub Installation
```json
{
  "mcpServers": {
    "twoeyesseen-thinking": {
      "command": "npx",
      "args": [
        "-y",
        "https://github.com/miadisabelle/twoeyesseen-thinking-mcp#main"
      ]
    }
  }
}
```

## License

This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
