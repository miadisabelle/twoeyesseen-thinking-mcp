#!/usr/bin/env node

// Simple dispatcher to run the ceremonial server
import('../dist/src/ceremonial-server.js').catch(err => {
  console.error('Failed to start ceremonial server:', err);
  process.exit(1);
});
