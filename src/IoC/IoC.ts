import 'reflect-metadata';
import { ConsoleLogger, ILogger } from './../Logger';
import { Main } from './../Main';
import {Container} from 'inversify';
import { Types } from './Types';

export const IoC = new Container();

// // IoC.bind(Main).to(Main);
// // IoC.bind(ILogger)

IoC.bind(Main).toSelf().inSingletonScope();
IoC.bind(Types.ILogger).to(ConsoleLogger);


// These two imports must go first!
// import 'reflect-metadata';
// import { Types } from './Types';
// import { Container } from 'inversify';
// import { IEnvironment } from '../Services/Environment/IEnvironment';
// import { Environment } from '../Services/Environment/Environment';
// import { IRunMode } from '../Services/RunMode/IRunMode';
// import { RunMode } from '../Services/RunMode/RunMode';
// import { ILogger } from '../Services/Logger/ILogger';
// import { Logger } from '../Services/Logger/Logger';
// import { Main } from '../Main';
// import { IStartupArgs } from '../Services/Environment/IStartupArgs';
// import { StartupArgs } from '../Services/Environment/StartupArgs';

// // const IoC = new Container();

// try
// {
//     IoC.bind<IEnvironment>(Types.IEnvironment).to(Environment).inSingletonScope().whenTargetIsDefault();
//     IoC.bind<IRunMode>(Types.IRunMode).to(RunMode).inSingletonScope().whenTargetIsDefault();
//     IoC.bind<ILogger>(Types.ILogger).to(Logger).inSingletonScope().whenTargetIsDefault();
//     IoC.bind<IStartupArgs>(Types.IStartupArgs).to(StartupArgs).inSingletonScope().whenTargetIsDefault();
//     IoC.bind<Main>(Main).toSelf().inSingletonScope().whenTargetIsDefault();
// }
// catch (ex)
// {
//     console.log('IoC exception:', ex);
// }

// export { IoC };
