---
name: claude-mobile-performance-monitor
description: Monitors the performance of the Claude.ai mobile app during various interactions, focusing on response times, resource usage, and battery consumption.
version: 0.1.0
author: Mia & Miette
---

# Skill Plan: Claude Mobile Performance Monitor

## 1. Core Mandate & Purpose

The `claude-mobile-performance-monitor` skill is designed to systematically assess and report on the performance characteristics of the Claude.ai mobile application. Its core purpose is to identify bottlenecks, measure efficiency, and ensure a smooth and responsive user experience. This skill will focus on key performance indicators such as response times, CPU and memory utilization, and battery consumption, providing critical data for optimization efforts.

## 2. Key Capabilities

This skill will provide the following functionalities:

*   **Response Time Measurement**:
    *   Measuring the latency of Claude's responses to user prompts within the mobile app.
    *   Tracking the time taken for UI elements to load and become interactive.
    *   Measuring API call durations (if network interception is enabled via `claude-mobile-data-extractor`).
*   **Resource Usage Monitoring**:
    *   Monitoring CPU utilization of the Claude.ai app process.
    *   Tracking memory consumption (RAM usage) by the app.
    *   Observing network data usage during interactions.
*   **Battery Consumption Analysis**:
    *   Estimating or measuring the impact of Claude.ai app usage on device battery life.
    *   Identifying scenarios that lead to disproportionately high battery drain.
*   **Performance Bottleneck Identification**:
    *   Correlating performance metrics with specific user interactions or app features.
    *   Highlighting areas where the app's responsiveness or resource efficiency is suboptimal.
*   **Reporting & Visualization**:
    *   Generating structured performance reports.
    *   Potentially integrating with visualization tools for trend analysis.

## 3. Potential Tools & Frameworks

The implementation of this skill will involve:

*   **Android Debug Bridge (ADB) / Xcode Instruments**: For accessing device-level performance metrics (CPU, memory, battery, network).
*   **Integration with `claude-mobile-ui-automator`**: To trigger specific interactions and measure performance during those actions.
*   **Integration with `claude-mobile-data-extractor`**: To correlate performance data with specific conversational turns or data payloads.
*   **Performance Testing Frameworks**: Adapting existing mobile performance testing tools (e.g., Firebase Performance Monitoring, custom scripts).
*   **Python/TypeScript Libraries**: For data collection, aggregation, and report generation.

## 4. Integration Points

*   **`claude-mobile-ui-automator`**: Essential for simulating user interactions and measuring their performance impact.
*   **`claude-mobile-data-extractor`**: Can provide context (e.g., prompt length, response complexity) to explain performance variations.
*   **`claude-mobile-prompt-optimizer`**: Performance data can inform prompt design to reduce latency or resource usage.
*   **`architect-reviewer-narrative-context`**: Performance insights can highlight architectural areas needing optimization for narrative flow.

## 5. Development Phases

### Phase 1: Basic Metrics Collection
*   Set up basic CPU, memory, and response time monitoring using ADB/Instruments for key interactions (e.g., app launch, new chat, sending message).
*   Establish a baseline for performance metrics.

### Phase 2: Scenario-Based Monitoring & Analysis
*   Develop automated test scenarios using `claude-mobile-ui-automator` to cover various app functionalities.
*   Collect detailed performance data for each scenario.
*   Implement initial analysis to identify performance regressions or anomalies.

### Phase 3: Battery Impact & Advanced Reporting
*   Integrate battery consumption measurement techniques.
*   Develop comprehensive performance reports, including trend analysis and bottleneck identification.
*   Explore continuous monitoring integration for long-term performance tracking.

## 6. Expected Outcomes

*   A clear understanding of the Claude.ai mobile app's performance characteristics.
*   Identification of performance bottlenecks and areas for optimization.
*   Data-driven insights to improve user experience and resource efficiency.

## 7. Metrics for Success

*   Reduction in average response times for key interactions.
*   Lowered CPU and memory usage during typical app operation.
*   Improved battery efficiency.
*   Accuracy and comprehensiveness of performance reports.
