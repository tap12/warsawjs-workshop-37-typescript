import { injectable } from 'inversify';

@injectable()
export class Logger
{
    public log(text: string): void
    {
        console.log('start');
    }
}