import Pinterest from "./services/pinterest";
import { PinterestDeclaration } from './types/pinterest';
import PinterestError from "./services/errorHandler";
import dotenv from "dotenv";
dotenv.config();

const pinterestOptions: PinterestDeclaration = {
    websiteURL: process.env.websiteURL as string || "",
    email: process.env.email as string || "",
    password: process.env.password as string || "" ,
    scrollCount: parseInt(process.env.scrollCount as string) || 1
};

const pinterest = new Pinterest(pinterestOptions.websiteURL);

pinterest.login(pinterestOptions.email, pinterestOptions.password, pinterestOptions.scrollCount).then((images) => {
    console.log(images);
}).catch((error) => {
    throw new PinterestError((error as Error).message);
});