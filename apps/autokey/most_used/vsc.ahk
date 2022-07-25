#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

^|::
Send, pen.
Return

+|::
Send, pen.style.
Return

RAlt & Up::
Send, {AltDown}{Up}
return  ; Make left-control a prefix by using it in front of "&" at least once.

RAlt & Down::
Send, {AltDown}{Down}
return  ; Make left-control a prefix by using it in front of "&" at least once.
