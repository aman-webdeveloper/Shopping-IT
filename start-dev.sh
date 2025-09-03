#!/bin/bash
echo "Starting Random IT Solutions Website..."
echo ""
echo "Installing dependencies..."
npm install
echo ""
echo "Starting development server..."
cross-env NODE_ENV=development tsx server/index.ts