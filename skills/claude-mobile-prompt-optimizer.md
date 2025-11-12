---
name: claude-mobile-prompt-optimizer
description: Develops and tests prompts specifically tailored for optimal performance and interaction within the Claude.ai mobile app environment, considering mobile UI constraints and user experience.
version: 0.1.0
author: Mia & Miette
---

# Skill Plan: Claude Mobile Prompt Optimizer

## 1. Core Mandate & Purpose

The `claude-mobile-prompt-optimizer` skill is dedicated to the iterative development and refinement of prompts for the Claude.ai mobile application. Its core purpose is to ensure that AI interactions within the mobile environment are highly effective, efficient, and user-friendly, taking into account the unique constraints and opportunities presented by mobile UI and user experience patterns. This skill aims to maximize the quality and relevance of Claude's responses on mobile devices.

## 2. Key Capabilities

This skill will provide the following functionalities:

*   **Mobile-Specific Prompt Design**:
    *   Crafting prompts optimized for brevity and clarity, suitable for smaller screens and on-the-go interactions.
    *   Designing prompts that leverage mobile-specific inputs (e.g., voice input, image uploads) if available.
    *   Considering the context of mobile usage (e.g., quick queries, short bursts of interaction).
*   **Automated Prompt Testing**:
    *   Utilizing `claude-mobile-ui-automator` to input prompts into the Claude.ai mobile app.
    *   Automating the capture of Claude's responses and associated UI states.
*   **Response Quality Analysis**:
    *   Analyzing the relevance, coherence, and conciseness of Claude's responses within the mobile UI.
    *   Evaluating user experience factors (e.g., readability, ease of follow-up).
    *   Identifying instances where responses are truncated or poorly formatted for mobile.
*   **A/B Testing & Iteration**:
    *   Implementing A/B testing methodologies for different prompt variations.
    *   Iteratively refining prompts based on performance metrics and qualitative analysis.
*   **Contextual Prompt Generation**:
    *   Generating prompts that dynamically adapt to the current mobile app context (e.g., current screen, previous conversation turns, user settings).

## 3. Potential Tools & Frameworks

The implementation of this skill will involve:

*   **Integration with `claude-mobile-ui-automator`**: Essential for automated prompt input and response capture.
*   **Integration with `claude-mobile-data-extractor`**: For obtaining conversational history and user settings to inform prompt design and analysis.
*   **Natural Language Processing (NLP) Libraries**: For analyzing response quality, sentiment, and key information extraction.
*   **Statistical Analysis Tools**: For evaluating A/B test results and identifying significant performance differences.
*   **Prompt Engineering Frameworks**: Adapting existing prompt engineering best practices to the mobile context.

## 4. Integration Points

*   **`claude-mobile-ui-automator`**: Direct dependency for interacting with the mobile app.
*   **`claude-mobile-data-extractor`**: Provides crucial data for analyzing prompt effectiveness and generating context-aware prompts.
*   **`prompt-engineer-narrative`**: This skill will specialize the general prompt engineering principles for the mobile Claude.ai environment.
*   **`narrative-context-manager`**: Optimized prompts can contribute to better narrative context capture and generation.

## 5. Development Phases

### Phase 1: Basic Prompt Automation & Capture
*   Set up automated prompt input and response capture using `claude-mobile-ui-automator`.
*   Establish baseline metrics for response quality and mobile UI presentation.

### Phase 2: Mobile-Specific Optimization Techniques
*   Develop and test prompt templates for common mobile use cases (e.g., quick questions, task assistance).
*   Implement methods for analyzing response conciseness and formatting for mobile screens.

### Phase 3: A/B Testing & Contextual Adaptation
*   Set up an A/B testing pipeline for prompt variations.
*   Develop logic for generating prompts that adapt to dynamic mobile app context.
*   Integrate qualitative feedback mechanisms for prompt refinement.

## 6. Expected Outcomes

*   A suite of highly optimized prompts for various Claude.ai mobile app use cases.
*   Improved user experience and efficiency of AI interactions on mobile devices.
*   A systematic process for continuous prompt improvement in the mobile context.

## 7. Metrics for Success

*   Response conciseness and relevance scores.
*   User satisfaction ratings (if measurable).
*   Reduction in response truncation or formatting issues on mobile.
*   Efficiency of prompt testing and iteration cycles.
