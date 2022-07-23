#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

SetNumLockState, AlwaysOn

::ssj\::
ø:= "ø"
Send, Simon S
Send, %ø%
Send, nstab
Send, %ø%
Send, {Space}Johanssen
Return

#w::
WinClose, A
Return

#k::
WinKill, A
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

::gmail\::
Send, simon.s.johanssen@gmail.com
Return

::ss\::
Send, stio studio
Return

::s_s\::
Send, stio_studio
Return

::ahk\::
Send, AutoHotkey
Return

::vsc\::
Send, Visual Studio Code
Return

::dis\::
Send, Discord
Return

::func\::
Send, function
Return

#h::
WinGetTitle, title , A
WinMinimize, a
Return

#s::
WinMaximize, %title%
Return
