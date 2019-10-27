import { ILogger } from './Services/Logger/ILogger';
import { injectable } from 'inversify';

export interface ILogger
{

    log()
}

@injectable()
export class ConsoleLogger implements ILogger
{
    public log(text: string): void
    {
        console.log('start');
    }
}


@injectable()
export class FileLogger implements ILogger
{
    log(str: string): void
    {
        console.log(text);
    }

    public log(text: string): void
    {
        console.log('FILE', text);
    }
}