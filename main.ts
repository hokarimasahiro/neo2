let neo0 = neopixel.create(DigitalPin.P1, 1000, NeoPixelMode.RGB)
let colorlist = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Orange),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Indigo),
neopixel.colors(NeoPixelColors.Violet),
neopixel.colors(NeoPixelColors.Purple),
neopixel.colors(NeoPixelColors.White)
]
basic.forever(function () {
    for (let colorno = 0; colorno <= colorlist.length - 1; colorno++) {
        neo0.setPixelColor(0, colorlist[colorno])
        for (let ledno = 0; ledno <= neo0.length() - 1; ledno++) {
            watchfont.showSorobanNumber(colorno, 0, 1)
            watchfont.showSorobanNumber(ledno, 1, 4)
            neo0.rotate(1)
            neo0.show()
            basic.pause(0)
        }
    }
})
