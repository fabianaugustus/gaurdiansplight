document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const startBtn = document.querySelector('#button')
    const width = 16
    let currentSpellCasterIndex = 215
    let currentSpellCatcherIndex = 216
    let startTime = 60
/*  TODO THE "villagesRemaining" VARIABLE MUST BE LINKED TO A COUNTDOWN
    FUNCTION CALLED "villagesDestroyed". */
    let villagesRemaining = 6
/*  TODO THE "activateLaserRt" VARIABLE MUST BE LINKED TO A COUNTUP
    FUNCTION CALLED "spellsCaught" THIS DOUBLES THE LASER SHOTS WHEN
    A PLAYER SUCCESSFULLY CATCHES AT LEAST ONE SPELL (WHICH WILL COME
    DOWN THE CENTER RANDOMELY). */
    let activateLaserRt = 1
    let scoreTracker
    
/*  TODO 1) Keep fireballUp times the same
         2) Try doubling the time for the "remvove" of the fireballDown
         * - The current time is good for a very high level
         3) Vary the repeat times in the Start/Pause Btn function
         4) Fix the doubling issue with the Start/Pause Btn */
    
//  START OF fireballExit FUNCTION
//  This should loop until either the "Win" or "Lose" fuction occurs
    function fireballExit() {
        let currentfireUpIndex = 39
        let timeLeft = startTime--
        document.getElementById('timer').innerHTML = timeLeft
// TIMELINE (Fireball Up Start - 0:00:00:0000)
        let ignite = Math.random()
            
                switch(ignite > 0) {
                    case (ignite < 0.333):
                        //console.log('left-one')
                        currentfireUpIndex -= width
                        squares[currentfireUpIndex].classList.add('fireballUpCt')
                        //console.log(currentfireUpIndex)
                    setTimeout(() => {
                        squares[currentfireUpIndex].classList.remove('fireballUpCt')
                    }, 50)
                        break
                    case (ignite >= 0.333 && ignite < 0.666):
                        //console.log('center-one')
                        currentfireUpIndex -= width
                        squares[currentfireUpIndex].classList.add('fireballUpCt')
                        //console.log(currentfireUpIndex)
                    setTimeout(() => {
                        squares[currentfireUpIndex].classList.remove('fireballUpCt')
                    }, 50)
                        break
                    case (ignite >= 0.666):
                        //console.log('right-one')
                        currentfireUpIndex -= width
                        squares[currentfireUpIndex].classList.add('fireballUpCt')
                        //console.log(currentfireUpIndex)
                    setTimeout(() => {
                        squares[currentfireUpIndex].classList.remove('fireballUpCt')
                    }, 50)
                        break
                }      
        
        setTimeout(() => {
                switch(ignite > 0) {
                    case (ignite < 0.333):
                        //console.log('left-two')
                        currentfireUpIndex -= width + 1
                        squares[currentfireUpIndex].classList.add('fireballUpLt')
                        //console.log(currentfireUpIndex)
                    setTimeout(() => {
                        squares[currentfireUpIndex].classList.remove('fireballUpLt')
                    }, 50)
                        break
                    case (ignite >= 0.333 && ignite < 0.666):
                        //console.log('center-two')
                        currentfireUpIndex -= width
                        squares[currentfireUpIndex].classList.add('fireballUpCt')
                        //console.log(currentfireUpIndex)
                    setTimeout(() => {
                        squares[currentfireUpIndex].classList.remove('fireballUpCt')
                    }, 50)
                        break
                    case (ignite >= 0.666):
                        //console.log('right-two')
                        currentfireUpIndex -= width - 1
                        squares[currentfireUpIndex].classList.add('fireballUpRt')
                        //console.log(currentfireUpIndex)
                    setTimeout(() => {
                        squares[currentfireUpIndex].classList.remove('fireballUpRt')
                    }, 50)
                        break
                }
        }, 100)
// TIMELINE (Fireball Up End - 0:00:00:0100)

// START OF ALL FIREBALLS DOWN LEFT
// TIMELINE (currentFireDnIndex 2 Start - 0:00:00:0500)
// START of fireball down LEFT reenters at 2 and moves down diagonally to the left  

// TODO:  fIGURE OUT COLLISION LOGIC WHICH NEEDS TO REMOVE FIREBALLS STRUCK BY SPELL
// AND INCREMENT "SCORE"

if (ignite < 0.166) {
        let currentFireDnIndex = 2
            setTimeout(() => {
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 500)
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 550)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 551)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
            }, 601)
    
    // fireball down LEFT moves down ONE space then moves down right diagonally
        if (ignite < 0.083) {
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballDnRt')
            }, 602)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnRt')
            }, 752)
            let localTimer = 752;
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width +1
                    squares[currentFireDnIndex].classList.add('fireballDnRt')
                }, localTimer = localTimer +1)
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnRt')
                }, localTimer = localTimer +150)
            }
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnRt')
            }, 2263)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnRt')
                squares[237].classList.remove('village004')
            }, 2413)
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 2414)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 2564)

