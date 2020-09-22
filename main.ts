controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.top += 3
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 3
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 3
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.bottom += 3
})
let mySprite: Sprite = null
effects.blizzard.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . f f f f f . . . . . 
    . . . . . f . . . . . f . . . . 
    . . . . . f . f . f . f . . . . 
    . . . . . f . . . . . f . . . . 
    . . . . . f . f f f . f . . . . 
    . . . . . f . . . . . f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f . f . . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . f . . . . . f . . . . 
    `, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(mySprite)
scene.setBackgroundColor(7)
let mySprite2 = sprites.create(img`
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . 2 . 2 . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . 2 2 2 . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 . 2 . . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.follow(mySprite)
mySprite2.follow(mySprite, 50)
mySprite2.setPosition(121, 76)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f . . . . . . . . 1 1 
    . . . f f f . . . . . . 1 1 1 1 
    . . f f f f . . . . . 1 1 1 1 1 
    . f f f f f e e e e e e e 1 1 1 
    . . f f f f . . . . . 1 1 1 1 1 
    . . . f f f . . . . . . . 1 1 1 
    . . . . f f . . . . . . . . 1 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f . . . . . . . . 1 1 
    . . . f f f . . . . . . 1 1 1 1 
    . . f f f f . . . . . 1 1 1 1 1 
    . f f f f f e e e e e e e 1 1 1 
    . . f f f f . . . . . 1 1 1 1 1 
    . . . f f f . . . . . . . 1 1 1 
    . . . . f f . . . . . . . . 1 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, mySprite2, 50, 50)
let myEnemy = sprites.create(img`
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . 2 . 2 . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . 2 2 2 . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 . 2 . . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    `, SpriteKind.Enemy)
myEnemy.setPosition(32, 80)
myEnemy.follow(mySprite, 60)
projectile.setFlag(SpriteFlag.BounceOnWall, true)
myEnemy.setFlag(SpriteFlag.StayInScreen, true)
mySprite3.setFlag(SpriteFlag.StayInScreen, true)
projectile.follow(mySprite, 50)
mySprite3.follow(mySprite, 30)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . f f f f f . 2 . . . . . 
    . . . . f . . . f . 2 . . . . . 
    . . . . f . 2 . f . 2 . . . . . 
    . . . . f . . . f . 2 . . . . . 
    . . . . f f f f f . 2 . . . . . 
    . . . f . . f . . . 2 . . . . . 
    . . . . f . f . . f f f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f . f . . . . . . . . 
    . . . . f . . . f . . . . . . . 
    `, SpriteKind.Player)
mySprite4.setPosition(80, 124)
mySprite4.follow(myEnemy, 15)
let mySprite5 = sprites.create(img`
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . f f f f f . 2 . . . . . 
    . . . . f . . . f . 2 . . . . . 
    . . . . f . 2 . f . 2 . . . . . 
    . . . . f . . . f . 2 . . . . . 
    . . . . f f f f f . 2 . . . . . 
    . . . f . . f . . . 2 . . . . . 
    . . . . f . f . . f f f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f . f . . . . . . . . 
    . . . . f . . . f . . . . . . . 
    `, SpriteKind.Player)
mySprite5.follow(mySprite2, 20)
let mySprite6 = sprites.create(img`
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . f f f f f . 2 . . . . . 
    . . . . f . . . f . 2 . . . . . 
    . . . . f . 2 . f . 2 . . . . . 
    . . . . f . . . f . 2 . . . . . 
    . . . . f f f f f . 2 . . . . . 
    . . . f . . f . . . 2 . . . . . 
    . . . . f . f . . f f f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f . f . . . . . . . . 
    . . . . f . . . f . . . . . . . 
    `, SpriteKind.Player)
let mySprite7 = sprites.create(img`
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . f f f f f . 2 . . . . . 
    . . . . f . . . f . 2 . . . . . 
    . . . . f . 2 . f . 2 . . . . . 
    . . . . f . . . f . 2 . . . . . 
    . . . . f f f f f . 2 . . . . . 
    . . . f . . f . . . 2 . . . . . 
    . . . . f . f . . f f f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f . f . . . . . . . . 
    . . . . f . . . f . . . . . . . 
    `, SpriteKind.Player)
mySprite6.follow(myEnemy, 25)
mySprite7.follow(mySprite2, 30)
mySprite7.x += 7
let mySprite8 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f f . . . 
    . . f . . f . f . f f . f f . . 
    . . f f . f . f . f f . . f f . 
    . . f . . f . f . f f . . f f . 
    . . f . . f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let mySprite9 = sprites.create(img`
    ....222.............
    ...2...2............
    ..2.2.2.2...........
    ..2.....2...........
    ..2.....2...........
    ...22.22..f.........
    .....2...fffffff5555
    ..2..2..2fffffff5555
    ...2.2.2.ff.........
    ....222..f..........
    .....2..............
    .....2..............
    .....2..............
    .....2..............
    .....2..............
    ....2.2.............
    ...2...2............
    ..2.....2...........
    .2.......2..........
    2.........2.........
    `, SpriteKind.Player)
let mySprite10 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ..........f.........
    .........fffffff5555
    .........fffffff5555
    .........ff.........
    .........f..........
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Enemy)
let mySprite11 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f 5 5 5 5 . . . . . . . . 
    f f f f 5 5 5 5 5 . . . . . . . 
    f f f f 5 5 5 5 5 5 . . . . . . 
    f f f f 5 5 5 5 5 . . . . . . . 
    f f f f 5 5 5 5 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
mySprite9.follow(mySprite10)
mySprite11.follow(mySprite)
