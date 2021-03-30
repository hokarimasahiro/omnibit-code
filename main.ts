radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        OmniBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (receivedNumber == 2) {
        OmniBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (receivedNumber == 3) {
        OmniBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (receivedNumber == 4) {
        OmniBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (receivedNumber == 5) {
        demo_no = 1
    } else if (receivedNumber == 6) {
        demo_no = 0
    } else {
        OmniBit.RGB_Program().clear()
    }
    OmniBit.RGB_Program().show()
})
radio.onReceivedString(function (receivedString) {
    saveString = receivedString
})
let a = 0
let z = 0
let y = 0
let x = 0
let demo_no = 0
let saveString = ""
let radioGroup = 0
OmniBit.MotorStopAll()
OmniBit.RGB_Program().setBrightness(50)
OmniBit.RGB_Program().clear()
OmniBit.RGB_Program().show()
basic.showIcon(IconNames.SmallHeart)
getradiogroup.initRadioGroup()
while (radioGroup == 0) {
    radioGroup = getradiogroup.getRadioGroup(saveString)
}
watchfont.showNumber2(radioGroup)
basic.pause(100)
radio.setTransmitPower(7)
demo_no = 0
basic.forever(function () {
    if (saveString != "") {
        x = parseFloat(saveString.split(",")[1])
        y = parseFloat(saveString.split(",")[2])
        z = parseFloat(saveString.split(",")[3])
        if (Math.abs(z) >= 15) {
            a = z / Math.abs(z)
        } else {
            a = 0
        }
        OmniBit.Handle(x, y, a)
    }
})
