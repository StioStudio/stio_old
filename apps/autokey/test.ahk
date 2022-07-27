#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

#r::Reload

up::
MouseGetPos, mouseX, mouseY
MouseMove, mouseX, mouseY - 10, 10
Return

Down::
MouseGetPos, mouseX, mouseY
MouseMove, mouseX, mouseY + 10, 10
Return

Left::
MouseGetPos, mouseX, mouseY
MouseMove, mouseX - 10, mouseY, 10
Return

Right::
MouseGetPos, mouseX, mouseY
MouseMove, mouseX + 10, mouseY, 10
Return

