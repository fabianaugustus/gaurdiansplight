document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    //const scoreDisplay = document.querySelector('span')
    //const spellCast = document.querySelectorAll('.spellCaster')
    const startBtn = document.querySelector('#button')
    const width = 16
    let currentSpellCasterIndex = 215
    let currentSpellCatcherIndex = 216
/*  TODO THE "villagesRemaining" VARIABLE MUST BE LINKED TO A COUNTDOWN
    FUNCTION CALLED "villagesDestroyed". */
    let villagesRemaining = 6
/*  TODO THE "activateLaserRt" VARIABLE MUST BE LINKED TO A COUNTUP
    FUNCTION CALLED "spellsCaught" THIS DOUBLES THE LASER SHOTS WHEN
    A PLAYER SUCCESSFULLY CATCHES AT LEAST ONE SPELL (WHICH WILL COME
    DOWN THE CENTER RANDOMELY). */
    let activateLaserRt = 1
    //let laserFire = 215
    //let currentTime = 20
    //let score = 0
    
/*  TODO 1) Keep fireballUp times the same
         2) Try doubling the time for the "remvove" of the fireballDown
         * - The current time is good for a very high level
         3) Vary the repeat times in the Start/Pause Btn function
         4) Fix the doubling issue with the Start/Pause Btn */
    
//  START OF fireballExit FUNCTION
//  This should loop until either the "Win" or "Lose" fuction occurs
    function fireballExit() {
        let currentfireUpIndex = 39
// TIMELINE (Fireball Up Start - 0:00:00:0000)
        let ignite = Math.random()
            
                switch(ignite > 0) {
                    case (ignite < 0.333):
                        console.log('left-one')
                        currentfireUpIndex -= width
                        squares[currentfireUpIndex].classList.add('fireballUpCt')
                        console.log(currentfireUpIndex)
                    setTimeout(() => {
                        squares[currentfireUpIndex].classList.remove('fireballUpCt')
                    }, 50)
                        break
                    case (ignite >= 0.333 && ignite < 0.666):
                        console.log('center-one')
                        currentfireUpIndex -= width
                        squares[currentfireUpIndex].classList.add('fireballUpCt')
                        console.log(currentfireUpIndex)
                    setTimeout(() => {
                        squares[currentfireUpIndex].classList.remove('fireballUpCt')
                    }, 50)
                        break
                    case (ignite >= 0.666):
                        console.log('right-one')
                        currentfireUpIndex -= width
                        squares[currentfireUpIndex].classList.add('fireballUpCt')
                        console.log(currentfireUpIndex)
                    setTimeout(() => {
                        squares[currentfireUpIndex].classList.remove('fireballUpCt')
                    }, 50)
                        break
                }      
        
        setTimeout(() => {
                switch(ignite > 0) {
                    case (ignite < 0.333):
                        console.log('left-two')
                        currentfireUpIndex -= width + 1
                        squares[currentfireUpIndex].classList.add('fireballUpLt')
                        console.log(currentfireUpIndex)
                    setTimeout(() => {
                        squares[currentfireUpIndex].classList.remove('fireballUpLt')
                    }, 50)
                        break
                    case (ignite >= 0.333 && ignite < 0.666):
                        console.log('center-two')
                        currentfireUpIndex -= width
                        squares[currentfireUpIndex].classList.add('fireballUpCt')
                        console.log(currentfireUpIndex)
                    setTimeout(() => {
                        squares[currentfireUpIndex].classList.remove('fireballUpCt')
                    }, 50)
                        break
                    case (ignite >= 0.666):
                        console.log('right-two')
                        currentfireUpIndex -= width - 1
                        squares[currentfireUpIndex].classList.add('fireballUpRt')
                        console.log(currentfireUpIndex)
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
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 602)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 652)
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballFlareDnRt')
            }, 653)
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnRt')
            }, 703)
            let localTimer = 703;
            for (let i = 0; i < 9; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width +1
                    squares[currentFireDnIndex].classList.add('fireballDnRt')
                }, localTimer = localTimer +1)
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnRt')
                }, localTimer = localTimer +50)
            }
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnRt')
            }, 1214)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnRt')
                squares[237].classList.remove('village003')
            }, 1264)
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 1265)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 1315)

