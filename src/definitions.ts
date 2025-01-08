export interface IOSPrinterPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
