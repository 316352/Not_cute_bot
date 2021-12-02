let sonar = 0
cuteBot.IR_callback(function () {
    cuteBot.stopcar()
})
// basic.forever(function () {
// if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
// cuteBot.motors(40, 15)
// }
// if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
// cuteBot.motors(15, 40)
// }
// if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
// cuteBot.motors(40, 40)
// }
// })
/*basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar > 5 && sonar < 10) {
        cuteBot.stopcar()
        // for (let index = 0; index < 4; index++) {
        // music.playTone(880, music.beat(BeatFraction.Quarter))
        // }
        basic.pause(2000)
        cuteBot.moveTime(cuteBot.Direction.backward, 50, 5000)
        basic.pause(2000)
    } else {
        cuteBot.forward()
    }
})
*/
cuteBot.forward()
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar < 20 == sonar > 1) {
        for (let index = 0; index < 7; index++) {
        music.playTone(880, music.beat(BeatFraction.Quarter))
        basic.pause(100)
        }
        cuteBot.motors(0, -50)
        basic.pause(randint(100, 200))
    } else {
        cuteBot.forward()
    }
})