// TIMELINE (Fireball Down Start - 0:00:01:0315)
    
    // fireball down LEFT bounces and moves down right diagonally
        } else if (ignite => 0.083) {
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballFlareDnRt')
            }, 653)
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnRt')
            }, 703)

            let localTimer = 703;
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width +1
                    squares[currentFireDnIndex].classList.add('fireballDnRt')
                }, localTimer = localTimer +1)  
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnRt')
                }, localTimer = localTimer +50)
            }
            setTimeout(() => {
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnRt')
            }, 1214)   
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnRt')
                squares[238].classList.remove('village004')
            }, 1264)
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 1265)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 1315)
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
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 551)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
            }, 601)
            setTimeout(() => {   
                ccurrentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 602)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 652)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 653)
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
            }, 703)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 704)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 754)
            
    // fireball down LEFT moves down ONE space then moves down right diagonally
        if (ignite < 0.25) {
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballFlareDnRt')
            }, 755)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnRt')
            }, 805)
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballDnRt')
            }, 806)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnRt')
            }, 856)
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballFlareDnRt')
            }, 857)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnRt')
            }, 907)

            let localTimer = 907;
            for (let i = 0; i < 6; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width +1
                    squares[currentFireDnIndex].classList.add('fireballDnRt')
                }, localTimer = localTimer +1)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnRt')
                }, localTimer = localTimer +50)
            }  
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnRt')
            }, 1214)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnRt')
                squares[233].classList.remove('village004')
            }, 1264)
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 1265)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 1315)
    
    // fireball down LEFT bounces and moves down right diagonally
        } else if (ignite => 0.25) {
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballFlareDnRt')
            }, 755)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnRt')
            }, 805)
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballDnRt')
            }, 806)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnRt')
            }, 856)

            let localTimer = 856;
            for (let i = 0; i < 7; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width +1
                    squares[currentFireDnIndex].classList.add('fireballDnRt')
                }, localTimer = localTimer +1)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnRt')
                }, localTimer = localTimer +50)
            }
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnRt')
            }, 1214)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnRt')
                squares[234].classList.remove('village003')
            }, 1264)
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 1265)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 1315)
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
                }, localTimer = localTimer +50)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballFlareDnCt')
                }, localTimer = localTimer +50)
            }

        if (ignite > 0.333 && ignite < 0.499) {
            setTimeout(() => {   
                currentFireDnIndex = currentFireDnIndex + width
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 2000)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 2050)
        
        } else if (ignite >= 0.499 && ignite < 0.666) {
            setTimeout(() => {   
                currentFireDnIndex = currentFireDnIndex + width + 1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 2000)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 2050)
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
            }, 550)
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballFlareDnRt')
            }, 551)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnRt')
            }, 601)
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballDnRt')
            }, 602)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnRt')
            }, 652)
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballFlareDnRt')
            }, 653)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnRt')
            }, 703)
                
            //  "IF" statement to divide fireball Dn Right
            
        if (ignite >= 0.666 && ignite < 0.750) {
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 704)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 754)
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 755)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
            }, 805)

            let localTimer = 805;
            for (let i = 0; i < 7; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width -1
                    squares[currentFireDnIndex].classList.add('fireballDnLt')
                }, localTimer = localTimer +1)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnLt')
                }, localTimer = localTimer +50)
            }
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 1163)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
                squares[229].classList.remove('village002')
            }, 1213)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 1214)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 1264)
    
        } else if (ignite >= 0.750 && ignite < 0.833) {
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 704)    
            setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnLt')
                }, 754)
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 755)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
            }, 805)
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 806)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 856)

            let localTimer = 856;
            for (let i = 0; i < 6; i++) {
                setTimeout(() => {   
                    currentFireDnIndex += width -1
                    squares[currentFireDnIndex].classList.add('fireballDnLt')
                }, localTimer = localTimer +1)    
                setTimeout(() => {
                    squares[currentFireDnIndex].classList.remove('fireballDnLt')
                }, localTimer = localTimer +50)
            }
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 1163)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
                squares[230].classList.remove('village001')
            }, 1213)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 1214)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 1264)
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
            }, 550)
            setTimeout(() => {   
                currentFireDnIndex += width +1
                squares[currentFireDnIndex].classList.add('fireballFlareDnRt')
            }, 551)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnRt')
            }, 601)

