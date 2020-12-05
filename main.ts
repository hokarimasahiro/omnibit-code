radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        a = -1
        OmniBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        OmniBit.RGB_Program().show()
    } else if (receivedNumber == 2) {
        a = 2
        OmniBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        OmniBit.RGB_Program().show()
    } else if (receivedNumber == 3) {
        a = 3
        OmniBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        OmniBit.RGB_Program().show()
    } else if (receivedNumber == 4) {
        a = 1
        OmniBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        OmniBit.RGB_Program().show()
    } else if (receivedNumber == 5) {
        a = 5
    } else if (receivedNumber == 6) {
        a = 6
    } else {
        a = 0
        OmniBit.RGB_Program().clear()
        OmniBit.RGB_Program().show()
    }
})
radio.onReceivedString(function (receivedString) {
    saveString = receivedString
})
let y = 0
let x = 0
let a = 0
let saveString = ""
let radioGroup = 0
OmniBit.MotorStopAll()
OmniBit.RGB_Program().setBrightness(50)
OmniBit.RGB_Program().clear()
OmniBit.RGB_Program().show()
basic.showIcon(IconNames.SmallHeart)
let 無線グループ設定中 = true
getradiogroup.initRadioGroup()
while (radioGroup == 0) {
    radioGroup = getradiogroup.getRadioGroup(saveString)
    if (radioGroup == 0) {
        basic.showIcon(IconNames.Sad)
    } else {
        watchfont.showNumber2(radioGroup)
    }
}
saveString = ""
無線グループ設定中 = false
radio.setTransmitPower(7)
basic.forever(function () {
    if (saveString != "" && !(無線グループ設定中)) {
        x = parseFloat(split.split(saveString)[1])
        y = parseFloat(split.split(saveString)[2])
        if (Math.abs(a) <= 1) {
            OmniBit.Handle(x, y, a)
        } else {
            if (a == 2) {
                OmniBit.WideAngleDrift(OmniBit.enWideAngleDrift.Left, 255, 40)
            } else if (a == 3) {
                OmniBit.WideAngleDrift(OmniBit.enWideAngleDrift.Right, 255, 40)
            } else if (a == 5) {
                OmniBit.WideAngleDrift(OmniBit.enWideAngleDrift.Left, 60, 255)
            } else if (a == 6) {
                OmniBit.WideAngleDrift(OmniBit.enWideAngleDrift.Right, 60, 255)
            } else {
            	
            }
        }
    }
})
