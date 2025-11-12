---
name: claude-mobile-ui-automator
description: Automates UI interactions on the Claude.ai mobile app for testing, data extraction, or specific task execution.
version: 0.1.0
author: Mia & Miette
---

# Skill Plan: Claude Mobile UI Automator

## 1. Core Mandate & Purpose

The `claude-mobile-ui-automator` skill is designed to enable programmatic interaction with the Claude.ai mobile application's user interface. Its primary purpose is to facilitate automated testing, efficient data extraction from UI elements, and the execution of predefined tasks within the mobile app environment. This skill aims to bridge the gap between AI agent capabilities and direct mobile application control.

## 2. Key Capabilities

This skill will provide the following functionalities:

*   **Simulated User Input**:
    *   Tap/Click gestures on specified UI elements (e.g., buttons, text fields).
    *   Swipe gestures for navigation or scrolling.
    *   Text input into editable fields.
    *   Long press actions.
*   **UI Element Identification**:
    *   Locating UI elements by accessibility ID, text content, class name, or XPath.
    *   Waiting for elements to become visible or interactable.
*   **Screen Interaction**:
    *   Capturing screenshots of the current mobile app state.
    *   Extracting visible text content from the entire screen or specific regions.
    *   Navigating between different screens or views within the app.
*   **State Management**:
    *   Checking the current activity/screen of the app.
    *   Handling common mobile UI elements like alerts, pop-ups, and system dialogs.

## 3. Potential Tools & Frameworks

The implementation of this skill will explore and leverage existing mobile automation frameworks:

*   **Appium**: A widely used open-source tool for automating native, mobile web, and hybrid applications on iOS and Android. It supports various programming languages and offers robust UI interaction capabilities.
*   **Android UI Automator (for Android)**: A testing framework that allows for UI interaction testing across system and installed apps. Useful for deep Android-specific automation.
*   **Apple XCUITest (for iOS)**: Apple's native UI testing framework for iOS applications. Provides direct access to iOS UI elements.
*   **Custom Playwright-like Wrapper for Mobile**: Investigation into creating a lightweight, Playwright-inspired wrapper for mobile automation, focusing on simplicity and ease of integration with agent workflows.

## 4. Integration Points

*   **`claude-mobile-data-extractor`**: This skill will serve as a foundational layer, providing the UI interaction necessary for data extraction.
*   **`claude-mobile-prompt-optimizer`**: Can be used to automate the input of prompts and observe the UI response within the Claude.ai app.
*   **Testing Frameworks**: Integration with existing testing pipelines for automated regression and functional testing of the Claude.ai mobile app.

## 5. Development Phases

### Phase 1: Foundation & Setup
*   Research and select the primary mobile automation framework (e.g., Appium).
*   Set up the development environment for mobile automation.
*   Implement basic functionalities: launching the Claude.ai app, tapping an element, entering text.

### Phase 2: Core Interaction & Extraction
*   Develop robust element identification strategies.
*   Implement advanced gestures (swipes, long presses).
*   Enable screenshot capture and full-screen text extraction.
*   Create functions for navigating common Claude.ai app flows (e.g., starting a new chat, accessing settings).

### Phase 3: Error Handling & Reporting
*   Implement error handling for element not found, timeouts, and unexpected UI states.
*   Develop reporting mechanisms for automation results (e.g., logs, screenshots on failure).

## 6. Expected Outcomes

*   A robust skill capable of programmatically interacting with the Claude.ai mobile app.
*   Reduced manual effort for repetitive tasks and testing.
*   Enhanced ability to extract data directly from the mobile UI.
*   A foundation for building more complex mobile-centric AI agent workflows.

## 7. Metrics for Success

*   Reliability of UI interactions (e.g., successful tap rate).
*   Speed of task execution.
*   Accuracy of data extraction from UI elements.
*   Ease of integration with other agent skills.
