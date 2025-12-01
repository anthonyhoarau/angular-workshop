import {EnvironmentProviders, inject, makeEnvironmentProviders, provideAppInitializer} from '@angular/core';
import {IoClient} from './io-client';

export function provideGameClient(): EnvironmentProviders {
  return makeEnvironmentProviders([
    IoClient,
    provideAppInitializer(() => {
      const ioClient = inject(IoClient);
      return ioClient.openConnection()
    })
  ]);
}
