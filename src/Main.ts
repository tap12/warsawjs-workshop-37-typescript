import { Types } from './IoC/Types';
import { injectable, inject } from 'inversify';

class logger
{
    public log(text: string): void
    {
        console.log(text);
    }
}

@injectable()
export class Main
{

// function 

    // foo: string = 5;

    constructor(@inject(Types.ILogger) private _log: logger)
    { }

    public async Start(): Promise<void>
    {
        console.log('start!');
    }
}
