---
name: claude-mobile-data-extractor
description: Extracts conversational data, user settings, or other relevant information directly from the Claude.ai mobile app (e.g., from local storage, network traffic, or UI elements).
version: 0.1.0
author: Mia & Miette
---

# Skill Plan: Claude Mobile Data Extractor

## 1. Core Mandate & Purpose

The `claude-mobile-data-extractor` skill is designed to systematically retrieve various forms of data from the Claude.ai mobile application. This includes, but is not limited to, conversational history, user-specific settings, application logs, and data exposed through the UI. The purpose is to provide agents with direct access to the mobile app's internal and external data streams for analysis, auditing, and contextual understanding.

## 2. Key Capabilities

This skill will provide the following functionalities:

*   **UI Content Scraping**:
    *   Leveraging `claude-mobile-ui-automator` to extract text and other visible data from specific UI elements or entire screens.
    *   Structured extraction of chat messages, user inputs, and Claude's responses.
*   **Network Traffic Interception (if feasible and ethical)**:
    *   Capturing and analyzing API requests and responses made by the Claude.ai mobile app.
    *   Extracting data payloads from network communications (e.g., JSON data for conversations).
    *   *Note: This capability requires careful consideration of ethical implications and technical feasibility, potentially involving proxy setups or device-level network monitoring.*
*   **Local Storage/Database Access (if feasible and ethical)**:
    *   Attempting to access and parse local databases (e.g., SQLite) or shared preferences/key-value stores used by the app on the device.
    *   Extracting user settings, cached data, or other persistent information.
    *   *Note: This often requires root/jailbreak access or specific app debugging permissions and will be approached with caution.*
*   **Application Log Analysis**:
    *   Accessing and parsing device-level application logs (e.g., Android Logcat, iOS Console) for relevant information, errors, or events.
*   **Data Transformation**:
    *   Converting raw extracted data into structured formats (e.g., JSON, CSV) for easier consumption by other agents.
    *   Filtering and sanitizing extracted data.

## 3. Potential Tools & Frameworks

The implementation of this skill will involve:

*   **Integration with `claude-mobile-ui-automator`**: For UI-based data extraction.
*   **Proxy Tools**: (e.g., Burp Suite, Charles Proxy, mitmproxy) for network traffic interception and analysis.
*   **Device Debugging Tools**: (e.g., Android Debug Bridge (ADB), Xcode Instruments) for accessing logs and potentially local storage.
*   **Forensic Tools/Techniques**: For deeper analysis of app data storage on rooted/jailbroken devices, if deemed necessary and ethical.
*   **Python/TypeScript Libraries**: For parsing various data formats (JSON, XML, SQLite).

## 4. Integration Points

*   **`claude-mobile-ui-automator`**: This skill is a dependency for UI-based data extraction.
*   **`claude-mobile-prompt-optimizer`**: Extracted conversational data can be used to analyze the effectiveness of prompts.
*   **`narrative-context-manager`**: Extracted conversations and settings can feed into the narrative context for broader understanding.
*   **`reality-narrative-researcher-codebase`**: Provides raw data for research into narrative-reality feedback loops within the mobile app's interactions.

## 5. Development Phases

### Phase 1: UI-Based Extraction
*   Develop functions to extract chat history and visible settings using `claude-mobile-ui-automator`.
*   Implement basic data cleaning and structuring for UI-extracted content.

### Phase 2: Log & Network Analysis (Ethical & Feasible)
*   Investigate methods for accessing application logs.
*   Research and prototype network traffic interception techniques, prioritizing ethical and non-invasive approaches.
*   Develop parsers for common API response formats.

### Phase 3: Advanced & Secure Extraction (Conditional)
*   Explore secure and ethical ways to access local app storage/databases, if critical data is identified there and standard methods are insufficient.
*   Implement robust error handling and data validation for all extraction methods.

## 6. Expected Outcomes

*   The ability to programmatically retrieve diverse data types from the Claude.ai mobile app.
*   Enhanced visibility into app behavior, user interactions, and AI responses.
*   A rich data source for further analysis, prompt optimization, and narrative research.

## 7. Metrics for Success

*   Completeness and accuracy of extracted data.
*   Reliability of extraction methods across different app versions.
*   Minimal impact on device performance during extraction.
*   Adherence to ethical guidelines for data access.
