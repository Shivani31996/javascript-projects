const prompt = require("prompt-sync")();

const answer = prompt("Would you like to play? (Y/N)");

if(answer.toUpperCase() === "Y")
{
    const answer2 = prompt("Would you like to go left or go right (left/right)");

    if(answer2.toLowerCase() === "left")
    {
        console.log("Oops, you go left and fall off a bridge! You lost!")
    }
    else
    {
        console.log("Nice! You go right and approach a bridge...")
        const answer3 = prompt("Would you like to cross the bridge, or turn around and find another way (cross/turn)?");

        if(answer3.toLowerCase() === "cross")
        {
            console.log("You cross the bridge and reach the end of the game");
        }else
        {
            console.log("You turn and trip on a log and hurt your leg. You lose");
        }
    }
}
else
{
    console.log("That's too bad");
}