radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        servos.P2.setAngle(0)
        basic.showIcon(IconNames.Square)
    }
    if (receivedNumber == 2) {
        servos.P2.setAngle(100)
        basic.showIcon(IconNames.SmallSquare)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
basic.showIcon(IconNames.Angry)
radio.setGroup(1)
