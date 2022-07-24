#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

Loop, 4{
Send, ^#{Right}
}
Run, C:\Users\espen\AppData\Local\Discord\Update.exe --processStart Discord.exe
Sleep, 5000
Send, ^#{Left}
Run, "C:\Users\espen\AppData\Local\Programs\Microsoft VS Code\Code.exe"
Sleep, 5000
Run, "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
Sleep, 2000
Send, {Tab}{Space}
Sleep, 5000
Run, "C:\Users\espen\Desktop\coding\apps\autokey\most_used\f1_switch..ahk"
Run, "C:\Users\espen\Desktop\coding\apps\autokey\most_used\short_writhe.ahk"