// TIMELINE (Fireball Down Start - 0:00:01:0315)
    
    // fireball down LEFT bounces and moves down right diagonally
        } else if (ignite => 0.083) {
            let localTimer = 752;
            for (let i = 0; i < 11; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width +1
                    squares[currentFireDnIndex].classList.add('fireballDnRt')
                }, localTimer = localTimer +1)  
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnRt')
                }, localTimer = localTimer +150)
            }
            setTimeout(() => {
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnRt')
            }, 2414)   
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnRt')
                squares[238].classList.remove('village003')
            }, 2564)
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 2565)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 2715)
        }
    }
// END of fireball down LEFT reenters at 2 and moves down diagonally to the left 

// START of fireball down LEFT reenters at 4 and moves down diagonally to the left
    if (ignite >= 0.166 && ignite < 0.333) {
            let currentFireDnIndex = 4
            setTimeout(() => {
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 500)
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 550)

            let localTimer1 = 550;
            for (let x = 0; x < 3; x++) {
                setTimeout(() => {   
                    currentFireDnIndex += width -1
                    squares[currentFireDnIndex].classList.add('fireballDnLt')
                }, localTimer1 = localTimer1 +1)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnLt')
                }, localTimer1 = localTimer1 +150)
            }
            
    // fireball down LEFT moves down ONE space then moves down right diagonally
        if (ignite < 0.25) {

            let localTimer2 = 1003;
            for (let x = 0; x < 3; x++) {
                setTimeout(() => {   
                    currentFireDnIndex += width
                    squares[currentFireDnIndex].classList.add('fireballDnRt')
                }, localTimer2 = localTimer2 +1)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnRt')
                }, localTimer2 = localTimer2 +150)
            }

            let localTimer3 = 1456;
            for (let i = 0; i < 6; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width +1
                    squares[currentFireDnIndex].classList.add('fireballDnRt')
                }, localTimer3 = localTimer3 +1)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnRt')
                }, localTimer3 = localTimer3 +150)
            }  
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnRt')
            }, 2363)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnRt')
                squares[233].classList.remove('village003')
            }, 2513)
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 2514)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 2664)
    
    // fireball down LEFT bounces and moves down right diagonally
        } else if (ignite => 0.25) {
            
            let localTimer2 = 1003;
            for (let i = 0; i < 2; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width
                    squares[currentFireDnIndex].classList.add('fireballDnRt')
                }, localTimer2 = localTimer2 +1)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnRt')
                }, localTimer2 = localTimer2 +150)
            }

            let localTimer3 = 1305;
            for (let i = 0; i < 7; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width +1
                    squares[currentFireDnIndex].classList.add('fireballDnRt')
                }, localTimer3 = localTimer3 +1)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnRt')
                }, localTimer3 = localTimer3 +150)
            }
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnRt')
            }, 2363)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnRt')
                squares[234].classList.remove('village004')
            }, 2513)
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 2514)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 2664)
        }
    }
// END of fireball down LEFT reenters at 4 and moves down diagonally to the left
// END OF ALL FIREBALLS DOWN LEFT

// START OF FIREBALLS DOWN CENTER
        if (ignite >= 0.333 && ignite < 0.666) {
        let currentFireDnIndex = 7
            setTimeout(() => {
                squares[currentFireDnIndex].classList.add('fireballDnCt')
            }, 500)
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnCt')
            }, 600)

            let localTimer = 600;
            for (let i = 0; i < 13; i++) {
                setTimeout(() => {   
                    currentFireDnIndex = currentFireDnIndex + width
                    squares[currentFireDnIndex].classList.add('fireballFlareDnCt')
                }, localTimer = localTimer +1)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballFlareDnCt')
                }, localTimer = localTimer +150)
                /* if (laserFireIndex == currentFireDnIndex) {
                    console.log("Explosion")
                    squares[currentFireDnIndex].classList.add('fireballDnExplosion')
                } */
            }

        if (ignite > 0.333 && ignite < 0.499) {
            setTimeout(() => {   
                currentFireDnIndex = currentFireDnIndex + width
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 2564)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 2714)
        
        } else if (ignite >= 0.499 && ignite < 0.666) {
            setTimeout(() => {   
                currentFireDnIndex = currentFireDnIndex + width + 1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 2715)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 2865)
        }
    }
