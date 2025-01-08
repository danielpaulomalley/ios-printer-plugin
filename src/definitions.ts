export interface IOSPrinterPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  printImage(img: string): Promise<void>;
}
