/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Corbyn da Gama
 * Created on: Oct 2024
 * This program moves the servo back and forth
*/

// variables
const servoNumber1 = robotbit.Servos.S1

// setup
basic.showIcon(IconNames.Happy)

// rotate servo to 34 degrees
input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoNumber1, 34)
    basic.clearScreen()
    basic.showString('34')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// rotate servo to 167 degrees
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 167)
    basic.clearScreen()
    basic.showString('167')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})