// END OF EXTRA FIREBALLS DOWN CENTER

// START OF ALL FIREBALLS DOWN RIGHT
// START of fireball down RIGHT reenters at 11 and moves down diagonally to the left 
    if (ignite >= 0.666 && ignite < 0.833) {
        let currentFireDnIndex = 11
            setTimeout(() => {
                squares[currentFireDnIndex].classList.add('fireballDnRt')
            }, 500)
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnRt')
            }, 650)

            let localTimer1 = 650;
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width +1
                    squares[currentFireDnIndex].classList.add('fireballDnRt')
                }, localTimer1 = localTimer1 +1)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnRt')
                }, localTimer1 = localTimer1 +150)
            }
                
            //  "IF" statement to divide fireball Dn Right
            
        if (ignite >= 0.666 && ignite < 0.750) {
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 1104)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 1254)
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 1255)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 1405)

            let localTimer2 = 1405;
            for (let i = 0; i < 7; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width -1
                    squares[currentFireDnIndex].classList.add('fireballDnLt')
                }, localTimer2 = localTimer2 +1)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnLt')
                }, localTimer2 = localTimer2 +150)
            }
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 2463)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
                squares[229].classList.remove('village002')
            }, 2613)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 2614)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 2764)
    
        } else if (ignite >= 0.750 && ignite < 0.833) {
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 1104)    
            setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 1254)
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 1255)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 1405)
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 1406)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 1556)

            let localTimer3 = 1556;
            for (let i = 0; i < 6; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width -1
                    squares[currentFireDnIndex].classList.add('fireballDnLt')
                }, localTimer3 = localTimer3 +1)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnLt')
                }, localTimer3 = localTimer3 +150)
            }
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 2463)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
                squares[230].classList.remove('village001')
            }, 2613)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 2614)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 2764)
        }         
    }
// END of fireball down RIGHT reenters at 11 and moves down diagonally to the right

// START of fireball down RIGHT reenters at 13 and moves down diagonally to the right
        if (ignite >= 0.833) {
            let currentFireDnIndex = 13
            setTimeout(() => {
                squares[currentFireDnIndex].classList.add('fireballDnRt')
            }, 500)
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnRt')
            }, 650)
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnRt')
            }, 651)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnRt')
            }, 801)

//  "IF" statement to divide fireball Dn Right
            
        if (ignite >= 0.833 && ignite < 0.916) {
            let localTimer2 = 801;
            for (let i = 0; i < 11; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width -1
                    squares[currentFireDnIndex].classList.add('fireballDnLt')
                }, localTimer2 = localTimer2 +1)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnLt')
                }, localTimer2 = localTimer2 +150)
            }
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 2463)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
                squares[225].classList.remove('village001')
            }, 2612)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 2613)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 2763)
    
        } else if (ignite >= 0.916) {
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 801)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 951)

            let localTimer = 951;
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width -1
                    squares[currentFireDnIndex].classList.add('fireballDnLt')
                }, localTimer = localTimer +1)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnLt')
                }, localTimer = localTimer +150)
            }
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 2462) 
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
                squares[226].classList.remove('village002')
            }, 2612)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 2613)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')                
            }, 2763)
        }
    }
// END of fireball down RIGHT reenters at 13 and moves down diagonally to the right
// END OF ALL FIREBALLS DOWN RIGHT
}
//  END OF fireballExit FUNCTION

