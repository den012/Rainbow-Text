import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r,ms));

async function text(){
    const rainbowTitle = chalkAnimation.rainbow('hello hello hello hello');

    await sleep();
}

await text();