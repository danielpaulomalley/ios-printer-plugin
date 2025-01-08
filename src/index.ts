import { registerPlugin } from '@capacitor/core';

import type { IOSPrinterPluginPlugin } from './definitions';

const IOSPrinterPlugin = registerPlugin<IOSPrinterPluginPlugin>('IOSPrinterPlugin', {
  web: () => import('./web').then((m) => new m.IOSPrinterPluginWeb()),
});

export * from './definitions';
export { IOSPrinterPlugin };
