#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

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

^*Enter::
Send, {Enter}
Send, {Left}
Return

#*Space::
InputBox, var , easy cmd, , Show, 300, 300, 800, 400, 640, 0
If (var = "github") {
    Run, https://github.com/

} Else If (var = "scratch"){
    Run, https://scratch.mit.edu/

} Else If (var = "chrome"){
    Run, "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --profile-directory="Profile 1"

} Else If (var = "vsc" or var = "Visual Studio Code"){
    Run, "C:\Users\espen\AppData\Local\Programs\Microsoft VS Code\Code.exe"

} Else If (var = "stick" or var = "Stick Fight The Game"){
    Run, steam://rungameid/674940

} Else If (var = "mc" or var = "minecraft"){
    Run, "C:\Users\espen\Desktop\Minecraft Launcher"

} Else If (var = "val" or var = "VALORANT"){
    Run, "C:\Riot Games\Riot Client\RiotClientServices.exe" --launch-product=valorant --launch-patchline=live
    |
} Else If (var = "roblox"){
    Run, https://www.roblox.com/home

} Else If (var = "btdb2" or var = "Bloons TD Battles 2"){
    Run, "steam://rungameid/1276390"

}
Return