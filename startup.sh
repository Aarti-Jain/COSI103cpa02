#!/bin/bash
export MONGO_URI='mongodb+srv://aartijain:liberty312001@cluster0.wzkxj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
echo "connecting to $mongodb_URI"
npm install 
node app.js