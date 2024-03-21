import chalk from "chalk";

export default class PinterestError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PinterestError";
        throw Error(chalk.red(message));
    }
}