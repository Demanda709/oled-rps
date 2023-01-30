function Update_score_board () {
    OLED.clear()
    OLED.writeStringNewLine("Player A:" + Player_A)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + Player_B)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
}
let Ties = 0
let Rounds = 0
let Player_B = 0
let Player_A = 0
OLED.init(128, 64)
OLED.writeStringNewLine("SHALL WE PLAY??!!!!!!!!!!!!!!!!")
Player_A = 0
Player_B = 0
Rounds = 0
Ties = 0
basic.pause(2000)
Update_score_board()