//  "IF" statement to divide fireball Dn Right
            
        if (ignite >= 0.833 && ignite < 0.916) {
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 602)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 652)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 653)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
            }, 703)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 704)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 754)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 755)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
            }, 805)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 806)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 856)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 857)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
            }, 907)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 908)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 958)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 959)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
            }, 1009)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 1010)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 1060)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 1061)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
            }, 1111)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 1112)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 1162)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 1163)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
                squares[225].classList.remove('village001')

            }, 1213)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 1214)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')
            }, 1264)
    
        } else if (ignite >= 0.916) {
            setTimeout(() => {   
                currentFireDnIndex += width
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 602)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 652)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 653)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
            }, 703)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 704)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 754)
            setTimeout(() => {   
            currentFireDnIndex += width -1
            squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 755)   
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
            }, 805)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 806)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 856)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 857)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
            }, 907)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 908)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 958)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 959)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
            }, 1009)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 1010)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 1060)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballFlareDnLt')
            }, 1061)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballFlareDnLt')
            }, 1111)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 1112)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
            }, 1162)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnLt')
            }, 1163)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnLt')
                squares[226].classList.remove('village002')
            }, 1213)
            setTimeout(() => {   
                currentFireDnIndex += width -1
                squares[currentFireDnIndex].classList.add('fireballDnExplosion')
            }, 1214)    
            setTimeout(() => {
                squares[currentFireDnIndex].classList.remove('fireballDnExplosion')                
            }, 1264)
        }
    }
// END of fireball down RIGHT reenters at 13 and moves down diagonally to the right
// END OF ALL FIREBALLS DOWN RIGHT
}
//  END OF fireballExit FUNCTION

// START OF SPELLCASTER/SPELLCATCHER FUNCTION    
function moveSpellCaster(e) {
        squares[currentSpellCasterIndex].classList.remove('spellCaster')
        squares[currentSpellCatcherIndex].classList.remove('spellCatcher')
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

        squares[currentSpellCasterIndex].classList.add('spellCaster')
        squares[currentSpellCatcherIndex].classList.add('spellCatcher')

}
// END OF SPELLCASTER/SPELLCATCHER FUNCTION

// START OF AUTO LASER FIRE

// START of laserFireLt/spellCaster
/* The following function has been incorporated into function called
"laserFire()" laserFireLt() { */

function laserFire() {
    if (villagesRemaining != 0) {
                laserFireIndex = currentSpellCasterIndex
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 10)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 20)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 30)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 40)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 50)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 60)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 70)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 80)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 90)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 100)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 110)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 120)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 130)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 140)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 150)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 160)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 170)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 180)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 190)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 200)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 210)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 220)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 230)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 240)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 250)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 260)
                setTimeout(() => {
                    laserFireIndex -= width
                    squares[laserFireIndex].classList.add('laser')
                }, 270)
                setTimeout(() => {
                    squares[laserFireIndex].classList.remove('laser')
                }, 280)
    }
//}
// END of laserFireLt/spellCaster Laser

// START of laserFireRt/spellCATCHER
/* The following function has been incorporated into function called
"laserFire()"
laserFireRt() { */

    if (activateLaserRt >= 1 && villagesRemaining != 0) {
                setTimeout(() => {
                laserFireIndex = currentSpellCatcherIndex
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

/* function scoreTracker() {
if (laserFireIndex = currentFireDnIndex) {
    //score = 0
    score++
    console.log(score)
    scoreDisplay.innerText = score
    scoreDisplay.textContent = score
    }
} */

/* The next line calls the "moveSpellCaster" function which moves both the
SpellCaster and the SpellCatcher in the fuction above. */
    
document.addEventListener('keydown', moveSpellCaster)
    
/* TODO Rules to lose Far Beyond stage 003.
When all of the cities are destroyed.
    function lose() {
        Fireball destroys last portion of last city (city block = 0)
    }
*/
    
/* Rules to win Far Beyond stage 003.
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
        squares[234].classList.add('village003')
        squares[233].classList.add('village004')
        squares[237].classList.add('village003')
        squares[238].classList.add('village004')
    }
    
    // to start and pause the game
    /* TODO ISSUE:  EVERY TIME THE START/PAUSE BUTTON IS HIT THE TIMERID IS ACTIVATED
    DOUBLING THE TIMES THE FIREBALL FUNCTION IS CALLED */
    startBtn.addEventListener('click', () => {
        createVillages()
        movePieces()
        timerId = setInterval(movePieces, 1000)
        //timerId = setInterval(scoreTracker, 100)
        //document.addEventListener('keyup', movePieces)
    })
    
    })