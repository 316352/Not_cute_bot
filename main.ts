
  basic.forever(function () {
  
  sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
  
  if (sonar > 5 && sonar < 10) {
  cuteBot.stopcar()
  
   for (let index = 0; index < 4; index++) {
     basic.pause(1000)  
     music.playTone(880, music.beat(BeatFraction.Quarter))
    }
    cuteBot.moveTime(cuteBot.Direction.backward, 35, 0.3)
    basic.pause(2000)
    cuteBot.moveTime(cuteBot.Direction.right, 30, 0.4)
    basic.pause(2000)
    cuteBot.moveTime(cuteBot.Direction.forward, 30, 1)
    cuteBot.moveTime(cuteBot.Direction.left, 30, 0.4)
    
  } else {
  
      if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
          cuteBot.motors(40, 15)
      }
      if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
          cuteBot.motors(15, 40)
      }
      if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
          cuteBot.motors(40, 40)
      }
  }
     /* if (sonar > 5 && sonar < 10) {
          cuteBot.stopcar()

          for (let index = 0; index < 4; index++) {
              basic.pause(1000)
              music.playTone(880, music.beat(BeatFraction.Quarter))
          }
          cuteBot.moveTime(cuteBot.Direction.backward, 35, 0.3)
          basic.pause(2000)
          cuteBot.moveTime(cuteBot.Direction.left, 30, 0.4)
          basic.pause(2000)
          cuteBot.moveTime(cuteBot.Direction.forward, 30, 1)
          cuteBot.moveTime(cuteBot.Direction.right, 30, 0.4)
      }*/
  })
   
let sonar = 0
 /*basic.forever(function () {
 
  sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
  
  if (sonar < 20 && sonar > 5) {
  
    for (let index = 0; index < 4; index++) {
    basic.pause(100)
    music.playTone(880, music.beat(BeatFraction.Quarter))
    }
    basic.pause(1000)
    cuteBot.motors(-35, -65)
    basic.pause(randint(100, 200))
  } else {
  cuteBot.motors(47, 47)
  }
  })
*/

