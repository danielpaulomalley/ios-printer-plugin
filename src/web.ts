import { WebPlugin } from '@capacitor/core';

import type { IOSPrinterPluginPlugin } from './definitions';

export class IOSPrinterPluginWeb extends WebPlugin implements IOSPrinterPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