// START OF SPELLCASTER/SPELLCATCHER FUNCTION    
function moveSpellCaster(e) {
        squares[currentSpellCasterIndex].classList.remove('spellCaster1')
        squares[currentSpellCasterIndex].classList.remove('spellCaster2')
        squares[currentSpellCatcherIndex].classList.remove('spellCatcher1')
        squares[currentSpellCatcherIndex].classList.remove('spellCatcher2')
        switch(e.keyCode) {
            case 37:
                if(currentSpellCasterIndex % width !== 0) currentSpellCasterIndex -=1
                /* The next line stops the SpellCatcher from going past the right ending
                block (div 222) cell and also stops the SpellCatcher. */
                // laserFireLt()
                currentSpellCatcherIndex = currentSpellCasterIndex +1
                break
            case 39:
                if(currentSpellCatcherIndex % width < width -1) currentSpellCatcherIndex +=1
                /* The next line stops the SpellCaster from going past the left ending block
                (div 207) cell and also stops the SpellCatcher. */
                // laserFireRt()
                currentSpellCasterIndex = currentSpellCatcherIndex -1
                break
        }

        if (currentSpellCasterIndex % 2 == 0 ) {
            squares[currentSpellCasterIndex].classList.add('spellCaster2')
        } else {
            squares[currentSpellCasterIndex].classList.add('spellCaster1')
        }

        if (currentSpellCatcherIndex % 2 == 0 ) {
            squares[currentSpellCatcherIndex].classList.add('spellCatcher1')
        } else {
            squares[currentSpellCatcherIndex].classList.add('spellCatcher2')
        }

        
        /* squares[currentSpellCatcherIndex].classList.add('spellCatcher') */
// Return spellCatcher and spellCaster Index for the laserFire() function
}
// END OF SPELLCASTER/SPELLCATCHER FUNCTION

// START OF AUTO LASER FIRE

// START of laserFireLt/spellCaster
/* The following function has been incorporated into function called
"laserFire()" laserFireLt() { */

function laserFire() {
    if (villagesRemaining != 0) {
                let laserFireIndex = currentSpellCasterIndex
                laserTimerId = 0
                for (let i = 0; i < 13; i++) {
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, laserTimerId = laserTimerId + 10)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, laserTimerId = laserTimerId + 10)
            }
    }
//}
// END of laserFireLt/spellCaster Laser

// START of laserFireRt/spellCATCHER
/* The following function has been incorporated into function called
"laserFire()"
laserFireRt() { */

    if (activateLaserRt >= 1 && villagesRemaining != 0) {
            let laserFireIndex = currentSpellCatcherIndex
            setTimeout(() => {    
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 291)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 300)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 310)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 320)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 330)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 340)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 350)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 360)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 370)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 380)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 390)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 400)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 410)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 420)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 430)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 440)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 450)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 460)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 470)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 480)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 490)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 500)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 510)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 520)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 530)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 540)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 550)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 560)
            }, 290)  
    }
}
// END of laserFireRt/spellCatcher Laser

// END OF AUTOLASER FUNCTIONS

/* The next line calls the "moveSpellCaster" function which moves both the
SpellCaster and the SpellCatcher in the fuction above. */
    
document.addEventListener('keydown', moveSpellCaster)
    
/* TODO Rules to lose Far Beyond stage 003.
When all of the cities are destroyed.
    function lose() {
        Fireball destroys last portion of last city (city block = 0)
    
    }
*/
    
/* Rules to win Guardian's Plight.
This can be based on time or a certain score.
    function win() {
        Score == x
            or
        currentTime == y
    }
*/

// All of the functions that move pieces.
    
// TODO FIX - Start/Pause button causes the timerId to multiply.  YOU DON'T WANT THIS!


// This functions is to activate all moving pieces
    function movePieces() {
        fireballExit()
        laserFire()
        /*  These functions have been combined into one function
        called "laserFire()"
        laserFireLt()
        laserFireRt() */

       //fireballEnter()
        /* currentTime--
        timeLeft.textContent = currentTime
        lose() */
    }
    
    function createVillages() {
        squares[225].classList.add('village001')
        squares[226].classList.add('village002')
        squares[229].classList.add('village002')
        squares[230].classList.add('village001')
        squares[233].classList.add('village003')
        squares[234].classList.add('village004')
        squares[237].classList.add('village004')
        squares[238].classList.add('village003')
    }
    
    // to start and pause the game
    /* TODO ISSUE:  EVERY TIME THE START/PAUSE BUTTON IS HIT THE TIMERID IS ACTIVATED
    DOUBLING THE TIMES THE FIREBALL FUNCTION IS CALLED */
    startBtn.addEventListener('click', () => {
        createVillages()
        movePieces()
        timerId = setInterval(movePieces, 1000)
        timerId2 = setInterval(scoreTracker, 100)
        //document.addEventListener('keyup', movePieces)
    })
    
    })