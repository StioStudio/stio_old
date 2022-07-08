#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

SetNumLockState, AlwaysOn

Numpad1::
Run, "C:\Users\espen\AppData\Local\Programs\Microsoft VS Code\Code.exe"
Return

Numpad2::
Run, https://github.com/
Return

Numpad3::
Run, https://scratch.mit.edu/
Return

Numpad4::
Run, "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --profile-directory="Profile 1"
Return

#w::
WinGetTitle, title , A
WinClose, %title%,
Return

#k::
WinGetTitle, title , A
WinKill, %title%,
Return

::datetime\::
Send, %A_Now%
Return

::date\::
Send, %A_YYYY% %A_MM% %A_DD%
Return

::time\::
Send, %A_Hour% %A_Min% %A_Sec%
Return

::ssj\::
Send, Simon Søanstabø Johanssen
Return

::gmail\::
Send, simon.s.johanssen@gmail.com
Return

*F4::
SoundBeep, 700, 1000
Return

*F3::Volume_Up
*Volume_Up::F3

*F2::Volume_Down
*Volume_Down::F2

*F1::Volume_Mute
*Volume_Mute::F1

#h::
WinGetTitle, title , A
WinMinimize, %title%
Return

#s::
WinMaximize, %title%
Return

^*Enter::
Send, {Enter}
Send, {Left}
Return
