#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

^r::Reload

^+p::
MouseGetPos, mousex, mousey
InputBox, output , print, print what?, Show, 200, 200, %mousex%, %mousey%, 640, 480
Send, %output%
Return

#o::
Return
