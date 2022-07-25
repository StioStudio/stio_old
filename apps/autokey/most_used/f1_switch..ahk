#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

*F4::
SoundBeep, 700, 1000
Return

*F3::Volume_Up
*Volume_Up::F3

*F2::Volume_Down
*Volume_Down::F2

*F1::Volume_Mute
*Volume_Mute::F1
