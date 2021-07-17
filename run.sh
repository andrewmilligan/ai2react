#!/bin/bash

FILE="${PWD}/ai2react.js"
PROG="com.adobe.illustrator"
osascript -e "tell application id \"${PROG}\" to activate do javascript file \"${FILE}\""
